/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
        "./src/*.{ts,tsx}",
        "./*.html",
    ],
    theme: {
        extend: {
            screens: {
                "3xl": "1850px"
            }
      },
    },
    plugins: [require("flowbite/plugin")],
    darkMode: "class",
};