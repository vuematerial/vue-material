<template>
  <section>
    <h2 class="title">Buttons</h2>

    <md-button @click="disablePrimaryButton">Button</md-button>
    <md-link-button class="md-primary" :disabled="buttonDisabled">Primary</md-link-button>
    <md-link-button class="md-primary md-raised">Raised</md-link-button>
    <md-button class="md-accent md-raised">Accent</md-button>
    <md-link-button class="md-warn">Warn</md-link-button>
    <md-link-button class="md-raised md-primary" :disabled="!buttonDisabled">Disabled</md-link-button>
    <md-button class="md-raised md-dense md-accent">Dense</md-button>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        buttonDisabled: false
      };
    },
    methods: {
      disablePrimaryButton() {
        this.buttonDisabled = !this.buttonDisabled;
      }
    }
  };
</script>
