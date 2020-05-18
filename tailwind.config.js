module.exports = {
  purge: [],
  theme: {
    extend: {
      spacing: {
        fw: '1440px',
      },
      height: {
        '72': '18rem',
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#000000',
      secondary: '#00baa6',
      light: '#f5f5f5',
      'light-200': '#f0f0f0',
      'light-300': '#e8e8e8',
      'off-white': '#f9f9f9',
    }),
  },
  variants: {},
  plugins: [],
}
