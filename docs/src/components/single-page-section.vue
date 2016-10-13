<template>
  <section class="single-page-section">
    <h2 class="md-headline"><md-icon>keyboard_arrow_right</md-icon> {{ label }}</h2>

    <slot></slot>
  </section>
</template>

<style lang="scss">
  @import '../../../src/core/stylesheets/variables.scss';

  .single-page-section {
    + .single-page-section {
      margin-top: 48px;
    }

    .md-headline {
      .md-icon {
        height: 32px;
        margin: 0;
      }
    }
  }
</style>

<script>
  export default {
    props: ['label']
  };
</script>
