module.exports = {
    "env": {
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2017
    },
    "rules": {
        "curly": [
            "error",
            "all"
        ],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-console": "off",
        "quotes": "off",
        "semi": [
            "error",
            "always"
        ]
    },
    "overrides": [
        {
            "files": [
                "test/*.js"
            ],
            "env": {
                "es6": true,
                "node": true,
                "mocha": true
            },
        }
    ]
};