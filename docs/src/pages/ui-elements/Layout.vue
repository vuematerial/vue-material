<template>
  <page-content page-title="Layout">
    <docs-component>
      <div slot="description">
        <p>Responsive layouts in material design adapt to any possible screen size. This UI guidance includes a flexible grid that ensures consistency across layouts, breakpoint details about how content reflows on different screens, and a description of how an app can scale from small to extra-large screens.</p>
      </div>

      <div slot="example">
        <example-box card-title="Gutters">
          <div class="layout-demo grid" slot="demo">
            <md-layout class="no-gutter color">
              <md-layout></md-layout>
              <md-layout></md-layout>
            </md-layout>

            <md-layout :md-gutter="8" class="color">
              <md-layout></md-layout>
              <md-layout></md-layout>
              <md-layout></md-layout>
              <md-layout></md-layout>
              <md-layout></md-layout>
            </md-layout>

            <md-layout :md-gutter="16" class="color">
              <md-layout></md-layout>
              <md-layout></md-layout>
              <md-layout></md-layout>
              <md-layout></md-layout>
            </md-layout>

            <md-layout :md-gutter="24" class="color">
              <md-layout></md-layout>
              <md-layout></md-layout>
              <md-layout></md-layout>
            </md-layout>

            <md-layout :md-gutter="40" class="color">
              <md-layout></md-layout>
              <md-layout></md-layout>
            </md-layout>
          </div>

          <div slot="code">
            <code-block lang="xml">

            </code-block>
          </div>
        </example-box>

        <example-box card-title="Sizes">
          <div class="layout-demo grid" slot="demo">
            <md-layout :md-gutter="16" class="color">
              <md-layout :md-flex="50"></md-layout>
              <md-layout></md-layout>
              <md-layout></md-layout>
              <md-layout></md-layout>
            </md-layout>

            <md-layout :md-gutter="16" class="color">
              <md-layout :md-flex="33"></md-layout>
              <md-layout></md-layout>
            </md-layout>

            <md-layout :md-gutter="16" class="color">
              <md-layout></md-layout>
              <md-layout :md-flex="66"></md-layout>
            </md-layout>

            <md-layout :md-gutter="16" class="color">
              <md-layout :md-flex="75"></md-layout>
              <md-layout></md-layout>
            </md-layout>

            <md-layout :md-gutter="16" class="color">
              <md-layout :md-flex="50"></md-layout>
              <md-layout></md-layout>
              <md-layout></md-layout>
            </md-layout>
          </div>

          <div slot="code">
            <code-block lang="xml">

            </code-block>
          </div>
        </example-box>

        <example-box card-title="Direction">
          <div class="layout-demo grid" slot="demo">
            <md-layout class="column-size" :md-gutter="16">
              <md-layout md-column :md-gutter="16" class="color">
                <md-layout :md-flex="20"></md-layout>
                <md-layout></md-layout>
              </md-layout>

              <md-layout md-column :md-gutter="16" class="color">
                <md-layout :md-flex="50"></md-layout>
                <md-layout></md-layout>
                <md-layout></md-layout>
              </md-layout>
            </md-layout>

            <md-layout class="column-size" :md-gutter="24">
              <md-layout md-column :md-gutter="24" class="color">
                <md-layout :md-flex="25"></md-layout>
                <md-layout></md-layout>
              </md-layout>

              <md-layout md-column :md-gutter="24" class="color">
                <md-layout :md-flex="25"></md-layout>
                <md-layout :md-flex="50"></md-layout>
                <md-layout></md-layout>
              </md-layout>
            </md-layout>
          </div>

          <div slot="code">
            <code-block lang="xml">

            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="scss" scoped>
  .layout-demo {
    min-height: 200px;
  }

  .no-gutter > .md-layout:last-child:after {
    background-color: rgba(#000, .2) !important;
  }

  .grid {
    .md-layout:not(.md-column) {
      height: 40px;
    }

    > .md-layout:not(.md-column) + .md-layout {
      margin-top: 16px;
    }
  }

  .color {
    $sizes: (8, 16, 24, 40);

    @each $item in $sizes {
      $size: $item / 2 + px;

      &:not(.md-column).md-gutter-#{$item} > .md-layout:after {
        right: $size;
        left: $size;
      }

      &.md-column.md-gutter-#{$item} > .md-layout:after {
        top: $size;
        bottom: $size;
      }
    }

    > .md-layout {
      position: relative;

      &:after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(#000, .12);
        content: " ";
      }
    }
  }

  .column-size {
    height: 250px !important;

    + .column-size {
      margin-top: 48px !important;
    }
  }
</style>
