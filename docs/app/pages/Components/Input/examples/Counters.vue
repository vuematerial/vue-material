<template>
  <div>
    <md-field>
      <label>Regular Field</label>
      <md-input v-model="regular" maxlength="30"></md-input>
    </md-field>

    <md-field :md-counter="false">
      <label>Maxlength with disabled counter</label>
      <md-input v-model="disabled" maxlength="10"></md-input>
    </md-field>

    <md-field>
      <label>Autogrow</label>
      <md-textarea v-model="autogrow" md-autogrow maxlength="200"></md-textarea>
    </md-field>

    <md-field>
      <label>Textarea</label>
      <md-textarea v-model="textarea" maxlength="80"></md-textarea>
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'Counters',
    data: () => ({
      regular: null,
      disabled: null,
      autogrow: null,
      textarea: null
    })
  }
</script>
