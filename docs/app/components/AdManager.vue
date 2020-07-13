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

        let carbonScript = document.createElement('script');

        carbonScript.setAttribute('async', '');
        carbonScript.setAttribute('type', 'text/javascript');
        carbonScript.setAttribute('src', '//cdn.carbonads.com/carbon.js?serve=CKYIL2QW&placement=vuematerialio');
        carbonScript.setAttribute('id', '_carbonads_js');

        document.getElementById('carbon-ads').appendChild(carbonScript);
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

  #carbonads {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,
  Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

#carbonads {
  display: flex;
  max-width: 330px;
  background-color: hsl(0, 0%, 98%);
  box-shadow: 0 1px 4px 1px hsla(0, 0%, 0%, .1);
}

#carbonads a {
  color: inherit;
  text-decoration: none;
}

#carbonads a:hover {
  color: inherit;
}

#carbonads span {
  position: relative;
  display: block;
  overflow: hidden;
}

#carbonads .carbon-wrap {
  display: flex;
}

.carbon-img {
  display: block;
  margin: 0;
  line-height: 1;
}

.carbon-img img {
  display: block;
}

.carbon-text {
  font-size: 13px;
  padding: 10px;
  line-height: 1.5;
  text-align: left;
}

.carbon-poweredby {
  display: block;
  padding: 8px 10px;
  background: repeating-linear-gradient(-45deg, transparent, transparent 5px, hsla(0, 0%, 0%, .025) 5px, hsla(0, 0%, 0%, .025) 10px) hsla(203, 11%, 95%, .4);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: .5px;
  font-weight: 600;
  font-size: 9px;
  line-height: 1;
}
</style>
