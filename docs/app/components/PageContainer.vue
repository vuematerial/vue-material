<template>
  <transition name="page-container" appear>
    <div class="page-container main-container" :class="{ centered }">
      <ad-manager />

      <slot />
    </div>
  </transition>
</template>

<script>
  import * as types from 'store/mutation-types'
  import { mapState, mapActions } from 'vuex'
  import AdManager from './AdManager'

  export default {
    name: 'PageContainer',
    components: {
      AdManager
    },
    props: {
      title: String,
      centered: Boolean
    },
    computed: {
      ...mapState({
        currentTheme: 'theme'
      })
    },
    methods: {
      ...mapActions({
        setPageTitle: types.SET_PAGE_TITLE
      })
    },
    created () {
      this.$material.theming.theme = this.currentTheme
      this.setPageTitle(this.title)
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/theme/engine";

  $ad-responsive-big: 1690px;

  .page-container.centered {
    max-width: 1100px;
    margin: 0 auto;
    padding: 16px;
    transition: .4s $md-transition-default-timing;
    transition-property: width;
  }

  @media(min-width:981px){
    .page-container.centered{

      margin-right: 280px;
    }

  }

  .page-container-leave-active {
    display: none;
  }

  .page-container-enter-active {
    opacity: 0;
    transform: translate3d(0, 150px, 0);
    transition-property: opacity, transform;
    will-change: opacity, transform;

    .ad-manager {
      display: none;
    }
  }

  .page-container-enter-to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  >>> .page-container-section {
    letter-spacing: .01em;
    line-height: 1.6em;

    + .page-container-section {
      margin-top: 32px;
    }

    p >,
    li >,
    .note-block {
      code {
        padding: 0 4px;
        display: inline-block;
        color: md-get-palette-color(red, A200);
        background: rgba(#000, .07);
        border-radius: 2px;
        line-height: 1.45em;
      }
    }

    p,
    .md-layout-row {
      + .code-example {
        margin-top: 1em;
      }
    }
  }

  .ad-manager{
    margin-bottom: 0 !important;
    position: fixed;
  }

  .ad-manager .carbon-ads{
    background: red;
  }

  @media (min-width: $ad-responsive-big) {
    .ad-manager >>> .carbon-ads {
      margin: 0;
      position: fixed;
      bottom: 0;
      right: 24px;
      z-index: 1000;
    }
  }

  @media(max-width: 960px){
    .ad-manager{
      position: relative;
      >>>.carbon-ads{
        float: none;
        margin: 0;
        display: flex;
        #cf{
          width: 300px !important;
          img{
            float: left;
            margin-right: 10px;
            border-radius: 2px;
          }
        }
      }
    }
  }
</style>

<style lang="scss">

#docs #carbon-ads > div {
  display: flex;
  z-index: 100;
  margin: 0 20px 20px 0;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
  Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 11px;
  max-width: 130px;
  border-radius: 3px;
  background-color: hsl(0, 0%, 98%);
  box-shadow: 0 0 1px hsla(0, 0%, 0%, .15);
}

#docs #carbon-ads > div a {
  text-decoration: none;
  color: #111;
}

#docs #carbon-ads > div a:hover {
  color: #111;
}

#docs .carbon-img {
  display: block;
  margin-bottom: 8px;

  line-height: 1;
  max-width: 130px;
}

#docs .carbon-img img {
  display: block;
  margin: 0 auto;

  width: 130px;
  max-width: 130px;
  height: auto;
  border-radius: 3px 3px 0 0;
}

#docs .carbon-text {
  display: block;
  padding: 0 10px 8px;

  line-height: 1.35;
  text-align: left;
}

#docs .carbon-poweredby {
  display: block;
  padding: 10px;

  font-size: 8px;
  font-weight: 600;
  line-height: 0;
  letter-spacing: .5px;
  text-transform: uppercase;
  background: repeating-linear-gradient(-45deg, transparent, transparent 5px, hsla(0, 0%, 0%, .025) 5px, hsla(0, 0%, 0%, .025) 10px) hsla(203, 11%, 95%, .4);
}


@media only screen and (min-width: 320px) and (max-width: 759px) {
  #docs #carbon-ads > div {
    float: none;
    position: relative;
    margin: 20px 0;

    max-width: 330px;
  }

  #docs .carbon-wrap {
    display: flex;

    flex-direction: row;
  }

  #docs .carbon-img {
    margin: 0;
  }

  #docs .carbon-text {
    padding: 10px 10px 0 10px;

    font-size: 12px;
  }

  #docs .carbon-poweredby {
    position: absolute;
    right: 0;
    bottom: 0;

    text-align: center;
    border-radius: 0;
    border-top-left-radius: 3px;
  }
}
</style>
