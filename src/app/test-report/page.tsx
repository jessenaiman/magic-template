'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Clock, 
  Play, 
  FileText, 
  Activity,
  TrendingUp,
  Shield,
  Zap,
  Bot,
  ExternalLink,
  Copy,
  Code,
  Terminal,
  Navigation
} from 'lucide-react';
import { NavigationResults } from './navigation-results';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface TestCase {
  name: string;
  status: 'passed' | 'failed' | 'running' | 'pending';
  error?: string;
  terminalOutput?: string;
  codeSnippet?: string;
  suggestions?: string[];
  filePath?: string;
  lineNumber?: number;
  category?: string; // e.g., 'React Context', 'Hydration', 'Routing', 'Build'
  tags?: string[];   // e.g., ['useContext', 'PreviewSurface']
  priority?: 'critical' | 'high' | 'medium' | 'low';
}

interface TestSuite {
  name: string;
  status: 'passed' | 'failed' | 'running' | 'pending';
  testsTotal: number;
  testsPassed: number;
  testsFailed: number;
  duration: number;
  lastRun: string;
  description: string;
  command: string;
  testCases?: TestCase[];
}

interface TestMetrics {
  totalSuites: number;
  passedSuites: number;
  failedSuites: number;
  totalTests: number;
  passedTests: number;
  failedTests: number;
  coverage: number;
  lastRunTime: string;
}

// Live data state
type E2EReporterResult = {
  totals?: { total: number; passed: number; failed: number; skipped: number };
  suites?: Array<Partial<TestCase>>;
  startTime?: string;
  endTime?: string;
};

function computeMetrics(suites: TestSuite[]): TestMetrics {
  const totalSuites = suites.length;
  const passedSuites = suites.filter(s => s.status === 'passed').length;
  const failedSuites = suites.filter(s => s.status === 'failed').length;
  const totalTests = suites.reduce((acc, s) => acc + s.testsTotal, 0);
  const passedTests = suites.reduce((acc, s) => acc + s.testsPassed, 0);
  const failedTests = suites.reduce((acc, s) => acc + s.testsFailed, 0);
  return {
    totalSuites,
    passedSuites,
    failedSuites,
    totalTests,
    passedTests,
    failedTests,
    coverage: Math.max(0, Math.min(100, Math.round((passedTests / Math.max(1, totalTests)) * 100))),
    lastRunTime: new Date().toISOString(),
  };
}

function StatusIcon({ status }: { status: TestSuite['status'] }) {
  switch (status) {
    case 'passed':
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case 'failed':
      return <XCircle className="h-5 w-5 text-red-500" />;
    case 'running':
      return <Clock className="h-5 w-5 text-blue-500 animate-spin" />;
    case 'pending':
      return <AlertCircle className="h-5 w-5 text-yellow-500" />;
    default:
      return <AlertCircle className="h-5 w-5 text-gray-500" />;
  }
}

function StatusBadge({ status }: { status: TestSuite['status'] }) {
  const variants = {
    passed: 'bg-green-100 text-green-800 border-green-200',
    failed: 'bg-red-100 text-red-800 border-red-200',
    running: 'bg-blue-100 text-blue-800 border-blue-200',
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-200'
  };

  return (
    <Badge className={variants[status]}>
      {status.toUpperCase()}
    </Badge>
  );
}

