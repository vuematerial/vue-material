<template>
  <section>
    <h2 class="title">Radio</h2>

    <div>
      <md-radio v-model="radio1" id="my-test1" name="my-test-group1" md-value="1">My beautiful radio</md-radio>
      <md-radio v-model="radio1" id="my-test2" name="my-test-group1" md-value="2">Another radio</md-radio>
      <md-radio v-model="radio1" id="my-test3" name="my-test-group1" md-value="3">Another another radio</md-radio>
    </div>

    <div v-md-theme="'indigo'">
      <md-radio class="md-primary" v-model="radio2" id="my-test4" name="my-test-group2" md-value="1">Indigo radio</md-radio>
      <md-radio class="md-primary" v-model="radio2" id="my-test5" name="my-test-group2" md-value="2">Another indigo radio</md-radio>
    </div>

    <div v-md-theme="'green'">
      <md-radio class="md-primary" v-model="radio3" id="my-test6" name="my-test-group3" md-value="1">Blue radio</md-radio>
      <md-radio class="md-primary" v-model="radio3" id="my-test7" name="my-test-group3" md-value="2">Another blue radio</md-radio>
    </div>

    <div v-md-theme="'orange'">
      <md-radio class="md-primary" v-model="radio4" id="my-test8" name="my-test-group4" md-value="1">Orange radio</md-radio>
      <md-radio class="md-primary" v-model="radio4" id="my-test9" name="my-test-group4" md-value="2">Another orange radio</md-radio>
    </div>

    <div v-md-theme="'teal'">
      <md-radio class="md-primary" v-model="radio5" id="my-test10" name="my-test-group5" md-value="1">Teal radio</md-radio>
      <md-radio class="md-primary" v-model="radio5" id="my-test11" name="my-test-group5" md-value="2">Another teal radio</md-radio>
    </div>

    <div>
      <md-radio v-model="radio6" id="my-test12" name="my-test-group6" md-value="1">My beautiful radio</md-radio>
      <md-radio v-model="radio6" id="my-test13" name="my-test-group6" md-value="2" disabled>Disabled radio</md-radio>
      <md-radio v-model="radio6" id="my-test14" name="my-test-group6" md-value="3">Another another radio</md-radio>
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
        radio1: 2,
        radio2: 1,
        radio3: 1,
        radio4: 1,
        radio5: 2,
        radio6: 3
      };
    }
  };
</script>
