<template>
  <div class="demo-page">
    <md-toolbar class="main-header">
      <md-button class="md-icon-button" @click="toggleSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <div class="md-title">
        <span class="page-title">{{ label }}</span>
      </div>
    </md-toolbar>

    <div class="page-content">
      <md-tabs md-elevation="2" class="page-tabs">
        <md-tab md-label="Examples">
          <slot name="examples"></slot>
        </md-tab>

        <md-tab md-label="Code">
          <slot name="code"></slot>
        </md-tab>

        <md-tab md-label="API">
          <slot name="api"></slot>
        </md-tab>
      </md-tabs>

      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../../core/stylesheets/variables.scss';

  .demo-page {
    display: flex;
    flex-flow: column;
  }

  .page-tabs {
    flex: 1;

    > .md-whiteframe > .md-tabs-navigation {
      padding-left: 52px;

      @media (min-width: 1280px) {
        padding-left: 8px;
      }

      .md-tab-header {
        color: rgba(#fff, .7);

        &.md-active {
          color: #fff;
        }
      }

      .md-tab-indicator {
        background-color: #fff;
      }
    }

    > .md-tabs-content {
      overflow-y: auto;
    }

    .md-tab {
      max-width: 1024px;
      font-size: 16px;
      line-height: 1.6em;
    }

    code:not(.highlight) {
      margin-left: 1px;
      margin-right: 1px;
      padding: 1px 5px;
      background-color: rgba(#3f51b5, .12);
      border-radius: 2px;
      color: #3f51b5;
      font-family: Hack, Menlo, "Liberation Mono", "Operator Mono", Monaco, Consolas, monospace;
      letter-spacing: .010em;
      line-height: 1.5em;
    }
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
