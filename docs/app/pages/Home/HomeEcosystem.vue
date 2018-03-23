<template>
  <md-content md-tag="section" md-theme="default" class="home-ecosystem">
    <div class="page-wrapper">
      <h2 class="home-title md-headline">
        <md-icon>settings</md-icon>
        <span>{{ $t('pages.home.ecosystem') }}</span>
      </h2>

      <p>You can use some of our tools to make the development environment easier, more productive and with a better integration with Vue Material. You can choose between a batteries-included webpack boilerplate, a SSR template for Nuxt.js and a Single HTML file to start with the framework:</p>

      <div class="md-layout md-gutter md-alignment-top-left">
        <div class="md-layout-item md-xsmall-size-100">
          <md-card class="md-primary" md-with-hover @click.native="openLink('https://github.com/vuematerial/webpack')">
            <md-ripple>
              <md-card-header>
                <md-card-header-text>
                  <div class="md-title">Advanced Webpack SPA</div>
                  <div class="md-subhead">Full-featured</div>
                </md-card-header-text>

                <md-card-media>
                  <img src="/assets/boilerplates/webpack.png" alt="Webpack">
                </md-card-media>
              </md-card-header>

              <md-card-content>
                A full-featured boilerplate with Webpack, Dev Server, Hot Reload, ESLint, Unit Testing, Assets Optimization, SCSS preprocessing and more.
              </md-card-content>
            </md-ripple>
          </md-card>
        </div>

        <div class="md-layout-item md-xsmall-size-100">
          <md-card class="md-primary" md-theme="nuxt" md-with-hover @click.native="openLink('https://github.com/vuematerial/nuxtjs')">
            <md-ripple>
              <md-card-header>
                <md-card-header-text>
                  <div class="md-title">Universal App with Nuxt.js</div>
                  <div class="md-subhead">For Server Side Rendering</div>
                </md-card-header-text>

                <md-card-media>
                  <img src="/assets/boilerplates/nuxt.png" alt="Nuxt">
                </md-card-media>
              </md-card-header>

              <md-card-content>
                All the configuration needed to make more enjoyable the development of your application with full support for Server Side Rendering.
              </md-card-content>
            </md-ripple>
          </md-card>
        </div>

        <div class="md-layout-item md-xsmall-size-100">
          <md-card md-with-hover class="flying" @click.native="$router.push('/getting-started')">
            <md-ripple>
              <md-card-header>
                <div class="md-title">Single HTML file</div>
              </md-card-header>

              <md-card-content>
                The simplest Vue Material setup.
              </md-card-content>

              <div class="ecosystem-logo">
                <img src="/assets/boilerplates/html5.png" alt="HTML File">
              </div>
            </md-ripple>
          </md-card>

          <md-card md-with-hover class="flying" @click.native="openLink('https://codesandbox.io/s/github/vuematerial/examples/tree/master/examples/quick-start')">
            <md-ripple>
              <md-card-header>
                <div class="md-title">Codesandbox</div>
              </md-card-header>

              <md-card-content>
                For examples or issues reporting.
              </md-card-content>

              <div class="ecosystem-logo">
                <img src="/assets/boilerplates/codesandbox.png" alt="Codepen">
              </div>
            </md-ripple>
          </md-card>
        </div>
      </div>
    </div>
  </md-content>
</template>

<script>
  export default {
    name: 'HomeEcosystem',
    methods: {
      openLink (link) {
        window.open(link, '_blank')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/components/MdLayout/mixins";

  @import "~vue-material/theme/engine";

  @include md-register-theme("nuxt", (
    primary: #46A37A
  ));

  @import "~vue-material/components/MdCard/theme";

  .home-ecosystem {
    width: calc(100% + 32px);
    background: #f5f5f5;

    .md-layout-item {
      @include md-layout-small {
        margin-top: 16px;
      }
    }

    .md-card {
      + .md-card {
        margin-top: 24px;
      }

      &.flying {
        p {
          margin-right: 15%;
        }

        .ecosystem-logo {
          width: 100px;
          padding: 16px;
          position: absolute;
          right: -20px;
          bottom: -20px;
          z-index: 0;
          overflow: hidden;
          opacity: .38;
          background-color: rgba(#000, .26);
          border-radius: 50%;
        }
      }
    }
  }
</style>
