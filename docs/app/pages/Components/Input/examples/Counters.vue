<template>
  <div>
    <md-field>
      <label>Regular Field</label>
      <md-input maxlength="30"></md-input>
    </md-field>

    <md-field :md-counter="false">
      <label>Maxlength with disabled counter</label>
      <md-input maxlength="10"></md-input>
    </md-field>

    <md-field>
      <label>Autogrow</label>
      <md-textarea md-autogrow maxlength="200"></md-textarea>
    </md-field>

    <md-field>
      <label>Textarea</label>
      <md-textarea maxlength="80"></md-textarea>
    </md-field>
  </div>
</template>

<script>
export default {
  name: 'Counters'
}
</script>
