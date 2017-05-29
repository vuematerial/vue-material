import mdRatingBar from './mdRatingBar.vue';
import mdRatingBarTheme from './mdRatingBar.theme';

export default function install(Vue) {
  Vue.component('md-rating-bar', mdRatingBar);

  Vue.material.styles.push(mdRatingBarTheme);
}
