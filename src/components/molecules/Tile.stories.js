import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';

import Tile from './Tile';

storiesOf('Design System|Molecules/Tile', module)
  .addDecorator(withKnobs)
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
  .add('highlight different color', () => {
    return {
      components: { Tile },
      template: `<div :style="this.style"><Tile highlight highlightColor="#333333" image="/img/cacao-bg.jpg" heading="kakaopulver" cta="jetzt entdecken" /></div>`,
      data: () => ({
        style: {
          width: '505px'
        }
      }),
    };
  })
  .add('highlight knobs', () => {
    return {
      components: { Tile },
      props: {
        highlightColor: {
          default: text("Highlight Color", "#1561ac")
        }
      },
      template: `<div :style="this.style"><Tile highlight :highlightColor="highlightColor" image="/img/cacao-bg.jpg" heading="kakaopulver" cta="jetzt entdecken" /></div>`,
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