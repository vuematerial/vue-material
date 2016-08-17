import Vue from 'vue';
import VueMaterial from '../vue-material';

VueMaterial.enableAll(Vue);

Vue.use(VueMaterial.MdTheme, {
  default: {
    primary: {
      color: 'blue',
      hue: '600'
    },
    accent: {
      color: 'red',
      hue: 'A200'
    }
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
  'light-blue': {
    primary: 'light-blue',
    accent: {
      color: 'cyan',
      hue: 'A200'
    }
  },
  'teal': {
    primary: 'teal',
    accent: 'orange'
  }
});
