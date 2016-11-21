<template>
  <demo-page label="Components - Dialog">
    <div slot="examples">
      <demo-example label="Default" height="500">
        <md-dialog ref="dialog1">
          <div class="md-dialog-content">
            <form>
              <md-input-container>
                <label>Test</label>
                <md-input></md-input>
              </md-input-container>
            </form>
          </div>

          <md-button class="md-primary" @click="closeDialog('dialog1')">Close</md-button>
        </md-dialog>

        <md-dialog md-open-from="#trigger" md-close-to="#trigger" ref="dialog2">
          <div class="md-dialog-content">
            <form>
              <md-input-container>
                <label>Test</label>
                <md-input></md-input>
              </md-input-container>
            </form>
          </div>

          <md-button class="md-primary" @click="closeDialog('dialog2')">Close</md-button>
        </md-dialog>

        <md-button class="md-primary md-raised" @click="openDialog('dialog1')">Simple</md-button>
        <md-button class="md-fab md-fab-bottom-right" id="trigger" @click="openDialog('dialog2')">
          <md-icon>add<md-icon>
        </md-button>
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
      openDialog(ref) {
        this.$refs[ref].open();
      },
      closeDialog(ref) {
        this.$refs[ref].close();
      }
    }
  };
</script>
