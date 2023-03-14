# Astro Template

Should use this command to create the project. [Read more about it](https://docs.astro.build/en/install/auto/#starter-templates).

```
npm create astro@latest -- --template vadymstebakov/astro-template
```

## ⚙️ Setup

1. Install [NodeJS](https://nodejs.org/en/);
    > Require [Node.js](https://nodejs.org) version >= 16.12.0.
2. Install the NPM dependencies by running `npm ci`;
3. If it makes sense, you should create `.env.local` file for secret keys (look at `env.local.example` file), if the project has secret variables. Read more about [environment variables](https://docs.astro.build/en/guides/environment-variables/);

## 🧞 Commands

-   Run the local dev server at `localhost:3000`:
    ```
    npm run dev
    ```
-   Build your production site to `./dist/`:
    ```
    npm run build
    ```
-   Preview your build locally, before deploying:
    ```
    npm run preview
    ```
-   Run CLI commands like `astro add`, `astro check`:
    ```
    npm run astro ...
    ```
-   Check your JavaScript/TypeScript for errors and warnings:
    ```
    npm run lint:eslint
    ```
-   Check your CSS for errors and warnings:
    ```
    npm run lint:stylelint
    ```
-   Check your code formatting:
    ```
    npm run lint:prettier
    ```
-   Fix your code formatting:
    ```
    npm run lint:prettier:fix
    ```
-   Check your code all together:
    ```
    npm run lint
    ```
-   Install husky:
    ```
    npm run prepare
    ```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
└── public/
    ├── /images
    ├── apple-touch-icon.png /* An icon 180x180 for iPhone or iPad */
    ├── favicon.ico /* An icon 32x32 for Safari */
    └── favicon.svg /* An icon for the rest browsers */
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   └── index.css
│   ├── constants.ts
│   ├── types.ts
│   └── utils.ts
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

`src/layouts/` you can put common layouts, grids etc.

`src/components/` you can put common components.

`src/constants.ts` you can write common constants.

`src/types.ts` you can write common types.

`src/utils.ts` you can write common utils, helpers functions.

Any static assets, like images, fonts can be placed in the `public/` directory.

## 🚧 Troubleshooting

-   Husky hooks can ignore because it's not set as executable. You should use [this solve](https://github.com/typicode/husky/issues/1177#issuecomment-1212831091);

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
