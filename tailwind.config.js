/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brandPrimary: '#B2FF00',
                brandSecondry: '#00C994'
              },
            spacing: {
                '30': '6rem'
              },
            fontFamily: {
                'ploni-regular': ['Ploni-Regular', 'sans'],
                'ploni-u-light': ['Ploni-U-Light', 'sans'],
                'ploni-light': ['Ploni-Light', 'sans'],
                'ploni-medium': ['Ploni-Medium', 'sans'],
                'ploni-d-bold': ['Ploni-D-Bold', 'sans'],
                'ploni-bold': ['Ploni-Bold', 'sans'],
                'ploni-u-bold': ['Ploni-U-Bold', 'sans'],
                'ploni-black': ['Ploni-Black', 'sans']
            },
        },
    },
    plugins: [
        require('tailwindcss-rtl'),
    ],
}
