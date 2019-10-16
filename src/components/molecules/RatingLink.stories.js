import { storiesOf } from '@storybook/vue';
import RatingLink from './RatingLink';

storiesOf('Design System|Molecules/RatingLink', module)
.add('default', () => {
  return {
    components: { RatingLink },
    template: `<RatingLink :count="11" :score="4" :max="5"></RatingLink>`,
    data: () => ({ }),
  };
})
.add('no data', () => {
  return {
    components: { RatingLink },
    template: `<RatingLink></RatingLink>`,
    data: () => ({ }),
  };
})
.add('count one', () => {
  return {
    components: { RatingLink },
    template: `<RatingLink :score="3" :count="1"></RatingLink>`,
    data: () => ({ }),
  };
});