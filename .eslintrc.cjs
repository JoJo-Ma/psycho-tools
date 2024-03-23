module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      "airbnb",
      "airbnb/hooks",
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
      "indent": [
        "error",
        4,
        {
            "SwitchCase": 1
        }
    ],
    // "no-restricted-imports": [
    //     "error",
    //     {
    //         "patterns": [
    //             ".*"
    //         ]
    //     }
    // ],
    "react/prefer-stateless-function": "off",
    "react/jsx-indent": "off",
    "no-continue": "off",
    "no-unused-vars": "off",
    "react/jsx-indent-props": "off",
    "class-methods-use-this": "off",
    "prefer-destructuring": "off",
    "react/destructuring-assignment": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": [
        2,
        {
            "extensions": [
                ".jsx",
                ".tsx"
            ]
        }
    ],
    "react/no-array-index-key": "off",
    "react/no-danger": "off",
    "no-alert": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "camelcase": "off",
    "no-restricted-properties": "off",
    "react/no-find-dom-node": "off",
    "no-param-reassign": "off",
    "no-console": "off",
    "react/prop-types": "off",
    "linebreak-style": "off",
    "arrow-body-style": "off",
    "no-bitwise": "off",
    "no-plusplus": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "no-shadow": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "react/display-name": "off",
    "consistent-return": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "no-underscore-dangle": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
    },
  }
  