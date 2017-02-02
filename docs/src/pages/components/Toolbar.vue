<template>
  <page-content page-title="Components - Toolbar">
    <docs-component>
      <div slot="description">
        <p>Toolbars appear a step above the content they affect. They may constrain their width to accommodate material passing over them.</p>
        <p>You need to wrap all the elements of your toolbar in a element with the class <code>md-toolbar-container</code> for medium and large toolbars. On large toolbars you can have two containers to push content to bottom.</p>
        <p>The following classes can be applied to change the color palette:</p>
        <ul class="md-body-2">
          <li><code>md-accent</code></li>
          <li><code>md-warn</code></li>
          <li><code>md-transparent</code></li>
        </ul>
      </div>

      <div slot="api">
        <api-table name="md-toolbar">
          <md-table slot="classes">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>md-dense</md-table-cell>
                <md-table-cell>Create a small and dense toolbar.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-medium</md-table-cell>
                <md-table-cell>Create a medium.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-large</md-table-cell>
                <md-table-cell>Create a large.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-account-header</md-table-cell>
                <md-table-cell>Create a account header toolbar to show user accounts inside sidenav. See example below and the complete example</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table>
          <code-block lang="xml" height="none">
            &lt;md-toolbar class=&quot;md-account-header&quot;&gt;
              &lt;md-list class=&quot;md-transparent&quot;&gt;
                &lt;md-list-item class=&quot;md-avatar-list&quot;&gt;
                  &lt;md-avatar class=&quot;md-large&quot;&gt;
                    &lt;img src=&quot;https://placeimg.com/64/64/people/8&quot; alt=&quot;People&quot;&gt;
                  &lt;/md-avatar&gt;

                  &lt;span style=&quot;flex: 1&quot;&gt;&lt;/span&gt;

                  &lt;md-avatar&gt;
                    &lt;img src=&quot;https://placeimg.com/40/40/people/3&quot; alt=&quot;People&quot;&gt;
                  &lt;/md-avatar&gt;

                  &lt;md-avatar&gt;
                    &lt;img src=&quot;https://placeimg.com/40/40/people/4&quot; alt=&quot;People&quot;&gt;
                  &lt;/md-avatar&gt;
                &lt;/md-list-item&gt;

                &lt;md-list-item&gt;
                  &lt;div class=&quot;md-list-text-container&quot;&gt;
                    &lt;span&gt;John Doe&lt;/span&gt;
                    &lt;span&gt;johndoe@email.com&lt;/span&gt;
                  &lt;/div&gt;

                  &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
                    &lt;md-icon&gt;arrow_drop_down&lt;/md-icon&gt;
                  &lt;/md-button&gt;
                &lt;/md-list-item&gt;
              &lt;/md-list&gt;
            &lt;/md-toolbar&gt;
          </code-block>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Sizes">
          <div slot="demo">
            <md-toolbar>
              <md-button class="md-icon-button">
                <md-icon>menu</md-icon>
              </md-button>

              <h2 class="md-title" style="flex: 1">Default</h2>

              <md-button class="md-icon-button">
                <md-icon>favorite</md-icon>
              </md-button>
            </md-toolbar>

            <md-toolbar class="md-dense">
              <md-button class="md-icon-button">
                <md-icon>menu</md-icon>
              </md-button>

              <h2 class="md-title" style="flex: 1">Dense</h2>

              <md-button class="md-icon-button">
                <md-icon>favorite</md-icon>
              </md-button>
            </md-toolbar>

            <md-toolbar class="md-medium">
              <div class="md-toolbar-container">
                <md-button class="md-icon-button">
                  <md-icon>menu</md-icon>
                </md-button>

                <h2 class="md-title" style="flex: 1;">Medium</h2>

                <md-button class="md-icon-button">
                  <md-icon>search</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>filter_list</md-icon>
                </md-button>
              </div>
            </md-toolbar>

            <md-toolbar class="md-large">
              <div class="md-toolbar-container">
                <md-button class="md-icon-button">
                  <md-icon>menu</md-icon>
                </md-button>

                <span style="flex: 1;"></span>

                <md-button class="md-icon-button">
                  <md-icon>search</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>filter_list</md-icon>
                </md-button>
              </div>

              <div class="md-toolbar-container">
                <h2 class="md-title">Large</h2>
              </div>
            </md-toolbar>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-toolbar&gt;
                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;menu&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;h2 class=&quot;md-title&quot; style=&quot;flex: 1&quot;&gt;Default&lt;/h2&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;favorite&lt;/md-icon&gt;
                &lt;/md-button&gt;
              &lt;/md-toolbar&gt;

              &lt;md-toolbar class=&quot;md-dense&quot;&gt;
                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;menu&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;h2 class=&quot;md-title&quot; style=&quot;flex: 1&quot;&gt;Dense&lt;/h2&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;favorite&lt;/md-icon&gt;
                &lt;/md-button&gt;
              &lt;/md-toolbar&gt;

              &lt;md-toolbar class=&quot;md-medium&quot;&gt;
                &lt;div class=&quot;md-toolbar-container&quot;&gt;
                  &lt;md-button class=&quot;md-icon-button&quot;&gt;
                    &lt;md-icon&gt;menu&lt;/md-icon&gt;
                  &lt;/md-button&gt;

                  &lt;h2 class=&quot;md-title&quot; style=&quot;flex: 1;&quot;&gt;Medium&lt;/h2&gt;

                  &lt;md-button class=&quot;md-icon-button&quot;&gt;
                    &lt;md-icon&gt;search&lt;/md-icon&gt;
                  &lt;/md-button&gt;

                  &lt;md-button class=&quot;md-icon-button&quot;&gt;
                    &lt;md-icon&gt;filter_list&lt;/md-icon&gt;
                  &lt;/md-button&gt;
                &lt;/div&gt;
              &lt;/md-toolbar&gt;

              &lt;md-toolbar class=&quot;md-large&quot;&gt;
                &lt;div class=&quot;md-toolbar-container&quot;&gt;
                  &lt;md-button class=&quot;md-icon-button&quot;&gt;
                    &lt;md-icon&gt;menu&lt;/md-icon&gt;
                  &lt;/md-button&gt;

                  &lt;span style=&quot;flex: 1;&quot;&gt;&lt;/span&gt;

                  &lt;md-button class=&quot;md-icon-button&quot;&gt;
                    &lt;md-icon&gt;search&lt;/md-icon&gt;
                  &lt;/md-button&gt;

                  &lt;md-button class=&quot;md-icon-button&quot;&gt;
                    &lt;md-icon&gt;filter_list&lt;/md-icon&gt;
                  &lt;/md-button&gt;
                &lt;/div&gt;

                &lt;div class=&quot;md-toolbar-container&quot;&gt;
                  &lt;h2 class=&quot;md-title&quot;&gt;Large&lt;/h2&gt;
                &lt;/div&gt;
              &lt;/md-toolbar&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Palettes">
          <div slot="demo">
            <md-toolbar class="md-accent">
              <md-button class="md-icon-button">
                <md-icon>menu</md-icon>
              </md-button>

              <h2 class="md-title" style="flex: 1">Vue Material</h2>

              <md-button class="md-icon-button">
                <md-icon>favorite</md-icon>
              </md-button>
            </md-toolbar>

            <md-toolbar class="md-warn">
              <md-button class="md-icon-button">
                <md-icon>menu</md-icon>
              </md-button>

              <h2 class="md-title" style="flex: 1">Vue Material</h2>

              <md-button>Add</md-button>
              <md-button>Remove</md-button>
            </md-toolbar>

            <md-toolbar class="md-transparent">
              <md-button class="md-icon-button">
                <md-icon>menu</md-icon>
              </md-button>

              <h2 class="md-title" style="flex: 1">Vue Material</h2>

              <md-button class="md-raised">Add</md-button>
              <md-button class="md-raised md-warn">Remove</md-button>
            </md-toolbar>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-toolbar class=&quot;md-accent&quot;&gt;
                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;menu&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;h2 class=&quot;md-title&quot; style=&quot;flex: 1&quot;&gt;Vue Material&lt;/h2&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;favorite&lt;/md-icon&gt;
                &lt;/md-button&gt;
              &lt;/md-toolbar&gt;

              &lt;md-toolbar class=&quot;md-warn&quot;&gt;
                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;menu&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;h2 class=&quot;md-title&quot; style=&quot;flex: 1&quot;&gt;Vue Material&lt;/h2&gt;

                &lt;md-button&gt;Add&lt;/md-button&gt;
                &lt;md-button&gt;Remove&lt;/md-button&gt;
              &lt;/md-toolbar&gt;

              &lt;md-toolbar class=&quot;md-transparent&quot;&gt;
                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;menu&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;h2 class=&quot;md-title&quot; style=&quot;flex: 1&quot;&gt;Vue Material&lt;/h2&gt;

                &lt;md-button class=&quot;md-raised&quot;&gt;Add&lt;/md-button&gt;
                &lt;md-button class=&quot;md-raised md-warn&quot;&gt;Remove&lt;/md-button&gt;
              &lt;/md-toolbar&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Themes">
          <div slot="demo">
            <md-toolbar md-theme="green">
              <md-button class="md-icon-button">
                <md-icon>menu</md-icon>
              </md-button>

              <h2 class="md-title" style="flex: 1">Vue Material</h2>

              <md-button class="md-icon-button">
                <md-icon>favorite</md-icon>
              </md-button>
            </md-toolbar>

            <md-toolbar class="md-large" md-theme="brown">
              <div class="md-toolbar-container">
                <md-button class="md-icon-button">
                  <md-icon>menu</md-icon>
                </md-button>

                <span style="flex: 1;"></span>

                <md-button class="md-icon-button">
                  <md-icon>search</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>filter_list</md-icon>
                </md-button>
              </div>

              <div class="md-toolbar-container">
                <h2 class="md-title">Vue Material</h2>
              </div>
            </md-toolbar>

            <md-toolbar md-theme="orange">
              <md-button class="md-icon-button">
                <md-icon>menu</md-icon>
              </md-button>

              <h2 class="md-title" style="flex: 1">Vue Material</h2>

              <md-button>Add</md-button>
              <md-button>Remove</md-button>
            </md-toolbar>

            <md-toolbar md-theme="blue">
              <md-button class="md-icon-button">
                <md-icon>menu</md-icon>
              </md-button>

              <h2 class="md-title" style="flex: 1">Vue Material</h2>

              <md-button class="md-raised">Add</md-button>
              <md-button class="md-raised md-warn">Remove</md-button>
            </md-toolbar>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-toolbar md-theme=&quot;green&quot;&gt;
                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;menu&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;h2 class=&quot;md-title&quot; style=&quot;flex: 1&quot;&gt;Vue Material&lt;/h2&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;favorite&lt;/md-icon&gt;
                &lt;/md-button&gt;
              &lt;/md-toolbar&gt;

              &lt;md-toolbar class=&quot;md-large&quot; md-theme=&quot;brown&quot;&gt;
                &lt;div class=&quot;md-toolbar-container&quot;&gt;
                  &lt;md-button class=&quot;md-icon-button&quot;&gt;
                    &lt;md-icon&gt;menu&lt;/md-icon&gt;
                  &lt;/md-button&gt;

                  &lt;span style=&quot;flex: 1;&quot;&gt;&lt;/span&gt;

                  &lt;md-button class=&quot;md-icon-button&quot;&gt;
                    &lt;md-icon&gt;search&lt;/md-icon&gt;
                  &lt;/md-button&gt;

                  &lt;md-button class=&quot;md-icon-button&quot;&gt;
                    &lt;md-icon&gt;filter_list&lt;/md-icon&gt;
                  &lt;/md-button&gt;
                &lt;/div&gt;

                &lt;div class=&quot;md-toolbar-container&quot;&gt;
                  &lt;h2 class=&quot;md-title&quot;&gt;Vue Material&lt;/h2&gt;
                &lt;/div&gt;
              &lt;/md-toolbar&gt;

              &lt;md-toolbar md-theme=&quot;orange&quot;&gt;
                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;menu&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;h2 class=&quot;md-title&quot; style=&quot;flex: 1&quot;&gt;Vue Material&lt;/h2&gt;

                &lt;md-button&gt;Add&lt;/md-button&gt;
                &lt;md-button&gt;Remove&lt;/md-button&gt;
              &lt;/md-toolbar&gt;

              &lt;md-toolbar md-theme=&quot;blue&quot;&gt;
                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;menu&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;h2 class=&quot;md-title&quot; style=&quot;flex: 1&quot;&gt;Vue Material&lt;/h2&gt;

                &lt;md-button class=&quot;md-raised&quot;&gt;Add&lt;/md-button&gt;
                &lt;md-button class=&quot;md-raised md-warn&quot;&gt;Remove&lt;/md-button&gt;
              &lt;/md-toolbar&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Complete example">
          <div slot="demo">
            <div class="phone-viewport complete-example">
              <md-whiteframe md-tag="md-toolbar" md-elevation="2" md-theme="light-blue" class="md-large">
                <div class="md-toolbar-container">
                  <md-button class="md-icon-button" @click="$refs.sidenav.toggle()">
                    <md-icon>menu</md-icon>
                  </md-button>

                  <span style="flex: 1"></span>

                  <md-button class="md-icon-button">
                    <md-icon>search</md-icon>
                  </md-button>

                  <md-button class="md-icon-button">
                    <md-icon>view_module</md-icon>
                  </md-button>
                </div>

                <div class="md-toolbar-container">
                  <h2 class="md-title">My Files</h2>

                  <md-button class="md-fab md-mini">
                    <md-icon>add</md-icon>
                  </md-button>
                </div>
              </md-whiteframe>

              <md-list class="md-double-line">
                <md-subheader class="md-inset">Folders</md-subheader>

                <md-list-item>
                  <md-avatar class="md-avatar-icon">
                    <md-icon>folder</md-icon>
                  </md-avatar>

                  <div class="md-list-text-container">
                    <span>Photos</span>
                    <p>Jan 9, 2014</p>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>info</md-icon>
                  </md-button>
                </md-list-item>

                <md-list-item>
                  <md-avatar class="md-avatar-icon">
                    <md-icon>folder</md-icon>
                  </md-avatar>

                  <div class="md-list-text-container">
                    <span>Recipes</span>
                    <p>Jan 17, 2014</p>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>info</md-icon>
                  </md-button>
                </md-list-item>

                <md-list-item>
                  <md-avatar class="md-avatar-icon">
                    <md-icon>folder</md-icon>
                  </md-avatar>

                  <div class="md-list-text-container">
                    <span>Work</span>
                    <p>Jan 28, 2014</p>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>info</md-icon>
                  </md-button>

                  <md-divider class="md-inset"></md-divider>
                </md-list-item>

                <md-subheader class="md-inset">Files</md-subheader>

                <md-list-item>
                  <md-avatar md-theme="blue" class="md-avatar-icon md-primary">
                    <md-icon>insert_drive_file</md-icon>
                  </md-avatar>

                  <div class="md-list-text-container">
                    <span>Vacation Itinerary</span>
                    <p>Jan 20, 2014</p>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>info</md-icon>
                  </md-button>
                </md-list-item>

                <md-list-item>
                  <md-avatar md-theme="orange" class="md-avatar-icon md-primary">
                    <md-icon>collections</md-icon>
                  </md-avatar>

                  <div class="md-list-text-container">
                    <span>Kitchen Remodel</span>
                    <p>Jan 10, 2014</p>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>info</md-icon>
                  </md-button>
                </md-list-item>

                <md-list-item>
                  <md-avatar md-theme="green" class="md-avatar-icon md-primary">
                    <md-icon>view_list</md-icon>
                  </md-avatar>

                  <div class="md-list-text-container">
                    <span>Grocery Shop</span>
                    <p>Jan 10, 2014</p>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>info</md-icon>
                  </md-button>
                </md-list-item>

                <md-list-item>
                  <md-avatar md-theme="orange" class="md-avatar-icon md-primary">
                    <md-icon>collections</md-icon>
                  </md-avatar>

                  <div class="md-list-text-container">
                    <span>Weekend Pictures</span>
                    <p>Jan 10, 2014</p>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>info</md-icon>
                  </md-button>
                </md-list-item>
              </md-list>

              <md-sidenav md-theme="blue" class="md-left" ref="sidenav">
                <md-toolbar class="md-account-header">
                  <md-list class="md-transparent">
                    <md-list-item class="md-avatar-list">
                      <md-avatar class="md-large">
                        <img src="https://placeimg.com/64/64/people/8" alt="People">
                      </md-avatar>

                      <span style="flex: 1"></span>

                      <md-avatar>
                        <img src="https://placeimg.com/40/40/people/3" alt="People">
                      </md-avatar>

                      <md-avatar>
                        <img src="https://placeimg.com/40/40/people/4" alt="People">
                      </md-avatar>
                    </md-list-item>

                    <md-list-item>
                      <div class="md-list-text-container">
                        <span>John Doe</span>
                        <span>johndoe@email.com</span>
                      </div>

                      <md-button class="md-icon-button md-list-action">
                        <md-icon>arrow_drop_down</md-icon>
                      </md-button>
                    </md-list-item>
                  </md-list>
                </md-toolbar>

                <md-list>
                  <md-list-item @click="$refs.sidenav.toggle()" class="md-primary">
                    <md-icon>insert_drive_file</md-icon> <span>My files</span>
                  </md-list-item>

                  <md-list-item @click="$refs.sidenav.toggle()">
                    <md-icon>people</md-icon> <span>Shared with me</span>
                  </md-list-item>

                  <md-list-item @click="$refs.sidenav.toggle()">
                    <md-icon>access_time</md-icon> <span>Recent</span>
                  </md-list-item>

                  <md-list-item @click="$refs.sidenav.toggle()">
                    <md-icon>start</md-icon> <span>Starred</span>
                  </md-list-item>

                  <md-list-item @click="$refs.sidenav.toggle()">
                    <md-icon>delete</md-icon> <span>Trash</span>
                  </md-list-item>
                </md-list>
              </md-sidenav>
            </div>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;div class=&quot;phone-viewport complete-example&quot;&gt;
                &lt;md-whiteframe md-tag=&quot;md-toolbar&quot; md-elevation=&quot;2&quot; md-theme=&quot;light-blue&quot; class=&quot;md-large&quot;&gt;
                  &lt;div class=&quot;md-toolbar-container&quot;&gt;
                    &lt;md-button class=&quot;md-icon-button&quot; @click=&quot;$refs.sidenav.toggle()&quot;&gt;
                      &lt;md-icon&gt;menu&lt;/md-icon&gt;
                    &lt;/md-button&gt;

                    &lt;span style=&quot;flex: 1&quot;&gt;&lt;/span&gt;

                    &lt;md-button class=&quot;md-icon-button&quot;&gt;
                      &lt;md-icon&gt;search&lt;/md-icon&gt;
                    &lt;/md-button&gt;

                    &lt;md-button class=&quot;md-icon-button&quot;&gt;
                      &lt;md-icon&gt;view_module&lt;/md-icon&gt;
                    &lt;/md-button&gt;
                  &lt;/div&gt;

                  &lt;div class=&quot;md-toolbar-container&quot;&gt;
                    &lt;h2 class=&quot;md-title&quot;&gt;My Files&lt;/h2&gt;

                    &lt;md-button class=&quot;md-fab md-mini&quot;&gt;
                      &lt;md-icon&gt;add&lt;/md-icon&gt;
                    &lt;/md-button&gt;
                  &lt;/div&gt;
                &lt;/md-whiteframe&gt;

                &lt;md-list class=&quot;md-double-line&quot;&gt;
                  &lt;md-subheader class=&quot;md-inset&quot;&gt;Folders&lt;/md-subheader&gt;

                  &lt;md-list-item&gt;
                    &lt;md-avatar class=&quot;md-avatar-icon&quot;&gt;
                      &lt;md-icon&gt;folder&lt;/md-icon&gt;
                    &lt;/md-avatar&gt;

                    &lt;div class=&quot;md-list-text-container&quot;&gt;
                      &lt;span&gt;Photos&lt;/span&gt;
                      &lt;p&gt;Jan 9, 2014&lt;/p&gt;
                    &lt;/div&gt;

                    &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
                      &lt;md-icon&gt;info&lt;/md-icon&gt;
                    &lt;/md-button&gt;
                  &lt;/md-list-item&gt;

                  &lt;md-list-item&gt;
                    &lt;md-avatar class=&quot;md-avatar-icon&quot;&gt;
                      &lt;md-icon&gt;folder&lt;/md-icon&gt;
                    &lt;/md-avatar&gt;

                    &lt;div class=&quot;md-list-text-container&quot;&gt;
                      &lt;span&gt;Recipes&lt;/span&gt;
                      &lt;p&gt;Jan 17, 2014&lt;/p&gt;
                    &lt;/div&gt;

                    &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
                      &lt;md-icon&gt;info&lt;/md-icon&gt;
                    &lt;/md-button&gt;
                  &lt;/md-list-item&gt;

                  &lt;md-list-item&gt;
                    &lt;md-avatar class=&quot;md-avatar-icon&quot;&gt;
                      &lt;md-icon&gt;folder&lt;/md-icon&gt;
                    &lt;/md-avatar&gt;

                    &lt;div class=&quot;md-list-text-container&quot;&gt;
                      &lt;span&gt;Work&lt;/span&gt;
                      &lt;p&gt;Jan 28, 2014&lt;/p&gt;
                    &lt;/div&gt;

                    &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
                      &lt;md-icon&gt;info&lt;/md-icon&gt;
                    &lt;/md-button&gt;

                    &lt;md-divider class=&quot;md-inset&quot;&gt;&lt;/md-divider&gt;
                  &lt;/md-list-item&gt;

                  &lt;md-subheader class=&quot;md-inset&quot;&gt;Files&lt;/md-subheader&gt;

                  &lt;md-list-item&gt;
                    &lt;md-avatar md-theme=&quot;blue&quot; class=&quot;md-avatar-icon md-primary&quot;&gt;
                      &lt;md-icon&gt;insert_drive_file&lt;/md-icon&gt;
                    &lt;/md-avatar&gt;

                    &lt;div class=&quot;md-list-text-container&quot;&gt;
                      &lt;span&gt;Vacation Itinerary&lt;/span&gt;
                      &lt;p&gt;Jan 20, 2014&lt;/p&gt;
                    &lt;/div&gt;

                    &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
                      &lt;md-icon&gt;info&lt;/md-icon&gt;
                    &lt;/md-button&gt;
                  &lt;/md-list-item&gt;

                  &lt;md-list-item&gt;
                    &lt;md-avatar md-theme=&quot;orange&quot; class=&quot;md-avatar-icon md-primary&quot;&gt;
                      &lt;md-icon&gt;collections&lt;/md-icon&gt;
                    &lt;/md-avatar&gt;

                    &lt;div class=&quot;md-list-text-container&quot;&gt;
                      &lt;span&gt;Kitchen Remodel&lt;/span&gt;
                      &lt;p&gt;Jan 10, 2014&lt;/p&gt;
                    &lt;/div&gt;

                    &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
                      &lt;md-icon&gt;info&lt;/md-icon&gt;
                    &lt;/md-button&gt;
                  &lt;/md-list-item&gt;

                  &lt;md-list-item&gt;
                    &lt;md-avatar md-theme=&quot;green&quot; class=&quot;md-avatar-icon md-primary&quot;&gt;
                      &lt;md-icon&gt;view_list&lt;/md-icon&gt;
                    &lt;/md-avatar&gt;

                    &lt;div class=&quot;md-list-text-container&quot;&gt;
                      &lt;span&gt;Grocery Shop&lt;/span&gt;
                      &lt;p&gt;Jan 10, 2014&lt;/p&gt;
                    &lt;/div&gt;

                    &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
                      &lt;md-icon&gt;info&lt;/md-icon&gt;
                    &lt;/md-button&gt;
                  &lt;/md-list-item&gt;

                  &lt;md-list-item&gt;
                    &lt;md-avatar md-theme=&quot;orange&quot; class=&quot;md-avatar-icon md-primary&quot;&gt;
                      &lt;md-icon&gt;collections&lt;/md-icon&gt;
                    &lt;/md-avatar&gt;

                    &lt;div class=&quot;md-list-text-container&quot;&gt;
                      &lt;span&gt;Weekend Pictures&lt;/span&gt;
                      &lt;p&gt;Jan 10, 2014&lt;/p&gt;
                    &lt;/div&gt;

                    &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
                      &lt;md-icon&gt;info&lt;/md-icon&gt;
                    &lt;/md-button&gt;
                  &lt;/md-list-item&gt;
                &lt;/md-list&gt;

                &lt;md-sidenav md-theme=&quot;blue&quot; class=&quot;md-left&quot; ref=&quot;sidenav&quot;&gt;
                  &lt;md-toolbar class=&quot;md-account-header&quot;&gt;
                    &lt;md-list class=&quot;md-transparent&quot;&gt;
                      &lt;md-list-item class=&quot;md-avatar-list&quot;&gt;
                        &lt;md-avatar class=&quot;md-large&quot;&gt;
                          &lt;img src=&quot;https://placeimg.com/64/64/people/8&quot; alt=&quot;People&quot;&gt;
                        &lt;/md-avatar&gt;

                        &lt;span style=&quot;flex: 1&quot;&gt;&lt;/span&gt;

                        &lt;md-avatar&gt;
                          &lt;img src=&quot;https://placeimg.com/40/40/people/3&quot; alt=&quot;People&quot;&gt;
                        &lt;/md-avatar&gt;

                        &lt;md-avatar&gt;
                          &lt;img src=&quot;https://placeimg.com/40/40/people/4&quot; alt=&quot;People&quot;&gt;
                        &lt;/md-avatar&gt;
                      &lt;/md-list-item&gt;

                      &lt;md-list-item&gt;
                        &lt;div class=&quot;md-list-text-container&quot;&gt;
                          &lt;span&gt;John Doe&lt;/span&gt;
                          &lt;span&gt;johndoe@email.com&lt;/span&gt;
                        &lt;/div&gt;

                        &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
                          &lt;md-icon&gt;arrow_drop_down&lt;/md-icon&gt;
                        &lt;/md-button&gt;
                      &lt;/md-list-item&gt;
                    &lt;/md-list&gt;
                  &lt;/md-toolbar&gt;

                  &lt;md-list&gt;
                    &lt;md-list-item @click=&quot;$refs.sidenav.toggle()&quot; class=&quot;md-primary&quot;&gt;
                      &lt;md-icon&gt;insert_drive_file&lt;/md-icon&gt; &lt;span&gt;My files&lt;/span&gt;
                    &lt;/md-list-item&gt;

                    &lt;md-list-item @click=&quot;$refs.sidenav.toggle()&quot;&gt;
                      &lt;md-icon&gt;people&lt;/md-icon&gt; &lt;span&gt;Shared with me&lt;/span&gt;
                    &lt;/md-list-item&gt;

                    &lt;md-list-item @click=&quot;$refs.sidenav.toggle()&quot;&gt;
                      &lt;md-icon&gt;access_time&lt;/md-icon&gt; &lt;span&gt;Recent&lt;/span&gt;
                    &lt;/md-list-item&gt;

                    &lt;md-list-item @click=&quot;$refs.sidenav.toggle()&quot;&gt;
                      &lt;md-icon&gt;start&lt;/md-icon&gt; &lt;span&gt;Starred&lt;/span&gt;
                    &lt;/md-list-item&gt;

                    &lt;md-list-item @click=&quot;$refs.sidenav.toggle()&quot;&gt;
                      &lt;md-icon&gt;delete&lt;/md-icon&gt; &lt;span&gt;Trash&lt;/span&gt;
                    &lt;/md-list-item&gt;
                  &lt;/md-list&gt;
                &lt;/md-sidenav&gt;
              &lt;/div&gt;
            </code-block>

            <code-block lang="sass">
              .complete-example {
                height: 540px;
                display: flex;
                flex-flow: column;
                position: relative;
                overflow: hidden;
                z-index: 1;

                .md-fab {
                  margin: 0;
                  position: absolute;
                  bottom: -20px;
                  left: 16px;
                }

                .md-title {
                  color: #fff;
                }

                .md-list {
                  overflow: auto;
                }

                .md-list-action .md-icon {
                  color: rgba(#000, .26);
                }

                .md-avatar-icon .md-icon {
                  color: #fff !important;
                }

                .md-sidenav .md-list-text-container > :nth-child(2) {
                  color: rgba(#fff, .54);
                }

                .md-account-header {
                  .md-list-item:hover .md-button:hover {
                    background-color: inherit;
                  }

                  .md-avatar-list .md-list-item-container:hover {
                    background: none !important;
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
  .md-toolbar + .md-toolbar {
    margin-top: 16px;
  }

  .complete-example {
    height: 540px;
    display: flex;
    flex-flow: column;
    position: relative;
    overflow: hidden;
    z-index: 1;

    .md-fab {
      margin: 0;
      position: absolute;
      bottom: -20px;
      left: 16px;
    }

    .md-title {
      color: #fff;
    }

    .md-list {
      overflow: auto;
    }

    .md-list-action .md-icon {
      color: rgba(#000, .26);
    }

    .md-avatar-icon .md-icon {
      color: #fff !important;
    }

    .md-sidenav .md-list-text-container > :nth-child(2) {
      color: rgba(#fff, .54);
    }

    .md-account-header {
      .md-list-item:hover .md-button:hover {
        background-color: inherit;
      }

      .md-avatar-list .md-list-item-container:hover {
        background: none !important;
      }
    }
  }
</style>
