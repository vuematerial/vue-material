<template>
  <demo-page label="Components - Ripple">
    <div slot="examples">
      <demo-example label="Default">
        <span class="has-ripple" v-md-ink-ripple>This span has ripple effect</span>
        <span class="has-ripple green" v-md-ink-ripple>This span has ripple effect</span>
        <span class="has-ripple blue" v-md-ink-ripple>This span has ripple effect</span>

        <div>
          <md-avatar v-md-ink-ripple>
            <img src="//placeimg.com/40/40/people/1" alt="People">
          </md-avatar>

          <md-avatar v-md-ink-ripple class="md-avatar-icon">
            <md-icon>home</md-icon>
          </md-avatar>
        </div>
      </demo-example>
    </div>

    <div slot="code">
      <demo-example label="Default">
        <code-block lang="xml">
&lt;span class=&quot;has-ripple&quot; v-md-ink-ripple&gt;This span has ripple effect&lt;/span&gt;
&lt;span class=&quot;has-ripple green&quot; v-md-ink-ripple&gt;This span has ripple effect&lt;/span&gt;
&lt;span class=&quot;has-ripple blue&quot; v-md-ink-ripple&gt;This span has ripple effect&lt;/span&gt;

&lt;div&gt;
  &lt;md-avatar v-md-ink-ripple&gt;
    &lt;img src=&quot;//placeimg.com/40/40/people/1&quot; alt=&quot;People&quot;&gt;
  &lt;/md-avatar&gt;

  &lt;md-avatar v-md-ink-ripple class=&quot;md-avatar-icon&quot;&gt;
    &lt;md-icon&gt;home&lt;/md-icon&gt;
  &lt;/md-avatar&gt;
&lt;/div&gt;
        </code-block>
      </demo-example>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>

<style lang="scss" scoped>
  .has-ripple {
    margin-bottom: 16px;
    padding: 16px;
    position: relative;
  }

  span {
    display: inline-block;
  }

  .blue {
    color: #2196F3;
  }

  .green {
    color: #4CAF50;
  }
</style>
