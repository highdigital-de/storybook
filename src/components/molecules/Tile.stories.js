import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';

import Tile from './Tile';
import Container from './../atoms/Container';
import Column from './../molecules/Column';
import Columns from './../molecules/Columns';

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
  .add('long text', () => {
    return {
      components: { Tile },
      template: `<div :style="this.style"><Tile image="/img/cacao-bg.jpg" heading="kakaopulver kakaopulver kakaopulver kakaopulver kakaopulver kakaopulver kakaopulver kakaopulver " cta="jetzt entdecken" /></div>`,
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
  })
  .add('no max-width', () => {
    return {
      components: { Tile },
      template: `<div :style="this.style"><Tile image="/img/cacao-bg.jpg" heading="kakaopulver" cta="jetzt entdecken" /></div>`,
      data: () => ({
        style: {
        }
      }),
    };
  },
    {
      notes: 'Use different viewports'
    })
  .add('high', () => {
    return {
      components: { Tile },
      template: `<div :style="this.style"><Tile high image="/img/cacao-bg.jpg" heading="kakaopulver" cta="jetzt entdecken" /></div>`,
      data: () => ({
        style: {
          width: '505px'
        }
      }),
    };
  })
  .add('wide', () => {
    return {
      components: { Tile },
      template: `<div :style="this.style"><Tile wide image="/img/cacao-bg.jpg" heading="kakaopulver" cta="jetzt entdecken" /></div>`,
      data: () => ({
        style: {
        }
      }),
    };
  });