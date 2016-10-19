import mdCard from './mdCard.vue';
import mdCardMedia from './mdCardMedia.vue';
import mdCardMediaCover from './mdCardMediaCover.vue';
import mdCardMediaActions from './mdCardMediaActions.vue';
import mdCardHeader from './mdCardHeader.vue';
import mdCardHeaderText from './mdCardHeaderText.vue';
import mdCardContent from './mdCardContent.vue';
import mdCardActions from './mdCardActions.vue';
import mdCardArea from './mdCardArea.vue';
import mdCardExpand from './mdCardExpand.vue';
import mdCardTheme from './mdCard.theme';

export default function install(Vue) {
  Vue.component('md-card', Vue.extend(mdCard));
  Vue.component('md-card-media', Vue.extend(mdCardMedia));
  Vue.component('md-card-media-cover', Vue.extend(mdCardMediaCover));
  Vue.component('md-card-media-actions', Vue.extend(mdCardMediaActions));
  Vue.component('md-card-header', Vue.extend(mdCardHeader));
  Vue.component('md-card-header-text', Vue.extend(mdCardHeaderText));
  Vue.component('md-card-content', Vue.extend(mdCardContent));
  Vue.component('md-card-actions', Vue.extend(mdCardActions));
  Vue.component('md-card-area', Vue.extend(mdCardArea));
  Vue.component('md-card-expand', Vue.extend(mdCardExpand));

  Vue.material.styles.push(mdCardTheme);
}
