<template>
  <div class="code-block">
    <pre><code :class="lang" ref="block"><slot></slot></code></pre>
  </div>
</template>

<style lang="scss">
  @import '../../../src/core/stylesheets/variables.scss';

  .code-block {
    width: 100%;
    padding: 4px 32px;
    margin: 0;
    position: relative;
    overflow: auto;
    border-radius: 2px;
    background-color: #eee;
    color: #455A64;
    font-family: "Operator Mono", "Fira Code", Menlo, Hack, "Roboto Mono", "Liberation Mono", Monaco, monospace;
    font-size: 14px;
    line-height: 24px;

    + .code-block {
      margin-top: 16px;
    }

    pre {
      margin: 0;
      white-space: pre-wrap;
    }

    code {
      padding: 0;
      background: none;
    }

    .hljs:after {
      position: absolute;
      top: 8px;
      right: 8px;
      color: rgba(#000, .26);
      font-family: $font-roboto;
      font-size: 11px;
      line-height: 1em;
    }

    .hljs.html:after {
      content: 'HTML';
    }

    .hljs.javascript:after {
      content: 'Javascript';
    }

    .hljs.xml:after {
      content: 'HTML';
    }

    .hljs.scss:after {
      content: 'SCSS';
    }

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

  export default {
    props: ['lang'],
    mounted() {
      highlight.highlightBlock(this.$refs.block);
    }
  };
</script>
