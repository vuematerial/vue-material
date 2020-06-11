<template>
  <md-content md-tag="section" class="home-sponsors">
    <div class="page-wrapper">
      <h2 class="home-title md-headline">
        <md-icon>group</md-icon>
        {{ $t('pages.home.contributors') }}
      </h2>


      <div class="home-sponsors-description">
        <h3><md-icon>person</md-icon> {{ $t('pages.home.contributorsTitle') }}</h3>
        <a class="contributors-image" href="https://github.com/vuematerial/vue-material/contributors"><img src="https://opencollective.com/vue-material/contributors.svg?width=1500&button=false" /></a>
        <br><br>
        <h3><md-icon>monetization_on</md-icon>
        {{ $t('pages.home.sponsors') }} &amp; {{ $t('pages.home.backers') }}</h3>

        <div class="backers-button">
          <h3>OpenCollective Sponsors</h3>
          <object type="image/svg+xml" data="https://opencollective.com/vue-material/tiers/backer.svg?avatarHeight=100&width=600"></object>
        </div>


        <h3><md-icon>favorite</md-icon>
        {{ $t('pages.home.backersTitle') }}</h3>


        <i18n path="pages.home.sponsorsDescription" tag="p">
          <a href="https://www.github.com/marcosmoura" target="_blank">Marcos Moura</a>
        </i18n>

        <ul>
          <li><a href="https://github.com/elviskang" target="_blank">elviskang</a> for donating the npm package name!</li>
          <li><a href="https://github.com/brunocastro" target="_blank">Bruno Castro</a> for the awesome Vue Material Logo. <logo-vue-material animated /></li>
        </ul>

        <div class="d-flex align-items-center">
          <a href="https://www.codeinwp.com/?ref=vuematerial.io" target="_blank">
            <img src="/assets/sponsors/codeinwp-logo.svg" class="home-sponsors-open-1">
          </a>
          <a href="https://www.creative-tim.com/?ref=vuematerial.io" target="_blank">
            <img src="/assets/sponsors/creative-tim.png" class="home-sponsors-open-1 logo-2">
          </a>
        </div>
        <!-- <p>{{ $t('pages.home.beACollective') }}:</p> -->
<!--
        <a href="" target="_blank" class="home-sponsors-open">
          <md-ripple>
            <img src="/assets/sponsors/opencollective.svg">
          </md-ripple>
        </a> -->


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

  .logo-vue-material {
    width: 24px;
    display: inline-block;
    vertical-align: middle;
  }

  object {
    width: 200px;
    height: 115px !important;
  }

  .backers-button {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }


  .home-sponsors {
    width: calc(100% + 32px);
    margin: 0 -16px -16px;
    padding-bottom: 28px;
    a{
      &:hover{
        text-decoration: none;
      }
    }

    p, .contributors-image, .align-items-center {
      padding-left: 30px;
    }

    ul {
      padding-left: 45px;
    }
  }

  .home-sponsors-open {
    max-width: 180px;
    margin: 24px 0;
    display: inline-block;
  }

  .home-sponsors-open-1 {
    max-width: 120px;
    &.logo-2{
      margin-left: 11px;
      margin-top: 8px;
    }
    &.logo-3{
      margin-left: 11px;
      margin-top: 5px;
      width: 30px;
    }
    &.logo-4{
      width: 45px;
      margin-top: 10px;
    }
    @include md-layout-xsmall {
      &.logo-3{
        margin-top: 10px;
        margin-left: 0px;
      }
    }
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
