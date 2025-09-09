'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@repo/components/ui/card';
import { Badge } from '@repo/components/ui/badge';
import { Button } from '@repo/components/ui/button';
import { CheckCircle, XCircle, Clock, AlertTriangle } from 'lucide-react';

interface NavigationTestResult {
  href: string;
  label: string;
  parent?: string;
  status: 'pass' | 'fail' | 'skipped';
  error?: string;
  responseTime?: number;
  timestamp: string;
}

export function NavigationResults() {
  const [results, setResults] = useState<NavigationTestResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadResults() {
      try {
        setLoading(true);
        // Try to load results from the local file
        const response = await fetch('/test-report/navigation-results.json');
        if (response.ok) {
          const data = await response.json();
          setResults(data);
        } else {
          setError('Failed to load navigation test results');
        }
      } catch (err) {
        setError('Error loading navigation test results');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadResults();
  }, []);

  // Calculate statistics
  const totalTests = results.length;
  const passedTests = results.filter(r => r.status === 'pass').length;
  const failedTests = results.filter(r => r.status === 'fail').length;
  const skippedTests = results.filter(r => r.status === 'skipped').length;
  const successRate = totalTests > 0 ? Math.round((passedTests / totalTests) * 100) : 0;

  // Group results by parent/section
  const groupedResults = results.reduce<Record<string, NavigationTestResult[]>>((acc, result) => {
    const section = result.parent || 'Other';
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(result);
    return acc;
  }, {});

  function getStatusIcon(status: string) {
    switch (status) {
      case 'pass':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'fail':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'skipped':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-500" />;
    }
  }

  function getStatusBadge(status: string) {
    switch (status) {
      case 'pass':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Pass</Badge>;
      case 'fail':
        return <Badge className="bg-red-100 text-red-800 border-red-200">Fail</Badge>;
      case 'skipped':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Skipped</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">Unknown</Badge>;
    }
  }

  if (loading) {
    return <div className="p-8 text-center">Loading navigation test results...</div>;
  }

  if (error) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-500 mb-4">{error}</p>
        <p className="text-sm text-muted-foreground">
          Make sure you've run the navigation tests with:
          <br />
          <code className="bg-gray-100 px-2 py-1 rounded">pnpm test:e2e e2e/navigation-links.spec.ts</code>
        </p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="mb-4">No navigation test results available</p>
        <p className="text-sm text-muted-foreground">
          Run the navigation tests with:
          <br />
          <code className="bg-gray-100 px-2 py-1 rounded">pnpm test:e2e e2e/navigation-links.spec.ts</code>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Navigation Test Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="font-medium">Total Routes:</span>
              <div className="text-lg font-bold">{totalTests}</div>
            </div>
            <div>
              <span className="font-medium">Passed:</span>
              <div className="text-lg font-bold text-green-600">{passedTests}</div>
            </div>
            <div>
              <span className="font-medium">Failed:</span>
              <div className="text-lg font-bold text-red-600">{failedTests}</div>
            </div>
            <div>
              <span className="font-medium">Skipped:</span>
              <div className="text-lg font-bold text-yellow-600">{skippedTests}</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${successRate}%` }}
              />
            </div>
            <div className="text-sm text-center mt-1 text-muted-foreground">
              Success Rate: {successRate}%
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results by Section */}
      {Object.entries(groupedResults).map(([section, sectionResults]) => (
        <Card key={section}>
          <CardHeader>
            <CardTitle className="text-lg">{section}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {sectionResults.map((result, index) => (
                <div key={index} className="border rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.status)}
                      <span className="font-medium">{result.label}</span>
                      <span className="text-xs text-muted-foreground">({result.href})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {result.responseTime && (
                        <span className="text-xs text-muted-foreground">
                          {result.responseTime}ms
                        </span>
                      )}
                      {getStatusBadge(result.status)}
                    </div>
                  </div>
                  {result.error && (
                    <div className="mt-2">
                      <p className="text-sm bg-red-50 border border-red-200 rounded p-2 text-red-800">
                        {result.error}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="text-center mt-4">
        <Button 
          onClick={() => window.location.reload()}
          variant="outline"
        >
          Refresh Results
        </Button>
      </div>
    </div>
  );
}
