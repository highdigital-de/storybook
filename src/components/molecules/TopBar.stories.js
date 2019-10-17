import { storiesOf } from '@storybook/vue';
import TopBar from './TopBar';
import Container from './../atoms/Container';

storiesOf('Design System|Molecules/TopBar', module)
.add('default', () => {
  return {
    components: { TopBar },
    template: `<TopBar />`,
    data: () => ({ }),
  };
})
.add('scroll behaviour', () => {
  return {
    components: { TopBar, Container },
    template: `
    <div>
    <TopBar />
    <Container>
      <div style="height: 200vh; background: linear-gradient(to bottom right, red , blue);"></div>
    </Container>
    </div>
    `,
    data: () => ({ }),
  };
});