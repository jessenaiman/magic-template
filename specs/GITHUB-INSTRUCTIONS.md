# GitHub Instructions: Code Review and Optimization Process

## Overview
This document provides comprehensive instructions for conducting the home page code review and optimization project using the available tool ecosystem.

## Project Context

- **Repository**: magic-template
- **Branch**: 001-home-page-code-review
- **Goal**: Zero-error landing page with lazy loading and Next.js transitions

## Tool Categories and Usage

### 1. Documentation Validation Tools

#### Context7 Tools

- `mcp_context7_resolve-library-id` - Resolve library names to Context7 IDs
- `mcp_context7_get-library-docs` - Fetch up-to-date documentation

**Example Usage:**

```bash
# Resolve Next.js library ID
mcp_context7_resolve-library-id libraryName="nextjs"

# Get Next.js transitions documentation
mcp_context7_get-library-docs context7CompatibleLibraryID="/vercel/next.js" topic="transitions"
```

#### DeepWiki Tools

- `mcp_deepwiki_ask_question` - Ask questions about GitHub repositories
- `mcp_deepwiki_read_wiki_contents` - Read repository documentation
- `mcp_deepwiki_read_wiki_structure` - Get documentation structure

#### Web Search

- `vscode-websearchforcopilot_webSearch` - Search the web for up-to-date information

### 2. File System Analysis Tools

#### MCP Filesystem Tools

- `mcp_filesystem_list_directory` - List directory contents
- `mcp_filesystem_directory_tree` - Get recursive tree view
- `mcp_filesystem_search_files` - Search for files
- `mcp_filesystem_read_text_file` - Read file contents

**Example Usage:**

```bash
# Verify component structure
mcp_filesystem_list_directory path="/home/adam/Dev/magic-template/src/components"

# Get full project tree
mcp_filesystem_directory_tree path="/home/adam/Dev/magic-template"
```

#### Standard File Tools

- `read_file` - Read file contents with line ranges
- `grep_search` - Search text across files
- `file_search` - Find files by pattern

### 3. Component Management Tools

#### MagicUI Tools

- `mcp_magicuidesig_getUIComponents` - List all Magic UI components
- `mcp_magicuidesig_getAnimations` - Get animation components
- `mcp_magicuidesig_getBackgrounds` - Get background components
- `mcp_magicuidesig_getButtons` - Get button components

#### Shadcn Tools

- `mcp_shadcn_list_items_in_registries` - List available components
- `mcp_shadcn_search_items_in_registries` - Search components
- `mcp_shadcn_get_add_command_for_items` - Get installation commands

**Reinstall Command:**

```bash
npx shadcn@latest add [component-name] --overwrite
```

### 4. Memory Management Tools
Store and retrieve important information:

- `mcp_memory_create_entities` - Create knowledge entities
- `mcp_memory_add_observations` - Add information to entities
- `mcp_memory_search_nodes` - Find stored information
- `mcp_memory_read_graph` - View knowledge graph

**Example Usage:**
```bash
# Retrieve code standards
mcp_memory_search_nodes query="Code Standard"
```

### 5. Browser Automation Tools
For testing and validation:

- `mcp_playwright_browser_navigate` - Navigate to pages
- `mcp_playwright_browser_snapshot` - Take accessibility snapshots
- `mcp_playwright_browser_take_screenshot` - Capture screenshots
- `mcp_playwright_browser_wait_for` - Wait for conditions

### 6. Development Tools
- `run_in_terminal` - Execute commands
- `get_errors` - Check for compilation errors
- `manage_todo_list` - Track progress

## Code Review Process

### Phase 1: Documentation Validation
1. Use Context7 tools to validate Next.js, MagicUI, Shadcn, Animate-UI, and ReactBits documentation
2. Store findings in memory using `mcp_memory_create_entities`
3. Verify current package versions and best practices

### Phase 2: Structure Analysis
1. Use filesystem tools to map current project structure
2. Identify misplaced files, incorrect naming, and architecture violations
3. Document findings for review

