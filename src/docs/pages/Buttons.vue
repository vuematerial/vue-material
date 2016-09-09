<template>
  <div class="page-content">
    <md-whiteframe md-elevation="2">
      <md-toolbar class="md-dense">
        <md-button>Examples</md-button>
        <md-button>Code</md-button>
        <md-button>API</md-button>
      </md-toolbar>
    </md-whiteframe>

    <div class="main-content">
      <h2 class="title">Buttons</h2>

      <md-button @click="disablePrimaryButton">Button</md-button>
      <md-button class="md-primary" :disabled="buttonDisabled">Primary</md-button>
      <md-button class="md-primary md-raised">Raised</md-button>
      <md-button class="md-accent md-raised">Accent</md-button>
      <md-button class="md-warn">Warn</md-button>
      <md-button class="md-raised md-primary" :disabled="!buttonDisabled">Disabled</md-button>
      <md-button class="md-raised md-dense md-accent">Dense</md-button>

      <h2 class="title">Links</h2>

      <md-button href="#/button" @click="disablePrimaryButton">Button</md-button>
      <md-button href="#/button" class="md-primary" :disabled="buttonDisabled">Primary</md-button>
      <md-button href="#/button" class="md-primary md-raised">Raised</md-button>
      <md-button href="#/button" class="md-accent md-raised">Accent</md-button>
      <md-button href="#/button" class="md-warn">Warn</md-button>
      <md-button href="#/button" class="md-raised md-primary" :disabled="!buttonDisabled">Disabled</md-button>
      <md-button href="#/button" class="md-raised md-dense md-accent">Dense</md-button>

      <h2 class="title">FAB</h2>

      <md-button class="md-fab md-fab-bottom-right">
        <md-icon>add</md-icon>
      </md-button>

      <md-button class="md-fab md-primary">
        <md-icon>edit</md-icon>
      </md-button>

      <md-button class="md-fab md-warn md-mini">
        <md-icon>save</md-icon>
      </md-button>
    </div>
  </div>
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
    },
    mounted() {
      this.$root.pageTitle = 'Button';
    }
  };
</script>
