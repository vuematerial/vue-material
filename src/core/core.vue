<script>
  import CoreTheme from './stylesheets/core.theme';

  window.VueMaterial = {
    styles: [CoreTheme]
  };
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
