module.exports = {
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
        mocha: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: 'babel-eslint',
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        indent: ['error', 4, {
            SwitchCase: 1,
            ArrayExpression: 1,
            ObjectExpression: 1,
        }],
        'max-len': 'off',
        'one-var': 'off',
        'no-bitwise': 'off',
        'no-continue': 'off',
        'no-plusplus': 'off',
        'prefer-destructuring': 'off',
        'no-new': 'off',
        'no-unused-vars': 'error',

        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'] }],
        'react/destructuring-assignment': 'off',
        'react/sort-comp': 'off',
        'react/button-has-type': 'off',
        'react/require-default-props': ['warn', {
            forbidDefaultForRequired: true,
        }],

        'import/extensions': 'off',
    },
};
