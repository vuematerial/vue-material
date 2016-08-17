<template>
  <page-container>
    <div slot="example">
      <code-section title="Avatar with image">
        <md-avatar>
          <img src="//placeimg.com/40/40/people/1" alt="People">
        </md-avatar>

        <md-avatar class="md-large">
          <img src="//placeimg.com/64/64/people/2" alt="People">
        </md-avatar>
      </code-section>

      <code-section title="Avatar with icons">
        <md-avatar class="md-avatar-icon">
          <md-icon>home</md-icon>
        </md-avatar>

        <md-avatar class="md-avatar-icon md-large">
          <md-icon>folder</md-icon>
        </md-avatar>
      </code-section>
    </div>

    <div slot="documentation">
      <code-example>
&lt;!-- Avatar with image --&gt;
&lt;md-avatar&gt;
  &lt;img src=&quot;//placeimg.com/40/40/people/1&quot; alt=&quot;People&quot;&gt;
&lt;/md-avatar&gt;

&lt;md-avatar class=&quot;md-large&quot;&gt;
  &lt;img src=&quot;//placeimg.com/64/64/people/2&quot; alt=&quot;People&quot;&gt;
&lt;/md-avatar&gt;

&lt;!-- Avatar with icons --&gt;
&lt;md-avatar class=&quot;md-avatar-icon&quot;&gt;
  &lt;md-icon&gt;home&lt;/md-icon&gt;
&lt;/md-avatar&gt;

&lt;md-avatar class=&quot;md-avatar-icon md-large&quot;&gt;
  &lt;md-icon&gt;folder&lt;/md-icon&gt;
&lt;/md-avatar&gt;
      </code-example>
    </div>
  </page-container>
</template>

<script>
  export default {
    ready() {
      this.$dispatch('pageTitle', 'Avatar');
    }
  };
</script>
