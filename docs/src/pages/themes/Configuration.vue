<template>
  <page-content page-title="Themes">
    <article class="main-content">
      <section>
        <h2 class="md-headline">Color palette</h2>

        <p>Color in material design is inspired by bold hues juxtaposed with muted environments, deep shadows, and bright highlights.</p>
        <p>Theming allows changing the color of your application. The <a href="https://material.google.com/style/color.html#color-color-palette" target="_blank" rel="noopener">Material Design palette</a> can be fully applied using Vue Material.</p>
      </section>

      <section>
        <h2 class="md-headline">Theme Engine</h2>

        <p>When you create a theme the Vue Material will generate all of the styles ondemand so you don't need to create any css file to create them. Everything is generated when the API is called and this is great because you can create a theme anytime you want. After that you can use the declarative directive to apply the theme inside an element.</p>
        <p>Most of the components of Vue Material can change it's colors. Every theme has Primary, Accent, Warn and Background colors. Some components also have a Transparent variation to make your layouts cleaner and easy to place on top of another element. E.g. Tabs inside toolbars.</p>
        <p>Vue Material use classes to apply those color intentions: <code>md-primary</code>, <code>md-accent</code>, <code>md-warn</code> and <code>md-transparent</code>. The background color is applied automaticaly.</p>
      </section>

      <section>
        <h2 class="md-headline">Color Intentions</h2>
        <p>You can pass all intentions or just change the intention that you want. The default colors are:</p>
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
        <p>To configure the colors of your application you can use the API.</p>
        <code-block lang="javascript">
          Vue.material.theme.register('default', {
            primary: 'cyan',
            accent: 'pink',
            warn: 'red',
            background: 'grey'
          })
        </code-block>
        <p>
          You can call the <code>register</code> function how many times you want. However Vue Material have a <code>registerAll</code> function to create multiple themes:
        </p>
        <code-block lang="javascript">
          Vue.material.theme.registerAll({
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
          Vue.material.theme.register('app', {
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
        <p>You can apply a single theme for your entire application and another for a single piece of your code. This makes easy to theme single components or to change colors between pages.</p>
        <p>Vue Material exposes an directive called <code>v-md-theme</code> which will set the theme on an element:</p>
        <code-block lang="html">
          &lt;div id=&quot;app&quot; v-md-theme=&quot;&#039;default&#039;&quot;&gt; &lt;!-- Closest element in a Vue Instance --&gt;
            &lt;md-toolbar&gt;
              &lt;div class=&quot;md-title&quot;&gt;My App&lt;/div&gt;
            &lt;/md-toolbar&gt;

            &lt;md-button v-md-theme=&quot;&#039;indigo&#039;&quot;&gt;My Button&lt;/md-button&gt;
          &lt;/div&gt;
        </code-block>
      </section>

      <section>
        <h3 class="md-headline">Codepen example</h3>
        <iframe height="550" scrolling="no" title="Theme Example" src="//codepen.io/vue-material/embed/WGavBE/?height=550&theme-id=dark&default-tab=html,result&embed-version=2" frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;">See the Pen <a href="http://codepen.io/vue-material/pen/WGavBE/">Theme Example</a> by Vue Material (<a href="http://codepen.io/vue-material">@vue-material</a>) on <a href="http://codepen.io">CodePen</a>.</iframe>
      </section>
    </article>
  </page-content>
</template>

<style lang="scss" scoped>
  section {
    max-width: 960px;

    + section {
      margin-top: 56px;
    }
  }

  iframe {
    width: 550px;
  }
</style>
