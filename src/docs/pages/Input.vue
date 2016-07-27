<template>
  <section v-md-theme="'blue'">
    <md-input-container>
      <label>Username</label>
      <input type="text" value="test">
    </md-input-container>

    <md-input-container md-inline>
      <label>Username</label>
      <input type="text">
    </md-input-container>

    <md-input-container :md-disabled="disabledInput">
      <label>Username</label>
      <input type="text">
    </md-input-container>

    <!-- <md-button class="md-icon-button" @click="togglePassword">
      <md-icon>visibility</md-icon>
    </md-button> -->

    <md-button class="md-icon-button" @click="toggleDisabled">
      <md-icon>visibility_off</md-icon>
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
        disabledInput: false
      };
    },
    methods: {
      toggleDisabled() {
        this.disabledInput = !this.disabledInput;
      },
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
