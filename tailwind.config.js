const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        screens: {
            'xxs': '320px',
            'xs': '480px',
            ...defaultTheme.screens,
        },
        extend: {
            fontFamily: {
                'barlow': ['Barlow', 'sans-serif'],
                'inter': ['Inter', 'sans-serif']
            },
            colors: {
                ligth: '#E5FAFA',
                primary: '#00D0CD',
                secondary: '#000563',
                red: '#B33A3A',
                cancel: '#D95F52',
                orange: '#FFC061',
                grey: '#29546B',
            }
        },
    },
    plugins: []
};
