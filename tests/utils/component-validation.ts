/**
 * Component Validation Utilities
 *
 * This module provides validation functions for component libraries used in the project.
 * These utilities are used by contract tests to ensure component libraries are properly
 * installed and configured.
 */

import { readFileSync } from 'fs';
import { join } from 'path';

export interface ValidationResult {
  status: 'success' | 'error';
  validated: boolean;
  version?: string;
  issues: string[];
}

/**
 * Validates MagicUI components installation and configuration
 */
export async function validateMagicUIComponents(): Promise<ValidationResult> {
  const issues: string[] = [];

  try {
    // Check if MagicUI components can be imported
    const magicUIComponents = [
      'AuroraText',
      'BentoGrid',
      'BorderBeam',
      'Confetti',
      'DotPattern',
      'FlickeringGrid',
      'Globe',
      'HyperText',
      'MagicCard',
      'Marquee',
      'Meteors',
      'NumberTicker',
      'Particles',
      'RainbowButton',
      'RetroGrid',
      'RippleButton',
      'ShinyButton',
      'SparklesText',
      'TextAnimate',
      'WarpBackground',
      'WordRotate'
    ];

    // Try to import a few key components to verify installation
    const testImports = ['aurora-text', 'bento-grid', 'magic-card'];
    for (const component of testImports) {
      try {
        await import(`@/components/magicui/${component}`);
      } catch (error) {
        issues.push(`Failed to import MagicUI component: ${component}`);
      }
    }

    // Check package.json for MagicUI dependencies
    const packageJsonPath = join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    const hasMagicUIDeps = Object.keys(packageJson.dependencies || {}).some(dep =>
      dep.includes('magic') || dep.includes('magicui')
    );

    if (!hasMagicUIDeps) {
      issues.push('No MagicUI dependencies found in package.json');
    }

    return {
      status: issues.length === 0 ? 'success' : 'error',
      validated: issues.length === 0,
      version: '1.0.0', // Placeholder - would get from package.json
      issues
    };

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return {
      status: 'error',
      validated: false,
      issues: [`MagicUI validation failed: ${errorMessage}`]
    };
  }
}

/**
 * Validates Shadcn components installation and configuration
 */
export async function validateShadcnComponents(): Promise<ValidationResult> {
  const issues: string[] = [];

  try {
    // Check if Shadcn components can be imported
    const shadcnComponents = [
      'Button',
      'Card',
      'Input',
      'Label',
      'Select',
      'Dialog',
      'DropdownMenu',
      'Tabs',
      'Accordion',
      'Alert',
      'Badge',
      'Checkbox',
      'RadioGroup',
      'Slider',
      'Switch',
      'Textarea',
      'Tooltip',
      'Popover',
      'Sheet',
      'Sidebar'
    ];

    // Try to import a few key components to verify installation
    const testImports = ['button', 'card', 'input'];
    for (const component of testImports) {
      try {
        await import(`@/components/ui/${component}`);
      } catch (error) {
        issues.push(`Failed to import Shadcn component: ${component}`);
      }
    }

    // Check package.json for Shadcn dependencies
    const packageJsonPath = join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    const hasShadcnDeps = Object.keys(packageJson.dependencies || {}).some(dep =>
      dep.includes('radix') || dep.includes('cmdk') || dep.includes('class-variance-authority')
    );

    if (!hasShadcnDeps) {
      issues.push('No Shadcn dependencies found in package.json');
    }

    return {
      status: issues.length === 0 ? 'success' : 'error',
      validated: issues.length === 0,
      version: '1.0.0', // Placeholder - would get from package.json
      issues
    };

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return {
      status: 'error',
      validated: false,
      issues: [`Shadcn validation failed: ${errorMessage}`]
    };
  }
}

/**
 * Validates Animate-UI components installation and configuration
 */
export async function validateAnimateUIComponents(): Promise<ValidationResult> {
  const issues: string[] = [];

  try {
    // Check if Animate-UI components can be imported
    const animateUIComponents = [
      'AvatarGroup',
      'CodeEditor',
      'CodeTabs',
      'Counter',
      'Files',
      'Tabs',
      'Tooltip',
      'Magnetic',
      'MotionEffect',
      'MotionHighlight',
      'CopyButton',
      'FlipButton',
      'GithubStarsButton',
      'IconButton',
      'InputButton',
      'LiquidButton',
      'RippleButton',
      'CountingNumber',
      'GradientText',
      'HighlightText',
      'RollingText',
      'RotatingText',
      'ShimmeringText',
      'SlidingNumber',
      'SplittingText',
      'TypingText',
      'WritingText'
    ];

    // Try to import a few key components to verify installation
    const testImports = ['buttons/copy', 'components/avatar-group', 'text/counting-number'];
    for (const component of testImports) {
      try {
        await import(`@/components/animate-ui/${component}`);
      } catch (error) {
        issues.push(`Failed to import Animate-UI component: ${component}`);
      }
    }

    // Check package.json for Animate-UI dependencies
    const packageJsonPath = join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    const hasAnimateUIDeps = Object.keys(packageJson.dependencies || {}).some(dep =>
      dep.includes('animate') || dep.includes('motion') || dep.includes('framer')
    );

    if (!hasAnimateUIDeps) {
      issues.push('No Animate-UI dependencies found in package.json');
    }

    return {
      status: issues.length === 0 ? 'success' : 'error',
      validated: issues.length === 0,
      version: '1.0.0', // Placeholder - would get from package.json
      issues
    };

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return {
      status: 'error',
      validated: false,
      issues: [`Animate-UI validation failed: ${errorMessage}`]
    };
  }
}

/**
 * Validates ReactBits components installation and configuration
 */
export async function validateReactBitsComponents(): Promise<ValidationResult> {
  const issues: string[] = [];

  try {
    // Check if ReactBits components can be imported
    const reactBitsComponents = [
      'BlurText',
      'ClickSpark',
      'CountUp',
      'CurvedLoop',
      'DecryptedText',
      'FadeContent',
      'FuzzyText',
      'LiquidEther',
      'LogoLoop',
      'MetaBalls',
      'Ribbons',
      'ShinyText',
      'SplitText',
      'TextPressure',
      'TextType'
    ];

    // Try to import a few key components to verify installation
    const testImports = ['BlurText', 'ClickSpark', 'CountUp'];
    for (const component of testImports) {
      try {
        await import(`@/components/${component}`);
      } catch (error) {
        issues.push(`Failed to import ReactBits component: ${component}`);
      }
    }

    // Check package.json for ReactBits dependencies
    const packageJsonPath = join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    const hasReactBitsDeps = Object.keys(packageJson.dependencies || {}).some(dep =>
      dep.includes('three') || dep.includes('ogl') || dep.includes('postprocessing')
    );

    if (!hasReactBitsDeps) {
      issues.push('No ReactBits dependencies found in package.json');
    }

    return {
      status: issues.length === 0 ? 'success' : 'error',
      validated: issues.length === 0,
      version: '1.0.0', // Placeholder - would get from package.json
      issues
    };

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return {
      status: 'error',
      validated: false,
      issues: [`ReactBits validation failed: ${errorMessage}`]
    };
  }
}
