<template>
  <page-content page-title="Components - Icon">
    <docs-component>
      <div slot="description">
        <p>A system icon, or UI icon, symbolizes a command, file, device, or directory. System icons are also used to represent common actions like trash, print, and save.</p>
        <p>You can see the full list of icons on the <a href="https://material.io/icons/" target="_blank" rel="noopener">Material Icons</a> website. Replace the spaces in the icon name by underscores (for example, <code>arrow back</code> becomes <code>arrow_back</code>).</p>
        <p>Alternatively you can use your PNG or SVG icons using the <code>md-src</code> property.</p>

        <p>The following classes can be applied to change the color palette:</p>
        <ul class="md-body-2">
          <li><code>md-primary</code></li>
          <li><code>md-accent</code></li>
          <li><code>md-warn</code></li>
        </ul>
      </div>

      <div slot="api">
        <api-table name="md-icon">
          <md-table slot="classes">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>md-size-{type}</md-table-cell>
                <md-table-cell>Change the size of an icon. From 2x to 5x. Example: md-size-3x</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>

          <md-table slot="properties">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Type</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>md-src</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The src of the image file. Can be SVG icons too!</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Google Font">
          <div slot="demo">
            <md-icon>home</md-icon>
            <md-icon class="md-primary">menu</md-icon>
            <md-icon class="md-accent">people</md-icon>
            <md-icon class="md-warn">access_time</md-icon>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-icon&gt;home&lt;/md-icon&gt;
              &lt;md-icon class=&quot;md-primary&quot;&gt;menu&lt;/md-icon&gt;
              &lt;md-icon class=&quot;md-accent&quot;&gt;people&lt;/md-icon&gt;
              &lt;md-icon class=&quot;md-warn&quot;&gt;access_time&lt;/md-icon&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Sizes">
          <div slot="demo">
            <md-icon>home</md-icon>
            <md-icon class="md-size-2x md-primary">home</md-icon>
            <md-icon class="md-size-3x md-accent">home</md-icon>
            <md-icon class="md-size-4x md-warn">home</md-icon>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-icon&gt;home&lt;/md-icon&gt;
              &lt;md-icon class=&quot;md-size-2x md-primary&quot;&gt;home&lt;/md-icon&gt;
              &lt;md-icon class=&quot;md-size-3x md-accent&quot;&gt;home&lt;/md-icon&gt;
              &lt;md-icon class=&quot;md-size-4x md-warn&quot;&gt;home&lt;/md-icon&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Images">
          <div slot="demo">
            <md-layout :md-gutter="true">
              <md-layout>
                <strong class="md-body-2">SVG:</strong>
                <md-icon md-src="assets/icon-home.svg"></md-icon>
                <md-icon class="md-size-2x md-primary" md-src="assets/icon-home.svg"></md-icon>
                <md-icon class="md-size-3x md-accent" md-src="assets/icon-home.svg"></md-icon>
                <md-icon class="md-size-4x md-warn" md-src="assets/icon-home.svg"></md-icon>
              </md-layout>

              <md-layout>
                <strong class="md-body-2">PNG:</strong>
                <md-icon md-src="assets/icon-menu.png">menu</md-icon>
                <md-icon class="md-size-2x" md-src="assets/icon-menu.png">menu</md-icon>
                <md-icon class="md-size-3x" md-src="assets/icon-menu.png">menu</md-icon>
                <md-icon class="md-size-4x" md-src="assets/icon-menu.png">menu</md-icon>
              </md-layout>
            </md-layout>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-layout :md-gutter=&quot;true&quot;&gt;
                &lt;md-layout&gt;
                  &lt;strong class=&quot;md-body-2&quot;&gt;SVG:&lt;/strong&gt;
                  &lt;md-icon md-src=&quot;assets/icon-home.svg&quot;&gt;&lt;/md-icon&gt;
                  &lt;md-icon class=&quot;md-size-2x md-primary&quot; md-src=&quot;assets/icon-home.svg&quot;&gt;&lt;/md-icon&gt;
                  &lt;md-icon class=&quot;md-size-3x md-accent&quot; md-src=&quot;assets/icon-home.svg&quot;&gt;&lt;/md-icon&gt;
                  &lt;md-icon class=&quot;md-size-4x md-warn&quot; md-src=&quot;assets/icon-home.svg&quot;&gt;&lt;/md-icon&gt;
                &lt;/md-layout&gt;

                &lt;md-layout&gt;
                  &lt;strong class=&quot;md-body-2&quot;&gt;PNG:&lt;/strong&gt;
                  &lt;md-icon md-src=&quot;assets/icon-menu.png&quot;&gt;menu&lt;/md-icon&gt;
                  &lt;md-icon class=&quot;md-size-2x&quot; md-src=&quot;assets/icon-menu.png&quot;&gt;menu&lt;/md-icon&gt;
                  &lt;md-icon class=&quot;md-size-3x&quot; md-src=&quot;assets/icon-menu.png&quot;&gt;menu&lt;/md-icon&gt;
                  &lt;md-icon class=&quot;md-size-4x&quot; md-src=&quot;assets/icon-menu.png&quot;&gt;menu&lt;/md-icon&gt;
                &lt;/md-layout&gt;
              &lt;/md-layout&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Themes">
          <div slot="demo">
            <md-icon md-theme="light-blue" class="md-primary">home</md-icon>
            <md-icon md-theme="green" class="md-primary">menu</md-icon>
            <md-icon md-theme="brown" class="md-primary">people</md-icon>
            <md-icon md-theme="orange" class="md-primary">access_time</md-icon>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-icon md-theme=&quot;light-blue&quot; class=&quot;md-primary&quot;&gt;home&lt;/md-icon&gt;
              &lt;md-icon md-theme=&quot;green&quot; class=&quot;md-primary&quot;&gt;menu&lt;/md-icon&gt;
              &lt;md-icon md-theme=&quot;brown&quot; class=&quot;md-primary&quot;&gt;people&lt;/md-icon&gt;
              &lt;md-icon md-theme=&quot;orange&quot; class=&quot;md-primary&quot;&gt;access_time&lt;/md-icon&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="sass" scoped>
  strong {
    margin: auto 16px auto 0;
    display: inline-block;
  }
</style>
