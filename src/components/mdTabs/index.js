import mdTabs from './mdTabs.vue';
import mdTab from './mdTab.vue';
import mdTabsTheme from './mdTabs.theme';

export default function install(Vue) {
  Vue.component('md-tabs', mdTabs);
  Vue.component('md-tab', mdTab);

  Vue.material.styles.push(mdTabsTheme);
}
