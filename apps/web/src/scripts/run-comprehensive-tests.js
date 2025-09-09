#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ANSI color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logSection(title) {
  log(`\n${'='.repeat(60)}`, 'cyan');
  log(`${title}`, 'bright');
  log(`${'='.repeat(60)}`, 'cyan');
}

function runCommand(command, description, options = {}) {
  log(`\n🔄 ${description}...`, 'blue');
  
  try {
    const result = execSync(command, {
      cwd: process.cwd(),
      encoding: 'utf8',
      stdio: options.silent ? 'pipe' : 'inherit',
      timeout: options.timeout || 300000, // 5 minutes default
      ...options
    });
    
    log(`✅ ${description} completed successfully`, 'green');
    return { success: true, output: result };
  } catch (error) {
    log(`❌ ${description} failed`, 'red');
    if (options.silent && error.stdout) {
      console.log(error.stdout);
    }
    if (error.stderr) {
      console.error(error.stderr);
    }
    return { success: false, error: error.message, output: error.stdout };
  }
}

function generateTestReport(results) {
  const reportPath = path.join(process.cwd(), 'TEST_EXECUTION_REPORT.md');
  const timestamp = new Date().toISOString();
  
  let report = `# Comprehensive Test Execution Report\n\n`;
  report += `**Generated:** ${timestamp}\n\n`;
  report += `## Test Suite Results\n\n`;
  
  let totalTests = 0;
  let passedTests = 0;
  
  results.forEach(result => {
    const status = result.success ? '✅ PASSED' : '❌ FAILED';
    report += `### ${result.name}\n`;
    report += `**Status:** ${status}\n`;
    report += `**Command:** \`${result.command}\`\n`;
    
    if (result.output) {
      // Extract test counts from output if available
      const testCountMatch = result.output.match(/(\d+) passed|(\d+) tests? passed/);
      if (testCountMatch) {
        const count = parseInt(testCountMatch[1] || testCountMatch[2]);
        totalTests += count;
        if (result.success) passedTests += count;
        report += `**Tests:** ${count}\n`;
      }
    }
    
    if (!result.success && result.error) {
      report += `**Error:** \`${result.error}\`\n`;
    }
    
    report += `\n`;
  });
  
  // Summary
  report += `## Summary\n\n`;
  report += `- **Total Test Suites:** ${results.length}\n`;
  report += `- **Passed Suites:** ${results.filter(r => r.success).length}\n`;
  report += `- **Failed Suites:** ${results.filter(r => !r.success).length}\n`;
  
  if (totalTests > 0) {
    report += `- **Total Tests:** ${totalTests}\n`;
    report += `- **Passed Tests:** ${passedTests}\n`;
    report += `- **Failed Tests:** ${totalTests - passedTests}\n`;
  }
  
  const overallSuccess = results.every(r => r.success);
  report += `- **Overall Status:** ${overallSuccess ? '✅ ALL PASSED' : '❌ SOME FAILED'}\n\n`;
  
  // Recommendations
  if (!overallSuccess) {
    report += `## Recommendations\n\n`;
    report += `1. Review failed test suites and fix underlying issues\n`;
    report += `2. Check FAILURE_REPORT.md for detailed error information\n`;
    report += `3. Ensure all navigation links are implemented and working\n`;
    report += `4. Fix any hydration or runtime errors in components\n`;
    report += `5. Verify build process completes without errors\n\n`;
  }
  
  report += `## Next Steps\n\n`;
  report += `1. Address any failing tests before deployment\n`;
  report += `2. Update TEST_CASES.md when all tests pass\n`;
  report += `3. Maintain test coverage for new features\n`;
  report += `4. Run tests regularly during development\n\n`;
  
  fs.writeFileSync(reportPath, report);
  log(`📊 Test report generated: ${reportPath}`, 'magenta');
  
  return overallSuccess;
}

