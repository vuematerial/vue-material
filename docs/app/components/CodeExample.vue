<template>
  <div class="code-example">
    <md-toolbar class="md-primary md-dense" md-theme="dark" md-elevation="0">
      <span class="md-title">{{ title }}</span>
      <md-button class="md-icon-button md-dense" @click="toggleCode" v-if="component.name">
        <md-icon>code</md-icon>
      </md-button>
      <jsfiddle-edit :component="component" v-if="component.name" />
    </md-toolbar>

    <transition name="block">
      <code-block :label="label" :lang="lang" v-if="!component.name || $slots.default || codeActive">
        <slot>{{ component.source }}</slot>
      </code-block>

      <md-content class="demo" :md-theme="theme" v-else>
        <div class="demo-content">
          <component :is="component.name" />
        </div>

        <md-button class="button-theme md-icon-button md-dense md-raised md-primary" @click="toggleDarkTheme" v-if="component.name">
          <md-icon>invert_colors</md-icon>
        </md-button>
      </md-content>
    </transition>
  </div>
</template>

<script>
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
      codeActive: false,
      darkTheme: false
    }),
    computed: {
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

    .md-icon {
      color: #fff;
    }
  }

  .md-title {
    flex: 1;
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
