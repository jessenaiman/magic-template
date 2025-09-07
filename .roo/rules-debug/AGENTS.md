# Project Debugging Rules (Non-Obvious Only)

- **Component restrictions**: DO NOT MODIFY `/components/[ui|magicui|animate-ui]`
- **Test failures**: Some tests may fail if GitHub API is unavailable (stars fetching)
- **Comprehensive test runner**: Generates `TEST_EXECUTION_REPORT.md` with categorized failures
- **Custom Playwright reporter**: Use `scripts/playwright-detailed-reporter.js` for detailed test failure categorization
- **Design system**: Uses shadcn/ui with CSS variables - theme controlled via `components.json`
- **Dynamic navigation**: Generated from `app/navigation.config.ts`
- **Preview system**: Design pages require `DesignPageProvider` and `PreviewProvider` context wrappers