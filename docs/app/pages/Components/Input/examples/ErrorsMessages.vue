<template>
  <div>
    <md-field>
      <label>Required Field</label>
      <md-input required></md-input>
    </md-field>

    <md-field :class="messageClass">
      <label>Error</label>
      <md-input required></md-input>
      <span class="md-error">There is an error</span>
    </md-field>

    <md-field :class="messageClass">
      <label>Textarea</label>
      <md-textarea required></md-textarea>
      <span class="md-helper-text">Helper text</span>
      <span class="md-error">There is an error</span>
    </md-field>

    <md-switch v-model="hasMessages">{{ !hasMessages ? 'Show' : 'Hide' }} Errors</md-switch>
  </div>
</template>

<script>
export default {
  name: 'ErrorsMessages',
  data: () => ({
    hasMessages: false
  }),
  computed: {
    messageClass () {
      return {
        'md-invalid': this.hasMessages
      }
    }
  }
}
</script>
