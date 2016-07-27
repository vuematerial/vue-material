<template>
  <section v-md-theme="'blue'">
    <md-input-container>
      <label>Initial value</label>
      <input type="text" value="test">
    </md-input-container>

    <md-input-container md-inline>
      <label>Inline field</label>
      <input type="text">
    </md-input-container>

    <md-input-container md-disabled>
      <label>Disabled</label>
      <input type="text">
    </md-input-container>

    <md-input-container md-has-password>
      <label>Passwords</label>
      <input type="password">
    </md-input-container>

    <md-input-container>
      <label>Textarea</label>
      <textarea></textarea>
    </md-input-container>
  </section>
</template>

<style lang="scss" scoped>
  section {
    margin: 24px;
  }
</style>
