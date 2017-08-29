<template>
  <div class="example">
    Hover as trigger:
    <md-speed-dial md-direction="bottom">
      <md-speed-dial-target @click="customClick">
        <md-icon>add</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button class="md-icon-button">
          <md-icon>note</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>event</md-icon>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>

    Click as trigger:
    <md-speed-dial md-event="click" md-direction="bottom">
      <md-speed-dial-target class="md-primary">
        <md-icon>my_location</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button class="md-icon-button">
          <md-icon>directions</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>streetview</md-icon>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
  </div>
</template>

<script>
export default {
  name: 'EventTriggers',
  methods: {
    customClick () {
      window.alert('You can have a custom click inside the target!')
    }
  }
}
</script>

<style lang="scss" scoped>
  .example {
    min-height: 180px;
  }

  .md-speed-dial {
    margin: 0 24px 0 8px;
  }
</style>
