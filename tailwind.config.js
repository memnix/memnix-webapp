/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        slider: "marquee 25s linear infinite",
        slider2: "marquee2 20s linear infinite reverse",
      },
      fontFamily: {
        sans: ["Syne", "Nunito"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        memnix: {
          primary: "#E9AF98",
          secondary: "#405CA0",
          accent: "#AD6E9E",
          neutral: "#40404A",
          "base-200": "#f1f1f1",
          "base-100": "#FCFCFC",
          info: "#3A73D4",
          success: "#72E9C1",
          warning: "#F6D73C",
          error: "#E83B55",
          "primary-content": "#4d1600",
          "success-content": "#102742",
          "error-content": "#000000",
        },
      },
      {
        dark: {
          primary: "#E9AF98",
          secondary: "#405CA0",
          accent: "#AD6E9E",
          neutral: "#40404A",
          "base-100": "#2A303C",
          "base-200": "#242933",
          info: "#3A73D4",
          success: "#72E9C1",
          warning: "#F6D73C",
          error: "#E83B55",
          "primary-content": "#4d1600",
          "success-content": "#102742",
          "error-content": "#000000",
        },
      },
      {
        neobrutalism: {
          "color-scheme": "light",
          fontFamily:
            "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
          primary: "#7f72ff",
          secondary: "#fad180",
          accent: "#7be6cd",
          neutral: "#b4adf9",
          "neutral-content": "#ffee00",
          "base-100": "#f8ebd1",
          "--rounded-box": "0",
          "--rounded-btn": "0",
          "--rounded-badge": "0",
          "--tab-radius": "0",
        },
      },
    ],
  },
};
