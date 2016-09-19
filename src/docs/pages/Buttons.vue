<template>
  <demo-page>
    <div slot="examples">
      <demo-example label="Flat">
        <md-button @click="disablePrimaryButton">Default</md-button>
        <md-button class="md-primary" :disabled="buttonDisabled">Primary</md-button>
        <md-button class="md-accent">Accent</md-button>
        <md-button class="md-warn">Warn</md-button>
        <md-button class="md-primary" :disabled="!buttonDisabled">Disabled</md-button>
        <md-button class="md-dense">Dense</md-button>
      </demo-example>

      <demo-example label="Raised">
        <md-button class="md-raised" @click="disablePrimaryButton">Default</md-button>
        <md-button class="md-raised md-primary" :disabled="buttonDisabled">Primary</md-button>
        <md-button class="md-raised md-accent">Accent</md-button>
        <md-button class="md-raised md-warn">Warn</md-button>
        <md-button class="md-raised md-primary" :disabled="!buttonDisabled">Disabled</md-button>
        <md-button class="md-raised md-dense">Dense</md-button>
      </demo-example>

      <demo-example label="Themed">
        <md-button class="md-raised md-primary" @click="disablePrimaryButton" v-md-theme="'indigo'">Default</md-button>
        <md-button class="md-raised md-primary" :disabled="buttonDisabled" v-md-theme="'teal'">Primary</md-button>
        <md-button class="md-raised md-primary" v-md-theme="'green'">Accent</md-button>
        <md-button class="md-raised md-primary" v-md-theme="'white'">Warn</md-button>
        <md-button class="md-raised md-primary" :disabled="!buttonDisabled" v-md-theme="'grey'">Disabled</md-button>
        <md-button class="md-raised md-primary" v-md-theme="'orange'">Dense</md-button>
      </demo-example>

      <demo-example label="Links">
        <md-button href="#/button" class="md-raised" @click="disablePrimaryButton">Default</md-button>
        <md-button href="#/button" class="md-raised md-primary" :disabled="buttonDisabled">Primary</md-button>
        <md-button href="#/button" class="md-raised md-accent">Accent</md-button>
        <md-button href="#/button" class="md-raised md-warn">Warn</md-button>
        <md-button href="#/button" class="md-raised md-primary" :disabled="!buttonDisabled">Disabled</md-button>
        <md-button href="#/button" class="md-raised md-dense">Dense</md-button>
      </demo-example>

      <demo-example label="Icons - Flat">
        <md-button class="md-icon-button" @click="disablePrimaryButton">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-primary" :disabled="buttonDisabled">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-accent">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-warn">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button" :disabled="!buttonDisabled">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-dense">
          <md-icon>add</md-icon>
        </md-button>
      </demo-example>

      <demo-example label="Icons - Raised">
        <md-button class="md-icon-button md-raised" @click="disablePrimaryButton">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-raised md-primary" :disabled="buttonDisabled">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-raised md-accent">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-raised md-warn">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-raised" :disabled="!buttonDisabled">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-raised md-dense">
          <md-icon>add</md-icon>
        </md-button>
      </demo-example>

      <demo-example label="Floating Action Button" height="360">
        <md-button class="md-fab md-fab-bottom-right">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-fab md-fab-bottom-left md-mini">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-fab">
          <md-icon>edit</md-icon>
        </md-button>

        <md-button class="md-fab md-mini">
          <md-icon>edit</md-icon>
        </md-button>

        <md-button class="md-fab md-primary">
          <md-icon>email</md-icon>
        </md-button>

        <md-button class="md-fab md-primary md-mini">
          <md-icon>email</md-icon>
        </md-button>

        <md-button class="md-fab md-warn">
          <md-icon>save</md-icon>
        </md-button>

        <md-button class="md-fab md-warn md-mini">
          <md-icon>save</md-icon>
        </md-button>

        <md-button class="md-fab" disabled>
          <md-icon>message</md-icon>
        </md-button>

        <md-button class="md-fab md-mini" disabled>
          <md-icon>message</md-icon>
        </md-button>
      </demo-example>
    </div>

    <div slot="code">
      <h2>Code</h2>
    </div>

    <div slot="api">

    </div>
  </demo-page>
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
