<template>
  <page-content page-title="Components - Card">
    <docs-component>
      <div slot="description">
        <p>Cards may contain a photo, text, and a link about a single subject. They may display content containing elements of varying size, such as photos with captions of variable length.</p>
        <p>The card components are very granular. Every single part of a card is a component. You can combine them in any order that you want, following the same logic of the examples.</p>
        <p>You can also use other Material components inside the card, like the "Complete Example".</p>
        <p>The following classes can be applied to change the color palette:</p>
        <ul class="md-body-2">
          <li><code>md-primary</code></li>
          <li><code>md-accent</code></li>
          <li><code>md-warn</code></li>
        </ul>
      </div>

      <div slot="api">
        <api-table name="md-card">
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
                <md-table-cell>Enable full hover elevation in card. Default <code>false</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table name="md-card-header">
          <p>Can display titles, subheads, medias and avatars in a header.</p>
          <p>No options available</p>
        </api-table>

        <api-table name="md-card-header-text">
          <p>Used inside a card header to group the title and the subhead. Useful to align with an action (like a overflow button) or a media inside headers, like on the "Media" example.</p>
          <p>No options available</p>
        </api-table>

        <api-table name="md-card-content">
          <p>Display the content of the card. Most used with plain text or with simple HTML content, like bold and italic tags.</p>
          <p>No options available</p>
        </api-table>

        <api-table name="md-card-actions">
          <p>Hold the actions of a card align them on the right. Here you can add <code>&lt;md-button&gt;</code> with or without icons.</p>
          <p>No options available</p>
        </api-table>

        <api-table name="md-card-area">
          <div slot="properties">
            <p>A card area create a division inside the card. This will apply a border on the bottom (only works if the card area is not the last element).</p>
            <p>You can see an example of use on the "Complete example".</p>

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
                  <md-table-cell>md-inset</md-table-cell>
                  <md-table-cell><code>Boolean</code></md-table-cell>
                  <md-table-cell>Apply a inset border. Default <code>false</code></md-table-cell>
                </md-table-row>
              </md-table-body>
            </md-table>
          </div>
        </api-table>

        <api-table name="md-card-media">
          <div slot="properties">
            <p>The card media display images (and other types of media) inside cards. Can be used inside and outsite a card header.</p>

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
                  <md-table-cell>md-ratio</md-table-cell>
                  <md-table-cell><code>String</code></md-table-cell>
                  <md-table-cell>Resize or clip the image automatically based on the following options: <br>1:1 or 1/1, 4:3 or 4/3 and 16:9 or 16/9.</md-table-cell>
                </md-table-row>

                <md-table-row>
                  <md-table-cell>md-medium</md-table-cell>
                  <md-table-cell><code>Boolean</code></md-table-cell>
                  <md-table-cell>Applies medium size to the media. Works only inside md-card-header. Default <code>false</code></md-table-cell>
                </md-table-row>

                <md-table-row>
                  <md-table-cell>md-big</md-table-cell>
                  <md-table-cell><code>Boolean</code></md-table-cell>
                  <md-table-cell>Applies big size to the media. Works only inside md-card-header. Default <code>false</code></md-table-cell>
                </md-table-row>
              </md-table-body>
            </md-table>
          </div>
        </api-table>

        <api-table name="md-card-media-actions">
          <p>Used to align a media and actions side by side.</p>
          <p>No options available</p>
        </api-table>

        <api-table name="md-card-media-cover">
          <div slot="properties">
            <p>You will need to give a <code>&lt;md-card-media&gt;</code> inside this component and a <code>&lt;md-card-area&gt;</code>. The media and the area will be automatically be placed in order inside the card.</p>
            <p>Take a look at the example: "Image cover with predefined aspect ratio".</p>

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
                  <md-table-cell>md-text-scrim</md-table-cell>
                  <md-table-cell><code>Boolean</code></md-table-cell>
                  <md-table-cell>Apply a gradient background based on the image. This option increase the legibility of the text applying background colors by extracting the amount of lightness on the image. If the image is dark so the background of the text will be lighter. If it's not dark then the background will be darker. This will be calculated automatically. Default <code>false</code></md-table-cell>
                </md-table-row>

                <md-table-row>
                  <md-table-cell>md-solid</md-table-cell>
                  <md-table-cell><code>Boolean</code></md-table-cell>
                  <md-table-cell>Applies a solid background with the same calculation logic of the md-text-scrim. Default <code>false</code></md-table-cell>
                </md-table-row>
              </md-table-body>
            </md-table>
          </div>
        </api-table>

        <api-table name="md-card-expand">
          <p>Create a expansible content area inside cards. Useful to "show more" content or load them on demand.</p>
          <p>You will need a <code>&lt;md-card-actions&gt;</code> with an element with a <code>md-expand-trigger</code> attribute and a <code>&lt;md-card-content&gt;</code> with the content that you want to show. The trigger will automatically toggle the content on click.</p>
          <p>A simple HTML markup can be like that:</p>
          <code-block lang="xml">
            &lt;md-card-expand&gt;
              &lt;md-card-actions&gt;
                &lt;md-button class=&quot;md-icon-button&quot; md-expand-trigger&gt;
                  &lt;md-icon&gt;keyboard_arrow_down&lt;/md-icon&gt;
                &lt;/md-button&gt;
              &lt;/md-card-actions&gt;

              &lt;md-card-content&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              &lt;/md-card-content&gt;
            &lt;/md-card-expand&gt;
          </code-block>
          <p>No options available</p>
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

            <md-card>
              <md-card-media>
                <img src="assets/card-image-2.jpg" alt="People">
              </md-card-media>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
              </md-card-content>
            </md-card>

            <md-card>
              <md-card-media>
                <img src="assets/card-image-2.jpg" alt="People">
              </md-card-media>

              <md-card-header>
                <div class="md-title">Title goes here</div>
                <div class="md-subhead">Subtitle here</div>
              </md-card-header>

              <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </md-card-actions>
            </md-card>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-card&gt;
                &lt;md-card-media&gt;
                  &lt;img src=&quot;assets/card-image-1.jpg&quot; alt=&quot;People&quot;&gt;
                &lt;/md-card-media&gt;

                &lt;md-card-header&gt;
                  &lt;div class=&quot;md-title&quot;&gt;Title goes here&lt;/div&gt;
                  &lt;div class=&quot;md-subhead&quot;&gt;Subtitle here&lt;/div&gt;
                &lt;/md-card-header&gt;

                &lt;md-card-actions&gt;
                  &lt;md-button&gt;Action&lt;/md-button&gt;
                  &lt;md-button&gt;Action&lt;/md-button&gt;
                &lt;/md-card-actions&gt;

                &lt;md-card-content&gt;
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                &lt;/md-card-content&gt;
              &lt;/md-card&gt;

              &lt;md-card&gt;
                &lt;md-card-header&gt;
                  &lt;md-card-header-text&gt;
                    &lt;div class=&quot;md-title&quot;&gt;Title goes here&lt;/div&gt;
                    &lt;div class=&quot;md-subhead&quot;&gt;Subtitle here&lt;/div&gt;
                  &lt;/md-card-header-text&gt;

                  &lt;md-menu md-size=&quot;4&quot; md-direction=&quot;bottom left&quot;&gt;
                    &lt;md-button class=&quot;md-icon-button&quot; md-menu-trigger&gt;
                      &lt;md-icon&gt;more_vert&lt;/md-icon&gt;
                    &lt;/md-button&gt;

                    &lt;md-menu-content&gt;
                      &lt;md-menu-item&gt;
                        &lt;span&gt;Call&lt;/span&gt;
                        &lt;md-icon&gt;phone&lt;/md-icon&gt;
                      &lt;/md-menu-item&gt;

                      &lt;md-menu-item&gt;
                        &lt;span&gt;Send a message&lt;/span&gt;
                        &lt;md-icon&gt;message&lt;/md-icon&gt;
                      &lt;/md-menu-item&gt;
                    &lt;/md-menu-content&gt;
                  &lt;/md-menu&gt;
                &lt;/md-card-header&gt;

                &lt;md-card-media&gt;
                  &lt;img src=&quot;assets/card-image-1.jpg&quot; alt=&quot;People&quot;&gt;
                &lt;/md-card-media&gt;

                &lt;md-card-content&gt;
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                &lt;/md-card-content&gt;
              &lt;/md-card&gt;

              &lt;md-card&gt;
                &lt;md-card-media&gt;
                  &lt;img src=&quot;assets/card-image-2.jpg&quot; alt=&quot;People&quot;&gt;
                &lt;/md-card-media&gt;

                &lt;md-card-content&gt;
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
                &lt;/md-card-content&gt;
              &lt;/md-card&gt;

              &lt;md-card&gt;
                &lt;md-card-media&gt;
                  &lt;img src=&quot;assets/card-image-2.jpg&quot; alt=&quot;People&quot;&gt;
                &lt;/md-card-media&gt;

                &lt;md-card-header&gt;
                  &lt;div class=&quot;md-title&quot;&gt;Title goes here&lt;/div&gt;
                  &lt;div class=&quot;md-subhead&quot;&gt;Subtitle here&lt;/div&gt;
                &lt;/md-card-header&gt;

                &lt;md-card-actions&gt;
                  &lt;md-button&gt;Action&lt;/md-button&gt;
                  &lt;md-button&gt;Action&lt;/md-button&gt;
                &lt;/md-card-actions&gt;
              &lt;/md-card&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Hover Effect">
          <div class="card-holder" slot="demo">
            <md-card md-with-hover>
              <md-card-header>
                <div class="md-title">Title goes here</div>
                <div class="md-subhead">Subtitle here</div>
              </md-card-header>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
              </md-card-content>

              <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </md-card-actions>
            </md-card>

            <md-card md-with-hover>
              <md-card-media>
                <img src="assets/card-image-1.jpg" alt="People">

                <md-ink-ripple />
              </md-card-media>

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

            <md-card md-with-hover>
              <md-card-header>
                <md-avatar>
                  <img src="assets/avatar.png" alt="People">
                </md-avatar>

                <div class="md-title">Title goes here</div>
                <div class="md-subhead">Subtitle here</div>
              </md-card-header>

              <md-card-media>
                <img src="assets/card-image-1.jpg" alt="People">
              </md-card-media>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
              </md-card-content>

              <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </md-card-actions>
            </md-card>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-card md-with-hover&gt;
                &lt;md-card-header&gt;
                  &lt;div class=&quot;md-title&quot;&gt;Title goes here&lt;/div&gt;
                  &lt;div class=&quot;md-subhead&quot;&gt;Subtitle here&lt;/div&gt;
                &lt;/md-card-header&gt;

                &lt;md-card-content&gt;
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                &lt;/md-card-content&gt;

                &lt;md-card-actions&gt;
                  &lt;md-button&gt;Action&lt;/md-button&gt;
                  &lt;md-button&gt;Action&lt;/md-button&gt;
                &lt;/md-card-actions&gt;
              &lt;/md-card&gt;

              &lt;md-card md-with-hover&gt;
                &lt;md-card-media&gt;
                  &lt;img src=&quot;assets/card-image-1.jpg&quot; alt=&quot;People&quot;&gt;

                  &lt;md-ink-ripple&gt;&lt;/md-ink-ripple&gt;
                &lt;/md-card-media&gt;

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

              &lt;md-card md-with-hover&gt;
                &lt;md-card-header&gt;
                  &lt;md-avatar&gt;
                    &lt;img src=&quot;assets/avatar.png&quot; alt=&quot;People&quot;&gt;
                  &lt;/md-avatar&gt;

                  &lt;div class=&quot;md-title&quot;&gt;Title goes here&lt;/div&gt;
                  &lt;div class=&quot;md-subhead&quot;&gt;Subtitle here&lt;/div&gt;
                &lt;/md-card-header&gt;

                &lt;md-card-media&gt;
                  &lt;img src=&quot;assets/card-image-1.jpg&quot; alt=&quot;People&quot;&gt;
                &lt;/md-card-media&gt;

                &lt;md-card-content&gt;
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
                &lt;/md-card-content&gt;

                &lt;md-card-actions&gt;
                  &lt;md-button&gt;Action&lt;/md-button&gt;
                  &lt;md-button&gt;Action&lt;/md-button&gt;
                &lt;/md-card-actions&gt;
              &lt;/md-card&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Image cover with predefined aspect ratio">
          <div class="card-holder" slot="demo">
            <md-card>
              <md-card-media-cover md-text-scrim>
                <md-card-media md-ratio="16:9">
                  <img src="assets/card-sky.jpg" alt="Skyscraper">
                </md-card-media>

                <md-card-area>
                  <md-card-header>
                    <div class="md-title">Title goes here</div>
                    <div class="md-subhead">Subtitle here</div>
                  </md-card-header>

                  <md-card-actions>
                    <md-button>Action</md-button>
                    <md-button>Action</md-button>
                  </md-card-actions>
                </md-card-area>
              </md-card-media-cover>
            </md-card>

            <md-card>
              <md-card-media-cover md-solid>
                <md-card-media md-ratio="1:1">
                  <img src="assets/card-sky.jpg" alt="Skyscraper">
                </md-card-media>

                <md-card-area>
                  <md-card-header>
                    <div class="md-title">Title goes here</div>
                    <div class="md-subhead">Subtitle here</div>
                  </md-card-header>

                  <md-card-actions>
                    <md-button>Action</md-button>
                    <md-button>Action</md-button>
                  </md-card-actions>
                </md-card-area>
              </md-card-media-cover>
            </md-card>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-card&gt;
                &lt;md-card-media-cover md-text-scrim&gt;
                  &lt;md-card-media md-ratio=&quot;16:9&quot;&gt;
                    &lt;img src=&quot;assets/card-sky.jpg&quot; alt=&quot;Skyscraper&quot;&gt;
                  &lt;/md-card-media&gt;

                  &lt;md-card-area&gt;
                    &lt;md-card-header&gt;
                      &lt;div class=&quot;md-title&quot;&gt;Title goes here&lt;/div&gt;
                      &lt;div class=&quot;md-subhead&quot;&gt;Subtitle here&lt;/div&gt;
                    &lt;/md-card-header&gt;

                    &lt;md-card-actions&gt;
                      &lt;md-button&gt;Action&lt;/md-button&gt;
                      &lt;md-button&gt;Action&lt;/md-button&gt;
                    &lt;/md-card-actions&gt;
                  &lt;/md-card-area&gt;
                &lt;/md-card-media-cover&gt;
              &lt;/md-card&gt;

              &lt;md-card&gt;
                &lt;md-card-media-cover md-solid&gt;
                  &lt;md-card-media md-ratio=&quot;1:1&quot;&gt;
                    &lt;img src=&quot;assets/card-sky.jpg&quot; alt=&quot;Skyscraper&quot;&gt;
                  &lt;/md-card-media&gt;

                  &lt;md-card-area&gt;
                    &lt;md-card-header&gt;
                      &lt;div class=&quot;md-title&quot;&gt;Title goes here&lt;/div&gt;
                      &lt;div class=&quot;md-subhead&quot;&gt;Subtitle here&lt;/div&gt;
                    &lt;/md-card-header&gt;

                    &lt;md-card-actions&gt;
                      &lt;md-button&gt;Action&lt;/md-button&gt;
                      &lt;md-button&gt;Action&lt;/md-button&gt;
                    &lt;/md-card-actions&gt;
                  &lt;/md-card-area&gt;
                &lt;/md-card-media-cover&gt;
              &lt;/md-card&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Media">
          <div class="card-holder" slot="demo">
            <md-card>
              <md-card-header>
                <md-card-header-text>
                  <div class="md-title">Title goes here</div>
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

            <md-card>
              <md-card-header>
                <md-card-header-text>
                  <div class="md-title">Title goes here</div>
                  <div class="md-subhead">Subtitle here</div>
                </md-card-header-text>

                <md-card-media md-medium>
                  <img src="assets/card-weather.png" alt="People">
                </md-card-media>
              </md-card-header>

              <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </md-card-actions>
            </md-card>

            <md-card>
              <md-card-header>
                <md-card-header-text>
                  <div class="md-title">Title goes</div>
                  <div class="md-subhead">Subtitle here</div>
                </md-card-header-text>

                <md-card-media md-big>
                  <img src="assets/card-weather.png" alt="People">
                </md-card-media>
              </md-card-header>

              <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </md-card-actions>
            </md-card>

            <md-card>
              <md-card-media-actions>
                <md-card-media>
                  <img src="assets/cover.png" alt="Cover">
                </md-card-media>

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
              </md-card-media-actions>
            </md-card>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-card&gt;
                &lt;md-card-header&gt;
                  &lt;md-card-header-text&gt;
                    &lt;div class=&quot;md-title&quot;&gt;Title goes here&lt;/div&gt;
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

              &lt;md-card&gt;
                &lt;md-card-header&gt;
                  &lt;md-card-header-text&gt;
                    &lt;div class=&quot;md-title&quot;&gt;Title goes here&lt;/div&gt;
                    &lt;div class=&quot;md-subhead&quot;&gt;Subtitle here&lt;/div&gt;
                  &lt;/md-card-header-text&gt;

                  &lt;md-card-media md-medium&gt;
                    &lt;img src=&quot;assets/card-weather.png&quot; alt=&quot;People&quot;&gt;
                  &lt;/md-card-media&gt;
                &lt;/md-card-header&gt;

                &lt;md-card-actions&gt;
                  &lt;md-button&gt;Action&lt;/md-button&gt;
                  &lt;md-button&gt;Action&lt;/md-button&gt;
                &lt;/md-card-actions&gt;
              &lt;/md-card&gt;

              &lt;md-card&gt;
                &lt;md-card-header&gt;
                  &lt;md-card-header-text&gt;
                    &lt;div class=&quot;md-title&quot;&gt;Title goes&lt;/div&gt;
                    &lt;div class=&quot;md-subhead&quot;&gt;Subtitle here&lt;/div&gt;
                  &lt;/md-card-header-text&gt;

                  &lt;md-card-media md-big&gt;
                    &lt;img src=&quot;assets/card-weather.png&quot; alt=&quot;People&quot;&gt;
                  &lt;/md-card-media&gt;
                &lt;/md-card-header&gt;

                &lt;md-card-actions&gt;
                  &lt;md-button&gt;Action&lt;/md-button&gt;
                  &lt;md-button&gt;Action&lt;/md-button&gt;
                &lt;/md-card-actions&gt;
              &lt;/md-card&gt;

              &lt;md-card&gt;
                &lt;md-card-media-actions&gt;
                  &lt;md-card-media&gt;
                    &lt;img src=&quot;assets/cover.png&quot; alt=&quot;Cover&quot;&gt;
                  &lt;/md-card-media&gt;

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
                &lt;/md-card-media-actions&gt;
              &lt;/md-card&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Full Control">
          <div class="card-holder" slot="demo">
            <md-card>
              <md-card-area>
                <md-card-media>
                  <img src="assets/card-image-1.jpg" alt="People">
                </md-card-media>

                <md-card-header>
                  <div class="md-title">Title goes here</div>
                  <div class="md-subhead">Subtitle here</div>
                </md-card-header>

                <md-card-content>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                </md-card-content>
              </md-card-area>

              <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </md-card-actions>
            </md-card>

            <md-card>
              <md-card-media>
                <img src="assets/card-image-1.jpg" alt="People">
              </md-card-media>

              <md-card-header>
                <div class="md-title">Title goes here</div>
                <div class="md-subhead">Subtitle here</div>
              </md-card-header>

              <md-card-expand>
                <md-card-actions>
                  <md-button>Action</md-button>
                  <md-button>Action</md-button>
                  <span style="flex: 1"></span>
                  <md-button class="md-icon-button" md-expand-trigger>
                    <md-icon>keyboard_arrow_down</md-icon>
                  </md-button>
                </md-card-actions>

                <md-card-content>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                </md-card-content>
              </md-card-expand>
            </md-card>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-card&gt;
                &lt;md-card-area&gt;
                  &lt;md-card-media&gt;
                    &lt;img src=&quot;assets/card-image-1.jpg&quot; alt=&quot;People&quot;&gt;
                  &lt;/md-card-media&gt;

                  &lt;md-card-header&gt;
                    &lt;div class=&quot;md-title&quot;&gt;Title goes here&lt;/div&gt;
                    &lt;div class=&quot;md-subhead&quot;&gt;Subtitle here&lt;/div&gt;
                  &lt;/md-card-header&gt;

                  &lt;md-card-content&gt;
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                  &lt;/md-card-content&gt;
                &lt;/md-card-area&gt;

                &lt;md-card-actions&gt;
                  &lt;md-button&gt;Action&lt;/md-button&gt;
                  &lt;md-button&gt;Action&lt;/md-button&gt;
                &lt;/md-card-actions&gt;
              &lt;/md-card&gt;

              &lt;md-card&gt;
                &lt;md-card-media&gt;
                  &lt;img src=&quot;assets/card-image-1.jpg&quot; alt=&quot;People&quot;&gt;
                &lt;/md-card-media&gt;

                &lt;md-card-header&gt;
                  &lt;div class=&quot;md-title&quot;&gt;Title goes here&lt;/div&gt;
                  &lt;div class=&quot;md-subhead&quot;&gt;Subtitle here&lt;/div&gt;
                &lt;/md-card-header&gt;

                &lt;md-card-expand&gt;
                  &lt;md-card-actions&gt;
                    &lt;md-button&gt;Action&lt;/md-button&gt;
                    &lt;md-button&gt;Action&lt;/md-button&gt;
                    &lt;span style=&quot;flex: 1&quot;&gt;&lt;/span&gt;
                    &lt;md-button class=&quot;md-icon-button&quot; md-expand-trigger&gt;
                      &lt;md-icon&gt;keyboard_arrow_down&lt;/md-icon&gt;
                    &lt;/md-button&gt;
                  &lt;/md-card-actions&gt;

                  &lt;md-card-content&gt;
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                  &lt;/md-card-content&gt;
                &lt;/md-card-expand&gt;
              &lt;/md-card&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Themes">
          <div class="card-holder" slot="demo">
            <md-card class="md-primary">
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

            <md-card class="md-accent">
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

            <md-card class="md-warn">
              <md-card-media>
                <img src="assets/card-image-2.jpg" alt="People">
              </md-card-media>

              <md-card-header>
                <div class="md-title">Title goes here</div>
                <div class="md-subhead">Subtitle here</div>
              </md-card-header>

              <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </md-card-actions>
            </md-card>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-card class="md-primary"&gt;
                &lt;md-card-media&gt;
                  &lt;img src=&quot;assets/card-image-1.jpg&quot; alt=&quot;People&quot;&gt;
                &lt;/md-card-media&gt;

                &lt;md-card-header&gt;
                  &lt;div class=&quot;md-title&quot;&gt;Title goes here&lt;/div&gt;
                  &lt;div class=&quot;md-subhead&quot;&gt;Subtitle here&lt;/div&gt;
                &lt;/md-card-header&gt;

                &lt;md-card-actions&gt;
                  &lt;md-button&gt;Action&lt;/md-button&gt;
                  &lt;md-button&gt;Action&lt;/md-button&gt;
                &lt;/md-card-actions&gt;

                &lt;md-card-content&gt;
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                &lt;/md-card-content&gt;
              &lt;/md-card&gt;

              &lt;md-card class="md-accent"&gt;
                &lt;md-card-header&gt;
                  &lt;md-card-header-text&gt;
                    &lt;div class=&quot;md-title&quot;&gt;Title goes here&lt;/div&gt;
                    &lt;div class=&quot;md-subhead&quot;&gt;Subtitle here&lt;/div&gt;
                  &lt;/md-card-header-text&gt;

                  &lt;md-menu md-size=&quot;4&quot; md-direction=&quot;bottom left&quot;&gt;
                    &lt;md-button class=&quot;md-icon-button&quot; md-menu-trigger&gt;
                      &lt;md-icon&gt;more_vert&lt;/md-icon&gt;
                    &lt;/md-button&gt;

                    &lt;md-menu-content&gt;
                      &lt;md-menu-item&gt;
                        &lt;span&gt;Call&lt;/span&gt;
                        &lt;md-icon&gt;phone&lt;/md-icon&gt;
                      &lt;/md-menu-item&gt;

                      &lt;md-menu-item&gt;
                        &lt;span&gt;Send a message&lt;/span&gt;
                        &lt;md-icon&gt;message&lt;/md-icon&gt;
                      &lt;/md-menu-item&gt;
                    &lt;/md-menu-content&gt;
                  &lt;/md-menu&gt;
                &lt;/md-card-header&gt;

                &lt;md-card-media&gt;
                  &lt;img src=&quot;assets/card-image-1.jpg&quot; alt=&quot;People&quot;&gt;
                &lt;/md-card-media&gt;

                &lt;md-card-content&gt;
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                &lt;/md-card-content&gt;
              &lt;/md-card&gt;

              &lt;md-card class="md-warn"&gt;
                &lt;md-card-media&gt;
                  &lt;img src=&quot;assets/card-image-2.jpg&quot; alt=&quot;People&quot;&gt;
                &lt;/md-card-media&gt;

                &lt;md-card-header&gt;
                  &lt;div class=&quot;md-title&quot;&gt;Title goes here&lt;/div&gt;
                  &lt;div class=&quot;md-subhead&quot;&gt;Subtitle here&lt;/div&gt;
                &lt;/md-card-header&gt;

                &lt;md-card-actions &gt;
                  &lt;md-button&gt;Action&lt;/md-button&gt;
                  &lt;md-button&gt;Action&lt;/md-button&gt;
                &lt;/md-card-actions&gt;
              &lt;/md-card&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Complete Example">
          <div class="card-holder" slot="demo">
            <md-card class="card-example">
              <md-card-area md-inset>
                <md-card-media md-ratio="16:9">
                  <img src="assets/card-example.jpg" alt="Coffee House">
                </md-card-media>

                <md-card-header>
                  <h2 class="md-title">Coffee House</h2>
                  <div class="md-subhead">
                    <md-icon>location_on</md-icon>
                    <span>2 miles</span>
                  </div>
                </md-card-header>

                <md-card-content>
                  Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.
                </md-card-content>
              </md-card-area>

              <md-card-content>
                <h3 class="md-subheading">Today's availability</h3>
                <div class="card-reservation">
                  <md-icon>access_time</md-icon>
                  <md-button-toggle md-single class="md-button-group">
                    <md-button>5:30PM</md-button>
                    <md-button>7:30PM</md-button>
                    <md-button>9:00PM</md-button>
                  </md-button-toggle>
                </div>
              </md-card-content>

              <md-card-actions>
                <md-button class="md-primary">Reserve</md-button>
              </md-card-actions>
            </md-card>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-card class=&quot;card-example&quot;&gt;
                &lt;md-card-area md-inset&gt;
                  &lt;md-card-media md-ratio=&quot;16:9&quot;&gt;
                    &lt;img src=&quot;assets/card-example.jpg&quot; alt=&quot;Coffee House&quot;&gt;
                  &lt;/md-card-media&gt;

                  &lt;md-card-header&gt;
                    &lt;h2 class=&quot;md-title&quot;&gt;Coffee House&lt;/h2&gt;
                    &lt;div class=&quot;md-subhead&quot;&gt;
                      &lt;md-icon&gt;location_on&lt;/md-icon&gt;
                      &lt;span&gt;2 miles&lt;/span&gt;
                    &lt;/div&gt;
                  &lt;/md-card-header&gt;

                  &lt;md-card-content&gt;
                    Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.
                  &lt;/md-card-content&gt;
                &lt;/md-card-area&gt;

                &lt;md-card-content&gt;
                  &lt;h3 class=&quot;md-subheading&quot;&gt;Today&#039;s availability&lt;/h3&gt;
                  &lt;div class=&quot;card-reservation&quot;&gt;
                    &lt;md-icon&gt;access_time&lt;/md-icon&gt;
                    &lt;md-button-toggle md-single class=&quot;md-button-group&quot;&gt;
                      &lt;md-button&gt;5:30PM&lt;/md-button&gt;
                      &lt;md-button&gt;7:30PM&lt;/md-button&gt;
                      &lt;md-button&gt;9:00PM&lt;/md-button&gt;
                    &lt;/md-button-toggle&gt;
                  &lt;/div&gt;
                &lt;/md-card-content&gt;

                &lt;md-card-actions&gt;
                  &lt;md-button class=&quot;md-primary&quot;&gt;Reserve&lt;/md-button&gt;
                &lt;/md-card-actions&gt;
              &lt;/md-card&gt;
            </code-block>

            <code-block lang="sass">
              .card-example {
                .md-subhead {
                  .md-icon {
                    $size: 16px;

                    width: $size;
                    min-width: $size;
                    height: $size;
                    min-height: $size;
                    font-size: $size;
                    line-height: $size;
                  }

                  span {
                    vertical-align: middle;
                  }
                }

                .card-reservation {
                  margin-top: 8px;
                  display: flex;
                  align-items: center;
                  justify-content: space-around;

                  .md-icon {
                    margin: 8px;
                    color: rgba(#000, .54) !important;
                  }

                  .md-button {
                    border-radius: 2px !important;
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
  .card-holder {
    .md-card {
      width: 100%;
      max-width: 320px;
      margin: 0 4px 16px;
      display: inline-block;
      vertical-align: top;
    }
  }

  .card-example {
    .md-subhead {
      .md-icon {
        $size: 16px;

        width: $size;
        min-width: $size;
        height: $size;
        min-height: $size;
        font-size: $size;
        line-height: $size;
      }

      span {
        vertical-align: middle;
      }
    }

    .card-reservation {
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .md-icon {
        margin: 8px;
        color: rgba(#000, .54) !important;
      }

      .md-button {
        border-radius: 2px !important;
      }
    }
  }
</style>
