module.exports = {
  content: ["./src/**/*.{html,ts}"],
  purge: {
    enabled:true,
    content: ['./src/**/*.html', './src/**/*.ts'],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
