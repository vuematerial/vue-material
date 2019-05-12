<template>
  <md-content md-tag="section" md-theme="premium" class="home-premium md-primary" id="premium">
    <div class="page-wrapper">
      <h2 class="home-title md-headline">
        <md-icon>check</md-icon>
        <span>{{ $t('pages.home.premium') }}</span>
      </h2>

      <p>
        You can use some of our tools to make the development environment easier, more productive and with a better
        integration with Vue Material. You can choose between a batteries-included webpack boilerplate, a SSR template
        for premium.js and a Single HTML file to start with the framework:
      </p>

      <div class="md-layout md-gutter md-alignment-top-left">
        <div class="md-layout-item md-xsmall-size-100">
          <md-card class="md-accent" md-with-hover @click.native="openLink('https://www.creative-tim.com/product/vue-material-dashboard-pro?ref=vuematerial.io')">
            <md-ripple>
              <md-card-media>
                <img src="/assets/premium/dashboard-pro.jpg" alt="Vue Material Dashboard PRO">
              </md-card-media>
            </md-ripple>

            <md-card-header>
              <md-card-header-text>
                <div class="md-title">Vue Material Dashboard PRO</div>
                <div class="md-subhead">Full-featured</div>
              </md-card-header-text>
            </md-card-header>

            <md-card-content>
              Vue Material Dashboard PRO is a beautiful and full-featured resource built over Vue Material. It will help
              you get started developing dashboards in no time.
            </md-card-content>

            <md-card-actions md-alignment="space-between">
              <md-chip class="md-primary" md-clickable>Just $59</md-chip>
              <md-button class="md-primary">Buy now</md-button>
            </md-card-actions>
          </md-card>
        </div>

        <div class="md-layout-item md-xsmall-size-100">
          <md-card class="md-accent" md-with-hover @click.native="openLink('https://www.creative-tim.com/product/vue-material-dashboard?ref=vuematerial.io')">
            <md-ripple>
              <md-card-media>
                <img src="/assets/premium/dashboard-pro.jpg" alt="Vue Material Dashboard PRO">
              </md-card-media>
            </md-ripple>

            <md-card-header>
              <md-card-header-text>
                <div class="md-title">Vue Material Dashboard Free</div>
                <div class="md-subhead">16 components</div>
              </md-card-header-text>
            </md-card-header>

            <md-card-content>
              Don't wanna spend money for now? Ok, then! Just download the free version! It's easy to use and if you
              need more, you can always upgrade later to the Pro Version.
            </md-card-content>

            <md-card-actions md-alignment="space-between">
              <md-chip class="md-primary" md-clickable>Free</md-chip>
              <md-button class="md-primary">Download</md-button>
            </md-card-actions>
          </md-card>
        </div>
      </div>
    </div>
  </md-content>
</template>

<script>
  export default {
    name: 'HomePremium',
    methods: {
      openLink (link) {
        window.open(link, '_blank')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/components/MdLayout/mixins";

  @import "~vue-material/theme/engine";

  @include md-register-theme("premium", (
    primary: #448aff,
    accent: #fff
  ));

  @import "~vue-material/components/MdButton/theme";
  @import "~vue-material/components/MdCard/theme";
  @import "~vue-material/components/MdChips/theme";
  @import "~vue-material/components/MdContent/theme";

  .home-premium {
    width: calc(100% + 32px);

    .md-layout-item {
      @include md-layout-small {
        margin-top: 16px;
      }
    }

    .md-card-media {
      max-height: 250px;
    }

    img {
      margin-top: -50px;
    }
  }

  .md-chip {
    height: 26px;
    font-size: 12px;
    line-height: 26px;

    /deep/ .md-ripple {
      padding: 0 10px !important;
    }
  }
</style>
