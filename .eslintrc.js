module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": ["plugin:react/recommended", "standard-with-typescript", "plugin:storybook/recommended", "plugin:react-hooks/recommended"],
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "plugins": ["react", "react-hooks"],
  "rules": {
    'react/jsx-indent': [2, 4],
    "react/jsx-filename-extension": [2, {
      "extensions": [".js", ".jsx", ".tsx"]
    }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/no-unresolved": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/display-name": "off",
    "@typescript-eslint/await-thenable": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/prefer-nullish-coalescing" : "off"
  },
  globals: {
    "__IS_DEV__": true
  },
  overrides: [{
    files: ["**/src/**/*.test.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-non-null-assertion": "off"
    }
  }]
};