<template>
  <splash-container splash class="home-page">
    <div id="splash" class="home-splash">
      <home-header />
      <ad-manager />
      <home-features />
    </div>

    <home-premium />
    <home-ecosystem />
    <home-sponsors />
  </splash-container>
</template>

<script>
  import HomeHeader from './HomeHeader'
  import HomeFeatures from './HomeFeatures'
  import HomeEcosystem from './HomeEcosystem'
  import HomePremium from './HomePremium'
  import HomeSponsors from './HomeSponsors'
  import AdManager from '../../components/AdManager'

  export default {
    name: 'Home',
    components: {
      AdManager,
      HomeHeader,
      HomeFeatures,
      HomeEcosystem,
      HomePremium,
      HomeSponsors,
      AdManager
    },
    methods: {
      scrollDown (target) {
        window.scroll({
          ...target,
          behavior: 'smooth'
        })
      }
    },
    mounted () {
      if (this.$route.hash === '#premium') {
        const premiumEl = document.querySelector('#premium')

        window.setTimeout(() => {
          this.scrollDown({
            top: premiumEl.offsetTop,
            left: 0
          })
        }, 100)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/components/MdIcon/mixins";
  @import "~vue-material/components/MdLayout/mixins";

  .home-page  {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: normal;
    font-size: 15px;
    line-height: 1.7em;

    section {
      padding: 32px 0 48px;
    }
  }

  .home-splash {
    max-width: 1312px;
    padding: 24px 0;
    position: relative;
  }

  @keyframes home-icon-indicator {
    50% {
      opacity: 1;
    }

    to {
      transform: translate3D(-50%, 80%, 0);
      opacity: 0;
    }
  }

  .home-icon-indicator {
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    animation: home-icon-indicator 2s infinite $md-transition-stand-timing;
  }
</style>

<style lang="scss">
  .page-wrapper {
    max-width: 1344px;
    margin: 0 auto;
    padding: 0 16px;
  }

  .home-title {
    max-width: 1312px;
    margin-bottom: 36px;
    position: relative;

    .md-icon {
      position: absolute;
      top: 2px;
      bottom: 0;
      left: -48px;
    }
  }

  #splash .carbon-ads{
    margin: auto;
  }

  #splash.home-splash #carbon-ads > div {
    display: block;
    margin: 10px auto;
    padding: 1em;

    font-size: 14px;
    line-height: 1.35;
    overflow: hidden;
    max-width: 360px;
    transition: background-color .2s ease-in-out;
    border-radius: 5px;
    background-color: hsl(0, 0%, 15%);
  }

  #splash.home-splash #carbonads:hover {
    background-color: hsl(0, 0%, 13%);
  }

  #splash.home-splash #carbon-ads > div > a:hover {
    text-decoration: none;
  }

  #splash #carbon-ads > div span {
    display: block;
    position: relative;

    overflow: hidden;
  }

  #splash .carbon-img {
    float: left;
    margin-right: 1em;
  }

  #splash .carbon-img img {
    display: block;
  }

  #splash.home-splash .carbon-text {
    display: block;
    float: left;
    margin-bottom: 20px;
    padding: 0;
    max-width: calc(100% - 130px - 1em);
    text-align: left;
  }

  #splash a.carbon-text{
    color: #fff;
  }

  #splash.home-splash .carbon-poweredby{
    background: transparent;
    padding-left: 0;
  }

  #splash.home-splash #carbon-ads>div a{
    color: #fff;
  }

  #splash.home-splash #carbon-ads>div a:hover{
    color: #fff;
  }

  #splash.home-splash .carbon-poweredby {
    display: block;
    position: absolute;
    bottom: 0;
    left: 144px;
    font-size: 10px;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  #splash a.carbon-poweredby {
    color: #fff;
  }

  .main-footer {
    margin-left: 0 !important;
    h4, p{
      color: #3a3a3a
    }
  }

</style>
