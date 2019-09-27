import { storiesOf } from '@storybook/vue';
import InfoButton from './InfoButton';

storiesOf('InfoButton', module)
  .add('default', () => {
    return {
      components: { InfoButton },
      template: `<div style="background-color: gray; padding: 50px;"><InfoButton :title="title" :text="text" :buttonText="buttonText" /></div>`,
      data: () => ({
        title: "Die Welt braucht dich wach",
        text: "Mache mit einer Tasse koawach die Welt Schluck für Schluck fairer. Dank bester fair gehandelter Zutaten bleibt mehr bei den Bauern in Lateinamerika und mehr Genuss bei dir.",
        buttonText: "Kauf dich wach",
      }),
    };
  });