/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-pattern": "url('./assets/herobg.png')",
            },
            colors: {
                primary: "#050816",
            },
            fontFamily: {
                monserrat: "'Montserrat', sans-serif",
            },
            maxWidth: {
                notebook: "1440px",
            },
        },
    },
    plugins: [],
};
