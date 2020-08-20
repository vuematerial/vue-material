<template>
  <md-content class="ad-manager" id="ad-manager" md-theme="docs-dark">
    <div id="carbon-ads" class="carbon-ads"></div>
  </md-content>
</template>

<script>
  export default {
    name: 'AdManager',
    methods: {
      getSponsor () {

        let carbonScript = document.createElement('script')

        carbonScript.setAttribute('async', '')
        carbonScript.setAttribute('type', 'text/javascript')
        carbonScript.setAttribute('src', '//cdn.carbonads.com/carbon.js?serve=CKYIL2QW&placement=vuematerialio')
        carbonScript.setAttribute('id', '_carbonads_js')

        document.getElementById('carbon-ads').appendChild(carbonScript)
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

</style>
