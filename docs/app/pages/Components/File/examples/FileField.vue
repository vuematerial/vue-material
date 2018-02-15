<template>
  <div>
    <md-field>
      <md-icon @click.native="openPicker('file1')">attach_file</md-icon>
      <label>Single</label>
      <md-file ref="file1" v-model="single" />
    </md-field>

    <md-field>
      <label>Upload files</label>
      <md-file ref="file2" v-model="placeholder" placeholder="A nice input placeholder" />
      <md-icon @click.native="openPicker('file2')">attach_file</md-icon>
    </md-field>

    <md-field>
      <label>Disabled</label>
      <md-file v-model="disabled" disabled/>
    </md-field>

    <md-field>
      <label>Initial value</label>
      <md-file v-model="initial" />
    </md-field>

    <md-field>
      <label>Multiple</label>
      <md-file v-model="multiple" multiple />
    </md-field>

    <md-field>
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
    }),
    methods: {
      openPicker (file) {
        this.$refs[file].openPicker()
      }
    }
  }
</script>
