<template>
  <md-card class="md-app-content md-flex" v-bind="$attrs" v-on="$listeners" v-if="showCard">
    <slot />
  </md-card>

  <md-content class="md-app-content md-flex" v-bind="$attrs" v-on="$listeners" v-else>
    <slot />
  </md-content>
</template>

<script>
  export default {
    name: 'MdAppContent',
    inject: ['MdApp'],
    computed: {
      showCard () {
        return this.MdApp.options && this.MdApp.options.mode === 'overlap'
      }
    }
  }
</script>

<style lang="scss">
  .md-app-content {
    height: 100%;

    .md-card {
      margin-right: 16px;
      margin-left: 16px;
      overflow: visible;
    }
  }
</style>
