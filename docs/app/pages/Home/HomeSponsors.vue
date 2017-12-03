<template>
  <md-content md-tag="section" md-theme="default" class="home-sponsors">
    <div class="page-wrapper">
      <h2 class="home-sponsors-title md-display-1">{{ $t('pages.home.sponsors') }} & {{ $t('pages.home.backers') }}</h2>

      <div class="home-sponsors-description">
        <i18n path="pages.home.sponsorsDescription" tag="p">
          <a href="https://www.github.com/marcosmoura" target="_blank">Marcos Moura</a>
        </i18n>
        <p>{{ $t('pages.home.beAPatron') }}:</p>
        <a href="https://www.patreon.com/bePatron?u=4832202" target="_blank" class="home-sponsors-patreon">
          <img src="/assets/sponsors/patreon.png">
        </a>
      </div>

      <div class="home-sponsors-backers">
        <h3 class="md-title">{{ $t('pages.home.sponsors') }}</h3>

        <div class="home-sponsor-list md-layout md-layout-wrap">
          <a class="home-sponsor" href="">
            <md-ripple>
              <img src="/assets/sponsors/yatima.png">
            </md-ripple>
          </a>

          <a class="home-sponsor" href="https://cs.berry.sh/c/bb9dade0-0207-4ab0-8c86-d00502d952f5" target="_blank">
            <md-ripple>
              <md-svg-loader md-src="/assets/sponsors/rollbar.svg" />
            </md-ripple>
          </a>
        </div>

        <h4 class="md-subheading">{{ $t('pages.home.backers') }}</h4>

        <ul>
          <li>Ivo Benner</li>
          <li>Nathanael Björkgård</li>
          <li>Anthony Villena</li>
          <li>William Chong</li>
        </ul>
      </div>
    </div>
  </md-content>
</template>

<script>
  import MdSvgLoader from 'vue-material/components/MdSvgLoader/MdSvgLoader'

  export default {
    name: 'HomeSponsors',
    components: {
      MdSvgLoader
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/components/MdLayout/mixins";

  .home-sponsors {
    width: calc(100% + 32px);
    margin: 0 -16px -16px;
  }

  .page-wrapper {
    max-width: 1344px;
    margin: 0 auto;
    padding: 56px 16px;
  }

  .home-sponsors-title {
    margin-bottom: 56px;
    color: rgba(#000, .87);
  }

  .home-sponsors-patreon {
    max-width: 180px;
    display: inline-block;
  }

  .home-sponsors-backers {
    margin-top: 36px;
  }

  .home-sponsor {
    + .home-sponsor {
      margin-left: 16px;
    }

    .md-ripple {
      padding: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border-radius: 2px;
    }

    img,
    svg {
      max-width: 256px;
      max-height: 96px;
    }
  }

  .home-sponsor-list {
    margin-bottom: 36px;
  }
</style>