function AIEnhancementButton({ testCase }: { testCase: TestCase }) {
  const generatePrompt = () => {
    const prompt = `Fix React Context Error in Magic Template

**Error:** ${testCase.error}

**File:** ${testCase.filePath}
${testCase.lineNumber ? `**Line:** ${testCase.lineNumber}` : ''}

**Terminal Output:**
\`\`\`
${testCase.terminalOutput}
\`\`\`

**Code Context:**
\`\`\`tsx
${testCase.codeSnippet}
\`\`\`

**Suggested Fixes:**
${testCase.suggestions?.map(s => `- ${s}`).join('\n')}

**Task:** Please provide a complete solution to fix this React context error. Include:
1. Root cause analysis
2. Step-by-step fix instructions
3. Code changes needed
4. How to test the fix
5. Prevention strategies for similar issues

This is part of a comprehensive QA effort to fix navigation and component issues in the Magic Template project.`;

    return encodeURIComponent(prompt);
  };

  const handleAIAssist = () => {
    const prompt = generatePrompt();
    const pollinationUrl = `https://pollinations.ai/chat?prompt=${prompt}`;
    window.open(pollinationUrl, '_blank');
  };

  const handleCopyPrompt = () => {
    const prompt = generatePrompt();
    navigator.clipboard.writeText(decodeURIComponent(prompt));
  };

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={handleAIAssist}
        className="flex items-center gap-2"
      >
        <Bot className="h-4 w-4" />
        AI Fix Assistant
        <ExternalLink className="h-3 w-3" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleCopyPrompt}
        className="flex items-center gap-2"
      >
        <Copy className="h-4 w-4" />
        Copy Prompt
      </Button>
    </div>
  );
}

