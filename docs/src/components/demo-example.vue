<template>
  <md-card class="demo-example" :class="classes" :style="{ height: height + 'px' }">
    <md-toolbar v-md-theme="titleTheme" class="demo-example-toolbar">
      <h2 class="md-title">{{ label }}</h2>
    </md-toolbar>

    <section v-md-theme="bodyTheme" class="demo-example-body">
      <slot></slot>
    </section>
  </md-card>
</template>

<style lang="scss" scoped>
  .demo-example {
    max-width: 100%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    background-color: #fafafa;

    &.size-1 {
      width: 320px;
    }

    &.size-2 {
      width: 412px;
    }

    &.size-3 {
      width: 480px;
    }

    &.size-4 {
      width: 600px;
    }

    &.size-5 {
      width: 768px;
    }

    + .demo-example {
      margin-top: 16px;
    }

    .demo-example-body {
      padding: 16px;
      flex: 1;
      background-color: #FFF;
    }
  }
</style>

<script>
  export default {
    props: {
      label: [String, Number],
      titleTheme: {
        type: String,
        default: 'grey'
      },
      bodyTheme: {
        type: String,
        default: 'default'
      },
      size: [String, Number],
      height: [String, Number]
    },
    computed: {
      classes() {
        if (!this.size) {
          return false;
        }

        return 'size-' + this.size;
      }
    }
  };
</script>

