
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif'],
      },
      minWidth: {
        'button': '6rem',
        'menu': '12rem'
      },
      width: {
        'content': '40rem',
        'trackinfo': '15rem'
      },
      colors: {
        'juukebox-blue': '#2400FF',
        'juukebox-blue-hover': 'rgb(66, 30, 255)',
        'juukebox-blue-active': 'rgb(6, 0, 225)',
        'juukebox-pink': '#FD00A7',
        'juukebox-pink-hover': 'rgb(255, 30, 197)',
        'juukebox-pink-active': 'rgb(223, 0, 137)',
      }
    },
  },
  plugins: [],
}
