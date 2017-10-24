<template>
  <div class="page-content">
    <md-whiteframe md-tag="md-toolbar" class="md-accent md-dense main-banner" v-if="!$root.closeBanner">
      <span>Exciting news about the future of Vue Material!</span>
      <md-button class="md-raised" href="https://github.com/vuematerial/vue-material/issues/1081">Check it out!</md-button>
      <button class="close" @click="$root.closeBanner = true">Close</button>
    </md-whiteframe>

    <md-whiteframe md-tag="md-toolbar" md-elevation="1" class="main-header">
      <md-button class="md-icon-button nav-trigger" @click="toggleSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <div class="md-title">{{ pageTitle }}</div>

      <release-version></release-version>

      <md-button href="https://github.com/marcosmoura/vue-material" target="_blank" rel="noopener" class="md-icon-button github">
        <md-icon md-src="assets/icon-github.svg"></md-icon>
      </md-button>
    </md-whiteframe>

    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .page-content {
    min-height: 100%;
    max-height: 100%;
    flex: 1;
    display: flex;
    flex-flow: column
  }

  .main-banner {
    padding-left: 16px;
    justify-content: center;

    .md-button {
      margin: 0 0 0 24px;
      box-shadow: none;
    }

    .close {
      width: 64px;
      height: 36px;
      margin: 0;
      padding: 0;
      cursor: pointer;
      position: absolute;
      right: 0;
      border: none;
      background: none;
      color: rgba(#fff, .87);
    }
  }

  .main-header {
    z-index: 2;
    color: #fff !important;
  }

  .nav-trigger {
    @media (min-width: 1281px) {
      display: none;
    }
  }

  .md-title {
    flex: 1;

    @media (min-width: 1281px) {
      margin-left: 8px;
    }
  }

  .github {
    @media (max-width: 480px) {
      display: none;
    }
  }
</style>

<style lang="scss">
  #carbonads {
    $carbon-responsive-big: 1600px;
    $carbon-responsive-small: 1040px;

    max-width: 150px;
    min-height: 100px;
    margin: 0 0 24px 24px;
    padding: 10px;
    float: right;
    position: relative;
    z-index: 10;
    background: #f5f5f5;

    .main-content > & {
      @media (min-width: $carbon-responsive-big) {
        margin: 0;
        position: fixed;
        right: 16px;
        bottom: 16px;
      }
    }

    .carbon-responsive & {
      @media (min-width: $carbon-responsive-small) {
        margin: 0;
        position: fixed;
        right: 16px;
        bottom: 16px;
      }
    }

    .carbon-wrap {
      display: flex;
      flex-direction: column;
      font-size: 14px;

      a {
        margin: 0 0 8px;
        color: rgba(#000, .7);

        &:hover {
          color: #000;
          text-decoration: none;
        }
      }
    }

    .carbon-poweredby {
      color: rgba(#000, .54);
      font-size: 12px;
    }
  }
</style>

<script>
  export default {
    props: {
      pageTitle: String
    },
    methods: {
      toggleSidenav() {
        this.$root.toggleSidenav();
      },
      checkMainContentScroll() {
        const interval = window.setInterval(() => {
          const carbonAds = document.getElementById('carbonads');
          const mainContent = this.$el.querySelector('.main-content');
          const exampleContent = this.$el.querySelector('.example-content div');

          if (mainContent && exampleContent && carbonAds) {
            window.setTimeout(() => {
              if (exampleContent.offsetHeight + carbonAds.offsetHeight + 30 < mainContent.offsetHeight) {
                mainContent.classList.add('carbon-responsive');
              }
            }, 200);

            window.clearInterval(interval);
          }
        }, 50);
      },
      appendCarbonAds() {
        const interval = window.setInterval(() => {
          const carbonAds = document.getElementById('carbonads');
          const mainContent = this.$el.querySelector('.main-content');
          const usageContent = this.$el.querySelector('.usage-content');

          if (carbonAds && mainContent) {
            if (usageContent) {
              usageContent.insertBefore(carbonAds, usageContent.firstChild);
            } else {
              mainContent.insertBefore(carbonAds, mainContent.firstChild);
            }

            window.clearInterval(interval);
          }
        }, 50);
      },
      moveCarbonAdsToBody() {
        document.body.appendChild(document.getElementById('carbonads'));
      }
    },
    mounted() {
      document.title = this.pageTitle + ' - Vue Material';
      this.appendCarbonAds();
      this.checkMainContentScroll();
    },
    beforeDestroy() {
      this.moveCarbonAdsToBody();
    }
  };
</script>
