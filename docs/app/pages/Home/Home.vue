<template>
  <splash-container splash class="home-page">
    <div class="home-splash">
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

  .home-splash {
    .ad-manager {
      @media (max-width: 1690px) {
        margin: 32px 0 0 0 !important;

        .code-fund {
          display: flex !important;
          align-items: center;
          flex-direction: row;

          .code-fund-image {
            max-width: 175px;
          }

          .code-fund-data {
            margin-left: 8px;
          }

          a {
            color: #fff !important;
          }
        }
      }
    }
  }
</style>
