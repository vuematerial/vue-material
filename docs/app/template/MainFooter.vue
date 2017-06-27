<template>
  <footer class="main-footer" v-if="!isSplash">
    <div class="main-footer-section">
      <router-link to="/about">About Vue Material</router-link>
      <a href="https://github.com/vuematerial/vue-material-experiments/blob/master/LICENSE" target="_blank">License</a>
    </div>

    <a href="https://github.com/marcosmoura" target="_blank">Made with <span class="red">❤</span> by Marcos Moura</a>
  </footer>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'MainFooter',
    computed: {
      ...mapState({
        isSplash: 'splashPage'
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/components/MdLayout/mixins";
  @import "~vue-material/theme/factory";

  .main-footer {
    min-height: 96px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 3;
    background-color: md-get-palette-color(grey, 200);

    a {
      color: #000;

      + a {
        margin-left: 24px;
      }
    }
  }

  .red {
    color: md-get-palette-color(red, 500);
  }
</style>
