<template>
  <div class="main-nav-content">
    <div v-show="responsive">
      <router-link to="/vuematerial/getting-started">
        Docs
      </router-link>

      <router-link to="/vuematerial/about">
        About
      </router-link>

      <router-link to="/vuematerial/components/app">
        Components
      </router-link>
    </div>
    <router-link to="/vuematerial" exact>{{ $t('pages.home.title') }}</router-link>
    <router-link to="/vuematerial/getting-started">{{ $t('pages.gettingStarted.title') }}</router-link>
    <div class="main-nav-level">
      <router-link to="/vuematerial/configuration">{{ $t('pages.configuration.title') }}</router-link>
    </div>

    <router-link to="/vuematerial/themes">{{ $t('pages.themes.title') }}</router-link>
    <div class="main-nav-level">
      <router-link to="/vuematerial/themes/concepts">{{ $t('pages.themeConcepts.nav') }}</router-link>
      <router-link to="/vuematerial/themes/prebuilt">{{ $t('pages.themePrebuilt.nav') }}</router-link>
      <router-link to="/vuematerial/themes/configuration">{{ $t('pages.themeConfiguration.nav') }}</router-link>
      <router-link to="/vuematerial/themes/advanced">{{ $t('pages.themeAdvanced.nav') }}</router-link>
      <router-link to="/vuematerial/premium-themes" class="premium-themes">{{ $t('pages.home.premium') }} <md-badge class="md-square" md-content="New" /></router-link>
      <a href="https://www.creative-tim.com/services/updivision?ref=vuematarial.io" target="_blank">{{ $t('pages.home.custom') }}</a>

    </div>

    <router-link to="/vuematerial/with-router">{{ $t('pages.withRouter.title') }}</router-link>

    <router-link to="/vuematerial/ui-elements">{{ $t('pages.uiElements.title') }}</router-link>
    <div class="main-nav-level">
      <router-link to="/vuematerial/ui-elements/elevation">{{ $t('pages.elevation.title') }}</router-link>
      <router-link to="/vuematerial/ui-elements/layout">{{ $t('pages.layout.title') }}</router-link>
      <router-link to="/vuematerial/ui-elements/scrollbar">{{ $t('pages.scrollbar.title') }}</router-link>
      <router-link to="/vuematerial/ui-elements/text-selection">{{ $t('pages.textSelection.title') }}</router-link>
      <router-link to="/vuematerial/ui-elements/typography">{{ $t('pages.typography.title') }}</router-link>
    </div>

    <router-link to="/vuematerial/components">{{ $t('pages.components.title') }}</router-link>
    <div class="main-nav-level">
      <router-link to="/vuematerial/components/app">{{ $t('pages.app.title') }}</router-link>
      <router-link to="/vuematerial/components/avatar">{{ $t('pages.avatar.title') }}</router-link>
      <router-link to="/vuematerial/components/badge">{{ $t('pages.badge.title') }}</router-link>
      <router-link to="/vuematerial/components/bottom-bar">{{ $t('pages.bottomBar.title') }}</router-link>
      <router-link to="/vuematerial/components/button">{{ $t('pages.button.title') }}</router-link>
      <router-link to="/vuematerial/components/card">{{ $t('pages.card.title') }}</router-link>
      <router-link to="/vuematerial/components/content">{{ $t('pages.content.title') }}</router-link>

      <router-link to="/vuematerial/components/datepicker">{{ $t('pages.datepicker.title') }}</router-link>
      <router-link to="/vuematerial/components/dialog">{{ $t('pages.dialog.title') }}</router-link>
      <router-link to="/vuematerial/components/divider">{{ $t('pages.divider.title') }}</router-link>
      <router-link to="/vuematerial/components/drawer">{{ $t('pages.drawer.title') }}</router-link>
      <router-link to="/vuematerial/components/empty-state">{{ $t('pages.emptyState.title') }}</router-link>

      <router-link to="/vuematerial/components/form">{{ $t('pages.form.title') }}</router-link>
      <div class="main-nav-level">
        <router-link to="/vuematerial/components/autocomplete">{{ $t('pages.autocomplete.title') }}</router-link>
        <router-link to="/vuematerial/components/checkbox">{{ $t('pages.checkbox.title') }}</router-link>
        <router-link to="/vuematerial/components/chips">{{ $t('pages.chips.title') }}</router-link>
        <router-link to="/vuematerial/components/file">{{ $t('pages.file.title') }}</router-link>
        <router-link to="/vuematerial/components/input">{{ $t('pages.input.title') }}</router-link>
        <router-link to="/vuematerial/components/radio">{{ $t('pages.radio.title') }}</router-link>
        <router-link to="/vuematerial/components/select">{{ $t('pages.select.title') }}</router-link>
        <router-link to="/vuematerial/components/switch">{{ $t('pages.switch.title') }}</router-link>
      </div>

      <router-link to="/vuematerial/components/icon">{{ $t('pages.icon.title') }}</router-link>
      <router-link to="/vuematerial/components/list">{{ $t('pages.list.title') }}</router-link>
      <router-link to="/vuematerial/components/menu">{{ $t('pages.menu.title') }}</router-link>

      <router-link to="/vuematerial/components/progress">{{ $t('pages.progress.title') }}</router-link>
      <div class="main-nav-level">
        <router-link to="/vuematerial/components/progress-bar">{{ $t('pages.progressBar.nav') }}</router-link>
        <router-link to="/vuematerial/components/progress-spinner">{{ $t('pages.progressSpinner.nav') }}</router-link>
      </div>

      <router-link to="/vuematerial/components/snackbar">{{ $t('pages.snackbar.title') }}</router-link>
      <router-link to="/vuematerial/components/speed-dial">{{ $t('pages.speedDial.title') }}</router-link>
      <router-link to="/vuematerial/components/steppers">{{ $t('pages.steppers.title') }}</router-link>
      <router-link to="/vuematerial/components/subheader">{{ $t('pages.subheader.title') }}</router-link>
      <router-link to="/vuematerial/components/table">{{ $t('pages.table.title') }}</router-link>
      <router-link to="/vuematerial/components/tabs">{{ $t('pages.tabs.title') }}</router-link>
      <router-link to="/vuematerial/components/toolbar">{{ $t('pages.toolbar.title') }}</router-link>
      <router-link to="/vuematerial/components/tooltip">{{ $t('pages.tooltip.title') }}</router-link>
    </div>

    <router-link to="/vuematerial/about">{{ $t('pages.about.title') }}</router-link>
    <router-link to="/vuematerial/license">{{ $t('pages.license.title') }}</router-link>
    <a href="https://vue-material-old.netlify.com/" target="_blank">Old Version (0.8.1)</a>
  </div>
