<template>
  <section>
    <h2 class="title">Checkbox</h2>

    <md-checkbox :model.sync="checked" id="my-test" name="my-test">My beautiful checkbox</md-checkbox>
  </section>
</template>

<style lang="scss" scoped>
  section {
    padding: 0 24px;
  }
</style>

<script>
  export default {
    data() {
      return {
        checked: false
      };
    }
  };
</script>
