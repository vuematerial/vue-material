<template>
  <md-content class="md-app-content md-flex" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </md-content>
</template>

<script>
  export default {
    name: 'MdAppContent',
    inject: ['MdApp']
  }
</script>
