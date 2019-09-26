import { storiesOf } from '@storybook/vue';

import Tile from './Tile';

storiesOf('Tile', module)
  .add('default', () => {
    return {
      components: { Tile },
      template: `<div :style="this.style"><Tile image="/img/cacao-bg.jpg" heading="kakaopulver" cta="jetzt entdecken" /></div>`,
      data: () => ({
        style: {
          width: '505px'
        }
      }),
    };
  })
  .add('highlight', () => {
    return {
      components: { Tile },
      template: `<div :style="this.style"><Tile highlight image="/img/cacao-bg.jpg" heading="kakaopulver" cta="jetzt entdecken" /></div>`,
      data: () => ({
        style: {
          width: '505px'
        }
      }),
    };
  })
  .add('no image', () => {
    return {
      components: { Tile },
      template: `<div :style="this.style"><Tile heading="kakaopulver" cta="jetzt entdecken" /></div>`,
      data: () => ({
        style: {
          width: '505px'
        }
      }),
    };
  })
  .add('no image heading and cta', () => {
    return {
      components: { Tile },
      template: `<div :style="this.style"><Tile /></div>`,
      data: () => ({
        style: {
          width: '505px'
        }
      }),
    };
  });