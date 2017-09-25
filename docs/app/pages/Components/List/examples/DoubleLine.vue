<template>
  <div>
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

    <md-list class="md-double-line md-dense">
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
</template>

<script>
export default {
  name: 'DoubleLine'
}
</script>

<style lang="scss" scoped>
  .md-list {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }
</style>
