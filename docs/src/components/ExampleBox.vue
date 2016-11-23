<template>
  <md-card class="example-box">
    <md-toolbar class="md-dense example-title" v-md-theme="'white'">
      <h3 class="md-title">{{ cardTitle }}</h3>
    </md-toolbar>

    <md-tabs md-right :md-dynamic-height="false" class="md-transparent example-tabs">
      <md-tab class="example-content" md-label="Demo">
        <slot name="demo"></slot>
      </md-tab>

      <md-tab class="code-content" md-label="Code">
        <slot name="code"></slot>
      </md-tab>
    </md-tabs>
  </md-card>
</template>

<style lang="scss" scoped>
  .example-box + .example-box {
    margin-top: 16px;
  }

  .example-title {
    border-bottom: 1px solid rgba(#000, .12);

    .md-title {
      position: relative;
      z-index: 3;
    }
  }

  .example-tabs {
    margin-top: -48px;
  }
</style>

<script>
  export default {
    props: {
      cardTitle: String
    }
  };
</script>
