/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                rotate: "rotation 10s linear 0s infinite",
                "rotate-reverse": "rotation 10s linear 0s infinite reverse",
            },
            keyframes: {
                rotation: {
                    from: {
                        transform: "translateX(0)",
                    },
                    to: {
                        transform: "translateX(-50%)",
                    },
                },
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: ["dark"],
};
