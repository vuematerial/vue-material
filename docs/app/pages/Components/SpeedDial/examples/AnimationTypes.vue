<template>
  <div class="example">
    Fling effect:
    <md-speed-dial md-direction="bottom">
      <md-speed-dial-target>
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

    Scale effect:
    <md-speed-dial md-effect="scale" md-direction="bottom">
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

    Opacity effect:
    <md-speed-dial md-effect="opacity" md-direction="bottom">
      <md-speed-dial-target class="md-plain">
        <md-icon>edit</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button class="md-icon-button">
          <md-icon>attachment</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>archive</md-icon>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
  </div>
</template>

<script>
export default {
  name: 'AnimationTypes'
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
