<template>
  <div class="page-content">
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
    $carbon-ads-responsive: 1600px;

    max-width: 150px;
    min-height: 100px;
    margin: 0 0 24px 24px;
    padding: 10px;
    float: right;
    position: relative;
    background: #f5f5f5;

    @media (min-width: $carbon-ads-responsive) {
      margin: 0;
      position: fixed;
      right: 16px;
      bottom: 16px;
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
      appendCarbonAds() {
        const interval = window.setInterval(() => {
          const carbonAds = document.getElementById('carbonads');
          const mainContent = this.$el.querySelector('.main-content');

          if (carbonAds && mainContent) {
            mainContent.insertBefore(carbonAds, mainContent.firstChild);
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
    },
    beforeDestroy() {
      this.moveCarbonAdsToBody();
    }
  };
</script>
