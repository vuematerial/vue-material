<template>
  <md-dialog class="md-dialog-prompt" ref="dialog" @close="fireCloseEvent('cancel')">
    <md-dialog-title v-if="mdTitle">{{ mdTitle }}</md-dialog-title>

    <md-dialog-content v-if="mdContentHtml" v-html="mdContentHtml"></md-dialog-content>
    <md-dialog-content v-if="mdContent">{{ mdContent }}</md-dialog-content>

    <md-dialog-content>
      <md-input-container>
        <md-input
          ref="input"
          :id="mdInputId"
          :name="mdInputName"
          :maxlength="mdInputMaxlength"
          :placeholder="mdInputPlaceholder"
          :value="value"
          @keydown.enter.native="confirmValue"></md-input>
      </md-input-container>
    </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click="close('cancel')">{{ mdCancelText }}</md-button>
      <md-button class="md-primary" @click="confirmValue">{{ mdOkText }}</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
  export default {
    name: 'md-dialog-prompt',
    props: {
      value: {
        type: [String, Number],
        required: true
      },
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
      },
      mdInputId: String,
      mdInputName: String,
      mdInputMaxlength: [String, Number],
      mdInputPlaceholder: String
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

        window.setTimeout(() => {
          this.$refs.input.$el.focus();
        });
      },
      close(type) {
        this.fireCloseEvent(type);
        this.debounce = true;
        this.$refs.dialog.close();
      },
      confirmValue() {
        this.$emit('input', this.$refs.input.$el.value);
        this.close('ok');
      }
    }
  };
</script>
