const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html', './src/**/*.{ts,tsx}'],
    theme: {
        screens: {
            xs: '475px',
            ...defaultTheme.screens,
        },
    },
    plugins: [],
}
