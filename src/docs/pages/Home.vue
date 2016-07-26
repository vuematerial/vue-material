<template>
  <section>
    <md-input-container>
      <label>Username</label>
      <input type="password" v-model="test" id="password">
    </md-input-container>

    <md-button class="md-icon-button" @click="togglePassword">
      <md-icon>visibility</md-icon>
    </md-button>

    {{ test }}
  </section>
</template>

<script>
  export default {
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
