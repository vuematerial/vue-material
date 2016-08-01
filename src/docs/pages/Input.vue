<template>
  <section v-md-theme="'blue'">
    <validator name="validation">
      <form novalidate @submit.stop.prevent="submit">
        <md-input-container>
          <label>Initial value</label>
          <md-input value="My initial value"></md-input>
        </md-input-container>

        <md-input-container md-inline>
          <label>Inline field</label>
          <md-input></md-input>
        </md-input-container>

        <md-input-container>
          <label>Required</label>
          <md-input v-validate:inline="['required']" initial="off"></md-input>

          <span class="md-error">Validation message</span>
        </md-input-container>

        <md-input-container>
          <label>Disabled</label>
          <md-input disabled></md-input>
        </md-input-container>

        <md-input-container md-has-password>
          <label>Passwords</label>
          <md-input type="password" @input="onInput"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Textarea</label>
          <md-textarea></md-textarea>
        </md-input-container>

        <md-button type="submit" class="md-primary md-raised">Validate</md-button>
      </form>
    </validator>
  </section>
</template>

<style lang="scss" scoped>
  section {
    margin: 24px;
  }
</style>

<script>
  export default {
    methods: {
      checkRequiredField(input) {
        input = this.$validation[input];

        return input && input.required;
      },
      submit() {
        this.$validate(true);
      },
      onInput() {
        console.log('Test');
      }
    }
  };
</script>
