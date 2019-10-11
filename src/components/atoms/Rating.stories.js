import { storiesOf } from '@storybook/vue';
import Rating from './Rating';

storiesOf('Design System|Atoms/Rating', module)
.add('no data', () => {
  return {
    components: { Rating },
    template: `<Rating></Rating>`,
    data: () => ({ }),
  };
})
.add('1 of default', () => {
  return {
    components: { Rating },
    template: `<Rating :score="1"></Rating>`,
    data: () => ({ }),
  };
})
.add('1 of 5', () => {
  return {
    components: { Rating },
    template: `<Rating :score="1" :max="5"></Rating>`,
    data: () => ({ }),
  };
})
.add('5 of 5', () => {
  return {
    components: { Rating },
    template: `<Rating :score="5" :max="5"></Rating>`,
    data: () => ({ }),
  };
})
.add('a) 4 of 7', () => {
  return {
    components: { Rating },
    template: `<Rating :score="4" :max="7"></Rating>`,
    data: () => ({ }),
  };
})
.add('b) -4 of 7', () => {
  return {
    components: { Rating },
    template: `<Rating :score="-4" :max="7"></Rating>`,
    data: () => ({ }),
  };
})
.add('c) -4 of -7', () => {
  return {
    components: { Rating },
    template: `<Rating :score="-4" :max="-7"></Rating>`,
    data: () => ({ }),
  };
})
.add('d) 4 of -7', () => {
  return {
    components: { Rating },
    template: `<Rating :score="4" :max="-7"></Rating>`,
    data: () => ({ }),
  };
});