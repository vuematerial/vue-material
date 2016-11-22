<template>
  <demo-page label="Components - Dialog">
    <div slot="examples">
      <demo-example label="Default" height="500">
        <md-dialog ref="dialog1">
          <md-dialog-content>
            <h2 class="md-title">Use Google's location service?</h2>

            <p>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</p>
          </md-dialog-content>

          <md-dialog-actions>
            <md-button class="md-primary" @click="closeDialog('dialog1')">Disagree</md-button>
            <md-button class="md-primary" @click="closeDialog('dialog1')">Agree</md-button>
          </md-dialog-actions>
        </md-dialog>

        <md-dialog md-open-from="#trigger" md-close-to="#trigger" ref="dialog2">
          <md-dialog-content>
            <h2 class="md-title">Create new note</h2>

            <form>
              <md-input-container>
                <label>Note</label>
                <md-textarea></md-textarea>
              </md-input-container>
            </form>
          </md-dialog-content>

          <md-dialog-actions>
            <md-button class="md-primary" @click="closeDialog('dialog2')">Cancel</md-button>
            <md-button class="md-primary" @click="closeDialog('dialog2')">Create</md-button>
          </md-dialog-actions>
        </md-dialog>

        <md-button class="md-primary md-raised" @click="openDialog('dialog1')">Simple</md-button>
        <md-button class="md-fab md-fab-bottom-right" id="trigger" @click="openDialog('dialog2')">
          <md-icon>add</md-icon>
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
