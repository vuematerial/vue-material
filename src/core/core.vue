<script>
  import Vue from 'vue';
  import CoreTheme from './stylesheets/core.theme';
  import clickaway from './directives/clickaway';

  window.VueMaterial = {
    styles: [CoreTheme]
  };

  Vue.directive('onClickaway', clickaway);
</script>

<style lang="sass">
  /* Common mixins */
  @import './stylesheets/utils/mixins';


  /* Commons */
  @import './stylesheets/utils/commons';


  /* Variables */
  @import './stylesheets/variables';


  /* Core Styles */
  @import './stylesheets/structure';
  @import './stylesheets/type';
</style>
