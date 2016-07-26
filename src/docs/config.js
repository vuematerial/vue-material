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
    primary: 'indigo'
  },
  orange: {
    primary: 'orange'
  },
  blue: {
    primary: 'blue'
  },
  'bottom-bar': {
    primary: 'teal'
  }
});
