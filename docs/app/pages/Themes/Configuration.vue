<template>
  <page-container centered :title="$t('pages.themeConfiguration.title')">
    <h2 class="md-headline">Creating themes</h2>

    <div class="page-container-section">
      <note-block warning>
        To use custom themes you'll need SCSS/SASS support in your project. Read more about <a href="https://vue-loader.vuejs.org/en/configurations/pre-processors.html">Pre-Processors</a>. In the near future you'll be able to use themes with Plain CSS and Stylus too.
      </note-block>

      <p>The simplest markup to create a theme in Vue Material is:</p>

      <code-example label="SCSS" lang="scss">
        @import "~vue-material/dist/theme/engine"; // Import the theme engine

        @include md-register-theme("default", (
          primary: md-get-palette-color(blue, A200), // The primary color of your application
          accent: md-get-palette-color(red, A200) // The accent or secondary color
        ));

        @import "~vue-material/dist/theme/all"; // Apply the theme
      </code-example>
    </div>

    <div class="page-container-section">
      <h3 class="md-title">Available colors</h3>
      <p>Vue Material comes with the nice Material Design <a href="https://material.io/guidelines/style/color.html#color-color-palette" target="_blank">color palette</a>. You can fully use it to build your themes, using the available colors along with the color shade.</p>
      <p>The shades are based on color weight, that can be, 100, 200, 300, 400, 500, 600, 700, 800, 900, A100, A200, A400 or A700.</p>
      <p>All of those colors can be passed as an argument of <code>md-get-palette-color</code>:</p>
      <ul>
        <li>red</li>
        <li>pink</li>
        <li>purple</li>
        <li>deeppurple</li>
        <li>indigo</li>
        <li>blue</li>
        <li>lightblue</li>
        <li>cyan</li>
        <li>teal</li>
        <li>green</li>
        <li>lightgreen</li>
        <li>lime</li>
        <li>yellow</li>
        <li>amber</li>
        <li>orange</li>
        <li>deeporange</li>
        <li>brown</li>
        <li>grey</li>
        <li>bluegrey</li>
        <li>white</li>
        <li>black</li>
      </ul>

      <code-example label="SCSS" lang="scss">
        @import "~vue-material/dist/theme/engine"; // Import the theme engine

        @include md-register-theme("default", (
          primary: md-get-palette-color(green, A200), // The primary color of your application
          accent: md-get-palette-color(pink, 500) // The accent or secondary color
        ));

        @import "~vue-material/dist/theme/all"; // Apply the theme
      </code-example>
    </div>

    <div class="page-container-section">
      <h3 class="md-title">Default colors</h3>
      <p>Vue Material has default theme colors:</p>
      <ul>
        <li>Primary: <span style="background-color: #448aff; color: #fff">#448aff</span> => Blue A200</li>
        <li>Accent: <span style="background-color: #ff5252; color: #fff">#ff5252</span> => Red A200</li>
      </ul>
      <p>This means that if you do not pass all arguments of <code>md-register-theme</code>, the default ones will be applied:</p>
      <code-example label="SCSS" lang="scss">
        @import "~vue-material/dist/theme/engine"; // Import the theme engine

        @include md-register-theme("default", (
          primary: md-get-palette-color(blue, A200) // The primary color of your application
        ));

        @import "~vue-material/dist/theme/all"; // Apply the theme
      </code-example>
    </div>

    <div class="page-container-section">
      <h3 class="md-title">Using your own colors</h3>
      <p>Sometimes the colors of your brand might not match with the material ones. It is possible to pass your own colors, without using the Material Design Palette:</p>
      <code-example label="SCSS" lang="scss">
        @import "~vue-material/dist/theme/engine"; // Import the theme engine

        @include md-register-theme("default", (
          primary: #3fffbe, // The primary color of your brand
          accent: #1a11e8 // The secondary color of your brand
        ));

        @import "~vue-material/dist/theme/all"; // Apply the theme
      </code-example>
    </div>

    <div class="page-container-section">
      <h3 class="md-title">Dark Themes</h3>
      <p>By default light colors will be used on backgrounds, but you can easily change this, by passing a <code>theme</code> attribute:</p>
      <code-example label="SCSS" lang="scss">
        @import "~vue-material/dist/theme/engine"; // Import the theme engine

        @include md-register-theme("default", (
          primary: md-get-palette-color(blue, A200), // The primary color of your application
          accent: md-get-palette-color(red, A200), // The accent or secondary color
          theme: dark // This can be dark or light
        ));

        @import "~vue-material/dist/theme/all"; // Apply the theme
      </code-example>
    </div>

    <div class="page-container-section">
      <h3 class="md-title">Theming individual components</h3>
      <p>You can theme individual components effortlessly, by calling the components one by one. This will make your final build smaller in size and higher in performance:</p>
      <code-example label="SCSS" lang="scss">
        @import "~vue-material/dist/theme/engine"; // Import the theme engine

        @include md-register-theme("default", (
          primary: md-get-palette-color(blue, A200), // The primary color of your application
          accent: md-get-palette-color(red, A200), // The accent or secondary color
          theme: dark // This can be dark or light
        ));

        @import "~vue-material/dist/components/MdButton/theme"; // Apply the Button theme
        @import "~vue-material/dist/components/MdContent/theme"; // Apply the Content theme
        @import "~vue-material/dist/components/MdToolbar/theme"; // Apply the Toolbar theme
      </code-example>
    </div>
  </page-container>
</template>

<script>
  export default {
    name: 'Configuration'
  }
</script>
