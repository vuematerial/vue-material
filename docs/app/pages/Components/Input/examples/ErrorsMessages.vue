<template>
  <div>
    <md-field>
      <label>Required Field</label>
      <md-input required />
    </md-field>

    <md-field class="md-invalid">
      <label>Error</label>
      <md-input required />
      <span class="md-error">There is an error</span>
    </md-field>

    <md-field class="md-invalid">
      <label>Textarea</label>
      <md-textarea required />
      <span class="md-error">There is an error</span>
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'ErrorsMessages'
  }
</script>
