<template>
  <md-dialog class="md-dialog-alert" ref="dialog" @close="fireCloseEvent()">
    <md-dialog-title v-if="mdTitle">{{ mdTitle }}</md-dialog-title>

    <md-dialog-content v-if="mdContentHtml" v-html="mdContentHtml"></md-dialog-content>
    <md-dialog-content v-else>{{ mdContent }}</md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click="close()">{{ mdOkText }}</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
  export default {
    name: 'md-dialog-alert',
    props: {
      mdTitle: String,
      mdContent: String,
      mdContentHtml: String,
      mdOkText: {
        type: String,
        default: 'Ok'
      }
    },
    data: () => ({
      debounce: false
    }),
    methods: {
      fireCloseEvent() {
        if (!this.debounce) {
          this.$emit('close');
        }
      },
      open() {
        this.$emit('open');
        this.debounce = false;
        this.$refs.dialog.open();
      },
      close() {
        this.fireCloseEvent();
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
