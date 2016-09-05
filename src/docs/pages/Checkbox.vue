<template>
  <section>
    <h2 class="title">Checkbox</h2>

    <div>
      <md-checkbox id="my-test0" name="my-test0" checked @change="onChange">My beautiful checkbox</md-checkbox>
    </div>

    <div v-md-theme="'indigo'">
      <md-checkbox id="my-test1" name="my-test1" checked @change="onChange">Themed</md-checkbox>
    </div>

    <div v-md-theme="'blue'">
      <md-checkbox id="my-test2" name="my-test2" checked @change="onChange">Accent Color</md-checkbox>
    </div>

    <div v-md-theme="'orange'">
      <md-checkbox id="my-test3" name="my-test3" @change="onChange">Fancy colors</md-checkbox>
    </div>

    <div v-md-theme="'teal'">
      <md-checkbox id="my-test4" name="my-test4" checked @change="onChange">Really simple</md-checkbox>
    </div>

    <div v-md-theme="'teal'">
      <md-checkbox id="my-test5" name="my-test5" @change="onChange" disabled>Disabled</md-checkbox>
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
    methods: {
      onChange(change) {
        console.log('Change', change);
      }
    }
  };
</script>
