<template>
  <demo-page label="Components - Menu">
    <div slot="examples">
      <demo-example label="Directions">
        <md-menu>
          <md-button md-menu-trigger>Bottom Right</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-direction="bottom left">
          <md-button md-menu-trigger>Bottom Left</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item disabled>My Item 3</md-menu-item>
            <md-menu-item>My Item 4</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-direction="top left">
          <md-button md-menu-trigger>Top Left</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-direction="top right">
          <md-button md-menu-trigger>Top Right</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>
      </demo-example>

      <demo-example label="Sizes">
        <md-menu>
          <md-button md-menu-trigger>Default</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-size="1">
          <md-button md-menu-trigger>Size 1</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-size="2">
          <md-button md-menu-trigger>Size 2</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-size="4">
          <md-button md-menu-trigger>Size 4</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-size="5">
          <md-button md-menu-trigger>Size 5</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-size="7">
          <md-button md-menu-trigger>Size 7</md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>
      </demo-example>

      <demo-example label="List Icons">
        <md-menu>
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>more_vert</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item>My Item 1</md-menu-item>
            <md-menu-item>My Item 2</md-menu-item>
            <md-menu-item>My Item 3</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-size="4">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>phone</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item>
              <md-icon>phone</md-icon>
              <span>My Item 1</span>
            </md-menu-item>

            <md-menu-item>
              <md-icon>phone</md-icon>
              <span>My Item 2</span>
            </md-menu-item>

            <md-menu-item>
              <md-icon>phone</md-icon>
              <span>My Item 3</span>
            </md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu md-direction="bottom left" md-size="4">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>near_me</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item>
              <span>Find on map</span>
              <md-icon>near_me</md-icon>
            </md-menu-item>

            <md-menu-item>
              <span>Call</span>
              <md-icon>phone</md-icon>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </demo-example>
    </div>

    <div slot="code">
      <demo-example label="Directions">
<code-block lang="xml">
&lt;md-menu&gt;
  &lt;md-button md-menu-trigger&gt;Bottom Right&lt;/md-button&gt;

  &lt;md-menu-content&gt;
    &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
  &lt;/md-menu-content&gt;
&lt;/md-menu&gt;

&lt;md-menu md-direction=&quot;bottom left&quot;&gt;
  &lt;md-button md-menu-trigger&gt;Bottom Left&lt;/md-button&gt;

  &lt;md-menu-content&gt;
    &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
    &lt;md-menu-item disabled&gt;My Item 3&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 4&lt;/md-menu-item&gt;
  &lt;/md-menu-content&gt;
&lt;/md-menu&gt;

&lt;md-menu md-direction=&quot;top left&quot;&gt;
  &lt;md-button md-menu-trigger&gt;Top Left&lt;/md-button&gt;

  &lt;md-menu-content&gt;
    &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
  &lt;/md-menu-content&gt;
&lt;/md-menu&gt;

&lt;md-menu md-direction=&quot;top right&quot;&gt;
  &lt;md-button md-menu-trigger&gt;Top Right&lt;/md-button&gt;

  &lt;md-menu-content&gt;
    &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
  &lt;/md-menu-content&gt;
&lt;/md-menu&gt;
</code-block>
      </demo-example>

      <demo-example label="Sizes">
<code-block lang="xml">
&lt;md-menu&gt;
  &lt;md-button md-menu-trigger&gt;Default&lt;/md-button&gt;

  &lt;md-menu-content&gt;
    &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
  &lt;/md-menu-content&gt;
&lt;/md-menu&gt;

&lt;md-menu md-size=&quot;1&quot;&gt;
  &lt;md-button md-menu-trigger&gt;Size 1&lt;/md-button&gt;

  &lt;md-menu-content&gt;
    &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
  &lt;/md-menu-content&gt;
&lt;/md-menu&gt;

&lt;md-menu md-size=&quot;2&quot;&gt;
  &lt;md-button md-menu-trigger&gt;Size 2&lt;/md-button&gt;

  &lt;md-menu-content&gt;
    &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
  &lt;/md-menu-content&gt;
&lt;/md-menu&gt;

&lt;md-menu md-size=&quot;4&quot;&gt;
  &lt;md-button md-menu-trigger&gt;Size 4&lt;/md-button&gt;

  &lt;md-menu-content&gt;
    &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
  &lt;/md-menu-content&gt;
&lt;/md-menu&gt;

&lt;md-menu md-size=&quot;5&quot;&gt;
  &lt;md-button md-menu-trigger&gt;Size 5&lt;/md-button&gt;

  &lt;md-menu-content&gt;
    &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
  &lt;/md-menu-content&gt;
&lt;/md-menu&gt;

&lt;md-menu md-size=&quot;7&quot;&gt;
  &lt;md-button md-menu-trigger&gt;Size 7&lt;/md-button&gt;

  &lt;md-menu-content&gt;
    &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
  &lt;/md-menu-content&gt;
&lt;/md-menu&gt;
</code-block>
      </demo-example>

      <demo-example label="List Icons">
<code-block lang="xml">
&lt;md-menu&gt;
  &lt;md-button class=&quot;md-icon-button&quot; md-menu-trigger&gt;
    &lt;md-icon&gt;more_vert&lt;/md-icon&gt;
  &lt;/md-button&gt;

  &lt;md-menu-content&gt;
    &lt;md-menu-item&gt;My Item 1&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 2&lt;/md-menu-item&gt;
    &lt;md-menu-item&gt;My Item 3&lt;/md-menu-item&gt;
  &lt;/md-menu-content&gt;
&lt;/md-menu&gt;

&lt;md-menu md-size=&quot;4&quot;&gt;
  &lt;md-button class=&quot;md-icon-button&quot; md-menu-trigger&gt;
    &lt;md-icon&gt;phone&lt;/md-icon&gt;
  &lt;/md-button&gt;

  &lt;md-menu-content&gt;
    &lt;md-menu-item&gt;
      &lt;md-icon&gt;phone&lt;/md-icon&gt;
      &lt;span&gt;My Item 1&lt;/span&gt;
    &lt;/md-menu-item&gt;

    &lt;md-menu-item&gt;
      &lt;md-icon&gt;phone&lt;/md-icon&gt;
      &lt;span&gt;My Item 2&lt;/span&gt;
    &lt;/md-menu-item&gt;

    &lt;md-menu-item&gt;
      &lt;md-icon&gt;phone&lt;/md-icon&gt;
      &lt;span&gt;My Item 3&lt;/span&gt;
    &lt;/md-menu-item&gt;
  &lt;/md-menu-content&gt;
&lt;/md-menu&gt;

&lt;md-menu md-direction=&quot;bottom left&quot; md-size=&quot;4&quot;&gt;
  &lt;md-button class=&quot;md-icon-button&quot; md-menu-trigger&gt;
    &lt;md-icon&gt;near_me&lt;/md-icon&gt;
  &lt;/md-button&gt;

  &lt;md-menu-content&gt;
    &lt;md-menu-item&gt;
      &lt;span&gt;Find on map&lt;/span&gt;
      &lt;md-icon&gt;near_me&lt;/md-icon&gt;
    &lt;/md-menu-item&gt;

    &lt;md-menu-item&gt;
      &lt;span&gt;Call&lt;/span&gt;
      &lt;md-icon&gt;phone&lt;/md-icon&gt;
    &lt;/md-menu-item&gt;
  &lt;/md-menu-content&gt;
&lt;/md-menu&gt;
</code-block>
      </demo-example>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>

<style lang="scss" scoped>
  .md-menu {
    margin-right: 36px;
  }
</style>
