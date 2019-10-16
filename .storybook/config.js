import { configure } from '@storybook/vue';
import { addParameters } from '@storybook/vue';

addParameters({
});

const req = require.context('../src', true, /\.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);