<template>
  <page-content page-title="Themes - Dynamic Themes">
    <docs-component>
      <div slot="description">
        <p>Vue Material have a complete theme suite. You can create several themes and apply them on-demand. Like on this documentation website you can set a different theme per-page using the API. But you can have a advanced way to change themes using dynamic themes.</p>
        <p>You can apply a theme only in a single area of your application using the <code>&lt;md-theme&gt;</code>. If the theme component have only one child element then the theme definition will be attached to this particular element. In other case the component will wrap all of it's children in a <code>&lt;div&gt;</code> tag (or you can customize the output tag).</p>
        <p>Also every single component in Vue Material suite have a <code>md-theme</code> attribute to set his theme.</p>
        <p>All the components will inherit all theme properties from it's parents. If the direct parent doesn't have a theme definition the theme will be resolved by its closest parent or the current theme of the entire application.</p>
      </div>

      <div slot="api">
        <api-table name="md-theme">
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
                <md-table-cell>md-name</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The name of the theme to be applied.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-tag</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The tag to be applied to wrap all it's children elements.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Component">
          <div slot="demo">
            <div class="app-example">
              <md-whiteframe md-tag="md-toolbar" md-elevation="1">
                <span class="md-title">Life Organizer 2.0</span>
              </md-whiteframe>

              <div class="page-layout">
                <md-theme md-name="indigo">
                  <div class="column">
                    <strong class="md-subheading">Shopping list</strong>
                    <md-list>
                      <md-list-item>
                        <md-checkbox class="md-primary md-list-action"></md-checkbox>
                        <span class="item-text">French bread</span>
                      </md-list-item>

                      <md-list-item>
                        <md-checkbox :value="true" class="md-primary md-list-action"></md-checkbox>
                        <span class="item-text">Brazilian Cheese Bread</span>
                      </md-list-item>

                      <md-list-item>
                        <md-checkbox class="md-primary md-list-action"></md-checkbox>
                        <span class="item-text">Italian Bread</span>
                      </md-list-item>
                    </md-list>
                  </div>
                </md-theme>

                <md-theme md-name="green">
                  <div class="column">
                    <strong class="md-subheading">Todo List</strong>
                    <md-list>
                      <md-list-item>
                        <md-checkbox class="md-primary md-list-action"></md-checkbox>
                        <span class="item-text">Create new components</span>
                      </md-list-item>

                      <md-list-item>
                        <md-checkbox :value="true" class="md-primary md-list-action"></md-checkbox>
                        <span class="item-text">Answer Github issues</span>
                      </md-list-item>
                    </md-list>
                  </div>
                </md-theme>

                <md-theme md-name="orange">
                  <div class="column">
                    <strong class="md-subheading">Notes</strong>
                    <md-list>
                      <md-list-item>
                        <span class="item-text">Wake up early</span>
                        <md-button class="md-icon-button md-list-action">
                          <md-icon>star</md-icon>
                        </md-button>
                      </md-list-item>

                      <md-list-item>
                        <span class="item-text">Have breakfast everyday</span>
                        <md-button class="md-icon-button md-list-action">
                          <md-icon class="md-primary">star</md-icon>
                        </md-button>
                      </md-list-item>

                      <md-list-item>
                        <span class="item-text">Contribution</span>
                        <md-button class="md-icon-button md-list-action">
                          <md-icon class="md-primary">star</md-icon>
                        </md-button>
                      </md-list-item>

                      <md-list-item>
                        <span class="item-text">Travels</span>
                        <md-button class="md-icon-button md-list-action">
                          <md-icon class="md-primary">star</md-icon>
                        </md-button>
                      </md-list-item>
                    </md-list>
                  </div>
                </md-theme>
              </div>
            </div>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;div class=&quot;app-example&quot;&gt;
                &lt;md-theme md-name=&quot;blue&quot;&gt;
                  &lt;md-whiteframe md-tag=&quot;md-toolbar&quot; md-elevation=&quot;1&quot;&gt;
                    &lt;span class=&quot;md-title&quot;&gt;Life Organizer 2.0&lt;/span&gt;
                  &lt;/md-whiteframe&gt;
                &lt;/md-theme&gt;

                &lt;div class=&quot;page-layout&quot;&gt;
                  &lt;md-theme md-name=&quot;indigo&quot;&gt;
                    &lt;div class=&quot;column&quot;&gt;
                      &lt;strong class=&quot;md-subheading&quot;&gt;Shopping list&lt;/strong&gt;
                      &lt;md-list&gt;
                        &lt;md-list-item&gt;
                          &lt;md-checkbox class=&quot;md-primary md-list-action&quot;&gt;&lt;/md-checkbox&gt;
                          &lt;span class=&quot;item-text&quot;&gt;French bread&lt;/span&gt;
                        &lt;/md-list-item&gt;

                        &lt;md-list-item&gt;
                          &lt;md-checkbox :value=&quot;true&quot; class=&quot;md-primary md-list-action&quot;&gt;&lt;/md-checkbox&gt;
                          &lt;span class=&quot;item-text&quot;&gt;Brazilian Cheese Bread&lt;/span&gt;
                        &lt;/md-list-item&gt;

                        &lt;md-list-item&gt;
                          &lt;md-checkbox class=&quot;md-primary md-list-action&quot;&gt;&lt;/md-checkbox&gt;
                          &lt;span class=&quot;item-text&quot;&gt;Italian Bread&lt;/span&gt;
                        &lt;/md-list-item&gt;
                      &lt;/md-list&gt;
                    &lt;/div&gt;
                  &lt;/md-theme&gt;

                  &lt;md-theme md-name=&quot;green&quot;&gt;
                    &lt;div class=&quot;column&quot;&gt;
                      &lt;strong class=&quot;md-subheading&quot;&gt;Todo List&lt;/strong&gt;
                      &lt;md-list&gt;
                        &lt;md-list-item&gt;
                          &lt;md-checkbox class=&quot;md-primary md-list-action&quot;&gt;&lt;/md-checkbox&gt;
                          &lt;span class=&quot;item-text&quot;&gt;Create new components&lt;/span&gt;
                        &lt;/md-list-item&gt;

                        &lt;md-list-item&gt;
                          &lt;md-checkbox :value=&quot;true&quot; class=&quot;md-primary md-list-action&quot;&gt;&lt;/md-checkbox&gt;
                          &lt;span class=&quot;item-text&quot;&gt;Answer Github issues&lt;/span&gt;
                        &lt;/md-list-item&gt;
                      &lt;/md-list&gt;
                    &lt;/div&gt;
                  &lt;/md-theme&gt;

                  &lt;md-theme md-name=&quot;orange&quot;&gt;
                    &lt;div class=&quot;column&quot;&gt;
                      &lt;strong class=&quot;md-subheading&quot;&gt;Notes&lt;/strong&gt;
                      &lt;md-list&gt;
                        &lt;md-list-item&gt;
                          &lt;span class=&quot;item-text&quot;&gt;Wake up early&lt;/span&gt;
                          &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
                            &lt;md-icon&gt;star&lt;/md-icon&gt;
                          &lt;/md-button&gt;
                        &lt;/md-list-item&gt;

                        &lt;md-list-item&gt;
                          &lt;span class=&quot;item-text&quot;&gt;Have breakfast everyday&lt;/span&gt;
                          &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
                            &lt;md-icon class=&quot;md-primary&quot;&gt;star&lt;/md-icon&gt;
                          &lt;/md-button&gt;
                        &lt;/md-list-item&gt;

                        &lt;md-list-item&gt;
                          &lt;span class=&quot;item-text&quot;&gt;Contribution&lt;/span&gt;
                          &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
                            &lt;md-icon class=&quot;md-primary&quot;&gt;star&lt;/md-icon&gt;
                          &lt;/md-button&gt;
                        &lt;/md-list-item&gt;

                        &lt;md-list-item&gt;
                          &lt;span class=&quot;item-text&quot;&gt;Travels&lt;/span&gt;
                          &lt;md-button class=&quot;md-icon-button md-list-action&quot;&gt;
                            &lt;md-icon class=&quot;md-primary&quot;&gt;star&lt;/md-icon&gt;
                          &lt;/md-button&gt;
                        &lt;/md-list-item&gt;
                      &lt;/md-list&gt;
                    &lt;/div&gt;
                  &lt;/md-theme&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            </code-block>

            <code-block lang="sass">
              .app-example {
                .page-layout {
                  display: flex;
                }

                .column {
                  flex: 1;
                  background-color: rgba(#000, .06);

                  + .column {
                    margin-left: 16px;
                  }
                }

                .md-list {
                  background: none;
                }

                .md-subheading {
                  padding: 16px;
                  display: block;
                }

                .item-text {
                  flex: 1;
                }

                .md-checkbox {
                  margin-right: 16px;
                }

                .md-button {
                  margin-left: 16px;
                }
              }
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Attribute">
          <div slot="demo">
            <md-whiteframe>
              <md-toolbar md-theme="blue">
                <span class="md-title">My app dashboard</span>
              </md-toolbar>
            </md-whiteframe>

            <div class="card-layout">
              <div class="column">
                <md-card class="md-primary" md-theme="blue" md-with-hover>
                  <md-card-media>
                    <img src="assets/card-image-1.jpg" alt="People">
                  </md-card-media>

                  <md-ink-ripple></md-ink-ripple>

                  <md-card-actions>
                    <md-button class="md-icon-button">
                      <md-icon>favorite</md-icon>
                    </md-button>

                    <md-button class="md-icon-button">
                      <md-icon>bookmark</md-icon>
                    </md-button>

                    <md-button class="md-icon-button">
                      <md-icon>share</md-icon>
                    </md-button>
                  </md-card-actions>
                </md-card>

                <md-card class="md-primary" md-theme="green" md-with-hover>
                  <md-card-header>
                    <div class="md-title">Title goes here</div>
                    <div class="md-subhead">Subtitle here</div>
                  </md-card-header>

                  <md-card-content>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</md-card-content>

                  <md-ink-ripple></md-ink-ripple>

                  <md-card-actions>
                    <md-button>Action</md-button>
                    <md-button>Action</md-button>
                  </md-card-actions>
                </md-card>
              </div>

              <div class="column">
                <md-card class="md-primary" md-theme="orange" md-with-hover>
                  <md-card-header>
                    <md-card-header-text>
                      <div class="md-title">Title here</div>
                      <div class="md-subhead">Subtitle here</div>
                    </md-card-header-text>

                    <md-card-media>
                      <img src="assets/avatar-2.jpg" alt="People">
                    </md-card-media>
                  </md-card-header>

                  <md-card-actions>
                    <md-button>Action</md-button>
                    <md-button>Action</md-button>
                  </md-card-actions>
                </md-card>

                <md-card class="md-primary" md-theme="blue" md-with-hover>
                  <md-card-media md-ratio="16:9">
                    <img src="assets/card-sky.jpg" alt="People">
                  </md-card-media>

                  <md-ink-ripple></md-ink-ripple>

                  <md-card-actions>
                    <md-button class="md-icon-button">
                      <md-icon>favorite</md-icon>
                    </md-button>

                    <md-button class="md-icon-button">
                      <md-icon>bookmark</md-icon>
                    </md-button>

                    <md-button class="md-icon-button">
                      <md-icon>share</md-icon>
                    </md-button>
                  </md-card-actions>
                </md-card>
              </div>
            </div>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-whiteframe&gt;
                &lt;md-toolbar md-theme=&quot;blue&quot;&gt;
                  &lt;span class=&quot;md-title&quot;&gt;My app dashboard&lt;/span&gt;
                &lt;/md-toolbar&gt;
              &lt;/md-whiteframe&gt;

              &lt;div class=&quot;card-layout&quot;&gt;
                &lt;div class=&quot;column&quot;&gt;
                  &lt;md-card class=&quot;md-primary&quot; md-theme=&quot;blue&quot; md-with-hover&gt;
                    &lt;md-card-media&gt;
                      &lt;img src=&quot;assets/card-image-1.jpg&quot; alt=&quot;People&quot;&gt;
                    &lt;/md-card-media&gt;

                    &lt;md-ink-ripple&gt;&lt;/md-ink-ripple&gt;

                    &lt;md-card-actions&gt;
                      &lt;md-button class=&quot;md-icon-button&quot;&gt;
                        &lt;md-icon&gt;favorite&lt;/md-icon&gt;
                      &lt;/md-button&gt;

                      &lt;md-button class=&quot;md-icon-button&quot;&gt;
                        &lt;md-icon&gt;bookmark&lt;/md-icon&gt;
                      &lt;/md-button&gt;

                      &lt;md-button class=&quot;md-icon-button&quot;&gt;
                        &lt;md-icon&gt;share&lt;/md-icon&gt;
                      &lt;/md-button&gt;
                    &lt;/md-card-actions&gt;
                  &lt;/md-card&gt;

                  &lt;md-card class=&quot;md-primary&quot; md-theme=&quot;green&quot; md-with-hover&gt;
                    &lt;md-card-header&gt;
                      &lt;div class=&quot;md-title&quot;&gt;Title goes here&lt;/div&gt;
                      &lt;div class=&quot;md-subhead&quot;&gt;Subtitle here&lt;/div&gt;
                    &lt;/md-card-header&gt;

                    &lt;md-card-content&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.&lt;/md-card-content&gt;

                    &lt;md-ink-ripple&gt;&lt;/md-ink-ripple&gt;

                    &lt;md-card-actions&gt;
                      &lt;md-button&gt;Action&lt;/md-button&gt;
                      &lt;md-button&gt;Action&lt;/md-button&gt;
                    &lt;/md-card-actions&gt;
                  &lt;/md-card&gt;
                &lt;/div&gt;

                &lt;div class=&quot;column&quot;&gt;
                  &lt;md-card class=&quot;md-primary&quot; md-theme=&quot;orange&quot; md-with-hover&gt;
                    &lt;md-card-header&gt;
                      &lt;md-card-header-text&gt;
                        &lt;div class=&quot;md-title&quot;&gt;Title here&lt;/div&gt;
                        &lt;div class=&quot;md-subhead&quot;&gt;Subtitle here&lt;/div&gt;
                      &lt;/md-card-header-text&gt;

                      &lt;md-card-media&gt;
                        &lt;img src=&quot;assets/avatar-2.jpg&quot; alt=&quot;People&quot;&gt;
                      &lt;/md-card-media&gt;
                    &lt;/md-card-header&gt;

                    &lt;md-card-actions&gt;
                      &lt;md-button&gt;Action&lt;/md-button&gt;
                      &lt;md-button&gt;Action&lt;/md-button&gt;
                    &lt;/md-card-actions&gt;
                  &lt;/md-card&gt;

                  &lt;md-card class=&quot;md-primary&quot; md-theme=&quot;blue&quot; md-with-hover&gt;
                    &lt;md-card-media md-ratio=&quot;16:9&quot;&gt;
                      &lt;img src=&quot;assets/card-sky.jpg&quot; alt=&quot;People&quot;&gt;
                    &lt;/md-card-media&gt;

                    &lt;md-ink-ripple&gt;&lt;/md-ink-ripple&gt;

                    &lt;md-card-actions&gt;
                      &lt;md-button class=&quot;md-icon-button&quot;&gt;
                        &lt;md-icon&gt;favorite&lt;/md-icon&gt;
                      &lt;/md-button&gt;

                      &lt;md-button class=&quot;md-icon-button&quot;&gt;
                        &lt;md-icon&gt;bookmark&lt;/md-icon&gt;
                      &lt;/md-button&gt;

                      &lt;md-button class=&quot;md-icon-button&quot;&gt;
                        &lt;md-icon&gt;share&lt;/md-icon&gt;
                      &lt;/md-button&gt;
                    &lt;/md-card-actions&gt;
                  &lt;/md-card&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            </code-block>

            <code-block lang="sass">
              .card-layout {
                margin: 16px 15%;
                display: flex;

                .column {
                  flex: 1;

                  + .column {
                    margin-left: 8px;
                  }
                }

                .md-card + .md-card {
                  margin-top: 8px;
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
  section {
    max-width: 960px;

    + section {
      margin-top: 56px;
    }
  }

  .app-example {
    .page-layout {
      display: flex;
    }

    .column {
      flex: 1;
      background-color: rgba(#000, .06);

      + .column {
        margin-left: 16px;
      }
    }

    .md-list {
      background: none;
    }

    .md-subheading {
      padding: 16px;
      display: block;
    }

    .item-text {
      flex: 1;
    }

    .md-checkbox {
      margin-right: 16px;
    }

    .md-button {
      margin-left: 16px;
    }
  }

  .card-layout {
    margin: 16px 15%;
    display: flex;

    .column {
      flex: 1;

      + .column {
        margin-left: 8px;
      }
    }

    .md-card + .md-card {
      margin-top: 8px;
    }
  }
</style>
