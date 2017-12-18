<template>
  <md-dialog v-bind="$attrs" :md-fullscreen="false" @md-opened="setInputFocus">
    <md-dialog-title v-if="mdTitle" :class="{'md-rtl-support' : mdRtl}">{{ mdTitle }}</md-dialog-title>
    <md-dialog-content v-if="mdContent" v-html="mdContent" :class="{'md-rtl-support' : mdRtl}"/>

    <md-dialog-content>
      <md-field>
        <md-input
          ref="input"
          v-model="inputValue"
          :id="mdInputId"
          :name="mdInputName"
          :maxlength="mdInputMaxlength"
          :placeholder="mdInputPlaceholder"
          @keydown.enter.native="onConfirm" />
      </md-field>
    </md-dialog-content>

    <md-dialog-actions :class="{'md-rtl-support-direction' : mdRtl}">
      <md-button class="md-primary" @click="onCancel">{{ mdCancelText }}</md-button>
      <md-button class="md-primary" @click="onConfirm">{{ mdConfirmText }}</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
  export default {
    name: 'MdDialogPrompt',
    props: {
      value: {},
      mdTitle: String,
      mdInputName: String,
      mdInputId: String,
      mdInputMaxlength: [String, Number],
      mdInputPlaceholder: [String, Number],
      mdContent: String,
      mdConfirmText: {
        type: String,
        default: 'Ok'
      },
      mdCancelText: {
        type: String,
        default: 'Cancel'
      }
    },
    data: () => ({
      inputValue: null,
      mdRtl : false
    }),
    watch: {
      value () {
        this.inputValue = this.value
      }
    },
    methods: {
      onCancel () {
        this.$emit('md-cancel')
        this.$emit('update:mdActive', false)
      },
      onConfirm () {
        this.$emit('input', this.inputValue)
        this.$emit('md-confirm', this.inputValue)
        this.$emit('update:mdActive', false)
      },
      setInputFocus () {
        window.setTimeout(() => {
          this.$refs.input.$el.focus()
        }, 50)
      }
    },
    created () {
      this.inputValue = this.value
      this.mdRtl = this.$material.theming.rtlSupport;
    }
  }
</script>
