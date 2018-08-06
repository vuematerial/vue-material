<template>
  <div class="ad-manager" v-if="codeFundData">
    <div class="code-fund" :class="{ static: isStatic }">
      <a target="_blank" :href="codeFundData.link" class="code-fund-image">
        <md-ripple>
          <img :src="codeFundData.image">
        </md-ripple>
      </a>

      <div class="code-fund-data">
        <a target="_blank" :href="codeFundData.link" class="code-fund-header">{{ codeFundData.headline }}</a>
        <a target="_blank" :href="codeFundData.link" class="code-fund-content">{{ codeFundData.description }}</a>
        <a target="_blank" :href="codeFundData.poweredByLink" class="code-fund-name">ads via codefund.io</a>
      </div>

      <img :src="codeFundData.pixel" alt="Codefund Pixel" class="code-fund-pixel">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AdManager',
    data: () => ({
      codeFundId: 'e2b197ea-5aca-408e-96fc-088ad5be2280',
      codeFundData: null,
      isStatic: false
    }),
    methods: {
      setStatic () {
        window.requestAnimationFrame(() => {
          const scrollEl = document.documentElement
          const container = document.querySelector('.container')

          this.isStatic = scrollEl.offsetHeight >= container.offsetHeight
        })
      }
    },
    mounted () {
      this.$http.get(`https://codefund.io/t/s/${this.codeFundId}/details.json`).then(({ data }) => {
        this.$set(this, 'codeFundData', data)
        this.setStatic()
      })
      window.addEventListener('resize', this.setStatic, false)
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.setStatic)
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/theme/engine";

  $ad-responsive-big: 1690px;
  $ad-responsive-small: 768px;

  @mixin ad-theme ($hue, $color) {
    .code-fund {
      background: md-get-palette-color(grey, $hue);
    }

    .code-fund-header,
    .code-fund-content {
      color: rgba($color, .7);

      &:hover {
        color: $color;
      }
    }

    .code-fund-name {
      color: rgba($color, .38);

      &:hover {
        color: rgba($color, .7);
      }
    }
  }

  .ad-manager {
    margin: 0 -16px -16px;

    @media (max-width: $ad-responsive-small) {
      display: flex;
    }
  }

  .code-fund {
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
      &:not(.static) {
        margin: 0;
        position: fixed;
        right: 16px;
        bottom: 16px;
        z-index: 1000;
      }
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

    a {
      display: block;
    }
  }

  .code-fund-image {
    color: #fff !important;

    &:hover {
      opacity: .85;
    }
  }

  .code-fund-header {
    margin-top: .5em;
    font-weight: 600;
    line-height: 1.3em;
  }

  .code-fund-content {
    margin-top: 1em;

    &:hover {
      text-decoration: none;
    }
  }

  .code-fund-name {
    margin-top: .5em;
    font-size: 11px;
  }

  .code-fund-name,
  .code-fund-description {
    &:hover {
      text-decoration: underline;
    }
  }

  .code-fund-pixel {
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
