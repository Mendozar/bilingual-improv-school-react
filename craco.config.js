module.exports = {
  style: {
    postcss: {
      plugins: [
        require('postcss-flexbugs-fixes'),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}