<template>
  <section>
    <h2 class="title">Radio</h2>

    <div>
      <md-radio :model.sync="radio1" id="my-test1" name="my-test-group1" value="1">My beautiful radio</md-radio>
      <md-radio :model.sync="radio1" id="my-test2" name="my-test-group1" value="2">Another radio</md-radio>
      <md-radio :model.sync="radio1" id="my-test3" name="my-test-group1" value="3">Another another radio</md-radio>
    </div>

    <div v-md-theme="'indigo'">
      <md-radio :model.sync="radio2" id="my-test4" name="my-test-group2" value="1">Indigo radio</md-radio>
      <md-radio :model.sync="radio2" id="my-test5" name="my-test-group2" value="2">Another indigo radio</md-radio>
    </div>

    <div v-md-theme="'blue'">
      <md-radio :model.sync="radio3" id="my-test6" name="my-test-group3" value="1">Blue radio</md-radio>
      <md-radio :model.sync="radio3" id="my-test7" name="my-test-group3" value="2">Another blue radio</md-radio>
    </div>

    <div v-md-theme="'orange'">
      <md-radio :model.sync="radio4" id="my-test8" name="my-test-group4" value="1">Orange radio</md-radio>
      <md-radio :model.sync="radio4" id="my-test9" name="my-test-group4" value="2">Another orange radio</md-radio>
    </div>

    <div v-md-theme="'bottom-bar'">
      <md-radio :model.sync="radio5" id="my-test10" name="my-test-group5" value="1">Teal radio</md-radio>
      <md-radio :model.sync="radio5" id="my-test11" name="my-test-group5" value="2">Another teal radio</md-radio>
    </div>

    <div>
      <md-radio :model.sync="radio6" id="my-test12" name="my-test-group6" value="1">My beautiful radio</md-radio>
      <md-radio :model.sync="radio6" id="my-test13" name="my-test-group6" value="2" disabled>Disabled radio</md-radio>
      <md-radio :model.sync="radio6" id="my-test14" name="my-test-group6" value="3">Another another radio</md-radio>
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
        radio1: null,
        radio2: null,
        radio3: null,
        radio4: null,
        radio5: null,
        radio6: 2
      };
    }
  };
</script>
