module.exports = {
    "extends": ["airbnb-base"],
    "env": {
      "node": true,
      "mocha": true,
      "es6": true,
      "mongo": true
    },
    "rules": {
        "no-unused-vars": "warn",
        "no-var" : "off",
        "func-names": "off",
        "consistent-return": "off",
        "prefer-rest-params": "off",
        "radix": "off",
        "prefer-spread": "off",
        "no-plusplus": "off",
        "camelcase": "off",
        "no-use-before-define": "off",
        "no-lonely-if": "off",
        "no-restricted-syntax": "off",
        "vars-on-top": "off",
        "no-param-reassign": "off",
        "max-len": "off",
        "guard-for-in": "off",
        "no-underscore-dangle": "off",
        "no-bitwise": "off",
        "no-mixed-operators": "off",
        "object-shorthand": "off",
        //reassess till here ====
        "block-spacing": [
          "error",
          "always"
      ],
      "brace-style": [
          "error",
          "stroustrup"
      ],
      "comma-spacing": [
          "error",
          {
              "before": false,
              "after": true
          }
      ],
      "comma-style": [
          "error",
          "last"
      ],
      "computed-property-spacing": [
          "error",
          "never"
      ],
      "curly": [
          "error",
          "all"
      ],
      "eol-last": "off",
      "func-call-spacing": [
          "error",
          "never"
      ],
      "indent": [
          "error",
          4
      ],
      "key-spacing": [
          "error",
          {
              "beforeColon": false,
              "afterColon": true
          }
      ],
      "keyword-spacing": [
          "error",
          {
              "before": true,
              "after": true
          }
      ],
      "lines-between-class-members": [
          "error",
          "always"
      ],
      "no-multi-spaces": [
          "error"
      ],
      "no-trailing-spaces": [
          "error",
          {
              "ignoreComments": true
          }
      ],
      "no-whitespace-before-property": [
          "error"
      ],
      "object-curly-newline": [
          "error",
          {
              "multiline": true,
              "consistent": true
          }
      ],
      "object-property-newline": [
          "error",
          {
              "allowAllPropertiesOnSameLine": true
          }
      ],
      "semi": [
          "error",
          "always"
      ],
      "semi-style": [
          "error",
          "last"
      ],
      "space-before-blocks": [
          "error",
          "always"
      ],
      "space-before-function-paren": [
          "error",
          "never"
      ],
      "space-in-parens": [
          "error",
          "never"
      ],
      "space-infix-ops": [
          "error"
      ],
      "space-unary-ops": [
          "error",
          {
              "words": true,
              "nonwords": false
          }
      ],
      "switch-colon-spacing": [
          "error"
      ],
      "unicode-bom": [
          "error",
          "never"
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "no-useless-escape": "off",
      "quotes": "off",
      "valid-jsdoc": [
          "error",
          {
              "requireReturn": false
          }
      ],
      "require-jsdoc": [
          "error",
          {
              "require": {
                  "FunctionDeclaration": true,
                  "MethodDefinition": true,
                  "ClassDeclaration": true,
                  "ArrowFunctionExpression": true,
                  "FunctionExpression": false
              }
          }
      ],
      "no-console": [
          "error"
      ],
      "dot-notation": [
          "error"
      ],
      "eqeqeq": [
          "error",
          "always"
      ],
      "no-alert": [
          "error"
      ],
      "no-caller": [
          "error"
      ],
      "no-eval": [
          "error"
      ],
      "no-extend-native": [
          "error"
      ],
      "no-iterator": [
          "error"
      ],
      "no-loop-func": [
          "error"
      ],
      "no-shadow": [
          "error"
      ]
    },
       "overrides": [
        {
            "files": [
                "test/**/*.js",
                "webpack.config.js"
            ],
            "env": {
                "es6": true,
                "node": true
            },
            rules: {
                "require-jsdoc": "off",
            }
        }
    ]
  };