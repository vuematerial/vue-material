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

<style lang="scss">
  .example-box .code-content {
    .code-block {
      margin: -16px;

      + .code-block {
        margin-top: 40px;
      }
    }
  }
</style>

<style lang="scss" scoped>
  .example-box {
    margin-bottom: 16px;
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

    @media (max-width: 480px) {
      margin-top: -1px;
      background-color: #fff;
    }
  }
</style>

<script>
  export default {
    props: {
      cardTitle: String
    }
  };
</script>
