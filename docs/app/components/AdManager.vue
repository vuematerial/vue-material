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
    right: 0;
    bottom: 0;
    border-top-left-radius: 4px;
    z-index: 2000;
    margin-bottom: 150px;

    @media (max-width: $ad-responsive-small) {
      display: flex;
    }
  }

  .home-page .ad-manager{
    background: #303030;
  }

  .code-fund {
    max-width: 175px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    float: right;
    position: relative;
    z-index: 10;
    font-size: 12px;
    line-height: 1.5em;

    .splash-container & {
      max-width: 530px;
      min-height: 100px;
      margin: 0px auto 8px;
      float: none;
      background: none !important;
    }
  }
</style>
