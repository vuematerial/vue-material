<template>
  <div class="carbon-ads-widget"></div>
</template>

<script>
  export default {
    name: 'AdManager',
    data: () => ({
      carbonEl: null
    }),
    methods: {
      saveAdsElements () {
        this.carbonEl = document.getElementById('carbonads')

        if (!this.carbonEl) {
          this.$destroy()
        }
      },
      appendCarbonAds() {
        const interval = window.setInterval(() => {
          const carbonAds = document.getElementById('carbonads')
          const container = document.querySelector('.container')
          const mainContainer = document.querySelector('.main-container')
          const splashContainer = document.querySelector('.splash-container')
          const adsContainer = document.querySelector('.carbon-ads-widget')

          if (carbonAds && container) {
            if (splashContainer) {
              adsContainer.appendChild(carbonAds)
            } else if (mainContainer) {
              mainContainer.insertBefore(carbonAds, mainContainer.firstChild)
            } else {
              container.insertBefore(carbonAds, container.firstChild)
            }

            window.clearInterval(interval)
          }
        }, 50)
      },
      moveCarbonAdsToBody() {
        if (this.carbonEl) {
          document.body.appendChild(this.carbonEl)
        }
      }
    },
    mounted () {
      this.saveAdsElements()
      this.appendCarbonAds()
    },
    beforeDestroy() {
      this.moveCarbonAdsToBody()
    }
  }
</script>

<style lang="scss">
  @import "~vue-material/theme/engine";

  $ad-responsive-big: 1670px;
  $ad-responsive-small: 600px;

  @mixin ad-theme ($hue, $color) {
    #carbonads {
      background: md-get-palette-color(grey, $hue);
    }

    .carbon-wrap a {
      color: rgba($color, .7);

      &:hover {
        color: $color;
      }
    }

    #carbonads .carbon-poweredby {
      color: rgba($color, .54);

      &:hover {
        color: rgba($color, .87);
      }
    }
  }

  .main-container {
    @include ad-theme(200, #000);
  }

  .splash-container {
    @media (min-width: $ad-responsive-big) {
      @include ad-theme(800, #fff);
    }
  }

  #carbonads {
    max-width: 162px;
    margin: 1em 0 24px 16px;
    padding: 16px;
    float: right;
    position: relative;
    z-index: 10;

    .splash-container & {
      @media (max-width: $ad-responsive-big) {
        background: #fff;
      }
    }

    @media (min-width: $ad-responsive-big) {
      margin: 0;
      position: fixed;
      right: 16px;
      bottom: 16px;
    }

    @media (max-width: $ad-responsive-small) {
      max-width: none;
      min-height: 100px;
      margin-left: 0;
      padding: 0;
      float: none;
    }

    .splash-container & {
      @media (max-width: $ad-responsive-big) {
        max-width: none;
        min-height: 100px;
        margin-left: 0;
        padding: 0;
        float: none;
      }
    }

    .carbon-wrap {
      display: flex;
      flex-direction: column;
      font-size: 12px;

      @media (max-width: $ad-responsive-small) {
        display: block;
      }

      .splash-container & {
        @media (max-width: $ad-responsive-big) {
          display: block;
        }
      }

      .carbon-img {
        @media (max-width: $ad-responsive-small) {
          margin-right: 16px;
          float: left;
        }

        .splash-container & {
          @media (max-width: $ad-responsive-big) {
            margin-right: 16px;
            float: left;
          }
        }
      }

      .carbon-text {
        line-height: 1.5em;

        @media (max-width: $ad-responsive-big) {
          padding-top: 1em;
          padding-right: 16px;
          display: block;
        }

        @media (min-width: $ad-responsive-big) {
          margin: 12px 0 8px;
        }
      }

      a {
        &:hover {
          text-decoration: none;
        }
      }
    }

    .carbon-poweredby {
      font-size: 11px;
    }
  }

  .carbon-ads-widget {
    #carbonads {
      @media (max-width: $ad-responsive-small) {
        margin-top: 16px;
        margin-left: 0;
      }
    }
  }
</style>
