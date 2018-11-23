module.exports = {
    // "env": {
    //     "es6": true,
    //     "node": true,
    //     "browser": false
    // },
    // "extends": [
    //     "eslint:recommended"
    //     ],
    // "parserOptions": {
    //     "ecmaFeatures": {
    //         "jsx": true
    //     },
    //     "ecmaVersion": 2018,
    //     "sourceType": "module"
    // },
    // "plugins": [
    //     "react"
    // ],
    // "rules": {
    //     "max-len": ["error", 120],
    //     "comma-dangle": ["error", "never"],
    //     "no-multiple-empty-lines": ["error", { "max": 1 }],
    //     "react/jsx-uses-react": "error",
    //     "react/jsx-uses-vars":
    //         "error",
    //     "indent": [
    //         2, 2
    //     ],
    //     "linebreak-style": [
    //         "error",
    //         "windows"
    //     ],
    //     "quotes": [
    //         "error",
    //         "single"
    //     ],
    //     "semi": [
    //         "error",
    //         "always"
    //     ]
    // }

    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "node": false,
        "mocha": true,
        "browser": true
    },
    "plugins": [
        "react",
        "import",
        "jsx-a11y"
    ],
    "rules": {
        "max-len": ["error", 120],
        "comma-dangle": "off",
        "class-methods-use-this": "off",
        "global-require": "off",
        "object-curly-newline": "off",
        "no-confusing-arrow": "off",
        "no-underscore-dangle": "off",
        "no-use-before-define": [
            "error",
            {
                "functions": false,
                "classes": true
            }
        ],
        "no-constant-condition": ["error", { "checkLoops": false }],
        "no-console": ["error", { "allow": ["warn", "error"] }],
        "no-multiple-empty-lines": ["error", { "max": 1 }],
        "radix": "off",
        "import/no-extraneous-dependencies": "off",
        "import/extensions": "off",
        "react/no-typos": "off",
        "react/require-default-props": "off",
        "react/destructuring-assignment": "off",
        "react/jsx-boolean-value": "off",
        "react/jsx-closing-bracket-location": [
            "error",
            "after-props"
        ],
        "react/jsx-first-prop-new-line": [
            "error",
            "never"
        ],
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "warn"
    }

};