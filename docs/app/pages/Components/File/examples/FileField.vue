<template>
  <div>
    <md-field>
      <label>Single</label>
      <md-file/>
    </md-field>

    <md-field>
      <label>Upload files</label>
      <md-file placeholder="A nice input placeholder"/>
    </md-field>

    <md-field>
      <label>Disabled</label>
      <md-file disabled/>
    </md-field>

    <md-field>
      <label>Initial value</label>
      <md-file v-model="initial"/>
    </md-field>

    <md-field>
      <label>Multiple</label>
      <md-file multiple v-model="multiple"/>
    </md-field>

    <md-field>
      <label>Only images</label>
      <md-file accept="image/*" v-model="single"/>
    </md-field>
  </div>
</template>

<script>
export default {
  name: 'FileField',
  data: () => ({
    initial: 'vue-material-is-awesome.jpg',
    single: null,
    multiple: null
  })
}
</script>
