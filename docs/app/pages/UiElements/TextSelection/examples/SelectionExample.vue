<template>
  <div>
    <h2>Select any text to see the selection background</h2>
    <p>This text will follow the default color of the documentation, which is a nice red color.</p>

    <md-content md-theme="selection-black">
      <p>This one will get a slick black background when selected, because the parent theme have another color.</p>
    </md-content>

    <md-content md-theme="selection-orange">
      <p>Also works when the theme is dark.</p>
    </md-content>
  </div>
</template>

<script>
  export default {
    name: 'SelectionExample'
  }
</script>

<style lang="scss">
  @import "~vue-material/theme/engine";

  @include md-register-theme("selection-black", (
    accent: md-get-palette-color(black, 500)
  ));

  @include md-register-theme("selection-orange", (
    accent: md-get-palette-color(orange, 500),
    theme: dark
  ));

  @import "~vue-material/base/theme";
  @import "~vue-material/components/MdContent/theme";
</style>

<style lang="scss" scoped>
  .md-content {
    padding: 1px 16px;
  }
</style>
