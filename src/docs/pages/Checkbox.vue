<template>
  <section>
    <h2 class="title">Checkbox</h2>

    <div>
      <md-checkbox id="my-test0" name="my-test0" v-model="checkbox">My beautiful checkbox</md-checkbox>
    </div>

    <div v-md-theme="'indigo'">
      <md-checkbox id="my-test1" name="my-test1" v-model="checkbox">Themed</md-checkbox>
    </div>

    <div v-md-theme="'blue'">
      <md-checkbox id="my-test2" name="my-test2" v-model="checkbox">Accent Color</md-checkbox>
    </div>

    <div v-md-theme="'orange'">
      <md-checkbox id="my-test3" name="my-test3" v-model="checkbox">Fancy colors</md-checkbox>
    </div>

    <div v-md-theme="'teal'">
      <md-checkbox id="my-test4" name="my-test4">Really simple</md-checkbox>
    </div>

    <div v-md-theme="'teal'">
      <md-checkbox id="my-test5" name="my-test5" v-model="checkbox" disabled>Disabled</md-checkbox>
    </div>

    <span>{{ checkbox }}</span>
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
        checkbox: true
      };
    }
  };
</script>
