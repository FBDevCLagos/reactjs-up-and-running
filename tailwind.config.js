module.exports = {
  purge: [],
  theme: {
    extend: {
      spacing: {
        fw: '1440px',
      },
      height: {
        '72': '18rem',
        '112': '28rem',
      },
      maxHeight: {
        '96': '24rem',
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      light: '#f5f5f5',
      'light-200': '#f0f0f0',
    }),
  },
  variants: {},
  plugins: [],
};
