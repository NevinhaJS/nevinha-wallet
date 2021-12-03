module.exports = {
    env: {
        browser: true,
        node: true,
    },
    parser: 'babel-eslint',
    extends: [
        'airbnb',
        'plugin:prettier/recommended',
        'prettier/react',
        'prettier/standard',
        'plugin:jsx-a11y/recommended',
    ],
    plugins: ['jsx-a11y'],
    rules: {
        'no-console': 1,
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        ],
        'import/no-extraneous-dependencies': [1, { devDependencies: true }],
    },
}