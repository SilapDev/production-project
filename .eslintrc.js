module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ["./tsconfig.json"]
    },
    "plugins": [
        "react"
    ],
    "rules": {
       'react/jsx-indent': [2, 4],
       "react/jsx-filename-extension": [2, {"extensions": [".js", ".jsx", ".tsx"]}],
       "@typescript-eslint/explicit-function-return-type": "off",
       "import/no-unresolved": "off",
       "@typescript-eslint/no-unused-vars": "warn",
       "react/react-in-jsx-scope": "off",
       "@typescript-eslint/no-floating-promises" : "off",
       "@typescript-eslint/strict-boolean-expressions" : "off" 
    },
    globals: {
        "__IS_DEV__" : true,
    }
}
