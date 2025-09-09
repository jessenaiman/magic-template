// Lightweight Playwright reporter that categorizes failures and emits a single JSON file
// Output file configured via reporter options: { outputFile: 'test-results/e2e-detailed.json' }

const fs = require('fs');
const path = require('path');

class DetailedJsonReporter {
  constructor(options = {}) {
    this.outputFile = options.outputFile || path.join(process.cwd(), 'test-results', 'e2e-detailed.json');
    this.results = {
      startTime: new Date().toISOString(),
      projects: {},
      suites: [],
      totals: { total: 0, passed: 0, failed: 0, skipped: 0 },
    };
  }

  onBegin(config, suite) {
    this.config = config;
    this.rootSuite = suite;
  }

  _classify(errorText = '') {
    const text = String(errorText || '').toLowerCase();
    const tags = [];
    let category = 'Uncategorized';
    let priority = 'medium';

    if (text.includes('must be used within') || text.includes('usecontext') || text.includes('invalid hook call')) {
      category = 'React Context';
      tags.push('useContext');
      priority = 'critical';
    } else if (text.includes('hydration failed') || text.includes('text content does not match')) {
      category = 'Hydration';
      tags.push('SSR/CSR mismatch');
      priority = 'high';
    } else if (text.includes('net::err') || text.includes('request failed')) {
      category = 'Network/Assets';
      tags.push('request');
      priority = 'medium';
    } else if (text.includes('404') || text.includes('500') || text.includes('route')) {
      category = 'Routing/HTTP';
      tags.push('routing');
      priority = 'medium';
    }

    return { category, tags, priority };
  }

  onTestEnd(test, result) {
    const status = result.status; // 'passed' | 'failed' | 'skipped' | 'timedOut' | 'interrupted'
    this.results.totals.total += 1;
    if (status === 'passed') this.results.totals.passed += 1;
    else if (status === 'skipped') this.results.totals.skipped += 1;
    else this.results.totals.failed += 1;

    const titlePath = test.titlePath();
    const name = titlePath.join(' > ');

    // Gather errors from test result, stdio, and attachments
    let terminalOutput = '';
    if (Array.isArray(result.stdout)) {
      terminalOutput += result.stdout.map(s => s.text || '').join('');
    }
    if (Array.isArray(result.stderr)) {
      terminalOutput += '\n' + result.stderr.map(s => s.text || '').join('');
    }

    let errorMessage = '';
    let codeSnippet = '';
    if (result.error) {
      errorMessage = [result.error.message, result.error.stack].filter(Boolean).join('\n');
    }

    // Try to read error attachment if available
    const errorAttachment = (result.attachments || []).find(a => a.name === 'error');
    if (errorAttachment && errorAttachment.path) {
      try {
        codeSnippet = fs.readFileSync(errorAttachment.path, 'utf8');
      } catch {}
    }

    const { category, tags, priority } = this._classify(errorMessage || terminalOutput);

    // Build test case record
    const testCase = {
      name,
      status: status === 'timedOut' ? 'failed' : status,
      error: errorMessage || undefined,
      terminalOutput: terminalOutput || undefined,
      codeSnippet: codeSnippet || undefined,
      filePath: test.location ? test.location.file : undefined,
      lineNumber: test.location ? test.location.line : undefined,
      category,
      tags,
      priority,
    };

    // Group by project and suite
    const projectName = result.workerIndex != null && this.config.projects ? (this.config.projects[result.workerIndex]?.name || 'default') : 'default';
    if (!this.results.projects[projectName]) this.results.projects[projectName] = { suites: [] };

    // Attach to a flat suite for now (can be made hierarchical later)
    this.results.suites.push(testCase);
  }

  async onEnd() {
    this.results.endTime = new Date().toISOString();
    // Ensure directory
    const dir = path.dirname(this.outputFile);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(this.outputFile, JSON.stringify(this.results, null, 2), 'utf8');
    // eslint-disable-next-line no-console
    console.log(`\nDetailed Playwright report written to: ${this.outputFile}`);
  }
}

module.exports = DetailedJsonReporter;
