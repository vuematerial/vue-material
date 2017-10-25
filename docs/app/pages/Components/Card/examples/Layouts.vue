<template>
  <div>
    <md-card>
      <md-card-media>
        <img src="/assets/examples/card-image-1.jpg" alt="People">
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
        <md-avatar>
          <img src="/assets/examples/avatar.png" alt="Avatar">
        </md-avatar>

        <div class="md-title">Title goes here</div>
        <div class="md-subhead">Subtitle here</div>
      </md-card-header>

      <md-card-media>
        <img src="/assets/examples/card-image-1.jpg" alt="People">
      </md-card-media>

      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
      </md-card-content>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>

    <md-card class="md-card-example">
      <md-card-area md-inset>
        <md-card-media md-ratio="16:9">
          <img src="/assets/examples/card-example.jpg" alt="Coffee House">
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
          <div class="md-button-group">
            <md-button>5:30PM</md-button>
            <md-button>7:30PM</md-button>
            <md-button>9:00PM</md-button>
          </div>
        </div>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-primary">Reserve</md-button>
      </md-card-actions>
    </md-card>

    <md-card>
      <md-card-area>
        <md-card-media>
          <img src="/assets/examples/card-image-1.jpg" alt="People">
        </md-card-media>

        <md-card-header>
          <div class="md-title">Actions left aligned</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
        </md-card-content>
      </md-card-area>

      <md-card-actions md-alignment="left">
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>

    <md-card>
      <md-card-media>
        <md-ripple>
          <img src="/assets/examples/card-image-1.jpg" alt="People">
        </md-ripple>
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

    <md-card>
      <md-card-media>
        <img src="/assets/examples/card-image-2.jpg" alt="People">
      </md-card-media>

      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
      </md-card-content>
    </md-card>

    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Actions left aligned</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header-text>

        <md-menu md-size="big" md-direction="bottom-end">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>more_vert</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item @click="doACall">
              <span>Call</span>
              <md-icon>phone</md-icon>
            </md-menu-item>

            <md-menu-item @click="sendMessage">
              <span>Send a message</span>
              <md-icon>message</md-icon>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </md-card-header>

      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
      </md-card-content>

      <md-card-actions md-alignment="left">
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
  export default {
    name: 'Layouts',
    methods: {
      sendMessage () {
        window.alert('Send a message...')
      },
      doACall () {
        window.alert('Calling someone...')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }

  .md-card-example {
    .md-subhead {
      .md-icon {
        $size: 16px;

        width: $size;
        min-width: $size;
        height: $size;
        font-size: $size !important;
      }

      span {
        vertical-align: middle;
      }
    }

    .card-reservation {
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .md-icon {
        margin: 8px;
      }
    }

    .md-button-group {
      display: flex;

      .md-button {
        min-width: 60px;
        border-radius: 2px;
      }
    }
  }
</style>
