module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--unnamed-color-303f60)',
        secondary: 'var(--unnamed-color-43afff)',
        white: 'var(--unnamed-color-ffffff)',
        'navy-blue':'#4D618E',
        'btn-blue':'#43AFFF33',
        'pale-white':'#EDF6FF',
        'textClr':'#303F60',
        'inputClr':'#E8E8E833',
        'modalbgclr':'#A9AFBC',
        'incorrect':"#FF333380",
        'incorrect-red':"#FF0000",
        'avatarBg':'#D9EFFF',
      },
      height:{
        '90':'90%',
      },
      width:{
        '95':'95%',
        '55':'55%'
      },
      outline: {
        secondary: '2px solid #43afff',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
