<template>
  <page-content page-title="Components - Avatar">
    <docs-component>
      <div slot="description">
        <p>Avatars can be used to represent people. When used with a specific logo, avatars can also be used to represent brand.</p>
        <p>The following classes can be applied to change the color palette:</p>
        <ul class="md-body-2">
          <li><code>md-primary</code></li>
          <li><code>md-accent</code></li>
          <li><code>md-warn</code></li>
        </ul>
      </div>

      <div slot="api">
        <api-table name="md-avatar">
          <md-table slot="classes">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>md-avatar-icon</md-table-cell>
                <md-table-cell>Display an icon using md-icon component</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-large</md-table-cell>
                <md-table-cell>Display large avatar</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div class="avatar-holder" slot="demo">
            <md-avatar>
              <img src="assets/avatar.png" alt="Avatar">
            </md-avatar>

            <md-avatar class="md-avatar-icon">
              <md-icon>home</md-icon>
            </md-avatar>

            <md-avatar class="md-avatar-icon md-primary">
              <md-icon>folder</md-icon>
            </md-avatar>

            <md-avatar class="md-avatar-icon md-accent">
              <md-icon>favorite</md-icon>
            </md-avatar>

            <md-avatar class="md-avatar-icon md-warn">
              <md-icon>notes</md-icon>
            </md-avatar>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-avatar&gt;
                &lt;img src=&quot;assets/avatar.png&quot; alt=&quot;Avatar&quot;&gt;
              &lt;/md-avatar&gt;

              &lt;md-avatar class=&quot;md-avatar-icon&quot;&gt;
                &lt;md-icon&gt;home&lt;/md-icon&gt;
              &lt;/md-avatar&gt;

              &lt;md-avatar class=&quot;md-avatar-icon md-primary&quot;&gt;
                &lt;md-icon&gt;folder&lt;/md-icon&gt;
              &lt;/md-avatar&gt;

              &lt;md-avatar class=&quot;md-avatar-icon md-accent&quot;&gt;
                &lt;md-icon&gt;favorite&lt;/md-icon&gt;
              &lt;/md-avatar&gt;

              &lt;md-avatar class=&quot;md-avatar-icon md-warn&quot;&gt;
                &lt;md-icon&gt;notes&lt;/md-icon&gt;
              &lt;/md-avatar&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Large">
          <div class="avatar-holder" slot="demo">
            <md-avatar class="md-large">
              <img src="assets/avatar-2.jpg" alt="People">
            </md-avatar>

            <md-avatar class="md-avatar-icon md-large">
              <md-icon>home</md-icon>
            </md-avatar>

            <md-avatar class="md-avatar-icon md-large md-primary">
              <md-icon>folder</md-icon>
            </md-avatar>

            <md-avatar class="md-avatar-icon md-large md-accent">
              <md-icon>favorite</md-icon>
            </md-avatar>

            <md-avatar class="md-avatar-icon md-large md-warn">
              <md-icon>notes</md-icon>
            </md-avatar>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-avatar class=&quot;md-large&quot;&gt;
                &lt;img src=&quot;assets/avatar-2.jpg&quot; alt=&quot;People&quot;&gt;
              &lt;/md-avatar&gt;

              &lt;md-avatar class=&quot;md-avatar-icon md-large&quot;&gt;
                &lt;md-icon&gt;home&lt;/md-icon&gt;
              &lt;/md-avatar&gt;

              &lt;md-avatar class=&quot;md-avatar-icon md-large md-primary&quot;&gt;
                &lt;md-icon&gt;folder&lt;/md-icon&gt;
              &lt;/md-avatar&gt;

              &lt;md-avatar class=&quot;md-avatar-icon md-large md-accent&quot;&gt;
                &lt;md-icon&gt;favorite&lt;/md-icon&gt;
              &lt;/md-avatar&gt;

              &lt;md-avatar class=&quot;md-avatar-icon md-large md-warn&quot;&gt;
                &lt;md-icon&gt;notes&lt;/md-icon&gt;
              &lt;/md-avatar&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="scss" scoped>
  .md-avatar + .md-avatar {
    margin-left: 8px;
  }
</style>
