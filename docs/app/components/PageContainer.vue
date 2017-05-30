<template>
  <div class="page-container" :class="containerClass">
    <md-toolbar class="main-header" :class="mainHeaderClasses">
      <div class="logo">
        <logo-vue-material :animated="isHome" @click.native="$router.push('/')" />
      </div>

      <span class="md-title">Vue Material {{ pageTitle }}</span>

      <md-icon md-src="assets/icon-github.svg" class="icon-github" />
    </md-toolbar>

    <div class="main-content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~vue-material/theme/factory";
  @import "~vue-material/components/MdAnimation/variables";

  .page-container {
    font-family: 'Roboto Mono', monospace;

    &.splash {
      .main-content,
      .main-header {
        max-width: 1280px;
        margin: auto;
        padding: 16px;
      }
    }
  }

  .main-header {
    transition: .3s $md-transition-default-timing;

    &.md-transparent .logo {
      background: md-get-palette-color(grey, 200);
    }

    .md-title {
      flex: 1;
    }
  }

  .logo {
    width: 32px;
    height: 32px;
    margin-right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: md-get-palette-color(grey, 300);
    border-radius: 50%;

    .logo-vue-material {
      max-width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }

  .main-content {
    padding: 16px;
  }
</style>

<script>
  export default {
    name: 'PageContainer',
    props: {
      title: String,
      splash: Boolean
    },
    computed: {
      pageTitle () {
        if (this.title) {
          return '- ' + this.title
        }
      },
      isHome () {
        return this.$route.path === '/'
      },
      containerClass () {
        const { splash } = this

        return {
          splash
        }
      },
      mainHeaderClasses () {
        const { splash } = this

        return {
          'md-transparent': splash,
          'md-elevation-2': !splash
        }
      }
    },
    mounted () {
      if (this.splash) {
        this.$material.theming.theme = 'splash'
      } else {
        this.$material.theming.theme = 'default'
      }
    }
  }
</script>
