import { storiesOf } from '@storybook/vue';
import TopBar from './TopBar';
import Container from './../atoms/Container';
import Hero1 from './../molecules/Hero1';

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
    components: { TopBar, Container, Hero1 },
    template: `
    <div>
    <TopBar />
    <Hero1 />
    <Container>
      <div style="height: 200vh; background: linear-gradient(to bottom right, red , blue);"></div>
    </Container>
    </div>
    `,
    data: () => ({ }),
  };
});