<template>
  <splash-container splash class="home-page">
    <div class="home-splash">
      <home-header />
      <home-features />
      <md-icon class="home-icon-indicator" @click.native="scrollDown">keyboard_arrow_down</md-icon>
    </div>

    <home-ecosystem />
    <home-sponsors />
  </splash-container>
</template>

<script>
  import HomeHeader from './HomeHeader'
  import HomeFeatures from './HomeFeatures'
  import HomeEcosystem from './HomeEcosystem'
  import HomeSponsors from './HomeSponsors'

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeFeatures,
      HomeEcosystem,
      HomeSponsors
    },
    methods: {
      scrollDown () {
        const targetEl = document.querySelector('.home-ecosystem, .home-sponsors')

        if (targetEl) {
          window.scroll({
            top: targetEl.offsetTop,
            left: 0,
            behavior: 'smooth'
          })
        }
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
    min-height: calc(100vh - 80px);
    padding-top: 24px;
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
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/components/MdIcon/mixins";
  @import "~vue-material/components/MdLayout/mixins";

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
</style>
