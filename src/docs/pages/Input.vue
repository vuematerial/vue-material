<template>
  <section v-md-theme="'blue'">
    <md-input-container>
      <label>Username</label>
      <input type="text" v-model="test" value="test">
    </md-input-container>

    <md-button class="md-icon-button" @click="togglePassword">
      <md-icon>visibility</md-icon>
    </md-button>
  </section>
</template>

<style lang="scss" scoped>
  section {
    margin: 24px;
  }
</style>

<script>
  export default {
    data() {
      return {
        test: ''
      };
    },
    methods: {
      togglePassword() {
        let passwordField = document.querySelector('#password');
        let type = passwordField.type;

        if (type === 'password') {
          passwordField.type = 'text';
        } else {
          passwordField.type = 'password';
        }
      }
    }
  };
</script>
