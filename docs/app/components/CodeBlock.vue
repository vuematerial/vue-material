<template>
  <div class="code-block" :data-label="label">
    <div class="code-block-wrapper md-scrollbar md-theme-dark" :style="{ 'max-height': height }">
      <pre><code ref="block" :class="lang"><slot v-pre /></code></pre>

      <span class="copy-message" :class="{ 'active': showMessage }">{{ $t('components.code.copyMessage') }}</span>
    </div>

    <md-button class="md-raised md-accent md-dense" ref="copy">{{ $t('components.code.copy') }}</md-button>
  </div>
</template>

<script>
  import highlight from 'highlight.js/lib/highlight.js'
  import highlightSCSS from 'highlight.js/lib/languages/scss'
  import highlightXML from 'highlight.js/lib/languages/xml'
  import highlightJavascript from 'highlight.js/lib/languages/javascript'
  import highlightShell from 'highlight.js/lib/languages/shell'
  import Clipboard from 'clipboard'
  import codeSource from 'docs-mixins/codeSource'

  highlight.registerLanguage('scss', highlightSCSS)
  highlight.registerLanguage('xml', highlightXML)
  highlight.registerLanguage('javascript', highlightJavascript)
  highlight.registerLanguage('shell', highlightShell)

  export default {
    name: 'CodeBlock',
    mixins: [codeSource],
    props: {
      lang: String,
      label: String,
      height: {
        type: [Number, String],
        default: '450px'
      }
    },
    data: () => ({
      showMessage: false
    }),
    methods: {
      reindentSource: codeSource.reindentSource,
      enableCopy () {
        if (this.$refs.copy) {
          const clipboard = new Clipboard(this.$refs.copy.$el, {
            target: () => this.$refs.block
          })
          let timer = null

          clipboard.on('success', (event) => {
            event.clearSelection()
            this.showMessage = true

            window.clearTimeout(timer)
            timer = window.setTimeout(() => {
              this.showMessage = false
            }, 2000)
          })
        }
      }
    },
    mounted () {
      this.$nextTick().then(() => {
        this.reindentSource()
        this.enableCopy()

        highlight.highlightBlock(this.$refs.block)
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/theme/engine";

  .code-block {
    max-width: 100%;
    overflow: hidden;
    position: relative;
    background-color: md-get-palette-color(grey, 900);

    ::selection {
      background-color: md-get-palette-color(grey, 400);
      color: inherit;
    }

    +.code-block {
      margin-top: 24px;
    }

    &:hover {
      .md-button {
        opacity: 1;
      }
    }

    &:after {
      position: absolute;
      top: 16px;
      right: 16px;
      transition: $md-transition-stand;
      color: rgba(#fff, .38);
      content: attr(data-lang);
      font-size: 11px;
      line-height: 1em;
      text-transform: uppercase;
    }

    pre {
      max-width: 100%;
      margin: 0;
      white-space: pre-wrap;
    }

    code {
      padding: 0;
      background: none;
    }
  }

  .code-block-wrapper {
    min-width: 100%;
    max-height: 450px;
    min-height: 86px;
    padding: 16px;
    overflow: auto;
  }

  .md-button {
    min-width: 56px;
    margin: 8px;
    position: absolute;
    right: 0;
    bottom: 0;
    opacity: 0;
  }

  .copy-message {
    padding: 8px 12px;
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: md-get-palette-color(grey, 200);
    border-radius: 2px;
    transform: translate3d(0, -48px, 0);
    transition: .3s $md-transition-drop-timing;
    color: md-get-palette-color(grey, 900);
    font-size: 14px;
    line-height: 1em;

    &.active {
      transition: .3s $md-transition-stand-timing;
      transform: translate3d(0, 0, 0);
    }
  }
</style>

<style lang="scss">
  @import "~vue-material/theme/engine";

  .hljs {
    color: md-get-palette-color(grey, 200);
    font-family: "Roboto Mono", monospace;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.5em;
  }

  .hljs-comment,
  .hljs-quote,
  .hljs-meta {
    color: #7c7c7c;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-name {
    color: #f07178;
  }

  .hljs-tag,
  .hljs-params {
    color: #89ddff;
  }

  .hljs-attribute {
    color: #a7bfc9;
  }

  .hljs-selector-class,
  .hljs-selector-id,
  .hljs-built_in {
    color: #FDD835;
  }

  .hljs-attr,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-function {
    color: #bb8adb;
  }

  .hljs-string,
  .hljs-addition {
    color: #bbdf88;
  }

  .hljs-subst {
    color: #daefa3;
  }

  .hljs-regexp,
  .hljs-link {
    color: #e9c062;
  }

  .hljs-title,
  .hljs-section,
  .hljs-type,
  .hljs-doctag {
    color: #ffffb6;
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-literal {
    color: #FFAB40;
  }

  .hljs-number,
  .hljs-deletion {
    color:#FFAB40;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: 500;
  }

  .scss,
  .undefined {
    color: #89dcfe;
  }

  .javascript .hljs-attr {
    color: #bbdf88;
  }
</style>
