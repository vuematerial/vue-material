<template>
  <demo-page label="Components - Dialog">
    <div slot="examples">
      <demo-example label="Default" height="500">
        <md-dialog ref="dialog1">
          <md-dialog-title>Use Google's location service?</md-dialog-title>

          <md-dialog-content>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</md-dialog-content>

          <md-dialog-actions>
            <md-button class="md-primary" @click="closeDialog('dialog1')">Disagree</md-button>
            <md-button class="md-primary" @click="closeDialog('dialog1')">Agree</md-button>
          </md-dialog-actions>
        </md-dialog>

        <md-dialog-confirm
          :md-title="confirm.title"
          :md-content="confirm.content"
          :md-ok-text="confirm.ok"
          :md-cancel-text="confirm.cancel"
          @open="onOpen"
          @close="onClose"
          ref="dialog2">
        </md-dialog-confirm>

        <md-dialog md-open-from="#trigger" md-close-to="#trigger" ref="dialog3">
          <md-dialog-title>Create new note</md-dialog-title>

          <md-dialog-content>
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
        <md-button class="md-primary md-raised" @click="openDialog('dialog2')">Confirm</md-button>
        <md-button class="md-fab md-fab-bottom-right" id="trigger" @click="openDialog('dialog3')">
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
    data: () => ({
      confirm: {
        title: 'Use Google\'s location service?',
        content: 'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.',
        ok: 'Agree',
        cancel: 'Disagree'
      }
    }),
    methods: {
      openDialog(ref) {
        this.$refs[ref].open();
      },
      closeDialog(ref) {
        this.$refs[ref].close();
      },
      onOpen() {
        console.log('Opened');
      },
      onClose(type) {
        console.log('Closed', type);
      }
    }
  };
</script>
