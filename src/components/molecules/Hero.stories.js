import { storiesOf } from '@storybook/vue';
import Hero from './Hero';

storiesOf('Design System|Molecules/Hero', module)
.add('default with', () => {
  return {
    components: { Hero },
    template: `<Hero :items="this.items" />`,
    data: () => ({
      items: [
        {
          title: "Die Welt braucht dich wach",
          text: "Mache mit einer Tasse koawach die Welt Schluck für Schluck fairer. Dank bester fair gehandelter Zutaten bleibt mehr bei den",
          buttonText: "Kauf dich wach",
          background: "#eceff1",
          image: "/img/cacao-bg.jpg"
        },
        {
          title: "Anderer Titel",
          buttonText: "Klick mal hier",
          text: "Ganz anderer Text. Ganz anderer Text. Ganz anderer Text. Ganz anderer Text. Ganz anderer Text. Ganz anderer Text. ",
          image: "/img/cacao-bg.jpg"
        },
        {
          title: "Die Welt braucht dich wach",
          buttonText: "Kauf dich wach",
          text: "Mache mit einer Tasse koawach die Welt Schluck für Schluck fairer. Dank bester fair gehandelter Zutaten bleibt mehr bei den Bauern in Lateinamerika und mehr Genuss bei dir.",
          background: "#fce4ec",
          image: "/img/cacao-bg.jpg"
        }
      ],
    }),
  };
})
.add('no text', () => {
  return {
    components: { Hero },
    template: `<Hero :items="this.items" />`,
    data: () => ({
      items: [
        {
          background: "#eceff1",
          image: "/img/cacao-bg.jpg"
        },
        {
          title: "Anderer Titel",
          buttonText: "Klick mal hier",
          text: "Ganz anderer Text. Ganz anderer Text. Ganz anderer Text. Ganz anderer Text. Ganz anderer Text. Ganz anderer Text. ",
          image: "/img/cacao-bg.jpg"
        },
        {
          title: "Die Welt braucht dich wach",
          buttonText: "Kauf dich wach",
          text: "Mache mit einer Tasse koawach die Welt Schluck für Schluck fairer. Dank bester fair gehandelter Zutaten bleibt mehr bei den Bauern in Lateinamerika und mehr Genuss bei dir.",
          background: "#fce4ec",
          image: "/img/cacao-bg.jpg"
        }
      ],
    }),
  };
})
.add('no text no image no border', () => {
  return {
    components: { Hero },
    template: `<Hero noBorder :items="this.items" />`,
    data: () => ({
      items: [
        {
          background: "#eceff1"
        }
      ],
    }),
  };
});