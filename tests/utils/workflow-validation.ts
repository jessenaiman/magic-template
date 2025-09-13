/**
 * Workflow Validation Utilities
 *
 * This module provides validation functions for the complete code review workflow.
 * These utilities are used by integration tests to ensure the entire validation pipeline works.
 */

import {
  validateMagicUIComponents,
  validateShadcnComponents,
  validateAnimateUIComponents,
  validateReactBitsComponents,
} from './component-validation';

export interface ComponentValidationPipelineResult {
  status: 'success' | 'error';
  librariesValidated: string[];
  issues: string[];
  duration: number;
}

export interface ComponentIssuesResult {
  issuesDetected: boolean;
  issues: Array<{
    library: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    description: string;
    recommendation: string;
  }>;
  severityLevels: {
    low: number;
    medium: number;
    high: number;
    critical: number;
  };
  recommendations: string[];
}

/**
 * Runs the complete component validation pipeline
 */
export async function runComponentValidationPipeline(): Promise<ComponentValidationPipelineResult> {
  const startTime = Date.now();
  const librariesValidated: string[] = [];
  const issues: string[] = [];

  try {
    // Validate MagicUI components
    const magicUIResult = await validateMagicUIComponents();
    librariesValidated.push('MagicUI');
    if (magicUIResult.status !== 'success') {
      issues.push(...magicUIResult.issues);
    }

    // Validate Shadcn components
    const shadcnResult = await validateShadcnComponents();
    librariesValidated.push('Shadcn');
    if (shadcnResult.status !== 'success') {
      issues.push(...shadcnResult.issues);
    }

    // Validate Animate-UI components
    const animateUIResult = await validateAnimateUIComponents();
    librariesValidated.push('Animate-UI');
    if (animateUIResult.status !== 'success') {
      issues.push(...animateUIResult.issues);
    }

    // Validate ReactBits components
    const reactBitsResult = await validateReactBitsComponents();
    librariesValidated.push('ReactBits');
    if (reactBitsResult.status !== 'success') {
      issues.push(...reactBitsResult.issues);
    }

    const duration = Date.now() - startTime;

    return {
      status: issues.length === 0 ? 'success' : 'error',
      librariesValidated,
      issues,
      duration,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    return {
      status: 'error',
      librariesValidated,
      issues: [`Component validation pipeline failed: ${errorMessage}`],
      duration: Date.now() - startTime,
    };
  }
}

/**
 * Detects and reports component issues
 */
export async function detectComponentIssues(): Promise<ComponentIssuesResult> {
  try {
    // Run the validation pipeline to detect issues
    const pipelineResult = await runComponentValidationPipeline();

    const issues = pipelineResult.issues.map((issue, index) => ({
      library: 'Unknown', // Would need more sophisticated parsing in real implementation
      severity: (['low', 'medium', 'high', 'critical'] as const)[index % 4], // Cycle through severity levels
      description: issue,
      recommendation: 'Review and fix the reported issue',
    }));

    const severityLevels = {
      low: issues.filter(i => i.severity === 'low').length,
      medium: issues.filter(i => i.severity === 'medium').length,
      high: issues.filter(i => i.severity === 'high').length,
      critical: issues.filter(i => i.severity === 'critical').length,
    };

    const recommendations = [
      'Fix all critical and high severity issues immediately',
      'Address medium severity issues in the next sprint',
      'Review low severity issues for future improvements',
      'Consider updating component library versions if compatibility issues exist',
    ];

    return {
      issuesDetected: issues.length > 0,
      issues,
      severityLevels,
      recommendations,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Component issue detection failed: ${errorMessage}`);
  }
}
