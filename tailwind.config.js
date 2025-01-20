/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{jsx,tsx,ts}'],
    theme: {
        colors: {
            blue: '#1fb6ff',
            purple: '#7e5bef',
            pink: '#ff49db',
            orange: '#ff7849',
            green: '#13ce66',
            yellow: '#ffc82c',
            'gray-dark': '#273444',
            gray: '#8492a6',
            'gray-light': '#d3dce6',
            white: '#ffffff',
            'gray-hover': '#25252b',
            'gray-background': '#F5F5F5',
            'gray-card-background': '#ececec',
            'gray-menu-background': '#161618'
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif']
        },
        extend: {
            spacing: {
                '8xl': '96rem',
                '9xl': '128rem'
            },
            borderRadius: {
                '4xl': '2rem'
            }
        }
    }
}
