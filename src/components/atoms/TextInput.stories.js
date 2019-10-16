import { storiesOf } from '@storybook/vue';
import TextInput from './TextInput';
import Container from './Container';
import { action } from '@storybook/addon-actions';

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
})
.add('v-model', () => {
  return {
    components: { TextInput, Container },
    template: `
    <div style="background-color: #c5ddf3;">
      <Container>
        <div class="columns">
          <div class="column">
            <TextInput label="dein name" v-model="name" />
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