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
  Vue.component('md-card', mdCard);
  Vue.component('md-card-media', mdCardMedia);
  Vue.component('md-card-media-cover', mdCardMediaCover);
  Vue.component('md-card-media-actions', mdCardMediaActions);
  Vue.component('md-card-header', mdCardHeader);
  Vue.component('md-card-header-text', mdCardHeaderText);
  Vue.component('md-card-content', mdCardContent);
  Vue.component('md-card-actions', mdCardActions);
  Vue.component('md-card-area', mdCardArea);
  Vue.component('md-card-expand', mdCardExpand);

  Vue.material.styles.push(mdCardTheme);
}
