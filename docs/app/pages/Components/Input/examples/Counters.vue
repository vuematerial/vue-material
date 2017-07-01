<template>
  <div>
    <md-field>
      <label>Required Field</label>
      <md-input required maxlength="30" />
    </md-field>

    <md-field>
      <label>Autogrow</label>
      <md-textarea md-autogrow required maxlength="200" />
    </md-field>

    <md-field>
      <label>Textarea</label>
      <md-textarea required maxlength="80" />
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'Counters'
  }
</script>
