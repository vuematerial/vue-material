<template>
  <md-dialog class="md-dialog-confirm" ref="dialog" @close="fireCloseEvent('cancel')">
    <md-dialog-title v-if="mdTitle">{{ mdTitle }}</md-dialog-title>

    <md-dialog-content v-if="mdContentHtml" v-html="mdContentHtml"></md-dialog-content>
    <md-dialog-content v-else>{{ mdContent }}</md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click="close('cancel')">{{ mdCancelText }}</md-button>
      <md-button class="md-primary" @click="close('ok')">{{ mdOkText }}</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
  export default {
    name: 'md-dialog-confirm',
    props: {
      mdTitle: String,
      mdContent: String,
      mdContentHtml: String,
      mdOkText: {
        type: String,
        default: 'Ok'
      },
      mdCancelText: {
        type: String,
        default: 'Cancel'
      }
    },
    data: () => ({
      debounce: false
    }),
    methods: {
      fireCloseEvent(type) {
        if (!this.debounce) {
          this.$emit('close', type);
        }
      },
      open() {
        this.$emit('open');
        this.debounce = false;
        this.$refs.dialog.open();
      },
      close(type) {
        this.fireCloseEvent(type);
        this.debounce = true;
        this.$refs.dialog.close();
      }
    },
    mounted() {
      if (!this.mdContent && !this.mdContentHtml) {
        throw new Error('Missing md-content or md-content-html attributes');
      }
    }
  };
</script>
