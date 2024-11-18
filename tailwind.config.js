/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-white": "#f1f2fd",
        "custom-blue": "rgba(63, 140, 255, 0.63)",
        "custom-primary": "#F4F9FD",
        "custom-second": "#6da2f139",
        "tw-text-opacity": "#5694f0",
      },
      screens: {
        // updating from chatGPT
        "small-phone": { max: "375px" }, // Điện thoại trung bình (iPhone X)
        "large-phone": { max: "414px" }, // Điện thoại lớn (iPhone 6/7/8 Plus)
        "small-tablet": { max: "840px" },
        "large-tablet": { max: "1024px" },
        "small-laptop": { min: "1280px" },
        "large-desktop": { min: "1440px" }, // Desktop lớn (màn hình lớn)
      },
      boxShadow: {
        custom:
          "0px 100px 80px 0px rgba(0, 0, 0, 0.07), 0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.05), 0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.04), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.04), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.03), 0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.02)",
      },

      columnsGrid: "500px minmax(0, 1fr)",

      keyframes: {
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(10px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(-10px)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s ease-in-out",
        slideOut: "slideOut 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
