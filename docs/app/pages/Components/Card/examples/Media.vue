<template>
  <div>
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Media card</div>
          <div class="md-subhead">Normal size</div>
        </md-card-header-text>

        <md-card-media>
          <img src="assets/examples/avatar-2.jpg" alt="People">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>

    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Media card</div>
          <div class="md-subhead">Medium size</div>
        </md-card-header-text>

        <md-card-media md-medium>
          <img src="assets/examples/card-weather.png" alt="People">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>

    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Media card</div>
          <div class="md-subhead">Big size</div>
        </md-card-header-text>

        <md-card-media md-big>
          <img src="assets/examples/cover.png" alt="People">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>

    <md-card>
      <md-card-media-actions>
        <md-card-media>
          <img src="assets/examples/villains.png" alt="Cover">
        </md-card-media>

        <md-card-actions>
          <md-button class="md-icon-button">
            <md-icon>favorite</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>bookmark</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>share</md-icon>
          </md-button>
        </md-card-actions>
      </md-card-media-actions>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>

<script>
export default {
  name: 'Media'
}
</script>
