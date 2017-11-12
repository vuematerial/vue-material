<template>
  <form novalidate @submit.stop.prevent="showSnackbar = true">
    <div>
      <div for="snackbar-center" class="md-body-2">Position</div>
      <md-radio v-model="position" id="snackbar-center" name="snackbar-horizontal" value="center">Centered</md-radio>
      <md-radio v-model="position" id="snackbar-left" name="snackbar-horizontal" value="left">Left</md-radio>
    </div>

    <div>
      <div class="md-body-2">Duration</div>

      <md-switch v-model="isInfinity">Infinite</md-switch>

      <md-field>
        <label for="snackbar-duration">Miliseconds</label>
        <md-input type="number" id="snackbar-duration" v-model.number="duration" :disabled="isInfinity"></md-input>
      </md-field>
    </div>

    <md-button type="submit" class="md-primary md-raised">Open Snackbar</md-button>

    <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
      <span>Connection timeout. Showing limited messages!</span>
      <md-button class="md-primary" @click="showSnackbar = false">Retry</md-button>
    </md-snackbar>
  </form>
</template>

<script>
export default {
  name: 'SnackbarExample',
  data: () => ({
    showSnackbar: false,
    position: 'center',
    duration: 4000,
    isInfinity: false
  })
}
</script>