async function main() {
  logSection('COMPREHENSIVE TEST SUITE EXECUTION');
  
  const results = [];
  
  // 1. Unit Tests
  logSection('Unit Tests');
  const unitResult = runCommand(
    'pnpm vitest run --config vitest.unit.config.ts',
    'Running unit tests',
    { timeout: 60000 }
  );
  results.push({
    name: 'Unit Tests',
    command: 'pnpm vitest run --config vitest.unit.config.ts',
    ...unitResult
  });
  
  // 2. Build Validation
  logSection('Build Validation');
  const buildResult = runCommand(
    'pnpm playwright test e2e/build-validation.spec.ts',
    'Running build validation tests',
    { timeout: 600000 } // 10 minutes for build tests
  );
  results.push({
    name: 'Build Validation',
    command: 'pnpm playwright test e2e/build-validation.spec.ts',
    ...buildResult
  });
  
  // 3. Navigation Tests
  logSection('Navigation Tests');
  const navResult = runCommand(
    'pnpm playwright test e2e/navigation-comprehensive.spec.ts',
    'Running comprehensive navigation tests',
    { timeout: 300000 }
  );
  results.push({
    name: 'Navigation Tests',
    command: 'pnpm playwright test e2e/navigation-comprehensive.spec.ts',
    ...navResult
  });
  
  // 4. Preview Tile Tests
  logSection('Preview Tile Tests');
  const tileResult = runCommand(
    'pnpm playwright test e2e/preview-tiles.spec.ts',
    'Running preview tile interaction tests',
    { timeout: 300000 }
  );
  results.push({
    name: 'Preview Tile Tests',
    command: 'pnpm playwright test e2e/preview-tiles.spec.ts',
    ...tileResult
  });
  
  // 5. Transition Component Tests (existing)
  logSection('Transition Component Tests');
  const transitionResult = runCommand(
    'pnpm playwright test e2e/transitions.spec.ts',
    'Running transition component tests',
    { timeout: 180000 }
  );
  results.push({
    name: 'Transition Component Tests',
    command: 'pnpm playwright test e2e/transitions.spec.ts',
    ...transitionResult
  });
  
  // 6. Route Smoke Tests (existing)
  logSection('Route Smoke Tests');
  const routeResult = runCommand(
    'pnpm playwright test e2e/routes.spec.ts',
    'Running route smoke tests',
    { timeout: 600000 }
  );
  results.push({
    name: 'Route Smoke Tests',
    command: 'pnpm playwright test e2e/routes.spec.ts',
    ...routeResult
  });
  
  // Generate comprehensive report
  logSection('Test Report Generation');
  const overallSuccess = generateTestReport(results);
  
  // Final summary
  logSection('EXECUTION SUMMARY');
  
  if (overallSuccess) {
    log('🎉 ALL TESTS PASSED! The application is ready for deployment.', 'green');
  } else {
    log('⚠️  SOME TESTS FAILED. Please review the test report and fix issues.', 'yellow');
    
    // List failed suites
    const failedSuites = results.filter(r => !r.success);
    if (failedSuites.length > 0) {
      log('\nFailed test suites:', 'red');
      failedSuites.forEach(suite => {
        log(`  - ${suite.name}`, 'red');
      });
    }
  }
  
  log(`\n📊 Detailed report: TEST_EXECUTION_REPORT.md`, 'cyan');
  log(`🔍 Error details: FAILURE_REPORT.md`, 'cyan');
  log(`📋 Test cases: TEST_CASES.md`, 'cyan');
  
  // Exit with appropriate code
  process.exit(overallSuccess ? 0 : 1);
}

// Handle uncaught errors
process.on('uncaughtException', (error) => {
  log(`\n💥 Uncaught Exception: ${error.message}`, 'red');
  console.error(error.stack);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  log(`\n💥 Unhandled Rejection at: ${promise}, reason: ${reason}`, 'red');
  process.exit(1);
});

// Run the main function
main().catch(error => {
  log(`\n💥 Test execution failed: ${error.message}`, 'red');
  console.error(error.stack);
  process.exit(1);
});
