<template>
  <div>
    <md-field>
      <label>Required Field</label>
      <md-input maxlength="30" />
    </md-field>

    <md-field :md-counter="false">
      <label>Maxlength with disabled counter</label>
      <md-input maxlength="10" />
    </md-field>

    <md-field>
      <label>Autogrow</label>
      <md-textarea md-autogrow maxlength="200" />
    </md-field>

    <md-field>
      <label>Textarea</label>
      <md-textarea maxlength="80" />
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'Counters'
  }
</script>
