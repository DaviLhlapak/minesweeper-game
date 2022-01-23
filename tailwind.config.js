module.exports = {
    mode: 'jit',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        fontFamily: {
            sans: ['JetBrains Mono', 'monospace'],
        },
        extend: {},
    },
    plugins: [],
}
