<template>
  <demo-page label="Components - Avatar">
    <div slot="examples">
      <demo-example label="Default" size="2">
        <md-avatar>
          <img src="//placeimg.com/40/40/people/1" alt="People">
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
      </demo-example>

      <demo-example label="Large" size="2">
        <md-avatar class="md-large">
          <img src="//placeimg.com/64/64/people/2" alt="People">
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
      </demo-example>
    </div>

    <div slot="code">
      <demo-example label="Default">
        <code-block lang="xml">
&lt;md-avatar&gt;
  &lt;img src=&quot;//placeimg.com/40/40/people/1&quot; alt=&quot;People&quot;&gt;
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
      </demo-example>

      <demo-example label="Large">
        <code-block lang="xml">
&lt;md-avatar class=&quot;md-large&quot;&gt;
  &lt;img src=&quot;//placeimg.com/64/64/people/2&quot; alt=&quot;People&quot;&gt;
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
      </demo-example>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>
