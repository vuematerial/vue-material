<template>
  <div>
    <md-menu>
      <md-button md-menu-trigger>Default</md-button>

      <md-menu-content>
        <md-menu-item>My Item 1</md-menu-item>
        <md-menu-item>My Item 2</md-menu-item>
        <md-menu-item>My Item 3</md-menu-item>
      </md-menu-content>
    </md-menu>

    <md-menu md-size="medium" md-align-trigger>
      <md-button md-menu-trigger>Align with trigger</md-button>

      <md-menu-content>
        <md-menu-item>My Item 1</md-menu-item>
        <md-menu-item>My Item 2</md-menu-item>
        <md-menu-item>My Item 3</md-menu-item>
      </md-menu-content>
    </md-menu>

    <md-menu md-size="medium" :md-offset-x="127" :md-offset-y="-36">
      <md-button md-menu-trigger>Custom Offset</md-button>

      <md-menu-content>
        <md-menu-item>My Item 1</md-menu-item>
        <md-menu-item>My Item 2</md-menu-item>
        <md-menu-item>My Item 3</md-menu-item>
      </md-menu-content>
    </md-menu>
  </div>
</template>

<script>
  export default {
    name: 'MenuAlignments'
  }
</script>

<style lang="scss" scoped>
  .md-menu {
    margin: 24px;
  }
</style>
