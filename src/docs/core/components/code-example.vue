<template>
  <div class="code-example">
    <pre class="code" :class="syntax"><slot></slot></pre>
  </div>
</template>

<style src="../../../../node_modules/highlight.js/styles/ocean.css"></style>

<style lang="scss">
  .code-example {
    .code {
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
  }
</style>

<script>
  import highlight from 'highlight.js';

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
