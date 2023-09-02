/** @type {import("eslint").Linter.Config} */
module.exports = {
    ignorePatterns: ['node_modules/', 'dist/'],
    extends: ['plugin:astro/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'ES2020',
    },
    rules: {
        'arrow-body-style': ['error', 'always'],
        'no-nested-ternary': ['error'],
        eqeqeq: ['error', 'always'],
        'no-alert': ['error'],
        'no-unneeded-ternary': ['error'],
        'require-await': ['error'],
        'no-tabs': ['error'],
        'max-len': [
            'error',
            {
                code: 120,
                ignoreUrls: true,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-loop-func': ['error'],
        'comma-style': ['error', 'last'],
        'space-before-blocks': ['error', 'always'],
        'no-mixed-spaces-and-tabs': ['error'],
        'no-unused-vars': [
            'error',
            {
                args: 'all',
                argsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
        'no-extra-semi': ['error'],
        'no-console': ['warn'],
        'no-debugger': ['error'],
        'block-spacing': ['error', 'always'],
        'max-nested-callbacks': [
            'error',
            {
                max: 7,
            },
        ],
        'no-trailing-spaces': ['error'],
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'no-var': ['error'],
        'no-multi-spaces': ['error'],
        'no-control-regex': ['off'],
    },
    overrides: [
        {
            files: ['*.astro'],
            parser: 'astro-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro'],
            },
            rules: {
                'astro/no-conflict-set-directives': 'error',
                'astro/no-unused-define-vars-in-style': 'error',
                'astro/no-deprecated-astro-fetchcontent': 'error',
                'astro/no-unused-css-selector': 'error',
                'astro/prefer-object-class-list': 'error',
                'astro/prefer-split-class-list': 'error',
                'astro/no-set-text-directive': 'error',
            },
        },
    ],
};
