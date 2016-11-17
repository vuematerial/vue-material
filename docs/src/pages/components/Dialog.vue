<template>
  <demo-page label="Components - Dialog">
    <div slot="examples">
      <demo-example label="Default" size="2">
        <md-dialog md-open-from="#trigger" md-close-to="#trigger" ref="dialog">
          <div class="md-dialog-content">
            <form>
              <md-input-container>
                <label>Test</label>
                <md-input></md-input>
              </md-input-container>
            </form>
          </div>

          <md-button class="md-primary md-raised" @click="closeDialog">Close</md-button>
        </md-dialog>

        <md-button class="md-primary md-raised" id="trigger" @click="openDialog">Open</md-button>
      </demo-example>
    </div>

    <div slot="code">
      <demo-example label="Default">
        <code-block lang="xml">
        </code-block>
      </demo-example>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>

<style lang="scss" scoped>

</style>

<script>
  export default {
    methods: {
      openDialog() {
        this.$refs.dialog.open();
      },
      closeDialog() {
        this.$refs.dialog.close();
      }
    }
  };
</script>
