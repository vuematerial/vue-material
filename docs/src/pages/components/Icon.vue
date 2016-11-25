<template>
  <page-content page-title="Components - Icon">
    <docs-component>
      <div slot="description">
        <p>A system icon, or UI icon, symbolizes a command, file, device, or directory. System icons are also used to represent common actions like trash, print, and save.</p>
        <p>You can see the full list of icons on the <a href="https://material.io/icons/" target="_blank" rel="noopener">Material Icons</a> website.</p>
        <p>The <code>&lt;md-icon&gt;</code> </p>
        <p>The following classes can be applied to change the color palette:</p>
        <ul class="md-body-2">
          <li><code>md-primary</code></li>
          <li><code>md-accent</code></li>
          <li><code>md-warn</code></li>
        </ul>
      </div>

      <div slot="api">
        <api-table name="md-icon">
          <p>No options available</p>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div slot="demo">
            <md-icon>home</md-icon>
            <md-icon class="md-primary">home</md-icon>
            <md-icon class="md-accent">home</md-icon>
            <md-icon class="md-warn">home</md-icon>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-icon&gt;home&lt;/md-icon&gt;
              &lt;md-icon class=&quot;md-primary&quot;&gt;home&lt;/md-icon&gt;
              &lt;md-icon class=&quot;md-accent&quot;&gt;home&lt;/md-icon&gt;
              &lt;md-icon class=&quot;md-warn&quot;&gt;home&lt;/md-icon&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Themes">
          <div slot="demo">
            <md-icon v-md-theme="'light-blue'" class="md-primary">home</md-icon>
            <md-icon v-md-theme="'green'" class="md-primary">home</md-icon>
            <md-icon v-md-theme="'brown'" class="md-primary">home</md-icon>
            <md-icon v-md-theme="'orange'" class="md-primary">home</md-icon>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-icon v-md-theme=&quot;&apos;light-blue&apos;&quot; class=&quot;md-primary&quot;&gt;home&lt;/md-icon&gt;
              &lt;md-icon v-md-theme=&quot;&apos;green&apos;&quot; class=&quot;md-primary&quot;&gt;home&lt;/md-icon&gt;
              &lt;md-icon v-md-theme=&quot;&apos;brown&apos;&quot; class=&quot;md-primary&quot;&gt;home&lt;/md-icon&gt;
              &lt;md-icon v-md-theme=&quot;&apos;orange&apos;&quot; class=&quot;md-primary&quot;&gt;home&lt;/md-icon&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="scss" scoped>

</style>




<!-- <template>
  <demo-page label="Components - Icon">
    <div slot="examples">
      <demo-example label="Default" size="2">
        <md-icon>home</md-icon>
        <md-icon class="md-primary">home</md-icon>
        <md-icon class="md-accent">home</md-icon>
        <md-icon class="md-warn">home</md-icon>
      </demo-example>

      <demo-example label="Themed" size="2">
        <md-icon v-md-theme="'light-blue'" class="md-primary">home</md-icon>
        <md-icon v-md-theme="'green'" class="md-primary">home</md-icon>
        <md-icon v-md-theme="'brown'" class="md-primary">home</md-icon>
        <md-icon v-md-theme="'orange'" class="md-primary">home</md-icon>
      </demo-example>
    </div>
  </demo-page>
</template> -->
