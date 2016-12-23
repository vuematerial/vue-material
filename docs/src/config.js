import Vue from 'vue';
import VueMaterial from '../../src';

Vue.use(VueMaterial);

Vue.material.registerTheme({
  default: {
    primary: 'blue',
    accent: 'pink'
  },
  blue: {
    primary: 'blue',
    accent: 'pink'
  },
  indigo: {
    primary: 'indigo',
    accent: 'pink'
  },
  brown: {
    primary: 'brown',
    accent: 'green'
  },
  purple: {
    primary: 'purple',
    accent: 'blue'
  },
  orange: {
    primary: 'orange',
    accent: 'purple'
  },
  green: {
    primary: 'green',
    accent: 'pink'
  },
  'light-blue': {
    primary: 'light-blue',
    accent: 'yellow'
  },
  teal: {
    primary: 'teal',
    accent: 'orange'
  },
  'blue-grey': {
    primary: 'blue-grey',
    accent: 'blue'
  },
  cyan: {
    primary: 'cyan',
    accent: 'pink'
  },
  red: {
    primary: 'red',
    accent: 'pink'
  },
  white: {
    primary: 'white',
    accent: 'blue'
  },
  grey: {
    primary: {
      color: 'grey',
      hue: 300
    },
    accent: 'indigo'
  }
});
