<template>
  <div>
    <md-card class="md-primary">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Primary color</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header-text>

        <md-card-media>
          <img src="/assets/examples/avatar-2.jpg" alt="Avatar">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>

    <md-card class="md-accent" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Accent color</div>
          <div class="md-subhead">With hover and ripple effects</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>

    <md-card class="md-primary" md-theme="green-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Green custom theme</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header-text>

        <md-card-media>
          <img src="/assets/examples/avatar-2.jpg" alt="Avatar">
        </md-card-media>
      </md-card-header>
    </md-card>

    <md-card class="md-primary" md-theme="purple-card" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Purple primary color</div>
          <div class="md-subhead">With hover and ripple effects</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>
      </md-ripple>
    </md-card>

    <md-card class="md-primary" md-theme="black-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">True black primary color</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header-text>

        <md-card-media>
          <img src="/assets/examples/avatar-2.jpg" alt="Avatar">
        </md-card-media>
      </md-card-header>
    </md-card>

    <md-card class="md-primary" md-theme="orange-card" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Orange primary color</div>
          <div class="md-subhead">With hover and ripple effects</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
        </md-card-content>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'ThemeColors'
}
</script>

<style lang="scss" scoped>
  @import "~vue-material/theme/engine";

  @include md-register-theme("green-card", (
    primary: md-get-palette-color(green, 500)
  ));

  @include md-register-theme("black-card", (
    primary: md-get-palette-color(black, 500)
  ));

  @include md-register-theme("purple-card", (
    primary: md-get-palette-color(purple, 500)
  ));

  @include md-register-theme("orange-card", (
    primary: md-get-palette-color(orange, 500)
  ));

  @import "~vue-material/base/theme";
  @import "~vue-material/components/MdCard/theme";

  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
