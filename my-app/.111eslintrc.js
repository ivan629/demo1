module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "browser": false
    },
    "extends": [
        "eslint:recommended"
        ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "max-len": ["error", 120],
        "comma-dangle": ["error", "never"],
        "no-multiple-empty-lines": ["error", { "max": 1 }],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars":
            "error",
        "indent": [
            2, 2
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};