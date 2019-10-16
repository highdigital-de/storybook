import { storiesOf } from '@storybook/vue';
import TextInput from './TextInput';
import Container from './Container';

storiesOf('Design System|Atoms/TextInput', module)
.add('default', () => {
  return {
    components: { TextInput },
    template: `<div style="background-color: #c5ddf3;">
    <TextInput />
    </div>`,
    data: () => ({ }),
  };
})
.add('with label in columns', () => {
  return {
    components: { TextInput, Container },
    template: `
    <div style="background-color: #c5ddf3;">
      <Container>
        <div class="columns">
          <div class="column">
            <TextInput label="dein name" />
          </div>
          <div class="column">
            <TextInput label="zusammenfassung deines feedbacks" />
          </div>
        </div>
      </Container>
    </div>`,
    data: () => ({ }),
  };
});