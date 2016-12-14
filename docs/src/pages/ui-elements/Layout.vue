<template>
  <page-content page-title="UI Elements - Layout">
    <docs-component>
      <div slot="description">
        <p>Responsive layouts in material design adapt to any possible screen size. This UI guidance includes a flexible grid that ensures consistency across layouts, breakpoint details about how content reflows on different screens, and a description of how an app can scale from small to extra-large screens.</p>
      </div>

      <div slot="example">
        <example-box card-title="Responsive">
          <div class="layout-demo grid" slot="demo">
            <md-layout class="color" md-gutter>
              <md-layout class="color-red" md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
                <div class="grid-content">
                  md-flex-xsmall <br>
                  md-flex-small="50" <br>
                  md-flex-medium="33"
                </div>
              </md-layout>

              <md-layout class="color-blue" md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
                <div class="grid-content">
                  md-flex-xsmall <br>
                  md-flex-small="50" <br>
                  md-flex-medium="33"
                </div>
              </md-layout>

              <md-layout class="color-pink" md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
                <div class="grid-content">
                  md-flex-xsmall <br>
                  md-flex-small="50" <br>
                  md-flex-medium="33"
                </div>
              </md-layout>

              <md-layout class="color-teal" md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
                <div class="grid-content">
                  md-flex-xsmall <br>
                  md-flex-small="50" <br>
                  md-flex-medium="33"
                </div>
              </md-layout>

              <md-layout class="color-green" md-flex-small="100" md-flex-medium="33" md-hide-xsmall>
                <div class="grid-content">
                  md-flex-medium="33" <br>
                  md-hide-xsmall
                </div>
              </md-layout>

              <md-layout class="color-yellow" md-flex md-flex-medium="33" md-hide-small>
                <div class="grid-content">
                  md-flex-medium="33" <br>
                  md-hide-small
                </div>
              </md-layout>
            </md-layout>
          </div>

          <div slot="code">
            <code-block lang="xml">

            </code-block>
          </div>
        </example-box>

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

            <md-layout md-gutter="16" class="color">
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
            <md-layout md-gutter class="color">
              <md-layout md-flex="50"></md-layout>
              <md-layout></md-layout>
              <md-layout></md-layout>
              <md-layout></md-layout>
            </md-layout>

            <md-layout md-gutter class="color">
              <md-layout md-flex="33"></md-layout>
              <md-layout></md-layout>
            </md-layout>

            <md-layout md-gutter class="color">
              <md-layout></md-layout>
              <md-layout md-flex="66"></md-layout>
            </md-layout>

            <md-layout md-gutter class="color">
              <md-layout md-flex="75"></md-layout>
              <md-layout></md-layout>
            </md-layout>

            <md-layout md-gutter class="color">
              <md-layout md-flex="50"></md-layout>
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
            <md-layout class="column-size" md-gutter>
              <md-layout md-column md-gutter class="color">
                <md-layout md-flex="20"></md-layout>
                <md-layout></md-layout>
              </md-layout>

              <md-layout md-column md-gutter class="color">
                <md-layout md-flex="50"></md-layout>
                <md-layout></md-layout>
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
    min-height: 100px;
  }

  .no-gutter > .md-layout:last-child:before {
    background-color: rgba(#000, .2) !important;
  }

  .grid > .md-layout {
    > .md-layout:not(.md-column) {
      min-height: 40px;
      margin-bottom: 16px;
    }
  }

  .grid-content {
    padding: 16px;
  }

  .color {
    $sizes: (8, 16, 24, 40);

    @each $item in $sizes {
      $size: $item / 2 + px;

      &:not(.md-column).md-gutter-#{$item} > .md-layout:before {
        right: $size;
        left: $size;
      }

      &.md-column.md-gutter-#{$item} > .md-layout:before {
        top: $size;
        bottom: $size;
      }
    }

    > .md-layout {
      position: relative;

      &:before {
        width: 100%;
        height: 100%;
        margin-bottom: -200%;
        display: block;
        pointer-events: none;
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

  .color-red:before {
    background-color: #F44336 !important;
  }

  .color-blue:before {
    background-color: #2196F3 !important;
  }

  .color-yellow:before {
    background-color: #FFEB3B !important;
  }

  .color-green:before {
    background-color: #4CAF50 !important;
  }

  .color-purple:before {
    background-color: #9C27B0 !important;
  }

  .color-pink:before {
    background-color: #E91E63 !important;
  }

  .color-teal:before {
    background-color: #009688 !important;
  }

  .color-orange:before {
    background-color: #FF9800 !important;
  }
</style>
