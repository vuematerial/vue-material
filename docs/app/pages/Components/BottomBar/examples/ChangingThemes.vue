<template>
  <div>
    <div class="phone-viewport">
      <md-bottom-bar md-type="shift" :md-theme="'bottom-bar-' + theme">
        <md-bottom-bar-item md-label="Home" md-icon="home" @click="theme = 'teal'"></md-bottom-bar-item>
        <md-bottom-bar-item md-label="Pages" md-icon="pages" @click="theme = 'orange'"></md-bottom-bar-item>
        <md-bottom-bar-item md-label="Posts" md-icon="/assets/icon-whatshot.svg" @click="theme = 'blue'"></md-bottom-bar-item>
        <md-bottom-bar-item md-label="Favorites" md-icon="favorite" @click="theme = 'red'"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangingThemes',
  data: () => ({
    theme: 'teal'
  })
}
</script>

<style lang="scss">
  @import "~vue-material/theme/engine";

  @include md-register-theme("bottom-bar-teal", (
    primary: md-get-palette-color(teal, A200)
  ));

  @include md-register-theme("bottom-bar-orange", (
    primary: md-get-palette-color(orange, A200)
  ));

  @include md-register-theme("bottom-bar-blue", (
    primary: md-get-palette-color(blue, A200),
    accent: md-get-palette-color(red, A200)
  ));

  @include md-register-theme("bottom-bar-red", (
    primary: md-get-palette-color(red, A200)
  ));

  @import "~vue-material/theme/all";
</style>

<style lang="scss" scoped>
  .phone-viewport {
    width: 322px;
    height: 200px;
    display: inline-flex;
    align-items: flex-end;
    overflow: hidden;
    border: 1px solid rgba(#000, .26);
    background: rgba(#000, .06);
  }
</style>
