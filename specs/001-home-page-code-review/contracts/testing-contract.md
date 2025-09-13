# Testing Contract

## Overview
Contract for Playwright E2E testing of the home page.

## Test Scenarios

### Home Page Load Test
**Endpoint**: `GET /`
**Expected Response**:
- Status: 200
- Content-Type: text/html
- No console errors
- No network failures
- All components render

### Scroll to Bottom Test
**Action**: Scroll from top to bottom of page
**Expected Behavior**:
- Smooth scrolling
- All components load lazily
- No performance degradation
- Memory usage remains stable

## Test Contract
```json
{
  "testSuite": "home-page",
  "tests": [
    {
      "name": "page-load",
      "type": "e2e",
      "browser": "chromium",
      "viewport": {"width": 1280, "height": 720},
      "assertions": [
        "no-console-errors",
        "no-network-failures",
        "components-rendered"
      ]
    },
    {
      "name": "scroll-to-bottom",
      "type": "e2e",
      "browser": "chromium",
      "actions": ["scroll-to-bottom"],
      "assertions": [
        "smooth-scrolling",
        "lazy-loading-triggered",
        "memory-stable"
      ]
    }
  ]
}
```

## Validation Rules
- Only home page load and scroll tests allowed
- All other tests must be removed
- Console and network monitoring required
- Performance metrics must be captured</content>
<parameter name="filePath">/home/adam/Dev/magic-template/specs/001-home-page-code-review/contracts/testing-contract.md
