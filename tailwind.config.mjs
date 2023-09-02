/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                primary: ['Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