function MetricCard({ 
  title, 
  value, 
  icon: Icon, 
  description, 
  trend 
}: { 
  title: string; 
  value: string | number; 
  icon: React.ElementType; 
  description: string;
  trend?: 'up' | 'down' | 'stable';
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
  {React.createElement(Icon, { className: "h-4 w-4 text-muted-foreground" })}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
        {trend && (
          <div className="flex items-center mt-1">
            <TrendingUp className={`h-3 w-3 mr-1 ${
              trend === 'up' ? 'text-green-500' : 
              trend === 'down' ? 'text-red-500' : 'text-gray-500'
            }`} />
            <span className="text-xs text-muted-foreground">
              {trend === 'up' ? 'Improving' : trend === 'down' ? 'Declining' : 'Stable'}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function TestReportPage() {
  const [selectedSuite, setSelectedSuite] = React.useState<TestSuite | null>(null);
  const [suites, setSuites] = React.useState<TestSuite[]>([]);
  const [metrics, setMetrics] = React.useState<TestMetrics | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [live, setLive] = React.useState(false);
  const [lastFetchedAt, setLastFetchedAt] = React.useState<string | null>(null);

  const load = React.useCallback(async () => {
    let cancelled = false;
      setLoading(true);
      setError(null);
      try {
        const [e2eRes, unitRes] = await Promise.all([
          fetch('/api/test-results/e2e', { cache: 'no-store' }),
          fetch('/api/test-results/unit', { cache: 'no-store' })
        ]);

        let builtSuites: TestSuite[] = [];
        // E2E
        if (e2eRes.ok) {
          const e2eData: E2EReporterResult = await e2eRes.json();
          const totals = e2eData.totals || { total: 0, passed: 0, failed: 0, skipped: 0 };
          const cases: TestCase[] = (e2eData.suites || []).map((c, idx) => ({
            name: c.name || `E2E Test #${idx + 1}`,
            status: (c.status as any) || 'failed',
            error: c.error,
            terminalOutput: c.terminalOutput,
            codeSnippet: c.codeSnippet,
            filePath: c.filePath,
            lineNumber: c.lineNumber as any,
            category: c.category as any,
            tags: c.tags as any,
            priority: c.priority as any,
            suggestions: c.suggestions as any,
          }));
          builtSuites.push({
            name: 'End-to-End (Playwright)',
            status: totals.failed > 0 ? 'failed' : 'passed',
            testsTotal: totals.total,
            testsPassed: totals.passed,
            testsFailed: totals.failed,
            duration: 0,
            lastRun: e2eData.endTime || e2eData.startTime || new Date().toISOString(),
            description: 'Live results from Playwright E2E suite',
            command: 'pnpm test:e2e',
            testCases: cases,
          });
        }

        // Unit (Vitest) — totals only if available
        if (unitRes.ok) {
          const unitData = await unitRes.json();
          const stats = unitData?.stats || unitData?.result?.state || unitData; // be permissive
          const total = stats?.tests ?? stats?.total ?? 0;
          const passed = stats?.passes ?? stats?.passed ?? 0;
          const failed = stats?.failures ?? stats?.failed ?? 0;
          builtSuites.push({
            name: 'Unit Tests (Vitest)',
            status: failed > 0 ? 'failed' : 'passed',
            testsTotal: total,
            testsPassed: passed,
            testsFailed: failed,
            duration: 0,
            lastRun: new Date().toISOString(),
            description: 'Live results from Vitest unit suite',
            command: 'pnpm test:unit',
          });
        }

        if (!cancelled) {
          setSuites(builtSuites);
          setMetrics(computeMetrics(builtSuites));
          setLoading(false);
          setLastFetchedAt(new Date().toLocaleString());
        }
      } catch (err: any) {
        if (!cancelled) {
          setError(String(err?.message || err));
          setLoading(false);
        }
      }
    return () => { cancelled = true; };
  }, []);

  // Optional live auto-refresh toggle
  React.useEffect(() => {
    if (!live) return;
    let active = true;
    const run = async () => { if (active) await load(); };
    run();
    const t = setInterval(run, 10_000);
    return () => { active = false; clearInterval(t); };
  }, [live, load]);

  const testMetrics = metrics || {
    totalSuites: 0,
    passedSuites: 0,
    failedSuites: 0,
    totalTests: 0,
    passedTests: 0,
    failedTests: 0,
    coverage: 0,
    lastRunTime: new Date().toISOString(),
  };

  const overallStatus = testMetrics.failedSuites === 0 ? 'passed' : 'failed';
  const successRate = testMetrics.totalTests > 0 ? Math.round((testMetrics.passedTests / testMetrics.totalTests) * 100) : 0;

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Test Report</h1>
            <p className="text-lg text-muted-foreground mt-2">
              Comprehensive testing dashboard for Magic Template
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <StatusIcon status={overallStatus} />
            <StatusBadge status={overallStatus} />
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <button
            className="inline-flex items-center rounded border px-3 py-1 hover:bg-accent"
            onClick={() => load()}
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? 'Loading…' : 'Load Latest'}
          </button>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={live} onChange={e => setLive(e.target.checked)} />
            Live auto-refresh (10s)
          </label>
          {lastFetchedAt && <span>Last fetched: {lastFetchedAt}</span>}
          <span>•</span>
          <span>Success rate: {successRate}%</span>
          <span>•</span>
          <span>Coverage: {testMetrics.coverage}%</span>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard
          title="Total Tests"
          value={testMetrics.totalTests}
          icon={Activity}
          description="All test cases across suites"
          trend="up"
        />
        <MetricCard
          title="Success Rate"
          value={`${successRate}%`}
          icon={CheckCircle}
          description="Percentage of passing tests"
          trend={successRate > 90 ? 'up' : successRate > 70 ? 'stable' : 'down'}
        />
        <MetricCard
          title="Test Suites"
          value={`${testMetrics.passedSuites}/${testMetrics.totalSuites}`}
          icon={Shield}
          description="Passing test suites"
          trend="stable"
        />
        <MetricCard
          title="Coverage"
          value={`${testMetrics.coverage}%`}
          icon={Zap}
          description="Code coverage percentage"
          trend="up"
        />
      </div>

      {/* Main Content */}
      <Tabs defaultValue="suites" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="suites">Test Suites</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        {/* Test Suites Tab */}
        <TabsContent value="suites" className="space-y-4">
          <div className="grid gap-4">
            {(suites.length ? suites : []).map((suite: TestSuite, index: number) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setSelectedSuite(suite)}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <StatusIcon status={suite.status} />
                      <div>
                        <CardTitle className="text-lg">{suite.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{suite.description}</p>
                      </div>
                    </div>
                    <StatusBadge status={suite.status} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Total Tests:</span>
                      <div className="text-lg font-bold">{suite.testsTotal}</div>
                    </div>
                    <div>
                      <span className="font-medium">Passed:</span>
                      <div className="text-lg font-bold text-green-600">{suite.testsPassed}</div>
                    </div>
                    <div>
                      <span className="font-medium">Failed:</span>
                      <div className="text-lg font-bold text-red-600">{suite.testsFailed}</div>
                    </div>
                    <div>
                      <span className="font-medium">Duration:</span>
                      <div className="text-lg font-bold">{suite.duration}s</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(suite.testsPassed / suite.testsTotal) * 100}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Navigation Tab */}
        <TabsContent value="navigation" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Navigation className="h-5 w-5" />
                  <CardTitle className="text-lg">Navigation Route Testing</CardTitle>
                </div>
                <Button variant="outline" size="sm" onClick={() => window.location.reload()}>
                  Refresh
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <NavigationResults />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Details Tab */}
        <TabsContent value="details" className="space-y-4">
          {selectedSuite ? (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{selectedSuite.name}</CardTitle>
                    <Button variant="outline" size="sm" onClick={() => setSelectedSuite(null)}>
                      Back to Overview
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Description</h3>
                    <p className="text-muted-foreground">{selectedSuite.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Command</h3>
                    <code className="bg-muted px-2 py-1 rounded text-sm">{selectedSuite.command}</code>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium">Status</h4>
                      <StatusBadge status={selectedSuite.status} />
                    </div>
                    <div>
                      <h4 className="font-medium">Duration</h4>
                      <p>{selectedSuite.duration} seconds</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Last Run</h4>
                      <p>{new Date(selectedSuite.lastRun).toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Categorized Failing Tests (Accordion) */}
              {selectedSuite.testCases && selectedSuite.testCases.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Failing Tests by Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="multiple" className="w-full">
                      {Object.entries(
                        selectedSuite.testCases
                          .filter(tc => tc.status === 'failed')
                          .reduce<Record<string, TestCase[]>>((acc, tc) => {
                            const cat = tc.category || 'Uncategorized';
                            acc[cat] = acc[cat] || [];
                            acc[cat].push(tc);
                            return acc;
                          }, {})
                      ).map(([category, cases]) => {
                        const priorityRank = (p?: TestCase['priority']) => {
                          switch (p) {
                            case 'critical': return 0;
                            case 'high': return 1;
                            case 'medium': return 2;
                            case 'low': return 3;
                            default: return 4;
                          }
                        };
                        const sorted = [...cases].sort((a, b) => priorityRank(a.priority) - priorityRank(b.priority));
                        return (
                          <AccordionItem key={category} value={category}>
                            <AccordionTrigger>
                              <div className="flex items-center gap-2">
                                <XCircle className="h-4 w-4 text-red-500" />
                                <span className="font-medium">{category}</span>
                                <span className="text-xs text-muted-foreground">({sorted.length})</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-4">
                                {sorted.map((testCase, idx) => (
                                  <div key={idx} className="border rounded-lg p-4 space-y-3">
                                    <div className="flex items-start justify-between gap-4">
                                      <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                          <StatusIcon status={testCase.status} />
                                          <h4 className="font-medium leading-snug">{testCase.name}</h4>
                                        </div>
                                        {/* Tags */}
                                        {testCase.tags && testCase.tags.length > 0 && (
                                          <div className="flex flex-wrap gap-1 mt-1">
                                            {testCase.tags.map((tag, i) => (
                                              <Badge key={i} variant="secondary">{tag}</Badge>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                      <div className="flex items-center gap-2 shrink-0">
                                        {/* Priority */}
                                        <Badge className={
                                          testCase.priority === 'critical' ? 'bg-red-100 text-red-800 border-red-200' :
                                          testCase.priority === 'high' ? 'bg-orange-100 text-orange-800 border-orange-200' :
                                          testCase.priority === 'medium' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                                          'bg-gray-100 text-gray-800 border-gray-200'
                                        }>
                                          {testCase.priority || 'unrated'}
                                        </Badge>
                                        {/* Generate Spec (AI) */}
                                        <Button variant="outline" size="sm" onClick={() => {
                                          // Reuse AIEnhancementButton logic by constructing inline prompt
                                          const el = document.createElement('a');
                                          const prompt = `Generate a detailed fix spec for the following failing test in Magic Template.\n\n` +
                                            `Test Name: ${testCase.name}\n` +
                                            `Category: ${testCase.category || 'Uncategorized'}\n` +
                                            `Priority: ${testCase.priority || 'unrated'}\n` +
                                            `Tags: ${(testCase.tags || []).join(', ')}\n\n` +
                                            `Error: ${testCase.error || ''}\n\n` +
                                            `Terminal Output:\n${testCase.terminalOutput || ''}\n\n` +
                                            `Code Context:\n${testCase.codeSnippet || ''}\n\n` +
                                            `File: ${testCase.filePath || ''}${testCase.lineNumber ? ` (Line ${testCase.lineNumber})` : ''}\n\n` +
                                            `Deliverables:\n- Root cause\n- Step-by-step fix\n- Code changes\n- Tests to add/update\n- Rollout plan`;
                                          el.href = `https://pollinations.ai/chat?prompt=${encodeURIComponent(prompt)}`;
                                          el.target = '_blank';
                                          el.rel = 'noopener noreferrer';
                                          el.click();
                                        }} className="flex items-center gap-1">
                                          <Bot className="h-4 w-4" />
                                          Generate Spec
                                          <ExternalLink className="h-3 w-3" />
                                        </Button>
                                      </div>
                                    </div>

                                    {/* Error */}
                                    {testCase.error && (
                                      <div>
                                        <h5 className="font-medium text-red-600 mb-1">Error</h5>
                                        <p className="text-sm bg-red-50 border border-red-200 rounded p-2 text-red-800">{testCase.error}</p>
                                      </div>
                                    )}
                                    {/* Terminal */}
                                    {testCase.terminalOutput && (
                                      <div>
                                        <h5 className="font-medium mb-1 flex items-center gap-2"><Terminal className="h-4 w-4" />Terminal</h5>
                                        <pre className="text-xs bg-gray-900 text-gray-100 rounded p-3 overflow-x-auto">{testCase.terminalOutput}</pre>
                                      </div>
                                    )}
                                    {/* Code */}
                                    {testCase.codeSnippet && (
                                      <div>
                                        <h5 className="font-medium mb-1 flex items-center gap-2"><Code className="h-4 w-4" />Code</h5>
                                        <pre className="text-xs bg-gray-50 border rounded p-3 overflow-x-auto">{testCase.codeSnippet}</pre>
                                      </div>
                                    )}
                                    {/* File */}
                                    {(testCase.filePath || testCase.lineNumber) && (
                                      <div>
                                        <h5 className="font-medium mb-1">Location</h5>
                                        <p className="text-sm font-mono bg-blue-50 border border-blue-200 rounded p-2 text-blue-800">
                                          {testCase.filePath || ''}{testCase.lineNumber ? ` (Line ${testCase.lineNumber})` : ''}
                                        </p>
                                      </div>
                                    )}
                                    {/* Suggestions */}
                                    {testCase.suggestions && testCase.suggestions.length > 0 && (
                                      <div>
                                        <h5 className="font-medium mb-2">Suggestions</h5>
                                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                          {testCase.suggestions.map((s, i) => (<li key={i}>{s}</li>))}
                                        </ul>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  </CardContent>
                </Card>
              )}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-8">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                {loading ? (
                  <p className="text-muted-foreground">Loading live test results…</p>
                ) : suites.length === 0 ? (
                  <>
                    <p className="text-muted-foreground">No test artifacts found. Run tests to populate <code>test-results/</code>.</p>
                    <p className="text-xs text-muted-foreground mt-2">Expected files: <code>test-results/e2e-detailed.json</code> or <code>test-results/e2e.json</code>, and <code>test-results/unit.json</code>.</p>
                    {error && <p className="text-xs text-red-600 mt-2">{error}</p>}
                  </>
                ) : (
                  <p className="text-muted-foreground">Select a test suite to view detailed test information</p>
                )}
                <p className="text-xs text-muted-foreground mt-2">
                  View individual test failures, terminal output, code context, and get AI-powered fix suggestions
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports" className="space-y-4">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Available Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Test Execution Report</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive execution summary with metrics</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    View Report
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Failure Report</h3>
                    <p className="text-sm text-muted-foreground">Detailed analysis of failing tests and errors</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    View Report
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Test Cases Documentation</h3>
                    <p className="text-sm text-muted-foreground">Living documentation of all test cases</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    View Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="w-full" size="lg">
                    <Play className="h-4 w-4 mr-2" />
                    Run All Tests
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Activity className="h-4 w-4 mr-2" />
                    Generate Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
