/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'nav-green': '#0a171a'
            }
        }
    },
    plugins: [require('@tailwindcss/forms')]
}
