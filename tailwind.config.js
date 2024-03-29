module.exports = {
  important: true,
  content: [
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      "2xl": '1536px',
      "2_3xl": '1700px',
      "2_5xl": '1919px',
      "3xl": '1920px',
      "4xl": '2560px',
    },
  },
  extend: {
    backgroundImage: {
      'check': "url('/public/')",
    }
  },
  plugins: [],
}