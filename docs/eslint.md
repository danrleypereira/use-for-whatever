# ESLint Configuration

This document explains the ESLint configuration used in the Forge UI project.

## Configuration Files

The project uses ESLint v9 with the new flat config format:

- `eslint.config.mjs` - The main ESLint configuration file

## ESLint v9 Flat Config

ESLint v9 introduces a new flat configuration format that replaces the previous `.eslintrc.*` files. The flat config offers several advantages:

- Better performance
- Simpler and more predictable configuration
- Direct JavaScript/ES modules syntax (no JSON limitations)
- Easier extension and override management

## Configuration Structure

Our ESLint configuration includes:

1. **Base Settings**:

   - ECMAScript version
   - Source type (module)
   - Environment settings

2. **Plugins and Extensions**:

   - TypeScript
   - React
   - Prettier
   - Import rules

3. **Rules**:
   - TypeScript-specific rules
   - React best practices
   - Import ordering and organization
   - Error prevention rules

## Running ESLint

You can run ESLint using the following npm scripts:

```bash
# Check files for linting issues
pnpm lint

# Fix automatically fixable issues
pnpm lint:fix
```

## Integration with Git Hooks

ESLint is integrated with Husky and lint-staged to run before each commit:

- `.husky/pre-commit` - The Git hook script
- `lint-staged` configuration in `package.json`

This ensures that all committed code follows the project's code style and quality standards.

## Customizing Rules

If you need to modify ESLint rules, edit the `eslint.config.mjs` file. The configuration uses a flat array format where each object defines a set of rules for specific files.

Example of adding a custom rule:

```javascript
// In eslint.config.mjs
export default [
  // Other configurations...
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      // Your custom rule here
      "no-console": "warn",
    },
  },
];
```

## Troubleshooting

If you encounter issues with ESLint:

1. **Incorrect ESLint Version**:

   - Ensure you're using ESLint v9+ for the flat config format

2. **Plugin Compatibility**:

   - Verify all plugins are compatible with ESLint v9

3. **Integration Issues**:
   - Check that your IDE/editor is using the correct ESLint config file
