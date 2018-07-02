<template>
  <div class="example">
    <div class="demo-option">
      <md-field class="select">
        <label for="top">Top</label>
        <md-select id="top" v-model="topPosition">
          <md-option value="md-top-left">Left</md-option>
          <md-option value="md-top-center">Center</md-option>
          <md-option value="md-top-right">Right</md-option>
        </md-select>
      </md-field>

      <md-field class="select">
        <label for="bottom">Bottom</label>
        <md-select id="bottom" v-model="bottomPosition">
          <md-option value="md-bottom-left">Left</md-option>
          <md-option value="md-bottom-center">Center</md-option>
          <md-option value="md-bottom-right">Right</md-option>
        </md-select>
      </md-field>
    </div>
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
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .select {
      margin: 0 6px;
      display: inline-flex;
      width: auto;
    }
  }
</style>
