<template>
  <div class="page-content single-page">
    <md-whiteframe md-elevation="1" class="main-header">
      <md-toolbar>
        <md-button class="md-icon-button" @click="toggleSidenav">
          <md-icon>menu</md-icon>
        </md-button>

        <div class="md-title">
          <span class="page-title">{{ label }}</span>
        </div>
      </md-toolbar>
    </md-whiteframe>

    <div class="single-page-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../../core/stylesheets/variables.scss';

  .single-page:not(.single-page-home),
  .single-page-content {
    padding: 16px;
  }

  .single-page-home {
    padding-top: 256px;

    .main-header {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 2;
      transition: $swift-ease-out;

      @media (min-width: 1280px) {
        padding-left: 280px;
      }

      .md-toolbar {
        color: #fff;
      }
    }
  }

  .single-page-banner {
    min-height: 256px;
    padding-top: 98px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 3;
    color: #fff !important;

    .md-title:first-child {
      margin-left: 48px;
      font-size: 45px;
      font-weight: 400;
      line-height: 1.3em;
    }
  }

  .single-page-menu-trigger {
    margin: 0;
    position: fixed;
    top: 12px;
    left: 2px;
    z-index: 3;
    color: #fff;
  }

  .md-button.github-button {
    margin: 0;
    position: fixed;
    top: 12px;
    right: 12px;
    z-index: 3;
  }
</style>

<script>
  export default {
    props: ['label'],
    methods: {
      toggleSidenav() {
        this.$root.toggleSidenav();
      }
    }
  };
</script>
