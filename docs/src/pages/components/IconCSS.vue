<template>
  <page-content page-title="Components - CSS Icon">
    <docs-component>
      <div slot="description">
        <p>A system icon, or UI icon, symbolizes a command, file, device, or directory. System icons are also used to represent common actions like trash, print, and save.</p>
        <p>Unlike standard icon, this version is intended for developers who knows how to use 3rd party css icons, giving the freedom to use any css-based icon framework available.</p>
        <p>Be aweare that not every css icon set harmonizes well with other icon frameworks, so whatch your steps when using more than one icon set!</p>
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
        <p>The following examples are using <a href="http://fontawesome.io/icon" target="_blank">font-awesome icons:</a></p>
        <!-- had a few trouble on making webpack accept font awesome therefore i'm using this cdn for the moment -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <example-box card-title="Default">
          <div slot="demo">
            <md-icon-css cls="fa fa-2x fa-home"></md-icon-css>&nbsp;
            <md-icon-css class="md-primary" cls="fa fa-2x fa-bars"></md-icon-css>&nbsp;
            <md-icon-css class="md-accent" cls="fa fa-2x fa-users"></md-icon-css>&nbsp;
            <md-icon-css class="md-warn" cls="fa fa-2x fa-clock-o"></md-icon-css>&nbsp;
          </div>

          <div slot="code">
            <code-block lang="xml">
            &lt;md-icon-css cls="fa fa-2x fa-home"&gt;&lt;/md-icon-css&gt;&nbsp;
            &lt;md-icon-css class="md-primary" cls="fa fa-2x fa-bars"&gt;&lt;/md-icon-css&gt;&nbsp;
            &lt;md-icon-css class="md-accent" cls="fa fa-2x fa-users"&gt;&lt;/md-icon-css&gt;&nbsp;
            &lt;md-icon-css class="md-warn" cls="fa fa-2x fa-clock-o"&gt;&lt;/md-icon-css&gt;&nbsp;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Themes">
          <div slot="demo">            
            <md-icon-css md-theme="light-blue" class="md-primary" cls="fa fa-2x fa-home"></md-icon-css>&nbsp;
            <md-icon-css md-theme="green" class="md-primary" cls="fa fa-2x fa-bars"></md-icon-css>&nbsp;
            <md-icon-css md-theme="brown" class="md-primary" cls="fa fa-2x fa-users"></md-icon-css>&nbsp;
            <md-icon-css md-theme="orange" class="md-primary" cls="fa fa-2x fa-clock-o"></md-icon-css>&nbsp;
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
