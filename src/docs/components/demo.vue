<template>
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
</template>

<style lang="scss">
  @import '../../core/stylesheets/variables.scss';

  .page-tabs {
    flex: 1;

    > .md-whiteframe > .md-tabs-navigation {
      padding-left: 52px;

      @media (min-width: 1280px) {
        padding-left: 8px;
      }

      .md-tab-indicator {
        background-color: #fff;
      }
    }

    > .md-tabs-content {
      overflow-y: auto;
    }
  }
</style>

<script>
  export default {

  };
</script>
