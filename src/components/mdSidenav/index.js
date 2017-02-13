import mdSidenav from './mdSidenav.vue';
import mdSidenavTheme from './mdSidenav.theme';

export default function install(Vue) {
  Vue.component('md-sidenav', mdSidenav);

  Vue.material.styles.push(mdSidenavTheme);
}
