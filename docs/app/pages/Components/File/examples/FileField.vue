<template>
  <div>
    <md-field>
      <md-icon md-file-trigger>attach_file</md-icon>
      <label>Single</label>
      <md-file v-model="single" />
    </md-field>

    <md-field>
      <md-icon md-file-trigger>attach_file</md-icon>
      <label>Upload files</label>
      <md-file v-model="placeholder" placeholder="A nice input placeholder" />
    </md-field>

    <md-field>
      <md-icon md-file-trigger>attach_file</md-icon>
      <label>Disabled</label>
      <md-file v-model="disabled" disabled/>
    </md-field>

    <md-field>
      <md-icon md-file-trigger>attach_file</md-icon>
      <label>Initial value</label>
      <md-file v-model="initial" />
    </md-field>

    <md-field>
      <md-icon md-file-trigger>attach_file</md-icon>
      <label>Multiple</label>
      <md-file v-model="multiple" multiple />
    </md-field>

    <md-field>
      <md-icon md-file-trigger>attach_file</md-icon>
      <label>Only images</label>
      <md-file v-model="single" accept="image/*" />
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'FileField',
    data: () => ({
      initial: 'vue-material-is-awesome.jpg',
      single: null,
      placeholder: null,
      disabled: null,
      multiple: null
    })
  }
</script>
