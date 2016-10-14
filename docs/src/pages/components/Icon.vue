<template>
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

    <div slot="code">
      <demo-example label="Default">
        <code-block lang="xml">
&lt;md-icon&gt;home&lt;/md-icon&gt;
&lt;md-icon class=&quot;md-primary&quot;&gt;home&lt;/md-icon&gt;
&lt;md-icon class=&quot;md-accent&quot;&gt;home&lt;/md-icon&gt;
&lt;md-icon class=&quot;md-warn&quot;&gt;home&lt;/md-icon&gt;
        </code-block>
      </demo-example>

      <demo-example label="Themed">
        <code-block lang="xml">
&lt;md-icon v-md-theme=&quot;&#039;light-blue&#039;&quot; class=&quot;md-primary&quot;&gt;home&lt;/md-icon&gt;
&lt;md-icon v-md-theme=&quot;&#039;green&#039;&quot; class=&quot;md-primary&quot;&gt;home&lt;/md-icon&gt;
&lt;md-icon v-md-theme=&quot;&#039;brown&#039;&quot; class=&quot;md-primary&quot;&gt;home&lt;/md-icon&gt;
&lt;md-icon v-md-theme=&quot;&#039;orange&#039;&quot; class=&quot;md-primary&quot;&gt;home&lt;/md-icon&gt;
        </code-block>
      </demo-example>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>
