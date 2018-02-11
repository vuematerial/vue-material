<template>
  <div>
    <md-field md-variant="bottom-line">
      <label>Normal</label>
      <md-input v-model="normal"></md-input>
    </md-field>

    <md-field md-variant="box">
      <label>Box</label>
      <md-input v-model="box"></md-input>
    </md-field>

    <md-field md-variant="raised">
      <label>Raised (Inline Only)</label>
      <md-input v-model="raised"></md-input>
    </md-field>

  </div>
</template>

<script>
  export default {
    name: 'TextFields',
    data: () => ({
      normal: null,
      box: null,
      raised: null,
      inline: null,
      number: null,
      textarea: null,
      autogrow: null,
      disabled: null
    })
  }
</script>
