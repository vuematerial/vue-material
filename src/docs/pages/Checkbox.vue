<template>
  <section>
    <h2 class="title">Checkbox</h2>

    <div>
      <md-checkbox :model.sync="checked0" id="my-test0" name="my-test0">My beautiful checkbox</md-checkbox>
    </div>

    <div v-md-theme="'indigo'">
      <md-checkbox :model.sync="checked1" id="my-test1" name="my-test1">Themed</md-checkbox>
    </div>

    <div v-md-theme="'blue'">
      <md-checkbox :model.sync="checked2" id="my-test2" name="my-test2">Accent Color</md-checkbox>
    </div>

    <div v-md-theme="'orange'">
      <md-checkbox :model.sync="checked3" id="my-test3" name="my-test3">Fancy colors</md-checkbox>
    </div>

    <div v-md-theme="'bottom-bar'">
      <md-checkbox :model.sync="checked4" id="my-test4" name="my-test4">Really simple</md-checkbox>
    </div>

    <div v-md-theme="'bottom-bar'">
      <md-checkbox :model.sync="checked5" id="my-test5" name="my-test5" disabled>Disabled</md-checkbox>
    </div>
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
        checked0: true,
        checked1: true,
        checked2: true,
        checked3: true,
        checked4: true,
        checked5: true
      };
    }
  };
</script>
