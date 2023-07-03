/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#333333",
                secondary: "#EC1C24",
                tertiary: "#1B75BB",
            },
        },
    },
    plugins: [],
};