<template>
  <div class="main-nav-content">
    <router-link to="/">{{ $t('pages.home.title') }}</router-link>
    <router-link to="/getting-started">{{ $t('pages.gettingStarted.title') }}</router-link>

    <router-link to="/components">{{ $t('pages.components.title') }}</router-link>
    <div class="main-nav-level">
      <router-link to="/components/app">{{ $t('pages.app.title') }}</router-link>
      <router-link to="/components/avatar">{{ $t('pages.avatar.title') }}</router-link>
      <router-link to="/components/bottom-bar">{{ $t('pages.bottomBar.title') }}</router-link>
      <router-link to="/components/button">{{ $t('pages.button.title') }}</router-link>
      <router-link to="/components/card">{{ $t('pages.card.title') }}</router-link>
      <router-link to="/components/chips">{{ $t('pages.chips.title') }}</router-link>
      <router-link to="/components/content">{{ $t('pages.content.title') }}</router-link>

      <router-link to="/components/pickers">{{ $t('pages.pickers.title') }}</router-link>
      <div class="main-nav-level">
        <router-link to="/components/datepicker">{{ $t('pages.datepicker.nav') }}</router-link>
      </div>

      <router-link to="/components/dialog">{{ $t('pages.dialog.title') }}</router-link>
      <router-link to="/components/divider">{{ $t('pages.divider.title') }}</router-link>
      <router-link to="/components/drawer">{{ $t('pages.drawer.title') }}</router-link>

      <router-link to="/components/form">{{ $t('pages.form.title') }}</router-link>
      <div class="main-nav-level">
        <router-link to="/components/checkbox">{{ $t('pages.checkbox.title') }}</router-link>
        <router-link to="/components/file">{{ $t('pages.file.title') }}</router-link>
        <router-link to="/components/input">{{ $t('pages.input.title') }}</router-link>
        <router-link to="/components/radio">{{ $t('pages.radio.title') }}</router-link>
        <router-link to="/components/select">{{ $t('pages.select.title') }}</router-link>
        <router-link to="/components/switch">{{ $t('pages.switch.title') }}</router-link>
      </div>

      <router-link to="/components/icon">{{ $t('pages.icon.title') }}</router-link>
      <router-link to="/components/list">{{ $t('pages.list.title') }}</router-link>
      <router-link to="/components/menu">{{ $t('pages.menu.title') }}</router-link>
      <router-link to="/components/snackbar">{{ $t('pages.snackbar.title') }}</router-link>
      <router-link to="/components/speed-dial">{{ $t('pages.speedDial.title') }}</router-link>
      <router-link to="/components/steppers">{{ $t('pages.steppers.title') }}</router-link>
      <router-link to="/components/subheader">{{ $t('pages.subheader.title') }}</router-link>
      <router-link to="/components/tabs">{{ $t('pages.tabs.title') }}</router-link>
      <router-link to="/components/toolbar">{{ $t('pages.toolbar.title') }}</router-link>
      <router-link to="/components/tooltip">{{ $t('pages.tooltip.title') }}</router-link>
    </div>

    <router-link to="/ui-elements">{{ $t('pages.uiElements.title') }}</router-link>
    <div class="main-nav-level">
      <router-link to="/ui-elements/layout">{{ $t('pages.layout.title') }}</router-link>
      <router-link to="/ui-elements/scrollbar">{{ $t('pages.scrollbar.title') }}</router-link>
      <router-link to="/ui-elements/text-selection">{{ $t('pages.textSelection.title') }}</router-link>
      <router-link to="/ui-elements/typography">{{ $t('pages.typography.title') }}</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainNavContent',
    watch: {
      $router () {
        this.scrollActiveItemIntoView()
      }
    },
    methods: {
      async scrollActiveItemIntoView () {
        await this.$nextTick()

        const activeEl = this.$el.querySelector('.router-link-exact-active')

        if (activeEl) {
          activeEl.scrollIntoView({
            behavior: 'smooth'
          })
        }
      }
    },
    async mounted () {
      await this.$nextTick()
      window.setTimeout(this.scrollActiveItemIntoView, 700)
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/theme/factory";

  .main-nav-content {
    a {
      display: block;
      color: inherit;
      font-size: 14px;
      line-height: 2em;
    }

    .router-link-exact-active {
      color: md-get-palette-color(blue, A200);
      font-weight: 500;
    }
  }

  .main-nav-level {
    margin-bottom: 8px;
    margin-left: 16px;
  }
</style>
