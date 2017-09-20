<template>
  <div>
    <md-dialog :md-active.sync="showDialog" md-animate-from-source md-open-from="#custom" md-close-to="#custom">
      <md-dialog-title>Lorem ipsum dolor sit amet</md-dialog-title>

      <md-dialog-content>Nemo, nobis necessitatibus ut illo, ducimus ex.</md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Cancel</md-button>
        <md-button class="md-primary" @click="showDialog = false">Ok</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button class="md-primary md-raised" @click="showDialog = true">Show Dialog</md-button>
  </div>
</template>

<script>
  export default {
    name: 'Example',
    data: () => ({
      showDialog: false
    })
  }
</script>
