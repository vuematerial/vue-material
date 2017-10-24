<template>
  <div>
    <md-card>
      <md-card-media-cover>
        <md-card-media md-ratio="16:9">
          <img src="assets/examples/card-sky.jpg" alt="Skyscraper">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">Without text background</span>
            <span class="md-subhead">I bet you can't read this</span>
          </md-card-header>

          <md-card-actions>
            <md-button>Neither this</md-button>
            <md-button>Or this</md-button>
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>

    <md-card>
      <md-card-media-cover md-text-scrim>
        <md-card-media md-ratio="16:9">
          <img src="assets/examples/card-sky.jpg" alt="Skyscraper">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">Gradient background</span>
            <span class="md-subhead">16/9 image</span>
          </md-card-header>

          <md-card-actions>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>

    <md-card>
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="4:3">
          <img src="assets/examples/card-sky.jpg" alt="Skyscraper">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">Solid background</span>
            <span class="md-subhead">4/3 image</span>
          </md-card-header>
        </md-card-area>
      </md-card-media-cover>
    </md-card>

    <md-card>
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="1:1">
          <img src="assets/examples/card-sky.jpg" alt="Skyscraper">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">Solid background</span>
            <span class="md-subhead">1/1 image</span>
          </md-card-header>

          <md-card-actions>
            <md-button class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>share</md-icon>
            </md-button>
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
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
  name: 'MediaCover'
}
</script>
