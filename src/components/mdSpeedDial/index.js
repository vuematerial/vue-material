import mdSpeedDial from './mdSpeedDial.vue';
import mdSpeedDialTheme from './mdSpeedDial.theme';

export default function install(Vue) {
  Vue.component('md-speed-dial', mdSpeedDial);

  Vue.material.styles.push(mdSpeedDialTheme);
}
