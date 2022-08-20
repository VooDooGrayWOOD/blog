/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'nav-green': '#0a171a',
                'white-rabbit': '#d2d2d2'
            }
        }
    },
    plugins: [require('@tailwindcss/forms')]
}