### Phase 3: Component Review
1. Use MagicUI and Shadcn tools to verify component usage
2. Check for duplications and inconsistencies
3. Validate against current documentation

### Phase 4: Implementation
1. Fix identified issues using appropriate tools
2. Test changes with browser automation tools
3. Verify structure changes with filesystem tools

### Phase 5: Testing
1. Rewrite Playwright tests for home page load and scroll
2. Ensure zero errors in console and network
3. Validate lazy loading and transitions

## Code Standards Reference

### Next.js Standards
- Use current released packages
- Implement transitions with Next.js built-in features
- Use `next/dynamic` for lazy loading
- CLI installation only

### Component Standards
- MagicUI: `/src/components/magicui`
- Shadcn: `/src/components/ui`
- Animate-UI: `/src/components/animate-ui`
- ReactBits: `/src/components/[UpperCase].tsx`

### Broken Component Solutions
1. **Reinstall and overwrite**: `npx shadcn@latest add [component] --overwrite`
2. **Use alternative component**: Find similar component in registry
3. **Ask for user input**: When solutions above fail

## Memory Storage Guidelines

### Entity Types
- **Code Standard**: Framework/library standards
- **Tool Usage**: How to use specific tools
- **Memory Management**: Information storage/retrieval

### Storage Commands
```bash
# Create entity
mcp_memory_create_entities entities=[{"name": "EntityName", "entityType": "Type", "observations": ["info"]}]

# Add observations
mcp_memory_add_observations observations=[{"entityName": "EntityName", "contents": ["new info"]}]

# Create relations
mcp_memory_create_relations relations=[{"from": "Entity1", "to": "Entity2", "relationType": "uses"}]
```

### Retrieval Commands
```bash
# Search entities
mcp_memory_search_nodes query="search term"

# Get specific entities
mcp_memory_open_nodes names=["Entity1", "Entity2"]

# View full graph
mcp_memory_read_graph
```

## Error Handling

### Tool Failures
- Retry with different parameters
- Check tool documentation
- Use alternative tools when available

### Component Issues
- Verify component exists in registry
- Check for version conflicts
- Use reinstall command for Shadcn components

### Documentation Conflicts
- Cross-reference multiple sources
- Use most recent documentation
- Store discrepancies in memory for review

## Progress Tracking

Use `manage_todo_list` to track progress:

```bash
manage_todo_list operation="write" todoList=[
  {"id": 1, "title": "Validate Next.js documentation", "status": "in_progress"},
  {"id": 2, "title": "Map project structure", "status": "not-started"}
]
```

## File Organization

### Code Review Files
Create markdown files for each completed task:
- `code-review-001-filesystem-analysis.md`
- `code-review-002-component-validation.md`
- `code-review-003-testing-updates.md`

### Reference Structure
```
specs/
├── 001-home-page-code-review/
│   ├── spec.md
│   └── code-review-*.md
└── GITHUB-INSTRUCTIONS.md
```

## Validation Checklist

- [ ] Documentation validated for all packages
- [ ] Project structure mapped and verified
- [ ] Components checked for duplications
- [ ] Code standards enforced
- [ ] Tests rewritten and passing
- [ ] Landing page loads without errors
- [ ] Lazy loading implemented
- [ ] Next.js transitions used
- [ ] All changes documented

## Emergency Procedures

### Tool Unavailable
1. Use alternative tools from same category
2. Document limitation in code review files
3. Continue with available tools

### Component Breaking Changes
1. Check documentation for breaking changes
2. Test in isolated environment
3. Update memory with new information

### Documentation Conflicts
1. Note conflicts in code review files
2. Use most authoritative source
3. Update spec if needed

---

*This document is referenced in the specification at: `specs/001-home-page-code-review/spec.md`*

*Last Updated: September 12, 2025*</content>
<parameter name="filePath">/home/adam/Dev/magic-template/specs/GITHUB-INSTRUCTIONS.md
