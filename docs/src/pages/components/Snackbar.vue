<template>
  <page-content page-title="Components - Snackbar">
    <docs-component>
      <div slot="description">
        <p>Snackbars contain a single line of text directly related to the operation performed. They may contain a text action, but no icons.</p>
      </div>

      <div slot="api">
        <api-table name="md-snackbar">

        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div slot="demo">
            <div>
              <md-button class="md-primary md-raised" @click="$refs.snackbar1.open()">Open bottom center</md-button>
              <md-button class="md-primary md-raised" @click="$refs.snackbar2.open()">Open bottom left</md-button>
              <md-button class="md-primary md-raised" @click="$refs.snackbar3.open()">Open bottom right</md-button>
            </div>

            <div>
              <md-button class="md-primary md-raised" @click="$refs.snackbar4.open()">Open top center</md-button>
              <md-button class="md-primary md-raised" @click="$refs.snackbar5.open()">Open top left</md-button>
              <md-button class="md-primary md-raised" @click="$refs.snackbar6.open()">Open top right</md-button>
            </div>

            <md-snackbar md-position="bottom center" ref="snackbar1">
              <span>Connection timeout. Showing limited messages.</span>
              <md-button class="md-accent" v-md-theme="'light-blue'" @click="$refs.snackbar1.close()">Retry</md-button>
            </md-snackbar>

            <md-snackbar md-position="bottom left" ref="snackbar2">
              <span>Connection timeout. Showing limited messages.</span>
              <md-button class="md-accent" v-md-theme="'light-blue'" @click="$refs.snackbar2.close()">Retry</md-button>
            </md-snackbar>

            <md-snackbar md-position="bottom right" ref="snackbar3">
              <span>Connection timeout. Showing limited messages.</span>
              <md-button class="md-accent" v-md-theme="'light-blue'" @click="$refs.snackbar3.close()">Retry</md-button>
            </md-snackbar>

            <md-snackbar md-position="top center" ref="snackbar4">
              <span>Connection timeout. Showing limited messages.</span>
              <md-button class="md-accent" v-md-theme="'light-blue'" @click="$refs.snackbar4.close()">Retry</md-button>
            </md-snackbar>

            <md-snackbar md-position="top left" ref="snackbar5">
              <span>Connection timeout. Showing limited messages.</span>
              <md-button class="md-accent" v-md-theme="'light-blue'" @click="$refs.snackbar5.close()">Retry</md-button>
            </md-snackbar>

            <md-snackbar md-position="top right" ref="snackbar6">
              <span>Connection timeout. Showing limited messages.</span>
              <md-button class="md-accent" v-md-theme="'light-blue'" @click="$refs.snackbar6.close()">Retry</md-button>
            </md-snackbar>
          </div>

          <div slot="code">
            <code-block lang="xml">

            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="scss" scoped>

</style>

<script>
  export default {

  };
</script>
