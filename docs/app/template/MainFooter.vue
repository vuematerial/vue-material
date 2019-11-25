<template>
  <footer class="main-footer">
    <div class="main-footer-container">
      <div class="main-footer-section" center>
        <ul class="md-list">
          <h4>About</h4>
          <p>Vue Material is simple, lightweight and built exactly according to the Google Material Design specs.</p>
        </ul>
        <ul class="md-list">
          <h4>Links</h4>
          <li>
            <router-link to="/license">{{ $t('pages.license.title') }}</router-link>
          </li>
          <li>
            <router-link to="/premium-themes">Premium Themes</router-link>
          </li>
          <li>
            <router-link to="/getting-started">Docs</router-link>
          </li>
        </ul>

        <ul class="md-list">
          <h4>More information</h4>
          <li>
            <router-link to="/about">{{ $t('aboutMaterial') }}</router-link>
          </li>
          <li>
            <a href="https://discordapp.com/invite/vuematerial" target="_blank">Discord</a>
          </li>

          <li>
            <a href="https://github.com/vuematerial/vue-material" target="_blank">GitHub</a>
          </li>

          <!-- <li>
            <router-link to="">Open Collective</router-link>
          </li> -->

        </ul>
      </div>


      <div class="main-footer-section">
        <logo-vue-material />

        <a href="https://github.com/marcosmoura" target="_blank">
          {{ $t('madeWith') }} <span class="red">❤</span> {{ $t('by') }} Marcos Moura.
        </a>
        <a href="https://www.creative-tim.com/?ref=vuematerial.io" target="_blank" class="ml-0">Sponsored by Creative Tim</a>
      </div>
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
  @import "~vue-material/theme/engine";

  .md-list{
    display: inline-table;
    margin: 10px 0;
    max-width: 180px;
    + .md-list{
      margin-left: 40px;
    }
    li{
      margin: 5px 0;
    }
    h4{
      margin: 0 0 10px;
      padding-bottom: 5px;
      // border-bottom: 1px solid #dedede;
    }

  }
  .main-footer {
    padding: 20px 16px;
    margin-left: 230px;
    position: relative;

    z-index: 4;
    background-color: md-get-palette-color(grey, 200);

   @include md-layout-small {
      .md-list{
        display: block;
        margin-left: 0;
      }
    }
    @include md-layout-small {
      flex-direction: column;
      justify-content: space-around;
      margin-left: 0;
      .md-list{
        display: block;
        max-width: unset;
      }
    }
    p{
      margin: 0;
    }
  }

  div.main-footer-container {
    max-width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: .3s $md-transition-default-timing;
    transition-property: max-width;

    @include md-layout-medium {
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
        &.ml-0{
          margin-left: 0px;
        }
      }
    }
  }

  .main-footer-section {
    position: relative;

    + .main-footer-section {
      text-align: center;
      @include md-layout-xsmall {
        &:after {
          width: 60px;
          height: 1px;
          position: absolute;
          top: 0;
          left: 50%;
          z-index: 1;
          transform: translate(-50%, -30px);
          background-color: md-get-palette-color(grey, 400);
          content: " ";
        }
      }

      a {
        @include md-layout-xsmall {
          color: md-get-palette-color(grey, 800);
        }
      }
    }
  }

  .red {
    display: inline-block;
    color: md-get-palette-color(red, 500);
    transition: .3s $md-transition-default-timing;
  }

  .md-svg-loader {
    display: block;
    z-index: 3000;
    position: relative;
    width: 15%;
    margin: auto;
    text-align: center;
}


</style>
