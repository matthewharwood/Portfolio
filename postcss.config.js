module.exports = {
  purge: [
    './dist/**/*.html',
  ],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production' ? [require('cssnano')] : []
  ]
};
