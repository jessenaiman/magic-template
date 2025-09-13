# Component Validation Contract

## Overview
Contract for validating component libraries used in the project.

## Request Schema
```json
{
  "library": "string (Next.js|MagicUI|Shadcn|Animate-UI|ReactBits)",
  "action": "validate|install|reinstall",
  "component": "string (optional)",
  "overwrite": "boolean (optional)"
}
```

## Response Schema
```json
{
  "status": "success|error",
  "library": "string",
  "validated": "boolean",
  "version": "string",
  "issues": ["string"],
  "recommendations": ["string"]
}
```

## Validation Rules
- Library must be in approved list
- MCP tools must be used for documentation validation
- CLI installation required for all packages
- Version conflicts must be resolved

## Error Codes
- INVALID_LIBRARY: Library not in approved list
- DOC_VALIDATION_FAILED: MCP tool validation failed
- VERSION_CONFLICT: Package version incompatible
- CLI_INSTALL_FAILED: Installation not via CLI</content>
<parameter name="filePath">/home/adam/Dev/magic-template/specs/001-home-page-code-review/contracts/component-validation.json
