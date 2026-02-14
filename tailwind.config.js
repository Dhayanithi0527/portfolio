/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "#646cff", // Example primary color
                secondary: "#535bf2",
            },
            animation: {
                "spin-slow": "spin 8s linear infinite",
                "gradient-x": "gradient-x 15s ease infinite",
                "gradient-y": "gradient-y 15s ease infinite",
                "grid-flow": "grid-flow 20s linear infinite",
            },
            keyframes: {
                "gradient-x": {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
                "gradient-y": {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "center top",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "center bottom",
                    },
                },
                "grid-flow": {
                    "0%": { transform: "translateY(0)" },
                    "100%": { transform: "translateY(50px)" }
                }
            },
        },
    },
    plugins: [],
}