</template>

<script>
  export default {
    name: 'MainNavContent',
    data (){
      return{
        responsive: false
      }
    },
    watch: {
      $router () {
        this.scrollActiveItemIntoView()
      }
    },
    mounted () {
      this.$nextTick().then(() => {
        window.setTimeout(this.scrollActiveItemIntoView, 700)
      }),
      this.responsiveLinks()
      window.addEventListener("resize", this.responsiveLinks)
    },
    beforeDestroy () {
      window.addEventListener("resize", this.responsiveLinks)
    },
    methods: {
      scrollActiveItemIntoView () {
        this.$nextTick().then(() => {
          const activeEl = this.$el.querySelector('.router-link-exact-active')

          if (activeEl) {
            activeEl.scrollIntoView({
              behavior: 'smooth'
            })
          }
        })
      },
      responsiveLinks (){
        if (window.innerWidth < 601) {
          this.responsive = true
        } else {
          this.responsive = false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/theme/engine";
  @import "~vue-material/components/MdLayout/mixins";

  .main-nav-content {
    a {
      display: block;
      font-size: 14px;
      line-height: 2em;

      &:not(.router-link-active) {
        color: inherit;
      }
    }

    .router-link-active {
      font-weight: 500;
    }
  }

  .main-nav-level {
    margin-bottom: 16px;
    margin-left: 20px;
  }

  .premium-themes{
    display: flex !important;
    position: relative;
  }
  .md-badge{
    background: green;
    right: -15px;
    top: 5px;
    @include md-layout-xsmall {
      left: 55%;
      right: unset;
    }
  }
</style>
