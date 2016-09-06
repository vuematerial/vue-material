<template>
  <section>
    <form novalidate @submit.stop.prevent="submit">
      <md-input-container>
        <label>Initial value</label>
        <md-input v-model="initialValue"></md-input>
      </md-input-container>

      <md-input-container>
        <label>With label</label>
        <md-input placeholder="My nice placeholder"></md-input>
      </md-input-container>

      <md-input-container md-inline>
        <label>Inline field</label>
        <md-input></md-input>
      </md-input-container>

      <md-input-container>
        <label>Required</label>
        <md-input required></md-input>
      </md-input-container>

      <md-input-container class="md-input-invalid">
        <label>Error</label>
        <md-input required></md-input>

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
        <label>Character counter - Textarea</label>
        <md-textarea maxlength="70"></md-textarea>
      </md-input-container>

      <md-input-container>
        <label>Character counter - Input</label>
        <md-input maxlength="20"></md-input>
      </md-input-container>

      <md-input-container v-md-theme="'green'">
        <label>Themable - Input</label>
        <md-input></md-input>
      </md-input-container>

      <md-input-container v-md-theme="'orange'">
        <label>Themable - Textarea</label>
        <md-textarea></md-textarea>
      </md-input-container>
    </form>
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
        initialValue: 'My initial value'
      };
    }
  };
</script>
