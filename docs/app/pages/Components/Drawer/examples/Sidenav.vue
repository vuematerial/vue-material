<template>
  <div class="page-viewport">
    <md-button @click="leftVisible = true">Open Left Drawer</md-button>
    <md-button @click="rightVisible = true">Open Right Drawer</md-button>

    <md-drawer :md-visible.sync="leftVisible">
      Left
    </md-drawer>

    <md-drawer class="md-right" :md-visible.sync="rightVisible">
      Right
    </md-drawer>
  </div>
</template>

<style lang="scss" scoped>
  .page-viewport {
    max-width: 480px;
    height: 560px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    max-width: calc(100vw - 125px); // only for this demo
  }
</style>

<script>
  export default {
    name: 'Sidenav',
    data: () => ({
      leftVisible: false,
      rightVisible: false
    })
  }
</script>
