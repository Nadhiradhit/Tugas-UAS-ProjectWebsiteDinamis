/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container : {
        center: true,
        padding: '16px',
    },
    containerFluid : {
        center: true,
        padding: '0',
        margin: '0',
    },
    extend: {
      width: {
        'lg1' : '60%'
      },
      fontFamily : { 
          JakartaSans : 'Plus Jakarta Sans',
          Poppins : 'Poppins',
      },
      spacing : {
        '3xl': '3.5rem'
      },
      colors : {
        Background : '#F5F5F5',
        Footer : '#272343',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

