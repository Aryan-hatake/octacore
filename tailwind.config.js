
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
module.exports = {
   
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  plugins: [require('@tailwindcss/line-clamp')],
  darkMode: "class",
  theme:{
    extend:{
       animation: {
        aurora: "aurora 60s linear infinite",
      },
       keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
    }
  }
}
}