export const model = [
  {
    type: 'title', value: 'Test Title', options: {
      tag: 'h2',
      styles: 'background: #ea6767; color: #fff; text-align: center;'
    }
  },
  {
    type: 'text', value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.', options: {
      styles: 'background: #5353e4; color: #fff; padding: 7px; text-align: center;'
    }
  },
  {
    type: 'img', value: 'https://i2.wp.com/lexusredesign.com/wp-content/uploads/2020/04/2021-Lexus-RX-350-Exterior-1.jpg?ssl=1', options: {
      styles: 'width: 600px; height: 400px; margin: 0 auto;',
      alt: 'lexus RX'
    }

  },
  {
    type: 'textColumn', value: [
      '1 text',
      '2 text',
      '3 text',
      '4 text',
    ], options: {
      styles: 'padding: 1rem; background: #ccc;'
    }
  },
]
