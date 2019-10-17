import { storiesOf } from '@storybook/vue';
import TextareaInput from './TextareaInput';
import Container from './Container';
import { action } from '@storybook/addon-actions';

storiesOf('Design System|Atoms/TextareaInput', module)
.add('default', () => {
  return {
    components: { TextareaInput, Container },
    template: `<div style="background-color: #c5ddf3;">
    <Container>
      <TextareaInput />
    </Container>
    </div>`,
    data: () => ({ }),
  };
})
.add('with label in columns', () => {
  return {
    components: { TextareaInput, Container },
    template: `
    <div style="background-color: #c5ddf3;">
      <Container>
        <div class="columns">
          <div class="column">
            <TextareaInput label="dein name" />
          </div>
          <div class="column">
            <TextareaInput label="zusammenfassung deines feedbacks" />
          </div>
        </div>
      </Container>
    </div>`,
    data: () => ({ }),
  };
})
.add('v-model', () => {
  return {
    components: { TextareaInput, Container },
    template: `
    <div style="background-color: #c5ddf3;">
      <Container>
        <div class="columns">
          <div class="column">
            <TextareaInput label="dein name" v-model="name" />
          </div>
        </div>
      </Container>
    </div>`,
    data: () => ({
      name: ''
    }),
    watch: {
      name() {
        action('v-model:name')(this.name)
      }
    }
  };
});