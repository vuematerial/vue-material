<template>
  <md-content class="ad-manager" id="ad-manager" md-theme="default">
    <div id="code-sponsor" class="code-sponsor">
      <span class="code-sponsor-header">Vue Material is proudly sponsored by:</span>

      <a :href="linkHref" class="code-sponsor-content" target="_blank" rel="noopener">
        <strong class="code-sponsor-name">Rollbar</strong>
        <span class="code-sponsor-description">Real-time JavaScript error monitoring, alerting, and analytics for developers 🚀</span>
      </a>

      <img class="code-sponsor-pixel" :src="pixelHref" />
    </div>
  </md-content>
</template>

<script>
  const isProd = process.env.NODE_ENV === 'production'
  const token = '0989e0dbf1919e50f5b34ab00c81fa6f'

  export default {
    name: 'AdManager',
    computed: {
      linkHref () {
        if (isProd) {
          return `https://codesponsor.io/t/c/${token}`
        }

        return false
      },
      pixelHref () {
        if (isProd) {
          return `https://codesponsor.io/t/l/${token}/pixel.png`
        }

        return false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/theme/engine";

  $ad-responsive-big: 1690px;
  $ad-responsive-small: 768px;

  @mixin ad-theme ($hue, $color) {
    .code-sponsor {
      background: md-get-palette-color(grey, $hue);
      .code-sponsor-header {
        color: rgba($color, .54);
      }
    }

    .code-sponsor-content {
      color: rgba($color, .7);
      &:hover {
        color: $color;
      }
    }
  }

  .ad-manager {
    width: calc(100% + 32px);
    margin: 0 -16px -16px;

    @media (max-width: $ad-responsive-small) {
      display: flex;
    }
  }

  .code-sponsor {
    max-width: 175px;
    margin: 7px 16px 24px 16px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    float: right;
    position: relative;
    z-index: 10;
    font-size: 12px;
    line-height: 1.5em;

    @media (min-width: $ad-responsive-big) {
      margin: 0;
      position: fixed;
      right: 16px;
      bottom: 16px;
      z-index: 1000;
    }

    @media (max-width: $ad-responsive-small) {
      max-width: none;
      margin-bottom: 16px;
      float: none;
    }

    .splash-container & {
      @media (max-width: $ad-responsive-big) {
        max-width: 530px;
        min-height: 100px;
        margin: 8px auto;
        float: none;
        background: none !important;
      }
    }
  }

  .code-sponsor-header {
    font-size: 11px;
    line-height: 1.3em;
  }

  .code-sponsor-content {
    margin-top: 1em;
    &:hover {
      text-decoration: none;
    }
  }

  .code-sponsor-name,
  .code-sponsor-description {
    &:hover {
      text-decoration: underline;
    }
  }

  .code-sponsor-name {
    margin-bottom: .5em;
    display: block;
    font-weight: 600;
  }

  .code-sponsor-pixel {
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    border: 0;
  }

  .main-container {
    @include ad-theme(200, #000);
  }

  .splash-container {
    @media (min-width: $ad-responsive-big) {
      @include ad-theme(800, #fff);
    }
  }
</style>
