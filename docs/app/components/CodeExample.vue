<template>
  <div class="code-example">
    <md-toolbar class="md-primary md-dense" md-theme="dark">
      <span class="md-title">{{ title }}</span>
      <md-button class="md-dense" @click.native="toggleCode" v-if="$slots.demo">{{ codeContent }}</md-button>
    </md-toolbar>

    <code-block :label="label" :lang="lang" v-if="!$slots.demo || codeActive">
      <slot name="code" />
    </code-block>

    <md-content class="demo" :md-theme="theme" v-else>
      <div class="demo-content">
        <slot name="demo" />
      </div>

      <md-button class="button-theme md-dense md-raised md-primary" @click.native="toggleDarkTheme" v-if="$slots.demo">{{ themeContent }}</md-button>
    </md-content>

    <slot />
  </div>
</template>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/theme/factory";

  .code-example {
    margin: 24px 0;
  }

  .md-toolbar.md-primary {
    background-color: md-get-palette-color(grey, 700);
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
    padding: 16px;
    position: relative;
    border: 1px solid md-get-palette-color(grey, 800);
  }

  .demo-content {
    font-family: 'Roboto', sans-serif;
  }

  .button-theme {
    position: absolute;
    right: 0;
    bottom: 0;
  }
</style>

<script>
  export default {
    name: 'CodeExample',
    props: {
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
