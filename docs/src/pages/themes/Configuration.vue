<template>
  <page-content page-title="Themes - Configuration">
    <article class="main-content">
      <section>
        <h2 class="md-headline">Theme Engine</h2>

        <p>When you create a theme the Vue Material will generate all of the styles ondemand so you don't need to create any css file to create them. Everything is generated when the API is called and this is great because you can create a theme anytime you want. After that you can use the declarative directive to apply the theme inside an element.</p>
        <p>Most of the components of Vue Material can change it's colors. Every theme has Primary, Accent, Warn and Background colors. Some components also have a Transparent variation to make your layouts cleaner and easy to place on top of another element. E.g. Tabs inside toolbars.</p>
        <p>Vue Material use classes to apply those color intentions: <code>md-primary</code>, <code>md-accent</code>, <code>md-warn</code> and <code>md-transparent</code>. The background color is applied automaticaly.</p>
      </section>

      <section>
        <h2 class="md-headline">Color Intentions</h2>
        <p>Color in material design is inspired by bold hues juxtaposed with muted environments, deep shadows, and bright highlights.</p>
        <p>Theming allows changing the color of your application. The <a href="https://material.google.com/style/color.html#color-color-palette" target="_blank" rel="noopener">Material Design palette</a> can be fully applied using Vue Material. You can pass all intentions or just change the intention that you want. The default colors are:</p>
        <ul>
          <li>primary - indigo</li>
          <li>accent - pink</li>
          <li>warn - deep-orange</li>
          <li>background - grey</li>
        </ul>
        <p>All of those colors can be applied to create a theme.</p>
        <ul>
          <li>red</li>
          <li>pink</li>
          <li>purple</li>
          <li>deep-purple</li>
          <li>indigo</li>
          <li>blue</li>
          <li>light-blue</li>
          <li>cyan</li>
          <li>teal</li>
          <li>green</li>
          <li>light-green</li>
          <li>lime</li>
          <li>yellow</li>
          <li>amber</li>
          <li>orange</li>
          <li>deep-orange</li>
          <li>brown</li>
          <li>grey</li>
          <li>blue-grey</li>
          <li>white</li>
          <li>black</li>
        </ul>
      </section>

      <section>
        <h3 class="md-headline">Registering themes</h3>
        <p>The default colors will be applied without any change in your code base. But you can change the colors of the <code>default</code> theme calling the Vue Material API.</p>
        <code-block lang="javascript">
          Vue.material.registerTheme('default', {
            primary: 'blue',
            accent: 'red',
            warn: 'red',
            background: 'grey'
          })
        </code-block>
      </section>

      <section>
        <h3 class="md-headline">Multiple themes</h3>
        <p>
          You can call the <code>registerTheme</code> function how many times you want. However you can pass an object containing all the themes that you need to create:
        </p>
        <code-block lang="javascript">
          Vue.material.registerTheme({
            app: {
              primary: 'cyan'
            },
            about: {
              primary: 'indigo'
            },
            contact: {
              primary: 'teal'
            }
          })
        </code-block>
        <small>Note: If you do not pass all the colors the theme will inherit the <strong>default colors</strong>.</small>
      </section>

      <section>
        <h3 class="md-headline">Custom Shades</h3>
        <p>To have a full use of the Material Design palette you can specify different shades for each color:</p>
        <code-block lang="javascript">
          Vue.material.registerTheme('about', {
            primary: {
              color: 'indigo',
              hue: 'A200'
            },
            accent: {
              color: 'grey',
              hue: 300
            }
          })
        </code-block>
      </section>

      <section>
        <h3 class="md-headline">Applying a theme</h3>
        <p>To change the current theme in your application just call the <code>setCurrentTheme</code> method from anywhere in your application:</p>
        <code-block lang="javascript">
          Vue.material.setCurrentTheme('about')
        </code-block>
        <p>Or inside a Vue instance:</p>
        <code-block lang="javascript">
          this.$material.setCurrentTheme('about')
        </code-block>
      </section>

      <section>
        <h3 class="md-headline">Codepen example</h3>
        <iframe height="550" scrolling="no" title="Theme Example" src="//codepen.io/vue-material/embed/WGavBE/?height=550&amp;theme-id=dark&amp;default-tab=html,result&amp;embed-version=2" frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;">See the Pen <a href="http://codepen.io/vue-material/pen/WGavBE/">Theme Example</a> by Vue Material (<a href="http://codepen.io/vue-material">@vue-material</a>) on <a href="http://codepen.io">CodePen</a>.</iframe>
      </section>
    </article>
  </page-content>
</template>

<style lang="sass" scoped>
  section {
    max-width: 960px;

    + section {
      margin-top: 56px;
    }
  }

  iframe {
    height: 550px;
  }
</style>
