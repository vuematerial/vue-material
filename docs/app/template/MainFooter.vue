<template>
  <footer class="main-footer">
    <div class="main-footer-section">
      <router-link to="/about">About Vue Material</router-link>
      <a href="https://github.com/vuematerial/vue-material-experiments/blob/master/LICENSE" target="_blank">License</a>
    </div>

    <div class="main-footer-section">
      <a href="https://github.com/marcosmoura" target="_blank">Made with <span class="red">❤</span> by Marcos Moura</a>
    </div>
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
    z-index: 4;
    background-color: md-get-palette-color(grey, 200);

    @include md-layout-xsmall {
      min-height: 128px;
      flex-direction: column;
      justify-content: space-around;
    }

    a {
      color: #000;

      &:hover {
        text-decoration: none;
        border-bottom: 1px solid currentColor;

        .red {
          transform: scale(1.4);
          color: md-get-palette-color(red, 700);
        }
      }

      + a {
        margin-left: 32px;
      }
    }
  }

  .main-footer-section {
    position: relative;

    @include md-layout-xsmall {
      + .main-footer-section a {
        color: md-get-palette-color(grey, 800);
      }
    }
  }

  .red {
    display: inline-block;
    color: md-get-palette-color(red, 500);
    transition: .3s $md-transition-default-timing;
  }
</style>
