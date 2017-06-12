<template>
  <div class="code-example">
    <md-toolbar class="md-primary md-dense" md-theme="dark">
      <span class="md-title">{{ title }}</span>
      <jsfiddle-edit :component="component" />
      <md-button class="md-dense" @click="toggleCode" v-if="component.name">{{ codeContent }}</md-button>
    </md-toolbar>

    <transition name="block">
      <code-block :label="label" :lang="lang" v-if="!component.name || $slots.default || codeActive">
        <slot>{{ component.source }}</slot>
      </code-block>

      <md-content class="demo" :md-theme="theme" v-else>
        <div class="demo-content">
          <component :is="component.name" />
        </div>

        <md-button class="button-theme md-dense md-raised md-primary" @click="toggleDarkTheme" v-if="component.name">{{ themeContent }}</md-button>
      </md-content>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/theme/factory";

  $color: md-get-palette-color(grey, 700);

  .code-example {
    margin: 24px 0;
  }

  .md-toolbar.md-primary {
    position: relative;
    z-index: 1;
    background-color: $color;
    color: #fff;
  }

  .md-title {
    flex: 1;
  }

  .md-button {
    min-width: 56px;
    margin: 8px;
  }

  .demo {
    min-height: 86px;
    padding: 16px;
    position: relative;
    border: 1px solid $color;
    border-top: 0;
  }

  .demo-content {
    font-family: 'Roboto', sans-serif;
  }

  .button-theme {
    position: absolute;
    right: 0;
    bottom: 0;
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

<script>
  export default {
    name: 'CodeExample',
    props: {
      component: {
        type: Object,
        default: () => ({})
      },
      title: String,
      label: String,
      lang: String
    },
    data: () => ({
      codeActive: false,
      darkTheme: false
    }),
    computed: {
      codeContent () {
        if (this.codeActive) {
          return this.$t('example')
        }

        return this.$t('code')
      },
      themeContent () {
        if (this.darkTheme) {
          return this.$t('lightTheme')
        }

        return this.$t('darkTheme')
      },
      theme () {
        if (this.darkTheme) {
          return 'demo-dark'
        }

        return 'demo-light'
      }
    },
    methods: {
      toggleCode () {
        this.codeActive = !this.codeActive
      },
      toggleDarkTheme () {
        this.darkTheme = !this.darkTheme
      }
    }
  }
</script>
