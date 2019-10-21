import { storiesOf } from '@storybook/vue';
import TextInput2 from './TextInput2';
import Container from './Container';
import { action } from '@storybook/addon-actions';

storiesOf('Design System|Atoms/TextInput2', module)
.add('default', () => {
  return {
    components: { TextInput2 },
    template: `<div style="background-color: #c5ddf3;">
    <TextInput2 />
    </div>`,
    data: () => ({ }),
  };
})
.add('with label in columns', () => {
  return {
    components: { TextInput2, Container },
    template: `
    <div style="background-color: #c5ddf3;">
      <Container>
        <div class="columns">
          <div class="column">
            <TextInput2 label="dein name" />
          </div>
          <div class="column">
            <TextInput2 label="zusammenfassung deines feedbacks" />
          </div>
        </div>
      </Container>
    </div>`,
    data: () => ({ }),
  };
})
.add('with label in columns limited', () => {
  return {
    components: { TextInput2, Container },
    template: `
    <div style="background-color: #c5ddf3;">
      <Container>
        <div class="columns">
          <div class="column">
            <TextInput2 limited label="dein name" />
          </div>
          <div class="column">
            <TextInput2 label="zusammenfassung deines feedbacks" />
          </div>
        </div>
      </Container>
    </div>`,
    data: () => ({ }),
  };
})
.add('v-model', () => {
  return {
    components: { TextInput2, Container },
    template: `
    <div style="background-color: #c5ddf3;">
      <Container>
        <div class="columns">
          <div class="column">
            <TextInput2 label="dein name" v-model="name" />
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