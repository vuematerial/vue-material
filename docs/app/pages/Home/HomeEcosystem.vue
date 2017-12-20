<template>
  <md-content md-tag="section" md-theme="default" class="home-ecosystem">
    <h2 class="home-title md-headline">
      <md-icon>settings</md-icon>
      {{ $t('pages.home.ecosystem') }}
    </h2>
    <div class="page-wrapper">
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-small-size-100">
          <md-card md-with-hover class="md-elevation-2 md-primary full-height" md-theme="blue-card" @click.native="openLink('https://github.com/vuematerial/webpack')">
            <md-ripple>
              <md-card-content>
                <div class="content">
                  <div class="md-title">Advanced Webpack SPA</div>
                  <p>A full-featured Webpack + Vue Material setup with hot-reload, lint-on-save, unit testing, scss preprocessing & css extraction.</p>
                </div>
                <div class="image">
                  <img src="/assets/boilerplates/webpack-advanced.png" alt="webpack">
                </div>
              </md-card-content>
            </md-ripple>
          </md-card>
        </div>
        <div class="md-layout-item md-small-size-100">
          <md-card md-with-hover class="md-elevation-2 md-primary full-height" md-theme="green-card" @click.native="openLink('https://github.com/vuematerial/nuxtjs')">
            <md-ripple>
              <md-card-content>
                <div class="content">
                  <div class="md-title">Nuxt.js Universal</div>
                  <p>Nuxt.js is a framework for creating Universal Vue.js Applications. All the configuration needed to make your development of a Vue.js Application Server Rendered more enjoyable.</p>
                </div>
                <div class="image">
                  <img src="/assets/boilerplates/nuxt.png" alt="nuxtjs">
                </div>
              </md-card-content>
            </md-ripple>
          </md-card>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-30">
          <md-card md-with-hover class="md-elevation-2 flying" @click.native="$router.push('/getting-started')">
            <md-ripple>
              <md-card-content>
                <div class="content">
                  <div class="md-title">Single HTML file</div>
                  <p>The simplest possible Vue Material setup in a single HTML file. But without SCSS or ES7.</p>
                </div>
                <img src="/assets/boilerplates/html.png" alt="html">
              </md-card-content>
            </md-ripple>
          </md-card>
          <md-card md-with-hover class="md-elevation-2 flying" @click.native="openLink('CODEPEN')">
            <md-ripple>
              <md-card-content>
                <div class="content">
                  <div class="md-title">Codepen for prototyping</div>
                  <p>For fast prototyping, examples or issues reports is best to use codepen.</p>
                </div>
                <img src="/assets/boilerplates/codepen.svg" alt="codepen">
              </md-card-content>
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

  @include md-register-theme("blue-card", (
    primary: md-get-palette-color(blue, A200)
  ));
  @include md-register-theme("green-card", (
    primary: md-get-palette-color(teal, 500)
  ));

  @import "~vue-material/base/theme";
  @import "~vue-material/components/MdCard/theme";

  .home-ecosystem {
    width: calc(100% + 32px);
    padding-bottom: 28px;
    margin: 0 -16px;
    background: #f5f5f5;
    .md-layout-item {
      @include md-layout-small {
        margin-top: 16px;
      }
    }
    .md-card {
      position: relative;
      overflow: hidden;
      background: #fff;
      margin-bottom: 16px;
      .md-card-content {
        display: flex;
        padding: 16px;
        height: 100%;
      }
      &.full-height {
        height: 100%;
      }
      .content {
        z-index: 1;
        flex-grow: 1;
      }
      .image {
        width: 100%;
        overflow: hidden;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          max-height: 160px;
        }
      }
      &.flying {
        p {
          margin-right: 80px;
        }
        img {
          position: absolute;
          bottom: -40px;
          right: -40px;
          max-height: 160px;
          z-index: 0;
          opacity: .7;
        }
      }
    }
  }
</style>
