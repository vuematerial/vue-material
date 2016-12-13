<template>
  <page-content page-title="Components - Icon">
    <docs-component>
      <div slot="description">
        <p>A system icon, or UI icon, symbolizes a command, file, device, or directory. System icons are also used to represent common actions like trash, print, and save.</p>
        <p>You can see the full list of icons on the <a href="https://material.io/icons/" target="_blank" rel="noopener">Material Icons</a> website.</p>
        <p>The <code>&lt;md-icon&gt;</code></p>
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
            <md-icon md-theme="light-blue" class="md-primary">home</md-icon>
            <md-icon md-theme="green" class="md-primary">home</md-icon>
            <md-icon md-theme="brown" class="md-primary">home</md-icon>
            <md-icon md-theme="orange" class="md-primary">home</md-icon>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-icon md-theme=&quot;light-blue&quot; class=&quot;md-primary&quot;&gt;home&lt;/md-icon&gt;
              &lt;md-icon md-theme=&quot;green&quot; class=&quot;md-primary&quot;&gt;home&lt;/md-icon&gt;
              &lt;md-icon md-theme=&quot;brown&quot; class=&quot;md-primary&quot;&gt;home&lt;/md-icon&gt;
              &lt;md-icon md-theme=&quot;orange&quot; class=&quot;md-primary&quot;&gt;home&lt;/md-icon&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>
