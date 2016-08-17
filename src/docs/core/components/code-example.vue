<template>
  <div class="code-example">
    <div class="code-highlighted">
      <h3 class="title">Code Example</h3>
      <pre class="code" :class="syntax"><slot name="code"></slot></pre>
    </div>

    <div class="api">
      <h3 class="title">API</h3>

      <slot name="api"></slot>
    </div>
  </div>
</template>

<style src="../../../../node_modules/highlight.js/styles/ocean.css"></style>

<style lang="scss">
  .code-example {
    .code {
      width: auto;
      margin: 0;
      padding: 0 16px;
      background-color: #2d3234;
      color: #cdd3de;
      font-family: Hack, 'Operator Mono', Inconsolata, Monaco, Menlo, 'Fira Code', Consolas;
      font-size: 15px;
      line-height: 1.4em;
    }

    ::selection {
      background: lighten(#3f4345, 40%) !important;
    }

    .hljs-keyword {
      color: #69c;
    }

    .hljs-built_in {
      color: #fac863;
    }

    .hljs-string {
      color: #99c794;
    }

    .hljs-literal,
    .hljs-number {
      color: #f99157;
    }

    .hljs-selector-class {
      color: #c594c5;
    }

    .hljs-attribute {
      color: #fac863;
    }

    .hljs-attribute {
      color: #fac863;
    }

    .hljs-variable {
      color: #f07178;
    }

    .hljs-selector-tag {
      color: #f07178;
    }

    .html {
      .hljs-tag {
        color: inherit;
      }

      .hljs-name {
        color: #f07178;
      }

      .hljs-attr {
        color: #c594c5;
      }
    }

    .title {
      margin: 0;
      padding: 16px;
    }
  }
</style>

<script>
  import highlight from 'highlight.js/lib/highlight.js';
  import javascript from 'highlight.js/lib/languages/javascript.js';
  import scss from 'highlight.js/lib/languages/scss.js';
  import xml from 'highlight.js/lib/languages/xml.js';

  highlight.registerLanguage('xml', xml);
  highlight.registerLanguage('scss', scss);
  highlight.registerLanguage('javascript', javascript);

  export default {
    props: {
      syntax: String
    },
    ready() {
      highlight.configure({
        tabReplace: '  ',
        languages: ['html', 'javascript', 'scss']
      });

      highlight.highlightBlock(this.$el.querySelector('.code'));
    }
  };
</script>
