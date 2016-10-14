<template>
  <demo-page label="Components - Tooltip">
    <div slot="examples">
      <demo-example label="Default">
        <div>
          <md-button class="md-icon-button md-raised md-primary">
            <md-icon>folder</md-icon>
            <md-tooltip md-direction="top">My tooltip</md-tooltip>
          </md-button>

          <md-avatar>
            <img src="https://placeimg.com/40/40/people/1" alt="People">
            <md-tooltip md-direction="bottom">My tooltip</md-tooltip>
          </md-avatar>
        </div>

        <div>
          <md-button class="md-icon-button md-raised md-warn">
            <md-icon>home</md-icon>
            <md-tooltip md-direction="left">My tooltip</md-tooltip>
          </md-button>

          <md-avatar class="md-avatar-icon">
            <md-icon>person</md-icon>
            <md-tooltip md-direction="right">My tooltip</md-tooltip>
          </md-avatar>
        </div>
      </demo-example>

      <demo-example label="Delay - 400ms">
        <div>
          <md-button class="md-icon-button md-raised md-primary">
            <md-icon>folder</md-icon>
            <md-tooltip md-delay="400" md-direction="top">My tooltip</md-tooltip>
          </md-button>

          <md-avatar>
            <img src="https://placeimg.com/40/40/people/1" alt="People">
            <md-tooltip md-delay="400" md-direction="bottom">My tooltip</md-tooltip>
          </md-avatar>
        </div>

        <div>
          <md-button class="md-icon-button md-raised md-warn">
            <md-icon>home</md-icon>
            <md-tooltip md-delay="400" md-direction="left">My tooltip</md-tooltip>
          </md-button>

          <md-avatar class="md-avatar-icon">
            <md-icon>person</md-icon>
            <md-tooltip md-delay="400" md-direction="right">My tooltip</md-tooltip>
          </md-avatar>
        </div>
      </demo-example>
    </div>

    <div slot="code">
      <demo-example label="Default">
        <code-block lang="xml">
&lt;md-button class=&quot;md-icon-button md-raised md-primary&quot;&gt;
  &lt;md-icon&gt;folder&lt;/md-icon&gt;
  &lt;md-tooltip md-direction=&quot;top&quot;&gt;My tooltip&lt;/md-tooltip&gt;
&lt;/md-button&gt;

&lt;md-avatar&gt;
  &lt;img src=&quot;https://placeimg.com/40/40/people/1&quot; alt=&quot;People&quot;&gt;
  &lt;md-tooltip md-direction=&quot;bottom&quot;&gt;My tooltip&lt;/md-tooltip&gt;
&lt;/md-avatar&gt;

&lt;md-button class=&quot;md-icon-button md-raised md-warn&quot;&gt;
  &lt;md-icon&gt;home&lt;/md-icon&gt;
  &lt;md-tooltip md-direction=&quot;left&quot;&gt;My tooltip&lt;/md-tooltip&gt;
&lt;/md-button&gt;

&lt;md-avatar class=&quot;md-avatar-icon&quot;&gt;
  &lt;md-icon&gt;person&lt;/md-icon&gt;
  &lt;md-tooltip md-direction=&quot;right&quot;&gt;My tooltip&lt;/md-tooltip&gt;
&lt;/md-avatar&gt;
        </code-block>
      </demo-example>

      <demo-example label="Delay - 400ms">
        <code-block lang="xml">
&lt;md-button class=&quot;md-icon-button md-raised md-primary&quot;&gt;
  &lt;md-icon&gt;folder&lt;/md-icon&gt;
  &lt;md-tooltip md-delay=&quot;400&quot; md-direction=&quot;top&quot;&gt;My tooltip&lt;/md-tooltip&gt;
&lt;/md-button&gt;

&lt;md-avatar&gt;
  &lt;img src=&quot;https://placeimg.com/40/40/people/1&quot; alt=&quot;People&quot;&gt;
  &lt;md-tooltip md-delay=&quot;400&quot; md-direction=&quot;bottom&quot;&gt;My tooltip&lt;/md-tooltip&gt;
&lt;/md-avatar&gt;

&lt;md-button class=&quot;md-icon-button md-raised md-warn&quot;&gt;
  &lt;md-icon&gt;home&lt;/md-icon&gt;
  &lt;md-tooltip md-delay=&quot;400&quot; md-direction=&quot;left&quot;&gt;My tooltip&lt;/md-tooltip&gt;
&lt;/md-button&gt;

&lt;md-avatar class=&quot;md-avatar-icon&quot;&gt;
  &lt;md-icon&gt;person&lt;/md-icon&gt;
  &lt;md-tooltip md-delay=&quot;400&quot; md-direction=&quot;right&quot;&gt;My tooltip&lt;/md-tooltip&gt;
&lt;/md-avatar&gt;
        </code-block>
      </demo-example>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>

<style lang="scss" scoped>
  .md-button,
  .md-avatar {
    margin: 24px;
  }
</style>
