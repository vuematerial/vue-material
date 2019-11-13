<template>
  <md-content md-tag="section" class="home-sponsors">
    <div class="page-wrapper">
      <h2 class="home-title md-headline">
        <md-icon>monetization_on</md-icon>
        {{ $t('pages.home.sponsors') }} &amp; {{ $t('pages.home.backers') }}
      </h2>


      <div class="home-sponsors-description">
        <i18n path="pages.home.sponsorsDescription" tag="p">
          <a href="https://www.github.com/marcosmoura" target="_blank">Marcos Moura</a>
        </i18n>

        <img src="/assets/sponsors/codeinwp-logo.svg" class="home-sponsors-open-1">
        <img src="/assets/sponsors/creative-tim.png" class="home-sponsors-open-1">

        <p>{{ $t('pages.home.beACollective') }}:</p>

        <a href="" target="_blank" class="home-sponsors-open">
          <md-ripple>
            <img src="/assets/sponsors/opencollective.svg">
          </md-ripple>
        </a>


        <!-- <h2 class="home-title md-headline">
          Contribuitors
        </h2>

        <div class="w-100 text-center" style="margin-bottom:50px;">
          This project exists thanks to all the people who contribute.
          <a href="https://github.com/vuematerial/vue-material/contribuitors"><img src="https://opencollective.com/vuematerial/contributors.svg?width=890&button=false" /></a>

        </div> -->

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
    padding-bottom: 28px;
  }

  .home-sponsors-open {
    max-width: 180px;
    margin: 24px 0;
    display: inline-block;
  }

  .home-sponsors-open-1 {
    max-width: 120px;
  }


  .home-sponsors-backers {
    margin-top: 36px;
  }

  .home-sponsor {
    color: #000 !important;

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
    >>> svg,
    .md-svg-loader {
      max-width: 256px;
      max-height: 96px;
      display: block;
    }
  }

  .home-sponsor-list {
    margin-bottom: 36px;
  }
</style>
