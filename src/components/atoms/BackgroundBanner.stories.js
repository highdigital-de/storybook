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
      <BackgroundBanner backgroundColor="gray">
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
})
.add('combination with no Background', () => {
  return {
    components: { BackgroundBanner, Container },
    template: `<div>
      <BackgroundBanner backgroundColor="#92c0e9" straightBottom>
        <Container>
          <div style="background: white; width: 100%; height: 400px;"></div>
        </Container>
      </BackgroundBanner>
      <Container>
        <div style="background: black; width: 100%; height: 400px;"></div>
      </Container>
      <BackgroundBanner backgroundColor="#92c0e9" straightTop>
        <Container>
          <div style="background: white; width: 100%; height: 400px;"></div>
        </Container>
      </BackgroundBanner>
      </div>`,
    data: () => ({ }),
  };
})
.add('combination with straight', () => {
  return {
    components: { BackgroundBanner, Container },
    template: `<div>
      <BackgroundBanner backgroundColor="#92c0e9" straightBottom>
        <Container>
          <div style="background: white; width: 100%; height: 400px;"></div>
        </Container>
      </BackgroundBanner>
      <BackgroundBanner backgroundColor="#ffffff" straight>
        <Container>
          <div style="background: black; width: 100%; height: 400px;"></div>
        </Container>
      </BackgroundBanner>
      <BackgroundBanner backgroundColor="#92c0e9" straightTop>
        <Container>
          <div style="background: white; width: 100%; height: 400px;"></div>
        </Container>
      </BackgroundBanner>
      </div>`,
    data: () => ({ }),
  };
})
.add('with background image', () => {
  return {
    components: {BackgroundBanner, Container },
    template: `<BackgroundBanner backgroundImage="/img/products/wellenlinie.svg">
        <Container>
          <div style="background: white; width: 400px; height: 400px;"></div>
        </Container>
      </BackgroundBanner>`,
    data: () => ({ }),
  };
})
.add('with background image and background color', () => {
  return {
    components: {BackgroundBanner, Container },
    template: `<BackgroundBanner backgroundColor="#92c0e9" backgroundImage="/img/products/wellenlinie.svg">
        <Container>
          <div style="background: white; width: 400px; height: 400px;"></div>
        </Container>
      </BackgroundBanner>`,
    data: () => ({ }),
  };
})
.add('three after each other with background image', () => {
  return {
    components: { BackgroundBanner, Container },
    template: `<div>
      <BackgroundBanner backgroundColor="#92c0e9">
        <Container>
          <div style="background: white; width: 100%; height: 400px;"></div>
        </Container>
      </BackgroundBanner>
      <BackgroundBanner backgroundImage="/img/products/wellenlinie.svg">
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