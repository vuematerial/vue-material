<template>
  <div>
    <div class="row">
      <md-dialog-alert
        :md-active.sync="alert.one"
        md-content="Your post has been deleted!"
        md-confirm-text="Cool!" />

      <md-dialog-alert
        :md-active.sync="alert.two"
        md-title="Post created!"
        md-content="Your post <strong>Material Design is awesome</strong> has been created." />

      <md-button class="md-accent md-raised" @click="alert.one = true">Alert</md-button>
      <md-button class="md-primary md-raised" @click="alert.two = true">Alert</md-button>
    </div>

    <div class="row">
      <md-dialog-confirm
        :md-active.sync="confirm.active"
        md-title="Use Google's location service?"
        md-content="Let Google help apps determine location. <br> This means sending <strong>anonymous</strong> location data to Google, even when no apps are running."
        md-confirm-text="Agree"
        md-cancel-text="Disagree"
        @md-cancel="onCancel"
        @md-confirm="onConfirm" />

      <md-button class="md-primary md-raised" @click="confirm.active = true">Confirm</md-button>
      <span v-if="confirm.value">Value: {{ confirm.value }}</span>
    </div>

    <div class="row">
      <md-dialog-prompt
        :md-active.sync="prompt.active"
        v-model="prompt.value"
        md-title="What's your name?"
        md-input-maxlength="30"
        md-input-placeholder="Type your name..."
        md-confirm-text="Done" />

      <md-button class="md-primary md-raised" @click="prompt.active = true">Prompt</md-button>
      <span v-if="prompt.value">Value: {{ prompt.value }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Example',
    data: () => ({
      alert: {
        one: false,
        two: false
      },
      confirm: {
        active: false,
        value: null
      },
      prompt: {
        active: false,
        value: null
      }
    }),
    methods: {
      onConfirm () {
        this.confirm.value = 'Agreed'
      },
      onCancel () {
        this.confirm.value = 'Disagreed'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
    align-items: center;
  }
</style>
