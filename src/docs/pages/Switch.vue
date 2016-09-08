<template>
  <section>
    <h2 class="title">Switch</h2>

    <div>
      <md-switch v-model="checked0" id="my-test0" name="my-test0"></md-switch>
    </div>

    <div v-md-theme="'indigo'">
      <md-switch v-model="checked1" id="my-test1" name="my-test1">With label</md-switch>
    </div>

    <div v-md-theme="'blue'">
      <md-switch v-model="checked2" id="my-test2" name="my-test2">Themed</md-switch>
    </div>

    <div v-md-theme="'orange'">
      <md-switch v-model="checked3" id="my-test3" name="my-test3">Accent Color</md-switch>
    </div>

    <div v-md-theme="'teal'">
      <md-switch v-model="checked4" id="my-test4" name="my-test4">Fancy colors</md-switch>
    </div>

    <div v-md-theme="'teal'">
      <md-switch v-model="checked5" id="my-test5" name="my-test5" disabled>Disabled</md-switch>
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
