<template>
  <page-content page-title="UI Elements - Layout">
    <docs-component>
      <div slot="description">
        <p>Responsive layouts in material design adapt to any possible screen size. This UI guidance includes a flexible grid that ensures consistency across layouts, breakpoint details about how content reflows on different screens, and a description of how an app can scale from small to extra-large screens.</p>
        <p>By default you can create gutter-free layouts, make the grid system calculate the best margin size for each screen or set it by yourself with the <code>md-gutter</code> property. If you want the automatic calculation the engine will set <code>16px</code> for small screens and then apply <code>24px</code> for medium to large.</p>
        <p>You can create columns size by size or rows to make your layout fluid. You can combine columns with rows or even use nested columns.</p>
        <p>The grid system makes use of flexbox to be flexible enough and give the best experience with a great and easy API. You can create responsive layouts with few lines of code with a declarative engine. The system work with some breakpoints:</p>
        <md-table slot="properties" class="properties">
          <md-table-header>
            <md-table-row>
              <md-table-head>Name</md-table-head>
              <md-table-head>Size</md-table-head>
              <md-table-head>Description</md-table-head>
            </md-table-row>
          </md-table-header>

          <md-table-body>
            <md-table-row>
              <md-table-cell><code>xsmall</code></md-table-cell>
              <md-table-cell>600px</md-table-cell>
              <md-table-cell>For screens who have the maximum of 600px wide. For small, medium and large handsets in portrait. Also applies to small handsets in portrait.</md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell><code>small</code></md-table-cell>
              <md-table-cell>960px</md-table-cell>
              <md-table-cell>For screens who have between of 600px and 960px wide. For medium and large handsets in landscape, small and large tablets in portrait mode and some desktop monitors.</md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell><code>medium</code></md-table-cell>
              <md-table-cell>1280px</md-table-cell>
              <md-table-cell>For screens who have between of 960px and 1280px wide. For small and large tablets in landscape and desktop monitors.</md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell><code>large</code></md-table-cell>
              <md-table-cell>1920px</md-table-cell>
              <md-table-cell>For screens who have between of 1280px and 1920px wide. For large desktop monitors.</md-table-cell>
            </md-table-row>

            <md-table-row>
              <md-table-cell><code>xlarge</code></md-table-cell>
              <md-table-cell>>1920px</md-table-cell>
              <md-table-cell>For screens bigger than 1920px wide. For huge desktop monitors or side-by-side screens.</md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>
      </div>

      <div slot="api">
        <api-table name="md-layout">
          <md-table slot="properties" class="properties">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Type</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>md-tag</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The output tag. Default <code>div</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-gutter</md-table-cell>
                <md-table-cell><code>Boolean|Number</code></md-table-cell>
                <md-table-cell>Apply a gutter space to direct childs of the element that have this property. If <code>true</code> the gutter will be calculated automatically by the current screen size. If number the size will be fixed. Accepts <code>8</code>|<code>16</code>|<code>24</code>|<code>40</code>. Default <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-row</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Create a row container. All child will be side by side.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-row-{type}</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Create a row container on screen sizes less than or equal to given breakpoint. Example: <code>md-row-large</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-column</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Create a column container. All child will be one underneath the other.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-column-{type}</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Create a column container on screen sizes less than or equal to given breakpoint. Example: <code>md-column-small</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-hide-{type}</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Hide a layout container/child on screen sizes less than or equal to given breakpoint. Example: <code>md-hide-medium</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-flex</md-table-cell>
                <md-table-cell><code>Boolean|Number</code></md-table-cell>
                <md-table-cell>Create a flexible child. If <code>true</code> the child element will grow to fill the empty space available on the parent element. If <code>Number</code> the size of the child will be sized according to the giver size. Accepts values multiple of 5. Also accepts the values 33 and 66. Default: <code>true</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-flex-{type}</md-table-cell>
                <md-table-cell><code>Boolean|Number</code></md-table-cell>
                <md-table-cell>Create a flexible child on screen sizes less than or equal to given breakpoint. Example: <code>md-flex-small="33"</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-flex-offset</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Create a empty space before the actual child. Accepts the same value of <code>md-flex</code> Example: <code>md-flex-offset="50"</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-flex-offset-{type}</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Create a empty space before the actual child  on screen sizes less than or equal to given breakpoint. Example: <code>md-flex-offset-small="20"</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-align</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Apply an alignment to the container. Accepts <code>start</code>|<code>center</code>|<code>end</code> Example: <code>md-align="end"</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-align-{type}</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Apply an alignment to the container on screen sizes less than or equal to given breakpoint. Example: <code>md-align-xlarge="center"</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
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
              &lt;md-layout md-gutter&gt;
                &lt;md-layout md-flex-xsmall=&quot;100&quot; md-flex-small=&quot;50&quot; md-flex-medium=&quot;33&quot;&gt;
                  md-flex-xsmall &lt;br&gt;
                  md-flex-small=&quot;50&quot; &lt;br&gt;
                  md-flex-medium=&quot;33&quot;
                &lt;/md-layout&gt;

                &lt;md-layout md-flex-xsmall=&quot;100&quot; md-flex-small=&quot;50&quot; md-flex-medium=&quot;33&quot;&gt;
                  md-flex-xsmall &lt;br&gt;
                  md-flex-small=&quot;50&quot; &lt;br&gt;
                  md-flex-medium=&quot;33&quot;
                &lt;/md-layout&gt;

                &lt;md-layout md-flex-xsmall=&quot;100&quot; md-flex-small=&quot;50&quot; md-flex-medium=&quot;33&quot;&gt;
                  md-flex-xsmall &lt;br&gt;
                  md-flex-small=&quot;50&quot; &lt;br&gt;
                  md-flex-medium=&quot;33&quot;
                &lt;/md-layout&gt;

                &lt;md-layout md-flex-xsmall=&quot;100&quot; md-flex-small=&quot;50&quot; md-flex-medium=&quot;33&quot;&gt;
                  md-flex-xsmall &lt;br&gt;
                  md-flex-small=&quot;50&quot; &lt;br&gt;
                  md-flex-medium=&quot;33&quot;
                &lt;/md-layout&gt;

                &lt;md-layout md-flex-small=&quot;100&quot; md-flex-medium=&quot;33&quot; md-hide-xsmall&gt;
                  md-flex-medium=&quot;33&quot; &lt;br&gt;
                  md-hide-xsmall
                &lt;/md-layout&gt;

                &lt;md-layout md-flex md-flex-medium=&quot;33&quot; md-hide-small&gt;
                  md-flex-medium=&quot;33&quot; &lt;br&gt;
                  md-hide-small
                &lt;/md-layout&gt;
              &lt;/md-layout&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Sizes and Offset">
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
              <md-layout md-flex="33" md-flex-offset="33"></md-layout>
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

            <md-layout md-gutter class="color">
              <md-layout md-flex="25" md-flex-offset="25"></md-layout>
              <md-layout md-flex="25"></md-layout>
            </md-layout>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-layout md-gutter&gt;
                &lt;md-layout md-flex=&quot;50&quot;&gt;&lt;/md-layout&gt;
                &lt;md-layout&gt;&lt;/md-layout&gt;
                &lt;md-layout&gt;&lt;/md-layout&gt;
                &lt;md-layout&gt;&lt;/md-layout&gt;
              &lt;/md-layout&gt;

              &lt;md-layout md-gutter&gt;
                &lt;md-layout md-flex=&quot;33&quot;&gt;&lt;/md-layout&gt;
                &lt;md-layout&gt;&lt;/md-layout&gt;
              &lt;/md-layout&gt;

              &lt;md-layout md-gutter&gt;
                &lt;md-layout&gt;&lt;/md-layout&gt;
                &lt;md-layout md-flex=&quot;33&quot; md-flex-offset=&quot;33&quot;&gt;&lt;/md-layout&gt;
              &lt;/md-layout&gt;

              &lt;md-layout md-gutter&gt;
                &lt;md-layout md-flex=&quot;75&quot;&gt;&lt;/md-layout&gt;
                &lt;md-layout&gt;&lt;/md-layout&gt;
              &lt;/md-layout&gt;

              &lt;md-layout md-gutter&gt;
                &lt;md-layout md-flex=&quot;50&quot;&gt;&lt;/md-layout&gt;
                &lt;md-layout&gt;&lt;/md-layout&gt;
                &lt;md-layout&gt;&lt;/md-layout&gt;
              &lt;/md-layout&gt;

              &lt;md-layout md-gutter&gt;
                &lt;md-layout md-flex=&quot;25&quot; md-flex-offset=&quot;25&quot;&gt;&lt;/md-layout&gt;
                &lt;md-layout md-flex=&quot;25&quot;&gt;&lt;/md-layout&gt;
              &lt;/md-layout&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Direction">
          <div class="layout-demo grid" slot="demo">
            <md-layout class="column-size" md-gutter="16">
              <md-layout md-column md-gutter="16" class="color">
                <md-layout md-flex="20"></md-layout>
                <md-layout></md-layout>
              </md-layout>

              <md-layout md-column md-gutter="16" class="color">
                <md-layout md-flex="50"></md-layout>
                <md-layout></md-layout>
                <md-layout></md-layout>
              </md-layout>
            </md-layout>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-layout md-gutter&gt;
                &lt;md-layout md-column md-gutter&gt;
                  &lt;md-layout md-flex=&quot;20&quot;&gt;&lt;/md-layout&gt;
                  &lt;md-layout&gt;&lt;/md-layout&gt;
                &lt;/md-layout&gt;

                &lt;md-layout md-column md-gutter&gt;
                  &lt;md-layout md-flex=&quot;50&quot;&gt;&lt;/md-layout&gt;
                  &lt;md-layout&gt;&lt;/md-layout&gt;
                  &lt;md-layout&gt;&lt;/md-layout&gt;
                &lt;/md-layout&gt;
              &lt;/md-layout&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Alignment">
          <div class="layout-demo grid gutter" slot="demo">
            <md-layout md-gutter="16" class="color">
              <md-layout md-flex="50">
                <span>start</span>
              </md-layout>
            </md-layout>

            <md-layout md-align="end" md-gutter="16" class="color">
              <md-layout md-flex="33">
                <span>end</span>
              </md-layout>
            </md-layout>

            <md-layout md-align="end" md-gutter="16" class="color">
              <md-layout md-flex="20">
                <span>end</span>
              </md-layout>

              <md-layout md-flex="20">
                <span>end</span>
              </md-layout>
            </md-layout>

            <md-layout md-align="center" md-gutter="16" class="color">
              <md-layout md-flex="35">
                <span>center</span>
              </md-layout>

              <md-layout md-flex="35">
                <span>center</span>
              </md-layout>
            </md-layout>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-layout md-gutter=&quot;16&quot;&gt;
                &lt;md-layout md-flex=&quot;50&quot;&gt;
                  &lt;span&gt;start&lt;/span&gt;
                &lt;/md-layout&gt;
              &lt;/md-layout&gt;

              &lt;md-layout md-align=&quot;end&quot; md-gutter=&quot;16&quot;&gt;
                &lt;md-layout md-flex=&quot;33&quot;&gt;
                  &lt;span&gt;end&lt;/span&gt;
                &lt;/md-layout&gt;
              &lt;/md-layout&gt;

              &lt;md-layout md-align=&quot;end&quot; md-gutter=&quot;16&quot;&gt;
                &lt;md-layout md-flex=&quot;20&quot;&gt;
                  &lt;span&gt;end&lt;/span&gt;
                &lt;/md-layout&gt;

                &lt;md-layout md-flex=&quot;20&quot;&gt;
                  &lt;span&gt;end&lt;/span&gt;
                &lt;/md-layout&gt;
              &lt;/md-layout&gt;

              &lt;md-layout md-align=&quot;center&quot; md-gutter=&quot;16&quot;&gt;
                &lt;md-layout md-flex=&quot;35&quot;&gt;
                  &lt;span&gt;center&lt;/span&gt;
                &lt;/md-layout&gt;

                &lt;md-layout md-flex=&quot;35&quot;&gt;
                  &lt;span&gt;center&lt;/span&gt;
                &lt;/md-layout&gt;
              &lt;/md-layout&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Gutters">
          <div class="layout-demo grid gutter" slot="demo">
            <md-layout class="no-gutter color">
              <md-layout></md-layout>
              <md-layout></md-layout>
            </md-layout>

            <md-layout :md-gutter="8" class="color">
              <md-layout>
                <span>8px</span>
              </md-layout>

              <md-layout>
                <span>8px</span>
              </md-layout>

              <md-layout>
                <span>8px</span>
              </md-layout>

              <md-layout>
                <span>8px</span>
              </md-layout>

              <md-layout>
                <span>8px</span>
              </md-layout>

              <md-layout>
                <span>8px</span>
              </md-layout>
            </md-layout>

            <md-layout md-gutter="16" class="color">
              <md-layout>
                <span>16px</span>
              </md-layout>

              <md-layout>
                <span>16px</span>
              </md-layout>

              <md-layout>
                <span>16px</span>
              </md-layout>

              <md-layout>
                <span>16px</span>
              </md-layout>

              <md-layout>
                <span>16px</span>
              </md-layout>
            </md-layout>

            <md-layout :md-gutter="24" class="color">
              <md-layout>
                <span>24px</span>
              </md-layout>

              <md-layout>
                <span>24px</span>
              </md-layout>

              <md-layout>
                <span>24px</span>
              </md-layout>

              <md-layout>
                <span>24px</span>
              </md-layout>
            </md-layout>

            <md-layout :md-gutter="40" class="color">
              <md-layout>
                <span>40px</span>
              </md-layout>

              <md-layout>
                <span>40px</span>
              </md-layout>

              <md-layout>
                <span>40px</span>
              </md-layout>
            </md-layout>

            <md-layout :md-gutter="true" class="color">
              <md-layout>
                <span>Automatic</span>
              </md-layout>

              <md-layout>
                <span>Automatic</span>
              </md-layout>
            </md-layout>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-layout&gt;
                &lt;md-layout&gt;&lt;/md-layout&gt;
                &lt;md-layout&gt;&lt;/md-layout&gt;
              &lt;/md-layout&gt;

              &lt;md-layout :md-gutter=&quot;8&quot;&gt;
                &lt;md-layout&gt;
                  &lt;span&gt;8px&lt;/span&gt;
                &lt;/md-layout&gt;

                &lt;md-layout&gt;
                  &lt;span&gt;8px&lt;/span&gt;
                &lt;/md-layout&gt;

                &lt;md-layout&gt;
                  &lt;span&gt;8px&lt;/span&gt;
                &lt;/md-layout&gt;

                &lt;md-layout&gt;
                  &lt;span&gt;8px&lt;/span&gt;
                &lt;/md-layout&gt;

                &lt;md-layout&gt;
                  &lt;span&gt;8px&lt;/span&gt;
                &lt;/md-layout&gt;

                &lt;md-layout&gt;
                  &lt;span&gt;8px&lt;/span&gt;
                &lt;/md-layout&gt;
              &lt;/md-layout&gt;

              &lt;md-layout md-gutter=&quot;16&quot;&gt;
                &lt;md-layout&gt;
                  &lt;span&gt;16px&lt;/span&gt;
                &lt;/md-layout&gt;

                &lt;md-layout&gt;
                  &lt;span&gt;16px&lt;/span&gt;
                &lt;/md-layout&gt;

                &lt;md-layout&gt;
                  &lt;span&gt;16px&lt;/span&gt;
                &lt;/md-layout&gt;

                &lt;md-layout&gt;
                  &lt;span&gt;16px&lt;/span&gt;
                &lt;/md-layout&gt;

                &lt;md-layout&gt;
                  &lt;span&gt;16px&lt;/span&gt;
                &lt;/md-layout&gt;
              &lt;/md-layout&gt;

              &lt;md-layout :md-gutter=&quot;24&quot;&gt;
                &lt;md-layout&gt;
                  &lt;span&gt;24px&lt;/span&gt;
                &lt;/md-layout&gt;

                &lt;md-layout&gt;
                  &lt;span&gt;24px&lt;/span&gt;
                &lt;/md-layout&gt;

                &lt;md-layout&gt;
                  &lt;span&gt;24px&lt;/span&gt;
                &lt;/md-layout&gt;

                &lt;md-layout&gt;
                  &lt;span&gt;24px&lt;/span&gt;
                &lt;/md-layout&gt;
              &lt;/md-layout&gt;

              &lt;md-layout :md-gutter=&quot;40&quot;&gt;
                &lt;md-layout&gt;
                  &lt;span&gt;40px&lt;/span&gt;
                &lt;/md-layout&gt;

                &lt;md-layout&gt;
                  &lt;span&gt;40px&lt;/span&gt;
                &lt;/md-layout&gt;

                &lt;md-layout&gt;
                  &lt;span&gt;40px&lt;/span&gt;
                &lt;/md-layout&gt;
              &lt;/md-layout&gt;

              &lt;md-layout md-gutter&gt;
                &lt;md-layout&gt;
                  &lt;span&gt;Automatic&lt;/span&gt;
                &lt;/md-layout&gt;

                &lt;md-layout&gt;
                  &lt;span&gt;Automatic&lt;/span&gt;
                &lt;/md-layout&gt;
              &lt;/md-layout&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="sass" scoped>
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

  .gutter .color .md-layout {
    color: rgba(#000, .54);
    font-size: 13px;
    font-weight: 500;
    text-indent: 8px;
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

  .properties {
    table tr td:first-child {
      white-space: nowrap;
    }
  }
</style>
