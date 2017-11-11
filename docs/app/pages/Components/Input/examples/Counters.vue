<template>
  <div>
    <md-field>
      <label>Counter</label>
      <md-input v-model="regular" md-counter="30"></md-input>
    </md-field>

    <md-field>
      <label>Max Length</label>
      <md-input v-model="maxLength" maxlength="30"></md-input>
    </md-field>

    <md-field :md-counter="false">
      <label>Maxlength with disabled counter</label>
      <md-input v-model="disabled" maxlength="10"></md-input>
    </md-field>

    <md-field>
      <label>Autogrow</label>
      <md-textarea v-model="autogrow" md-autogrow md-counter="200"></md-textarea>
    </md-field>

    <md-field>
      <label>Textarea</label>
      <md-textarea v-model="textarea" md-counter="80"></md-textarea>
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'Counters',
    data: () => ({
      regular: null,
      maxLength: null,
      disabled: null,
      autogrow: null,
      textarea: null
    })
  }
</script>
