<template>
  <div class="page-container md-layout-row">
    <md-drawer md-permanent="full">
      <md-toolbar class="md-transparent" md-elevation="0">
        Navigation
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <main class="page-wrapper md-flex md-layout-column">
      <md-toolbar class="md-primary">
        <span class="md-title">My Title</span>
      </md-toolbar>

      <div class="page-content md-flex">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  .page-container {
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .page-content {
    padding: 16px;
    border-left: 1px solid rgba(#000, .12);
  }
</style>

<script>
  export default {
    name: 'PermanentFull'
  }
</script>
