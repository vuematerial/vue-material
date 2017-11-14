<template>
  <page-container centered :title="$t('pages.themes.title')">
    <div class="page-container-section">
      <h2 class="md-headline">Creating themes</h2>

      <p>The simplest markup to create a theme in Vue Material is:</p>
      <code-example label="SCSS" lang="scss">
        @import "~vue-material/theme/engine"; // Import the theme engine

        @include md-register-theme("default", (
          primary: md-get-palette-color(blue, A200), // The primary color of your application
          accent: md-get-palette-color(red, A200) // The accent and secondary color
        ));

        @import "~vue-material/theme/all"; // Apply the theme
      </code-example>

      <h3 class="md-title">Default colors</h3>
      <p>Vue Material have default theme colors:</p>
      <ul>
        <li>Primary: <span style="background-color: #448aff; color: #fff">#448aff</span> => Blue A200</li>
        <li>Accent: <span style="background-color: #ff5252; color: #fff">#ff5252</span> => Red A200</li>
      </ul>
      <p>This mean that if you do not pass all arguments of <code>md-register-theme</code>, the default one will be applied:</p>
      <code-example label="SCSS" lang="scss">
        @import "~vue-material/theme/engine"; // Import the theme engine

        @include md-register-theme("default", (
          primary: md-get-palette-color(blue, A200) // The primary color of your application
        ));

        @import "~vue-material/theme/all"; // Apply the theme
      </code-example>

      <h3 class="md-title">Using your own colors</h3>
      <p>Sometimes the colors of your brand do not match with the material ones. It is possible to pass your own colors, without using the Material Design Palette:</p>
      <code-example label="SCSS" lang="scss">
        @import "~vue-material/theme/engine"; // Import the theme engine

        @include md-register-theme("default", (
          primary: #3fffbe, // The primary color of your brand
          accent: #1a11e8 // The secondary color of your brand
        ));

        @import "~vue-material/theme/all"; // Apply the theme
      </code-example>

      <h3 class="md-title">Dark Themes</h3>
      <p>By default light colors will be used on backgrounds, but you can easily change this, by passing a <code>theme</code> attribute:</p>
      <code-example label="SCSS" lang="scss">
        @import "~vue-material/theme/engine"; // Import the theme engine

        @include md-register-theme("default", (
          primary: md-get-palette-color(blue, A200), // The primary color of your application
          accent: md-get-palette-color(red, A200) // The accent and secondary color
          theme: dark // This can be dark or light
        ));

        @import "~vue-material/theme/all"; // Apply the theme
      </code-example>

      <h3 class="md-title">Theme individual components</h3>
      <p>You can theme individual components withou effort, by calling the components one by one:</p>
      <code-example label="SCSS" lang="scss">
        @import "~vue-material/theme/engine"; // Import the theme engine

        @include md-register-theme("default", (
          primary: md-get-palette-color(blue, A200), // The primary color of your application
          accent: md-get-palette-color(red, A200) // The accent and secondary color
          theme: dark // This can be dark or light
        ));

        @import "~vue-material/components/MdButton/theme"; // Apply the theme
        @import "~vue-material/components/MdContent/theme"; // Apply the theme
        @import "~vue-material/components/MdToolbar/theme"; // Apply the theme
      </code-example>

      <h3 class="md-title">Available colors</h3>
      <p>All of those colors can be passed as an argument of <code>md-get-palette-color</code>.</p>
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
        @import "~vue-material/theme/engine"; // Import the theme engine

        @include md-register-theme("default", (
          primary: md-get-palette-color(green, A200), // The primary color of your application
          accent: md-get-palette-color(pink, A200) // The accent and secondary color
          theme: dark // This can be dark or light
        ));

        @import "~vue-material/theme/all"; // Apply the theme
      </code-example>
    </div>
  </page-container>
</template>

<script>
  export default {
    name: 'Configuration'
  }
</script>
