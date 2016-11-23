<template>
  <page-content>
    <docs-component>
      <div slot="description">
        <p>Adipisicing elit. Perspiciatis dolorum, culpa veniam voluptatem nam. Animi sint incidunt cum, ut quod consectetur repellat eos. Tempore officia voluptas, commodi impedit quos animi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis dololat eos. Tempore officia voluptas, commodi impedit quos animi.</p>
        <p>Lorem ipsum dolor sipellat eos. Tempore officia voluptas, commodi impedit quos animi.</p>
      </div>

      <div slot="api">
        <api-table name="mdCard">
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
                <md-table-cell>md-with-hover</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Enable full hover in card</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>

          <md-table slot="methods">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Type</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>md-with-hover</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Enable full hover in card</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Regular Cards">
          <div class="card-holder" slot="demo">
            <md-card>
              <md-card-media>
                <img src="assets/card-image-1.jpg" alt="People">
              </md-card-media>

              <md-card-header>
                <div class="md-title">Title goes here</div>
                <div class="md-subhead">Subtitle here</div>
              </md-card-header>

              <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </md-card-actions>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
              </md-card-content>
            </md-card>

            <md-card>
              <md-card-header>
                <md-card-header-text>
                  <div class="md-title">Title goes here</div>
                  <div class="md-subhead">Subtitle here</div>
                </md-card-header-text>

                <md-menu md-size="4" md-direction="bottom left">
                  <md-button class="md-icon-button" md-menu-trigger>
                    <md-icon>more_vert</md-icon>
                  </md-button>

                  <md-menu-content>
                    <md-menu-item>
                      <span>Call</span>
                      <md-icon>phone</md-icon>
                    </md-menu-item>

                    <md-menu-item>
                      <span>Send a message</span>
                      <md-icon>message</md-icon>
                    </md-menu-item>
                  </md-menu-content>
                </md-menu>
              </md-card-header>

              <md-card-media>
                <img src="assets/card-image-1.jpg" alt="People">
              </md-card-media>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
              </md-card-content>
            </md-card>
          </div>

          <div slot="code">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dicta maxime quibusdam voluptas. Eum atque sint, voluptates illo maxime nihil quisquam quae, et quia qui aut, suscipit deserunt corporis cupiditate?</p>
          </div>
        </example-box>

        <example-box card-title="Regular Cards">
          <div class="card-holder" slot="demo">
            <md-card>
              <md-card-media>
                <img src="assets/card-image-1.jpg" alt="People">
              </md-card-media>

              <md-card-header>
                <div class="md-title">Title goes here</div>
                <div class="md-subhead">Subtitle here</div>
              </md-card-header>

              <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </md-card-actions>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
              </md-card-content>
            </md-card>

            <md-card>
              <md-card-header>
                <md-card-header-text>
                  <div class="md-title">Title goes here</div>
                  <div class="md-subhead">Subtitle here</div>
                </md-card-header-text>

                <md-menu md-size="4" md-direction="bottom left">
                  <md-button class="md-icon-button" md-menu-trigger>
                    <md-icon>more_vert</md-icon>
                  </md-button>

                  <md-menu-content>
                    <md-menu-item>
                      <span>Call</span>
                      <md-icon>phone</md-icon>
                    </md-menu-item>

                    <md-menu-item>
                      <span>Send a message</span>
                      <md-icon>message</md-icon>
                    </md-menu-item>
                  </md-menu-content>
                </md-menu>
              </md-card-header>

              <md-card-media>
                <img src="assets/card-image-1.jpg" alt="People">
              </md-card-media>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
              </md-card-content>
            </md-card>
          </div>

          <div slot="code">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dicta maxime quibusdam voluptas. Eum atque sint, voluptates illo maxime nihil quisquam quae, et quia qui aut, suscipit deserunt corporis cupiditate?</p>
          </div>
        </example-box>

        <example-box card-title="Regular Cards">
          <div class="card-holder" slot="demo">
            <md-card>
              <md-card-media>
                <img src="assets/card-image-1.jpg" alt="People">
              </md-card-media>

              <md-card-header>
                <div class="md-title">Title goes here</div>
                <div class="md-subhead">Subtitle here</div>
              </md-card-header>

              <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </md-card-actions>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
              </md-card-content>
            </md-card>

            <md-card>
              <md-card-header>
                <md-card-header-text>
                  <div class="md-title">Title goes here</div>
                  <div class="md-subhead">Subtitle here</div>
                </md-card-header-text>

                <md-menu md-size="4" md-direction="bottom left">
                  <md-button class="md-icon-button" md-menu-trigger>
                    <md-icon>more_vert</md-icon>
                  </md-button>

                  <md-menu-content>
                    <md-menu-item>
                      <span>Call</span>
                      <md-icon>phone</md-icon>
                    </md-menu-item>

                    <md-menu-item>
                      <span>Send a message</span>
                      <md-icon>message</md-icon>
                    </md-menu-item>
                  </md-menu-content>
                </md-menu>
              </md-card-header>

              <md-card-media>
                <img src="assets/card-image-1.jpg" alt="People">
              </md-card-media>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
              </md-card-content>
            </md-card>
          </div>

          <div slot="code">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dicta maxime quibusdam voluptas. Eum atque sint, voluptates illo maxime nihil quisquam quae, et quia qui aut, suscipit deserunt corporis cupiditate?</p>
          </div>
        </example-box>

        <example-box card-title="Regular Cards">
          <div class="card-holder" slot="demo">
            <md-card>
              <md-card-media>
                <img src="assets/card-image-1.jpg" alt="People">
              </md-card-media>

              <md-card-header>
                <div class="md-title">Title goes here</div>
                <div class="md-subhead">Subtitle here</div>
              </md-card-header>

              <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </md-card-actions>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
              </md-card-content>
            </md-card>

            <md-card>
              <md-card-header>
                <md-card-header-text>
                  <div class="md-title">Title goes here</div>
                  <div class="md-subhead">Subtitle here</div>
                </md-card-header-text>

                <md-menu md-size="4" md-direction="bottom left">
                  <md-button class="md-icon-button" md-menu-trigger>
                    <md-icon>more_vert</md-icon>
                  </md-button>

                  <md-menu-content>
                    <md-menu-item>
                      <span>Call</span>
                      <md-icon>phone</md-icon>
                    </md-menu-item>

                    <md-menu-item>
                      <span>Send a message</span>
                      <md-icon>message</md-icon>
                    </md-menu-item>
                  </md-menu-content>
                </md-menu>
              </md-card-header>

              <md-card-media>
                <img src="assets/card-image-1.jpg" alt="People">
              </md-card-media>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
              </md-card-content>
            </md-card>
          </div>

          <div slot="code">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dicta maxime quibusdam voluptas. Eum atque sint, voluptates illo maxime nihil quisquam quae, et quia qui aut, suscipit deserunt corporis cupiditate?</p>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="scss" scoped>
  .card-holder {
    display: flex;
  }
</style>
