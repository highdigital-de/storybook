import { storiesOf } from '@storybook/vue';
import BackgroundBanner from './BackgroundBanner';
import Container from './Container';

storiesOf('Design System|Atoms/BackgroundBanner', module)
.add('default', () => {
  return {
    components: {BackgroundBanner, Container },
    template: `<BackgroundBanner backgroundColor="#92c0e9">
        <Container>
          <div style="background: white; width: 400px; height: 400px;"></div>
        </Container>
      </BackgroundBanner>`,
    data: () => ({ }),
  };
})
.add('three after each other', () => {
  return {
    components: { BackgroundBanner, Container },
    template: `<div>
      <BackgroundBanner backgroundColor="#92c0e9">
        <Container>
          <div style="background: white; width: 100%; height: 400px;"></div>
        </Container>
      </BackgroundBanner>
      <BackgroundBanner backgroundColor="white">
        <Container>
          <div style="background: black; width: 100%; height: 400px;"></div>
        </Container>
      </BackgroundBanner>
      <BackgroundBanner backgroundColor="#92c0e9">
        <Container>
          <div style="background: white; width: 100%; height: 400px;"></div>
        </Container>
      </BackgroundBanner>
      </div>`,
    data: () => ({ }),
  };
});