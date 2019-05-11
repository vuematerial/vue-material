<template>
  <md-content class="ad-manager" id="ad-manager" md-theme="docs-dark">
    <div id="code-fund" class="code-fund"></div>
  </md-content>
</template>

<script>
  export default {
    name: 'AdManager',
    methods: {
      getSponsor () {
        let sponsorUrl = 'https://api.codefund.app/properties/60/funder.html'

        if (this.$route.name !== 'home') {
          sponsorUrl += '?theme=light'
        }

        this.$http.get(sponsorUrl).then(({ data }) => {
          document.getElementById('code-fund').innerHTML = data;
        })
      }
    },
    mounted () {
      this.getSponsor()
    },
    updated () {
      this.getSponsor()
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/theme/engine";

  $ad-responsive-big: 1690px;
  $ad-responsive-small: 768px;

  .ad-manager {
    width: calc(100% + 32px);
    margin: 0 -16px -16px;

    @media (max-width: $ad-responsive-small) {
      display: flex;
    }
  }

  .code-fund {
    max-width: 175px;
    margin: 0 16px 24px 16px;
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
      top: 80px;
      right: 24px;
      z-index: 1000;
    }

    @media (max-width: $ad-responsive-small) {
      max-width: none;
      margin: 8px auto 16px;
      float: none;
    }

    .splash-container & {
      @media (max-width: $ad-responsive-big) {
        max-width: 530px;
        min-height: 100px;
        margin: 60px auto 8px;
        float: none;
        background: none !important;
      }
    }
  }
</style>
