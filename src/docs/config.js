import Vue from 'vue';
import VueMaterial from '../vue-material';

VueMaterial.enableAll(Vue);

Vue.use(VueMaterial.MdTheme, {
  default: {
    primary: {
      color: 'green',
      hue: 800
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
  'bottom-bar': {
    primary: 'teal',
    accent: 'orange'
  }
});
