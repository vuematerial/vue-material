<template>
  <demo-page label="Components - Card">
    <div slot="examples">
      <demo-example label="Regular Cards">
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
      </demo-example>

      <demo-example label="Hover Effect">
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
          <md-card-media v-md-ink-ripple>
            <img src="assets/card-image-1.jpg" alt="People">
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
      </demo-example>

      <demo-example label="Image cover with predefined aspect ratio">
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
      </demo-example>

      <demo-example label="Media">
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
      </demo-example>

      <demo-example label="Full control">
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

        <md-card class="card-example" v-md-theme="'blue'">
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
              <md-button-toggle type="radio" class="md-button-group">
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
      </demo-example>
    </div>

    <div slot="code">
      <demo-example label="Regular Cards">
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
        </code-block>

        <code-block lang="xml">
&lt;md-card&gt;
  &lt;md-card-header&gt;
    &lt;md-card-header-text&gt;
      &lt;div class=&quot;md-title&quot;&gt;Title goes here&lt;/div&gt;
      &lt;div class=&quot;md-subhead&quot;&gt;Subtitle here&lt;/div&gt;
    &lt;/md-card-header-text&gt;

    &lt;md-menu md-size=&quot;2&quot; md-direction=&quot;bottom left&quot;&gt;
      &lt;md-button class=&quot;md-icon-button&quot; md-menu-trigger&gt;
        &lt;md-icon&gt;more_vert&lt;/md-icon&gt;
      &lt;/md-button&gt;

      &lt;md-menu-content&gt;
        &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
        &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
        &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
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
        </code-block>

        <code-block lang="xml">
&lt;md-card&gt;
  &lt;md-card-media&gt;
    &lt;img src=&quot;assets/card-image-2.jpg&quot; alt=&quot;People&quot;&gt;
  &lt;/md-card-media&gt;

  &lt;md-card-content&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
  &lt;/md-card-content&gt;
&lt;/md-card&gt;
        </code-block>

        <code-block lang="xml">
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
      </demo-example>

      <demo-example label="Hover Effect">
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
        </code-block>

        <code-block lang="xml">
&lt;md-card md-with-hover&gt;
  &lt;md-card-media v-md-ink-ripple&gt;
    &lt;img src=&quot;assets/card-image-1.jpg&quot; alt=&quot;People&quot;&gt;
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
        </code-block>

        <code-block lang="xml">
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
      </demo-example>

      <demo-example label="Image cover with predefined aspect ratio">
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
        </code-block>

        <code-block lang="xml">
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
      </demo-example>

      <demo-example label="Media">
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
        </code-block>

        <code-block lang="xml">
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
        </code-block>

        <code-block lang="xml">
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
        </code-block>

        <code-block lang="xml">
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
      </demo-example>

      <demo-example label="Full control">
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
        </code-block>

        <code-block lang="xml">
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

        <code-block lang="xml">
&lt;md-card class=&quot;card-example&quot; v-md-theme=&quot;&#039;blue&#039;&quot;&gt;
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
      &lt;md-button-toggle type=&quot;radio&quot; class=&quot;md-button-group&quot;&gt;
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
      </demo-example>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>

<style lang="scss" scoped>
  .md-card {
    width: 100%;
    max-width: 340px;
    margin: 0 4px 16px;
    display: inline-block;
    vertical-align: top;
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
        color: rgba(#000, .54) !important;
      }

      .md-button {
        border-radius: 2px !important;
      }
    }
  }
</style>
