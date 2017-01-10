import mdSpeedDial from './mdSpeedDial.vue';
import mdSpeedDialTheme from './mdSpeedDial.theme';

export default function install(Vue) {
  Vue.component('md-speed-dial', Vue.extend(mdSpeedDial));

  Vue.material.styles.push(mdSpeedDialTheme);
}
