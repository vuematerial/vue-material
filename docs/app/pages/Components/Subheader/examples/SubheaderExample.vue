<template>
  <div>
    <div class="viewport">
      <md-toolbar :md-elevation="1">
        <span class="md-title">Default</span>
      </md-toolbar>

      <md-list class="md-double-line">
        <md-subheader>Phone</md-subheader>

        <md-list-item>
          <md-icon class="md-primary">phone</md-icon>

          <div class="md-list-item-text">
            <span>(650) 555-1234</span>
            <span>Mobile</span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>sms</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item class="md-inset">
          <div class="md-list-item-text">
            <span>(650) 555-1234</span>
            <span>Mobile</span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon>sms</md-icon>
          </md-button>
        </md-list-item>

        <md-divider></md-divider>
        <md-subheader>Email</md-subheader>

        <md-list-item>
          <md-icon class="md-primary">email</md-icon>

          <div class="md-list-item-text">
            <span>aliconnors@example.com</span>
            <span>Personal</span>
          </div>
        </md-list-item>

        <md-list-item class="md-inset">
          <div class="md-list-item-text">
            <span>ali_connors@example.com</span>
            <span>Work</span>
          </div>
        </md-list-item>
      </md-list>
    </div>

    <div class="viewport">
      <md-toolbar :md-elevation="1">
        <span class="md-title">Primary</span>
      </md-toolbar>

      <md-list>
        <md-subheader class="md-primary">Navigation</md-subheader>

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

        <md-divider class="md-inset"></md-divider>
        <md-subheader class="md-primary">Contacts</md-subheader>

        <md-list-item>
          <md-avatar>
            <img src="https://placeimg.com/40/40/people/5" alt="People">
          </md-avatar>

          <span class="md-list-item-text">Abbey Christansen</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">chat_bubble</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <md-avatar>
            <img src="https://placeimg.com/40/40/people/1" alt="People">
          </md-avatar>

          <span class="md-list-item-text">Alex Nelson</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">chat_bubble</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <md-avatar>
            <img src="https://placeimg.com/40/40/people/6" alt="People">
          </md-avatar>

          <span class="md-list-item-text">Mary Johnson</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon>chat_bubble</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SubheaderExample'
  }
</script>

<style lang="scss" scoped>
  .viewport {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    overflow: auto;
    border: 1px solid rgba(#000, .12);
  }
</style>

