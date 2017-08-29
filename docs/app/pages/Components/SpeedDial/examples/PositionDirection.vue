<template>
  <div class="example">
    <md-speed-dial :class="topPosition" md-direction="bottom">
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

    <md-speed-dial :class="bottomPosition">
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

    <div class="demo-option">
      <div>
        <label for="top">Top</label>
        <select id="top" v-model="topPosition">
          <option value="md-top-left">Left</option>
          <option value="md-top-center">Center</option>
          <option value="md-top-right">Right</option>
        </select>
      </div>

      <div>
        <label for="bottom">Bottom</label>
        <select id="bottom" v-model="bottomPosition">
          <option value="md-bottom-left">Left</option>
          <option value="md-bottom-center">Center</option>
          <option value="md-bottom-right">Right</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PositionDirection',
  data: () => ({
    topPosition: 'md-top-left',
    bottomPosition: 'md-bottom-left'
  })
}
</script>

<style lang="scss" scoped>
  .example {
    min-height: 300px;
  }

  .demo-option {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    div {
      margin: 0 6px;
      display: flex;
      flex-direction: column;
    }
  }
</style>
