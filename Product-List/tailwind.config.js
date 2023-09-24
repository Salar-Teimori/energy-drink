/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        ARDESTINE : ['ARDESTINE'],
        Morabba : ['Morabba']
      },
      spacing: {
        '192': '48rem',
        '8xl': '85rem',
      },
      colors: {
        'bg-gray': '#808080',
        'gray-line': '#707070',
        'gray-1': '#111111',
        'gray-3': '#333333',
        'gray-5': '#555555',
        'white-50': 'rgba(255,255,255,0.5)',
        'white-30': 'rgba(255,255,255,0.30)',
        'white-15': 'rgba(255,255,255,0.15)',
        'white-0': 'rgba(255,255,255,0)',
        'orange-1': '#ff3f43',
        'orange-2': '#e7613a',
        'blue-1': '#00E5FF',
        'blue-2': '#009CFF',
        'b-p': '#f0f0f1',

      },
      screens : {
        'mini-l': '1400px',
        'sm-2' : '299px',
        'sm-3' : '399px',
      },
      backgroundImage : {
        'bestSellingPattern' : "url('../src/img/pat-1-2.png')"
      },
      dropShadow: {
        'nhd': '0 0px 30px rgba(0, 0, 0, 0.5)',
        'hd': '0 0px 20px rgba(0, 0, 0, 0.8)',
        'pd': '0 0px 5px rgba(0, 0, 0, 0.3)',
        
      }
    },
  },
  plugins: [],
}