import Vue from 'vue';
import VueMaterial from '../vue-material';

VueMaterial.enableAll(Vue);

Vue.use(VueMaterial.MdTheme, {
  default: {
    primary: 'cyan',
    accent: 'indigo'
  },
  white: {
    primary: 'white',
    accent: 'indigo'
  },
  grey: {
    primary: {
      color: 'grey',
      hue: 300
    },
    accent: 'indigo'
  },
  brown: {
    primary: 'brown',
    accent: 'green'
  },
  indigo: {
    primary: 'indigo',
    accent: 'blue'
  },
  orange: {
    primary: 'orange',
    accent: 'green'
  },
  blue: {
    primary: 'blue',
    accent: 'purple'
  },
  green: {
    primary: 'green',
    accent: 'purple'
  },
  'light-blue': {
    primary: 'light-blue',
    accent: {
      color: 'cyan',
      hue: 'A200'
    }
  },
  teal: {
    primary: 'teal',
    accent: 'orange'
  }
});
