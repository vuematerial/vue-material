<template>
  <section>
    <h2 class="title">Checkbox</h2>

    <div>
      <md-checkbox :model.sync="checked0" id="my-test0" name="my-test0">My beautiful checkbox</md-checkbox>
    </div>

    <div>
      <md-checkbox :model.sync="checked1" id="my-test1" name="my-test1" v-md-theme="'indigo'">My beautiful checkbox</md-checkbox>
    </div>

    <div>
      <md-checkbox :model.sync="checked2" id="my-test2" name="my-test2" v-md-theme="'blue'">My beautiful checkbox</md-checkbox>
    </div>

    <div>
      <md-checkbox :model.sync="checked3" id="my-test3" name="my-test3" v-md-theme="'orange'">My beautiful checkbox</md-checkbox>
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
        checked3: true
      };
    }
  };
</script>
