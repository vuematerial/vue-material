<template>
  <md-dialog v-bind="$attrs" v-on="$listeners" :md-fullscreen="false">
    <md-dialog-title v-if="mdTitle" :class="{'md-rtl-support' : mdRtl}">{{ mdTitle }}</md-dialog-title>
    <md-dialog-content v-if="mdContent" v-html="mdContent"/>

    <md-dialog-actions :class="{'md-rtl-support-direction' : mdRtl}">
      <md-button class="md-primary" @click="onCancel">{{ mdCancelText }}</md-button>
      <md-button class="md-primary" @click="onConfirm">{{ mdConfirmText }}</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
  export default {
    name: 'MdDialogConfirm',
    props: {
      mdTitle: String,
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
    data:()=>({
      mdRtl: false
    }),
    methods: {
      onCancel () {
        this.$emit('md-cancel')
        this.$emit('update:mdActive', false)
      },
      onConfirm () {
        this.$emit('md-confirm')
        this.$emit('update:mdActive', false)
      }
    },
    created(){
      this.mdRtl = this.$material.theming.rtlSupport;
    }
  }
</script>
