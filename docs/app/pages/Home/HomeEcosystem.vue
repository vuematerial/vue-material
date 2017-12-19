<template>
  <md-content md-tag="section" md-theme="default" class="home-ecosystem">
    <h2 class="home-title md-headline">
      <md-icon>settings</md-icon>
      {{ $t('pages.home.ecosystem') }}
    </h2>
    <div class="page-wrapper">
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-small-size-100">
          <md-card md-with-hover class="md-elevation-2 full-height">
            <div class="content">
              <div class="md-title">Advanced Webpack SPA</div>
              <p>A full-featured Webpack + Vue Material setup with hot-reload, lint-on-save, unit testing & css extraction.</p>
            </div>
            <div class="image">
              <img src="/assets/boilerplates/webpack-advanced.png" alt="webpack">
            </div>
          </md-card>
        </div>
        <div class="md-layout-item md-small-size-100">
          <md-card md-with-hover class="md-elevation-2 full-height">
            <div class="content">
              <div class="md-title">NuxtJs Universal</div>
              <p>Nuxt.js is a framework for creating Universal Vue.js Applications. All the configuration needed to make your development of a Vue.js Application Server Rendered more enjoyable.</p>
            </div>
            <div class="image">
              <img src="/assets/boilerplates/nuxt.png" alt="nuxtjs">
            </div>
          </md-card>
        </div>
        <div class="md-layout-item md-small-size-100">
          <md-card md-with-hover class="md-elevation-2 flying">
            <div class="content">
              <div class="md-title">Single HTML file</div>
              <p>The simplest possible Vue Material setup in a single HTML file. But without SCSS or ES7.</p>
            </div>
            <img src="/assets/boilerplates/html.png" alt="">
          </md-card>
          <md-card md-with-hover class="md-elevation-2 flying">
            <div class="content">
              <div class="md-title">Codepen for prototyping</div>
              <p>For fast prototyping, examples or issues reports is best to use codepen.</p>
            </div>
            <img src="/assets/boilerplates/codepen.svg" alt="">
          </md-card>
        </div>
      </div>
    </div>
  </md-content>
</template>

<script>
  export default {
    name: 'HomeEcosystem'
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/components/MdLayout/mixins";

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
      padding: 16px;
      display: flex;
      margin-bottom: 16px;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      background: #fff;
      &.full-height {
        height: 100%;
      }
      .content {
        z-index: 1;
        flex-grow: 1;
      }
      .image {
        padding: 16px;
        margin: 16px -16px -16px -16px;
        max-height: 200px;
        overflow: hidden;
        background: #f8f8f8;
        text-align: center;
        img {
          max-height: 180px;
        }
      }
      &.flying {
        img {
          position: absolute;
          bottom: -40px;
          right: -40px;
          max-height: 160px;
          z-index: 0;
        }
      }
    }
  }
</style>
