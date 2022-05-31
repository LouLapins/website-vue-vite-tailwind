module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'body': ['Nunito', 'sans-serif'],
            'display': ['Fira Sans', 'sans-serif']
        },
        extend: {
            backgroundImage: {
                'waves-img': "url('/wavy-background.svg')"
            }
        },
    },
    plugins: [],
}