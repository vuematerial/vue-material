<template>
  <div class="md-card-media-cover" :class="coverClasses">
    <slot />
    <div class="md-card-backdrop" :style="coverStyles" v-if="mdTextScrim" ref="backdrop"></div>
  </div>
</template>

<script>
  export default {
    name: 'MdCardMediaCover',
    props: {
      mdTextScrim: Boolean,
      mdSolid: Boolean
    },
    data: () => ({
      backdropBackground: {}
    }),
    computed: {
      coverClasses () {
        return {
          'md-text-scrim': this.mdTextScrim,
          'md-solid': this.mdSolid
        }
      },
      coverStyles () {
        return {
          background: this.backdropBackground
        }
      }
    },
    methods: {
      applyScrimColor (darkness) {
        if (this.$refs.backdrop) {
          this.backdropBackground = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, ${darkness / 2}) 66%, rgba(0, 0, 0, ${darkness}) 100%)`
        }
      },
      applySolidColor (darkness) {
        let area = this.$el.querySelector('.md-card-area')

        if (area) {
          area.style.background = `rgba(0, 0, 0, ${darkness})`
        }
      },
      getImageLightness (image, onLoad, onError) {
        let canvas = document.createElement('canvas')

        image.crossOrigin = 'Anonymous'

        image.onload = function () {
          let colorSum = 0
          let ctx
          let imageData
          let imageMetadata
          let r
          let g
          let b
          let average

          canvas.width = this.width
          canvas.height = this.height
          ctx = canvas.getContext('2d')

          ctx.drawImage(this, 0, 0)

          imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
          imageMetadata = imageData.data

          for (let x = 0, len = imageMetadata.length; x < len; x += 4) {
            r = imageMetadata[x]
            g = imageMetadata[x + 1]
            b = imageMetadata[x + 2]

            average = Math.floor((r + g + b) / 3)
            colorSum += average
          }

          onLoad(Math.floor(colorSum / (this.width * this.height)))
        }

        image.onerror = onError
      }
    },
    mounted () {
      const applyBackground = (darkness = 0.6) => {
        if (this.mdTextScrim) {
          this.applyScrimColor(darkness)
        } else if (this.mdSolid) {
          this.applySolidColor(darkness)
        }
      }
      let image = this.$el.querySelector('img')

      if (image && (this.mdTextScrim || this.mdSolid)) {
        this.getImageLightness(image, (lightness) => {
          let limit = 256
          let darkness = (Math.abs(limit - lightness) * 100 / limit + 15) / 100

          if (darkness >= 0.7) {
            darkness = 0.7
          }

          applyBackground(darkness)
        }, applyBackground)
      }
    }
  }
</script>

<style lang="scss">
  .md-card-media-cover {
    position: relative;
    color: #fff;

    &.md-solid {
      .md-card-area {
        background-color: rgba(#000, .54);
      }
    }

    &.md-text-scrim {
      .md-card-backdrop {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
      }
    }

    .md-card-area {
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2;
    }

    .md-card-header {
      display: flex;
      flex-direction: column;

      + .md-card-actions {
        padding-top: 0;
      }
    }

    .md-subhead {
      opacity: 1;
    }

    .md-card-header,
    .md-card-actions {
      .md-button:not(.md-primary):not(.md-accent) {
        color: #fff !important;

        &.md-icon-button {
          .md-icon {
            color: #fff !important;
          }
        }
      }
    }
  }
</style>
