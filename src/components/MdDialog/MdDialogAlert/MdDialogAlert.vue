<template>
  <md-dialog v-bind="$attrs" v-on="$listeners" :md-fullscreen="false">
    <md-dialog-title v-if="mdTitle" :class="{'md-rtl-support' : mdRtl}">{{ mdTitle }}</md-dialog-title>
    <md-dialog-content v-if="mdContent" v-html="mdContent" :class="{'md-rtl-support' : mdRtl}"/>

    <md-dialog-actions :class="{'md-rtl-support-direction' : mdRtl}">
      <md-button
        class="md-primary"
        @click="$emit('update:mdActive', false)">
        {{ mdConfirmText }}
      </md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
  export default {
    name: 'MdDialogAlert',
    props: {
      mdTitle: String,
      mdContent: String,
      mdConfirmText: {
        type: String,
        default: 'Ok'
      },
      mdRtl: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
