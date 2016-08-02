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
          <md-input type="password"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Textarea</label>
          <md-textarea></md-textarea>
        </md-input-container>

        <md-input-container>
          <label>Character counter</label>
          <md-textarea maxlength="70" v-validate:counter="{ maxlength: 70 }" initial="off"></md-textarea>

          <span class="md-error">Max length reached</span>
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
      submit() {
        this.$validate(true);
      }
    }
  };
</script>
