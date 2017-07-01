<template>
  <div class="main-nav-content">
    <router-link to="/">{{ $t('pages.home.title') }}</router-link>
    <router-link to="/getting-started">{{ $t('pages.gettingStarted.title') }}</router-link>

    <router-link to="/components">{{ $t('pages.components.title') }}</router-link>
    <div class="main-nav-level">
      <router-link to="/components/button">{{ $t('pages.button.title') }}</router-link>
      <router-link to="/components/content">{{ $t('pages.content.title') }}</router-link>
      <router-link to="/components/drawer">{{ $t('pages.drawer.title') }}</router-link>

      <router-link to="/components/form">{{ $t('pages.form.title') }}</router-link>
      <div class="main-nav-level">
        <router-link to="/components/input">{{ $t('pages.input.title') }}</router-link>
        <router-link to="/components/checkbox">{{ $t('pages.checkbox.title') }}</router-link>
      </div>

      <router-link to="/components/icon">{{ $t('pages.icon.title') }}</router-link>
      <router-link to="/components/toolbar">{{ $t('pages.toolbar.title') }}</router-link>
    </div>

    <router-link to="/ui-elements">{{ $t('pages.uiElements.title') }}</router-link>
    <div class="main-nav-level">
      <router-link to="/ui-elements/layout">{{ $t('pages.layout.title') }}</router-link>
    </div>
  </div>
</template>

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
      color: md-get-palette-color(pink, 700);
    }
  }

  .main-nav-level {
    margin-bottom: 8px;
    margin-left: 16px;
  }
</style>

<script>
  export default {
    name: 'MainNavContent'
  }
</script>
