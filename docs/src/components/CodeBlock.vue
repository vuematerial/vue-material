<template>
  <div class="code-block" :data-lang="lang">
    <div class="code-block-wrapper" :style="{ 'max-height': height }">
      <pre><code :class="lang" ref="block"><slot></slot></code></pre>

      <span class="copied" :class="{ 'active': showMessage }">Copied!</span>
    </div>

    <md-button class="md-icon-button md-dense" ref="copy">
      <md-icon>content_copy</md-icon>
    </md-button>
  </div>
</template>

<style lang="sass" scoped>
  @import '../../../src/core/stylesheets/variables.scss';

  .code-block {
    overflow: hidden;
    position: relative;
    border-radius: 2px;
    background-color: #f4f4f4;
    color: #455A64;
    font-family: "Operator Mono", "Fira Code", Menlo, Hack, "Roboto Mono", "Liberation Mono", Monaco, monospace;
    font-size: 14px;
    line-height: 1.4em;

    + .code-block {
      margin-top: 24px;
    }

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
      right: 30px;
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

    &[data-lang="bash"]:after {
      content: 'Shell';
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
    max-height: 450px;
    padding: 16px;
    overflow: auto;
  }

  .md-icon-button {
    position: absolute;
    top: 8px;
    right: 20px;
    z-index: 2;
    opacity: 0;
    transition: $swift-ease-out;
  }

  .copied {
    padding: 8px 16px;
    position: absolute;
    top: 14px;
    left: 12px;
    background-color: rgba(#000, .87);
    border-radius: 2px;
    transform: translate3d(0, -48px, 0);
    transition: $swift-ease-in-out;
    color: #fff;
    font-family: $font-roboto;
    font-size: 14px;
    line-height: 1em;

    &.active {
      transition: $swift-ease-out;
      transform: translate3d(0, 0, 0);
    }
  }
</style>

<style lang="sass">
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
  import highlightJavascript from 'highlight.js/lib/languages/javascript';
  import highlightBash from 'highlight.js/lib/languages/bash';
  import Clipboard from 'clipboard';
  import getClosestVueParent from '../../../src/core/utils/getClosestVueParent';

  highlight.registerLanguage('scss', highlightSCSS);
  highlight.registerLanguage('xml', highlightXML);
  highlight.registerLanguage('javascript', highlightJavascript);
  highlight.registerLanguage('bash', highlightBash);

  export default {
    props: {
      lang: String,
      height: {
        type: [Number, String],
        default: '450px'
      }
    },
    data: () => ({
      showMessage: false
    }),
    methods: {
      enableCopy() {
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
      },
      reindent() {
        const block = this.$refs.block;
        let lines = block.textContent.split('\n');
        let matches;

        if (lines[0] === '') {
          lines.shift();
        }

        let indentation = (matches = (/^[\s\t]+/).exec(lines[0])) !== null ? matches[0] : null;

        if (indentation) {
          lines = lines.map(function(line) {
            line = line.replace(indentation, '');

            return line.replace(/\t/g, '  ');
          });

          block.textContent = lines.join('\n').trim();
        }
      }
    },
    mounted() {
      this.exampleBoxParent = getClosestVueParent(this.$parent, 'example-box');
      this.reindent();
      this.enableCopy();

      if (this.exampleBoxParent) {
        this.exampleBoxParent.codeBlocks.push({
          lang: this.lang,
          code: this.$refs.block.innerHTML
        });
      }

      highlight.highlightBlock(this.$refs.block);
    }
  };
</script>
