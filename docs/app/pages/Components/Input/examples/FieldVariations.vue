<template>
  <div>
    <md-field md-variant="bottom-line">
      <label>Bottom Line</label>
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

    <md-field md-variant="bottom-line" md-dense>
      <label>Bottom Line with dense</label>
      <md-input v-model="normalDense"></md-input>
    </md-field>

    <md-field md-variant="box" md-dense>
      <label>Box with dense</label>
      <md-input v-model="boxDense"></md-input>
    </md-field>

    <md-field md-variant="raised" md-dense>
      <label>Raised (Inline Only)</label>
      <md-input v-model="raisedDense"></md-input>
    </md-field>

  </div>
</template>

<script>
  export default {
    name: 'FieldVariations',
    data: () => ({
      normal: null,
      box: null,
      raised: null,
      normalDense: null,
      boxDense: null,
      raisedDense: null
    })
  }
</script>
