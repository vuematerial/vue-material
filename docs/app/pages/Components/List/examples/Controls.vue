<template>
  <div class="full-control">
    <md-list>
      <md-subheader>Notifications</md-subheader>

      <md-list-item>
        <md-checkbox v-model="notification" value="preview" />
        <span class="md-list-item-text">Show content preview</span>
      </md-list-item>

      <md-list-item>
        <md-checkbox v-model="notification" value="sound" />
        <span class="md-list-item-text">Sound</span>
      </md-list-item>

      <md-list-item>
        <md-checkbox v-model="notification" value="vibrate" />
        <span class="md-list-item-text">Vibrate</span>
      </md-list-item>

      <md-list-item>
        <md-checkbox v-model="notification" value="light" />
        <span class="md-list-item-text">Notification light</span>
      </md-list-item>
    </md-list>

    <md-list>
      <md-subheader>Settings</md-subheader>

      <md-list-item>
        <md-icon>network_wifi</md-icon>
        <span class="md-list-item-text">WiFi</span>
        <md-switch v-model="settings.wifi" />
      </md-list-item>

      <md-list-item>
        <md-icon>bluetooth</md-icon>
        <span class="md-list-item-text">Bluetooth</span>
        <md-switch v-model="settings.bluetooth" />
      </md-list-item>

      <md-list-item>
        <md-icon>data_usage</md-icon>
        <span class="md-list-item-text">Data Usage</span>
      </md-list-item>
    </md-list>

    <md-list>
      <md-subheader>Ringtone</md-subheader>

      <md-list-item>
        <md-radio v-model="ringtone" value="joy" />
        <span class="md-list-item-text">Joy</span>
      </md-list-item>

      <md-list-item>
        <md-radio v-model="ringtone" value="metal" />
        <span class="md-list-item-text">Metal</span>
      </md-list-item>

      <md-list-item>
        <md-radio v-model="ringtone" value="peace" />
        <span class="md-list-item-text">Peace</span>
      </md-list-item>

      <md-list-item>
        <md-radio v-model="ringtone" value="rock-night" />
        <span class="md-list-item-text">Rock night</span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
  export default {
    name: 'Controls',
    data: () => ({
      ringtone: 'peace',
      settings: {
        wifi: true,
        bluetooth: false
      },
      notification: ['sound', 'vibrate']
    })
  }
</script>

<style lang="scss" scoped>
  .full-control > .md-list {
    width: 320px;
    max-width: 100%;
    height: 400px;
    display: inline-block;
    overflow: auto;
    border: 1px solid rgba(#000, .12);
    vertical-align: top;
  }
</style>
