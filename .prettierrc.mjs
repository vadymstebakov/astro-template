/** @type {import("prettier").Config} */
export default {
    printWidth: 120,
    proseWrap: 'never',
    arrowParens: 'always',
    endOfLine: 'lf',
    trailingComma: 'es5',
    tabWidth: 4,
    singleQuote: true,
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
        {
            files: ['**/*.css', '**/*.html', '**/*.svg'],
            options: {
                singleQuote: false,
            },
        },
    ],
};
