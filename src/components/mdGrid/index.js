import mdGrid from './mdGrid.vue';
import mdGridMedia from './mdGridMedia.vue';
import mdGridContent from './mdGridContent.vue';
import mdGridTheme from './mdGrid.theme';

export default function install(Vue) {
  Vue.component('md-grid', mdGrid);
  Vue.component('md-grid-media', mdGridMedia);
  Vue.component('md-grid-content', mdGridContent);

  Vue.material.styles.push(mdGridTheme);
}
