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

-   `src/ui` contains some shared components without business logic like buttons, inputs, selects, titles, texts etc. Each component should consist of that files:
    -   `<Component>.astro` - the component file itself;
    -   `<Component>.module.css` - the styles of component file (optional);
    -   `types.ts` - the types of component file (optional);
    -   `constants.ts` - the constants of component file (optional);
    -   `utils.ts` - the utils of component (optional);
-   `src/components` a less independent entity consisting of `src/ui` and own components. For example the card component, it can be used anywhere. It can have little business logic. Each component should consist of that files:
    -   `<Component>.astro` - the component file itself;
    -   `<Component>.module.css` - the styles of component (optional);
    -   `types.ts` - the types of component (optional);
    -   `constants.ts` - the constants of component (optional);
    -   `utils.ts` - the utils of component (optional);
    -   `components` - the component dir of components (optional). Should consist of like `src/components`;
-   `src/modules` contains some independent features, that features have own area of responsibility. It should consist of `src/components`, `src/ui` and own components. Each module should consist of that files:
    -   `<Component>.astro` - the component of module file itself;
    -   `<Component>.module.css` - the styles of module (optional);
    -   `types.ts` - the types of module (optional);
    -   `constants.ts` - the constants of module (optional);
    -   `utils.ts` - the utils of module (optional);
    -   `components` - the component dir of module (optional). Should consist of like `src/components`;
-   `src/layouts` contains some layouts. It should use like wrapper. Each layout should consist of that files:
    -   `<Component>.astro` - the layout file itself;
    -   `<Component>.module.css` - the styles of layout (optional);
    -   `types.ts` - the types of layout (optional);
    -   `constants.ts` - the constants of layout (optional);
    -   `utils.ts` - the utils of layout (optional);
    -   `components` - the component dir of components (optional);
-   `src/pages` should consist of contains `src/modules` and just render them. Each page should consist of `.astro` or `.md` files. Each page is exposed as a route based on its file name;
-   `src/utils.ts` contains global utils;
-   `src/constants.ts` contains global constants;
-   `src/types.ts` contains global types;
-   `src/styles` contains global style files;

Any static assets, like images, fonts can be placed in the `public/` directory.

## 🚧 Troubleshooting

-   Husky hooks can ignore because it's not set as executable. You should use [this solve](https://github.com/typicode/husky/issues/1177#issuecomment-1212831091);

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
