module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        quotes: [2, 'single', {allowTemplateLiterals: true}],
        'no-var': [2],
        'dot-notation': [2],
        'prefer-const': [2],
        'no-dupe-keys': [2],
        'no-return-await': [2],
        'prefer-template': [2],
        'prefer-spread': [2],
        'prefer-rest-params': [2],
        'prefer-object-spread': [2],
        'object-shorthand': [2, 'always', {avoidQuotes: true, avoidExplicitReturnArrows: true}],
        'prefer-destructuring': [2, { array: true, object: true }, { enforceForRenamedProperties: false }],
        'no-unused-vars': [2, { 'ignoreRestSiblings': true }],
        'no-console': [process.env.NODE_ENV === 'production' ? 2 : 1],
        'no-debugger': [process.env.NODE_ENV === 'production' ? 2 : 1],
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
