/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                'primary': ['DM Sans', 'sans-serif'],
                'secondary': ['Poppins', 'sans-serif'],
                'cursive': ['Righteous', 'cursive']
            },
        }
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#ecf9a2",
                    "secondary": "#f20e8f",
                    "accent": "#0b0ba5",
                    "neutral": "#2b263b",
                    "base-100": "#4d4d4d",
                    "info": "#8295f8",
                    "success": "#158a76",
                    "warning": "#976f02",
                    "error": "#f03d3d",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
}
