<template>
  <demo-page label="Components - Card">
    <div slot="examples">
      <demo-example label="Default">
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

            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
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

        <md-card>
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

        <md-card>
          <md-card-media>
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
          <md-card-media-cover md-text-scrim v-md-ink-ripple>
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

        <md-card md-with-hover>
          <md-card-media-cover md-solid v-md-ink-ripple>
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
