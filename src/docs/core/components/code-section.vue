<template>
  <md-whiteframe md-elevation="1" class="code-section">
    <md-toolbar class="code-section-toolbar">
      <h2 class="md-title">{{ title }}</h2>
    </md-toolbar>

    <div class="code-section-content">
      <slot></slot>
    </div>
  </md-whiteframe>
</template>

<style lang="scss">
  .code-section {
    display: flex;
    flex-flow: column;
    border-radius: 3px;

    + .code-section {
      margin-top: 24px;
    }
  }

  .code-section-toolbar {
    margin: 0 -1px;
    border-radius: 3px 3px 0 0;
  }

  .code-section-content {
    padding: 24px;
  }
</style>

<script>
  export default {
    props: {
      title: String
    }
  };
</script>
