<template>
  <div class="code-example">
    <md-toolbar class="md-primary md-dense" md-theme="dark" md-elevation="0" v-if="title">
      <span class="md-title">{{ title }}</span>
      <md-button class="md-icon-button md-dense" @click="toggleCode" v-if="component.name">
        <md-icon>code</md-icon>
        <md-tooltip md-theme="default">Code</md-tooltip>
      </md-button>
      <codesandbox-edit :component="component" :title="title" v-if="component.name" />
    </md-toolbar>

    <transition name="block">
      <code-block :label="label" :lang="lang" v-if="!component.name || $slots.default || showCode">
        <slot>{{ component.source }}</slot>
      </code-block>

      <md-content class="demo" :md-theme="theme" v-else>
        <div class="demo-content">
          <component :is="component.name" />
        </div>

        <md-button class="button-theme md-icon-button md-dense md-raised md-accent" @click="toggleTheme" v-if="component.name">
          <md-icon>invert_colors</md-icon>
          <md-tooltip md-direction="top">Invert Colors</md-tooltip>
        </md-button>
      </md-content>
    </transition>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'CodeExample',
    props: {
      component: {
        type: Object,
        default: () => ({})
      },
      title: String,
      label: {
        type: String,
        default: 'Vue'
      },
      lang: String
    },
    data: () => ({
      showCode: false,
      isThemeDark: false
    }),
    computed: {
      ...mapState({
        currentTheme: 'theme'
      }),
      theme () {
        if (this.isThemeDark) {
          return this.getThemeName('dark')
        }

        return this.getThemeName('light')
      }
    },
    watch: {
      currentTheme (theme) {
        this.isThemeDark = this.currentTheme.includes('dark')
      }
    },
    methods: {
      getThemeName (baseName) {
        return `demo-${baseName}`
      },
      toggleCode () {
        this.showCode = !this.showCode
      },
      toggleTheme () {
        this.isThemeDark = !this.isThemeDark
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/theme/engine";

  $color: md-get-palette-color(grey, 700);

  .code-example {
    margin: 36px 0;
  }

  .md-toolbar.md-primary {
    position: relative;
    z-index: 1;
    background-color: $color;
    color: #fff;

    .md-icon {
      color: #fff;
    }
  }

  .md-title {
    flex: 1;
    color: #fff !important;
  }

  .md-button {
    margin: 8px;
  }

  .demo {
    min-height: 86px;
    padding: 16px;
    position: relative;
    border: 1px solid $color;
    border-top: 0;

    &.md-theme-demo-light {
      background-color: md-get-palette-color(grey, 50);
    }

    &.md-theme-demo-dark {
      background-color: md-get-palette-color(grey, 900);
    }
  }

  .demo-content {
    font-family: 'Roboto', sans-serif;
  }

  .button-theme {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 40;
  }

  .block-leave-active {
    display: none;
  }

  .block-enter-active {
    opacity: 0;
    transition: opacity .4s $md-transition-default-timing;
    will-change: opacity;
  }

  .block-enter-to {
    opacity: 1;
  }
</style>
