import image from './assets/image.png';
import {css} from './utils';
import {TitleBlock, ImageBlock, TextBlock, TextColumnBlock, ImageTextBlock} from './classes/blocks';

const text = `
Крутые видео и уроки по JavaScript тут: <a href="https://youtube.com/c/VladilenMinin" target="_blank">Владилен Минин</a>. Тут ты найдешь исчерпывающую информацию по любым аспектам языка, любым фреймворкам, такие как: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt и многое другое. Присоединяйся!
`;

export const model = [
  new TitleBlock('Конструктор сайтов на чистом JavaScript!', {
    tag: 'h2',
    styles: css({
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center'
    })
  }),
  new ImageBlock( image, {
    styles: css({
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    }),
    alt: 'my image',
    imageStyles: 'width: 500px; height: auto;'
  }),
  new TextColumnBlock( [
    'Приложение на чистом JavaScript, без использования библиотек',
    'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
    'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
  ], {
    styles: css({
      padding: '2rem 0',
      color: '#fff',
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      'font-weight': 'bold'
    }),
  }),
  new ImageTextBlock( image, {
    styles: css({
      padding: '1rem',
      display: 'flex',
      'justify-content': 'space-around',
      'flex-flow': 'nowrap',
      'align-items': 'center'
    }),
    alt: 'my image',
    imageStyles: 'width: 500px; height: auto; margin-right: 1rem;',
    text: text,
    textStyles: 'box-sizing: border-box;margin: 0; background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1rem;text-align: center;font-weight: bold;font-size: 1.3rem;border-radius: .5rem;'
  }),
  new TextBlock(text, {
    styles: css({
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      'font-weight': 'bold',
      padding: '1rem',
    })
  })
];


