import Vue from 'vue';
import VueMaterial from '../vue-material';

for (let component in VueMaterial) {
  if (component === 'MdTheme') {
    Vue.use(VueMaterial[component], {
      'bottom-bar': {
        primary: 'teal'
      }
    });
  } else {
    Vue.use(VueMaterial[component]);
  }
}
