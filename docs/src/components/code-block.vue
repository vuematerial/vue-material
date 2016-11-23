<template>
  <div class="code-block" :data-lang="lang">
    <div class="code-block-wrapper">
      <pre><code :class="lang" ref="block"><slot></slot></code></pre>
    </div>

    <md-button class="md-icon-button md-dense" ref="copy">
      <md-icon>content_copy</md-icon>
    </md-button>

    <span class="copied" :class="{ 'active': showMessage }">Copied!</span>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../../src/core/stylesheets/variables.scss';

  .code-block {
    position: relative;
    border-radius: 2px;
    color: #455A64;
    font-family: "Operator Mono", "Fira Code", Menlo, Hack, "Roboto Mono", "Liberation Mono", Monaco, monospace;
    font-size: 14px;
    line-height: 24px;

    &:hover {
      &:after {
        opacity: 0;
      }

      .md-icon-button {
        opacity: 1;
      }
    }

    &:after {
      position: absolute;
      top: 20px;
      right: 12px;
      transition: $swift-ease-out;
      color: rgba(#000, .26);
      font-family: $font-roboto;
      font-size: 11px;
      line-height: 1em;
    }

    &[data-lang="html"]:after {
      content: 'HTML';
    }

    &[data-lang="javascript"]:after {
      content: 'Javascript';
    }

    &[data-lang="xml"]:after {
      content: 'HTML';
    }

    &[data-lang="scss"]:after {
      content: 'SCSS';
    }

    + .code-block {
      margin-top: 16px;
    }

    pre {
      margin: 0;
      white-space: pre;
    }

    code {
      padding: 0;
      background: none;
    }
  }

  .code-block-wrapper {
    min-width: 100%;
    max-height: 550px;
    margin: -16px;
    padding: 0 16px;
    overflow: auto;
  }

  .md-icon-button {
    position: absolute;
    top: 8px;
    right: 0;
    z-index: 2;
    opacity: 0;
    transition: $swift-ease-out;
  }

  .copied {
    padding: 8px 16px;
    position: absolute;
    right: -8px;
    bottom: 8px;
    background-color: rgba(#000, .87);
    border-radius: 2px;
    transform: translate3d(0, 40px, 0);
    transition: $swift-ease-in-out;
    color: #fff;
    font-family: $font-roboto;
    line-height: 1em;

    &.active {
      transition: $swift-ease-out;
      transform: translate3d(0, 0, 0);
    }
  }
</style>

<style lang="scss">
  @import '../../../src/core/stylesheets/variables.scss';

  .code-block {
    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-selector-class,
    .hljs-subst {
      font-weight: 500;
    }

    .hljs-keyword {
      color: #D81B60;
    }

    .hljs-string {
      color: #00796B;
    }

    .hljs-comment {
      color: #00796B;
      font-style: italic;
    }

    .hljs-built_in,
    .hljs-attr,
    .hljs-attribute {
      color: #1976D2;
    }

    .hljs-selector-tag,
    .hljs-selector-class,
    .hljs-tag,
    .hljs-name,
    .hljs-number {
      color: #D81B60;
    }
  }
</style>

<script>
  import highlight from 'highlight.js/lib/highlight.js';
  import highlightSCSS from 'highlight.js/lib/languages/scss';
  import highlightXML from 'highlight.js/lib/languages/xml';
  import highlightJS from 'highlight.js/lib/languages/javascript';
  import Clipboard from 'clipboard';

  highlight.registerLanguage('scss', highlightSCSS);
  highlight.registerLanguage('xml', highlightXML);
  highlight.registerLanguage('javascript', highlightJS);

  export default {
    props: ['lang'],
    data: () => ({
      showMessage: false
    }),
    mounted() {
      const clipboard = new Clipboard(this.$refs.copy.$el, {
        target: () => this.$refs.block
      });

      clipboard.on('success', (event) => {
        event.clearSelection();
        this.showMessage = true;

        window.setTimeout(() => {
          this.showMessage = false;
        }, 2000);
      });

      highlight.highlightBlock(this.$refs.block);
    }
  };
</script>
