# Data Model: Fix All Lint Errors

## Overview
The data model for fixing lint errors is minimal since this feature focuses on code quality improvement rather than new data structures. The primary entities track lint issues and configuration files.

## Entities

### LintError
Represents individual linting issues identified in the codebase.

**Fields**:
- `filePath`: string - Absolute path to the file containing the error
- `lineNumber`: number - Line number where the error occurs
- `columnNumber`: number - Column number where the error occurs (optional)
- `rule`: string - ESLint rule that triggered the error
- `message`: string - Human-readable error message
- `severity`: 'error' | 'warning' - Severity level of the issue
- `fixed`: boolean - Whether the error has been resolved
- `category`: string - Category of the error (e.g., 'typescript', 'react', 'accessibility')

**Validation Rules**:
- `filePath` must be a valid file path
- `lineNumber` must be positive integer
- `rule` must match ESLint rule naming convention
- `severity` must be either 'error' or 'warning'

### ConfigurationFile
Represents configuration files that affect linting behavior.

**Fields**:
- `filePath`: string - Path to the configuration file
- `type`: 'eslint' | 'tsconfig' | 'prettier' | 'other' - Type of configuration
- `lastModified`: Date - When the file was last modified
- `issues`: LintError[] - Associated lint issues

**Relationships**:
- One-to-many: ConfigurationFile → LintError (a config file can have multiple issues)

## State Transitions
- LintError: unfixed → fixed
- ConfigurationFile: unmodified → modified (when config issues are resolved)

## Notes
- No database storage required - this is a development-time feature
- Data is ephemeral and exists only during the linting process
- Focus is on systematic error resolution rather than data persistence
