<template>
  <page-content page-title="Components - Menu">
    <docs-component>
      <div slot="description">
        <p>Menus appear upon interaction with a button, action, or other control. They display a list of choices, with one choice per line.</p>
        <p>You can create menus with selection items or show rich content.</p>
        <p>You will need an element with the <code>md-menu-trigger</code> attribute inside the menu or to use the menu core methods, like on the last example.</p>
      </div>

      <div slot="api">
        <api-table name="md-menu">
          <md-table slot="properties">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Type</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>md-size</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Sets the size of the menu content. From 0 to 7. <br>Default: <code>0</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-direction</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Sets the direction of the menu content. <br> Possibilities: <code>bottom right</code> | <code>bottom left</code> | <code>top right</code> | <code>top right</code><br>Default: <code>bottom right</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-align-trigger</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Align the menu content to do not cover menu trigger. <br>Default: <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-offset-x</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Set the menu content offset margin horizontally. <br>Default: <code>0</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-offset-y</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Set the menu content offset margin vertically. <br>Default: <code>0</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-close-on-select</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Close menu content upon mouse click on its menu items. <br>Default: <code>true</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>

          <md-table slot="events">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Value</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>open</md-table-cell>
                <md-table-cell>None</md-table-cell>
                <md-table-cell>Triggered when the menu starts to open.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>close</md-table-cell>
                <md-table-cell>None</md-table-cell>
                <md-table-cell>Triggered when the menu starts to close.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>

          <md-table slot="methods">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>open</md-table-cell>
                <md-table-cell>Open the menu.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>close</md-table-cell>
                <md-table-cell>Close the menu.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table name="md-menu-content">
          <p>Displays the content of a menu.</p>
          <p>No options available</p>
        </api-table>

        <api-table name="md-menu-item">
          <p>Displays a single item inside a menu.</p>

          <div slot="properties">
            <md-table>
              <md-table-header>
                <md-table-row>
                  <md-table-head>Name</md-table-head>
                  <md-table-head>Type</md-table-head>
                  <md-table-head>Description</md-table-head>
                </md-table-row>
              </md-table-header>

              <md-table-body>
                <md-table-row>
                  <md-table-cell>disabled</md-table-cell>
                  <md-table-cell><code>Boolean</code></md-table-cell>
                  <md-table-cell>Disable the button and prevent his actions. Default <code>false</code></md-table-cell>
                </md-table-row>
              </md-table-body>
            </md-table>
          </div>

          <md-table slot="events">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Value</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>selected</md-table-cell>
                <md-table-cell>Receives the <code>$event</code></md-table-cell>
                <md-table-cell>Triggered when the item receives a click.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Directions">
          <div slot="demo">
            <md-menu>
              <md-button md-menu-trigger>Bottom Right</md-button>

              <md-menu-content>
                <md-menu-item>My Item 1</md-menu-item>
                <md-menu-item>My Item 2</md-menu-item>
                <md-menu-item>My Item 3</md-menu-item>
              </md-menu-content>
            </md-menu>

            <md-menu md-direction="bottom left">
              <md-button md-menu-trigger>Bottom Left</md-button>

              <md-menu-content>
                <md-menu-item>My Item 1</md-menu-item>
                <md-menu-item>My Item 2</md-menu-item>
                <md-menu-item disabled>My Item 3</md-menu-item>
                <md-menu-item>My Item 4</md-menu-item>
              </md-menu-content>
            </md-menu>

            <md-menu md-direction="top left">
              <md-button md-menu-trigger>Top Left</md-button>

              <md-menu-content>
                <md-menu-item>My Item 1</md-menu-item>
                <md-menu-item>My Item 2</md-menu-item>
                <md-menu-item>My Item 3</md-menu-item>
              </md-menu-content>
            </md-menu>

            <md-menu md-direction="top right">
              <md-button md-menu-trigger>Top Right</md-button>

              <md-menu-content>
                <md-menu-item>My Item 1</md-menu-item>
                <md-menu-item>My Item 2</md-menu-item>
                <md-menu-item>My Item 3</md-menu-item>
              </md-menu-content>
            </md-menu>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-menu&gt;
                &lt;md-button md-menu-trigger&gt;Bottom Right&lt;/md-button&gt;

                &lt;md-menu-content&gt;
                  &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
                &lt;/md-menu-content&gt;
              &lt;/md-menu&gt;

              &lt;md-menu md-direction=&quot;bottom left&quot;&gt;
                &lt;md-button md-menu-trigger&gt;Bottom Left&lt;/md-button&gt;

                &lt;md-menu-content&gt;
                  &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
                  &lt;md-menu-item disabled&gt;My Item 3&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 4&lt;/md-menu-item&gt;
                &lt;/md-menu-content&gt;
              &lt;/md-menu&gt;

              &lt;md-menu md-direction=&quot;top left&quot;&gt;
                &lt;md-button md-menu-trigger&gt;Top Left&lt;/md-button&gt;

                &lt;md-menu-content&gt;
                  &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
                &lt;/md-menu-content&gt;
              &lt;/md-menu&gt;

              &lt;md-menu md-direction=&quot;top right&quot;&gt;
                &lt;md-button md-menu-trigger&gt;Top Right&lt;/md-button&gt;

                &lt;md-menu-content&gt;
                  &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
                &lt;/md-menu-content&gt;
              &lt;/md-menu&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Alignments">
          <div slot="demo">
            <md-menu>
              <md-button md-menu-trigger>Default</md-button>

              <md-menu-content>
                <md-menu-item>My Item 1</md-menu-item>
                <md-menu-item>My Item 2</md-menu-item>
                <md-menu-item>My Item 3</md-menu-item>
              </md-menu-content>
            </md-menu>

            <md-menu md-align-trigger>
              <md-button md-menu-trigger>Align trigger</md-button>

              <md-menu-content>
                <md-menu-item>My Item 1</md-menu-item>
                <md-menu-item>My Item 2</md-menu-item>
                <md-menu-item>My Item 3</md-menu-item>
              </md-menu-content>
            </md-menu>

            <md-menu :md-offset-x="154" md-offset-y="12">
              <md-button md-menu-trigger>Custom offset</md-button>

              <md-menu-content>
                <md-menu-item>My Item 1</md-menu-item>
                <md-menu-item>My Item 2</md-menu-item>
                <md-menu-item>My Item 3</md-menu-item>
              </md-menu-content>
            </md-menu>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-menu&gt;
                &lt;md-button md-menu-trigger&gt;Default&lt;/md-button&gt;

                &lt;md-menu-content&gt;
                  &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
                &lt;/md-menu-content&gt;
              &lt;/md-menu&gt;

              &lt;md-menu md-align-trigger&gt;
                &lt;md-button md-menu-trigger&gt;Align trigger&lt;/md-button&gt;

                &lt;md-menu-content&gt;
                  &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
                &lt;/md-menu-content&gt;
              &lt;/md-menu&gt;

              &lt;md-menu :md-offset-x=&quot;154&quot; md-offset-y=&quot;12&quot;&gt;
                &lt;md-button md-menu-trigger&gt;Custom offset&lt;/md-button&gt;

                &lt;md-menu-content&gt;
                  &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
                &lt;/md-menu-content&gt;
              &lt;/md-menu&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Sizes">
          <div slot="demo">
            <md-menu md-size="1">
              <md-button md-menu-trigger>Size 1</md-button>

              <md-menu-content>
                <md-menu-item>Item 1</md-menu-item>
                <md-menu-item>Item 2</md-menu-item>
                <md-menu-item>Item 3</md-menu-item>
              </md-menu-content>
            </md-menu>

            <md-menu md-size="2">
              <md-button md-menu-trigger>Size 2</md-button>

              <md-menu-content>
                <md-menu-item>My Item 1</md-menu-item>
                <md-menu-item>My Item 2</md-menu-item>
                <md-menu-item>My Item 3</md-menu-item>
              </md-menu-content>
            </md-menu>

            <md-menu md-size="3">
              <md-button md-menu-trigger>Size 3</md-button>

              <md-menu-content>
                <md-menu-item>My Item 1</md-menu-item>
                <md-menu-item>My Item 2</md-menu-item>
                <md-menu-item>My Item 3</md-menu-item>
              </md-menu-content>
            </md-menu>

            <md-menu md-size="4">
              <md-button md-menu-trigger>Size 4</md-button>

              <md-menu-content>
                <md-menu-item>My Item 1</md-menu-item>
                <md-menu-item>My Item 2</md-menu-item>
                <md-menu-item>My Item 3</md-menu-item>
              </md-menu-content>
            </md-menu>

            <md-menu md-size="5">
              <md-button md-menu-trigger>Size 5</md-button>

              <md-menu-content>
                <md-menu-item>My Item 1</md-menu-item>
                <md-menu-item>My Item 2</md-menu-item>
                <md-menu-item>My Item 3</md-menu-item>
              </md-menu-content>
            </md-menu>

            <md-menu md-size="6">
              <md-button md-menu-trigger>Size 6</md-button>

              <md-menu-content>
                <md-menu-item>My Item 1</md-menu-item>
                <md-menu-item>My Item 2</md-menu-item>
                <md-menu-item>My Item 3</md-menu-item>
              </md-menu-content>
            </md-menu>

            <md-menu md-size="7">
              <md-button md-menu-trigger>Size 7</md-button>

              <md-menu-content>
                <md-menu-item>My Item 1</md-menu-item>
                <md-menu-item>My Item 2</md-menu-item>
                <md-menu-item>My Item 3</md-menu-item>
              </md-menu-content>
            </md-menu>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-menu md-size=&quot;1&quot;&gt;
                &lt;md-button md-menu-trigger&gt;Size 1&lt;/md-button&gt;

                &lt;md-menu-content&gt;
                  &lt;md-menu-item&gt;Item 1&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;Item 2&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;Item 3&lt;/md-menu-item&gt;
                &lt;/md-menu-content&gt;
              &lt;/md-menu&gt;

              &lt;md-menu md-size=&quot;2&quot;&gt;
                &lt;md-button md-menu-trigger&gt;Size 2&lt;/md-button&gt;

                &lt;md-menu-content&gt;
                  &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
                &lt;/md-menu-content&gt;
              &lt;/md-menu&gt;

              &lt;md-menu md-size=&quot;3&quot;&gt;
                &lt;md-button md-menu-trigger&gt;Size 3&lt;/md-button&gt;

                &lt;md-menu-content&gt;
                  &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
                &lt;/md-menu-content&gt;
              &lt;/md-menu&gt;

              &lt;md-menu md-size=&quot;4&quot;&gt;
                &lt;md-button md-menu-trigger&gt;Size 4&lt;/md-button&gt;

                &lt;md-menu-content&gt;
                  &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
                &lt;/md-menu-content&gt;
              &lt;/md-menu&gt;

              &lt;md-menu md-size=&quot;5&quot;&gt;
                &lt;md-button md-menu-trigger&gt;Size 5&lt;/md-button&gt;

                &lt;md-menu-content&gt;
                  &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
                &lt;/md-menu-content&gt;
              &lt;/md-menu&gt;

              &lt;md-menu md-size=&quot;6&quot;&gt;
                &lt;md-button md-menu-trigger&gt;Size 6&lt;/md-button&gt;

                &lt;md-menu-content&gt;
                  &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
                &lt;/md-menu-content&gt;
              &lt;/md-menu&gt;

              &lt;md-menu md-size=&quot;7&quot;&gt;
                &lt;md-button md-menu-trigger&gt;Size 7&lt;/md-button&gt;

                &lt;md-menu-content&gt;
                  &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
                  &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
                &lt;/md-menu-content&gt;
              &lt;/md-menu&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Rich Content and List Icons">
          <div slot="demo">
            <md-menu md-size="4" md-direction="top right" ref="menu">
              <md-button class="md-icon-button" md-menu-trigger>
                <md-icon>contacts</md-icon>
              </md-button>

              <md-menu-content>
                <div class="author-card">
                  <md-avatar class="md-large">
                    <img src="assets/marcosmoura.jpg" alt="Marcos Moura">
                  </md-avatar>

                  <div class="author-card-info">
                    <span>Marcos Moura</span>
                    <div class="author-card-links">
                      <a href="https://linkedin.com/in/marcosvmmoura" target="_blank" rel="noopener">Linkedin</a>
                      <a href="https://github.com/marcosmoura" target="_blank" rel="noopener">GitHub</a>
                    </div>
                  </div>
                </div>
              </md-menu-content>
            </md-menu>

            <md-menu md-size="4">
              <md-button class="md-icon-button" md-menu-trigger>
                <md-icon>phone</md-icon>
              </md-button>

              <md-menu-content>
                <md-menu-item>
                  <md-icon>phone</md-icon>
                  <span>My Item 1</span>
                </md-menu-item>

                <md-menu-item>
                  <md-icon>phone</md-icon>
                  <span>My Item 2</span>
                </md-menu-item>

                <md-menu-item>
                  <md-icon>phone</md-icon>
                  <span>My Item 3</span>
                </md-menu-item>
              </md-menu-content>
            </md-menu>

            <md-menu md-direction="bottom left" md-size="4">
              <md-button class="md-icon-button" md-menu-trigger>
                <md-icon>near_me</md-icon>
              </md-button>

              <md-menu-content>
                <md-menu-item>
                  <span>Find on map</span>
                  <md-icon>near_me</md-icon>
                </md-menu-item>

                <md-menu-item>
                  <span>Call</span>
                  <md-icon>phone</md-icon>
                </md-menu-item>
              </md-menu-content>
            </md-menu>

            <md-button class="md-raised md-primary" @click.native="$refs.menu.open">Open contact card</md-button>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-menu md-size=&quot;4&quot; md-direction=&quot;top right&quot; ref=&quot;menu&quot;&gt;
                &lt;md-button class=&quot;md-icon-button&quot; md-menu-trigger&gt;
                  &lt;md-icon&gt;contacts&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-menu-content&gt;
                  &lt;div class=&quot;author-card&quot;&gt;
                    &lt;md-avatar class=&quot;md-large&quot;&gt;
                      &lt;img src=&quot;assets/marcosmoura.jpg&quot; alt=&quot;Marcos Moura&quot;&gt;
                    &lt;/md-avatar&gt;

                    &lt;div class=&quot;author-card-info&quot;&gt;
                      &lt;span&gt;Marcos Moura&lt;/span&gt;
                      &lt;div class=&quot;author-card-links&quot;&gt;
                        &lt;a href=&quot;https://linkedin.com/in/marcosvmmoura&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;&gt;Linkedin&lt;/a&gt;
                        &lt;a href=&quot;https://github.com/marcosmoura&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;&gt;GitHub&lt;/a&gt;
                      &lt;/div&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/md-menu-content&gt;
              &lt;/md-menu&gt;

              &lt;md-menu md-size=&quot;4&quot;&gt;
                &lt;md-button class=&quot;md-icon-button&quot; md-menu-trigger&gt;
                  &lt;md-icon&gt;phone&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-menu-content&gt;
                  &lt;md-menu-item&gt;
                    &lt;md-icon&gt;phone&lt;/md-icon&gt;
                    &lt;span&gt;My Item 1&lt;/span&gt;
                  &lt;/md-menu-item&gt;

                  &lt;md-menu-item&gt;
                    &lt;md-icon&gt;phone&lt;/md-icon&gt;
                    &lt;span&gt;My Item 2&lt;/span&gt;
                  &lt;/md-menu-item&gt;

                  &lt;md-menu-item&gt;
                    &lt;md-icon&gt;phone&lt;/md-icon&gt;
                    &lt;span&gt;My Item 3&lt;/span&gt;
                  &lt;/md-menu-item&gt;
                &lt;/md-menu-content&gt;
              &lt;/md-menu&gt;

              &lt;md-menu md-direction=&quot;bottom left&quot; md-size=&quot;4&quot;&gt;
                &lt;md-button class=&quot;md-icon-button&quot; md-menu-trigger&gt;
                  &lt;md-icon&gt;near_me&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-menu-content&gt;
                  &lt;md-menu-item&gt;
                    &lt;span&gt;Find on map&lt;/span&gt;
                    &lt;md-icon&gt;near_me&lt;/md-icon&gt;
                  &lt;/md-menu-item&gt;

                  &lt;md-menu-item&gt;
                    &lt;span&gt;Call&lt;/span&gt;
                    &lt;md-icon&gt;phone&lt;/md-icon&gt;
                  &lt;/md-menu-item&gt;
                &lt;/md-menu-content&gt;
              &lt;/md-menu&gt;

              &lt;md-button class=&quot;md-raised md-primary&quot; @click.native=&quot;$refs.menu.open&quot;&gt;Open contact card&lt;/md-button&gt;
            </code-block>

            <code-block lang="sass">
              .author-card {
                padding: 8px 16px;
                display: flex;
                align-items: center;

                .md-avatar {
                  margin-right: 16px;
                }

                .author-card-info {
                  display: flex;
                  flex-flow: column;
                  flex: 1;
                }

                span {
                  font-size: 16px;
                }

                .author-card-links {
                  display: flex;

                  a + a {
                    margin-left: 8px;
                  }
                }
              }
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="sass" scoped>
  .md-menu {
    margin-right: 36px;
  }

  .author-card {
    padding: 8px 16px;
    display: flex;
    align-items: center;

    .md-avatar {
      margin-right: 16px;
    }

    .author-card-info {
      display: flex;
      flex-flow: column;
      flex: 1;
    }

    span {
      font-size: 16px;
    }

    .author-card-links {
      display: flex;

      a + a {
        margin-left: 8px;
      }
    }
  }
</style>
