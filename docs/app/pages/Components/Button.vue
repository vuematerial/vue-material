<template>
  <page-container centered :title="$t('pages.button.title')">
    <code-example title="Buttons" label="HTML">
      <div slot="demo">
        <md-button>Button</md-button>
        <md-toolbar class="md-transparent">
          <div class="md-title">Toolbar</div>
        </md-toolbar>

        <md-toolbar>
          <div class="md-title">Toolbar</div>
        </md-toolbar>

        <md-toolbar class="md-primary md-elevation-2">
          <div class="md-title">Toolbar</div>
        </md-toolbar>

        <md-toolbar class="md-accent md-elevation-2">
          <div class="md-title">Toolbar</div>
        </md-toolbar>
      </div>

      <div slot="code">
        &lt;md-button&gt;Button&lt;/md-button&gt;
        &lt;md-toolbar class=&quot;md-transparent&quot;&gt;
          &lt;div class=&quot;md-title&quot;&gt;Toolbar&lt;/div&gt;
        &lt;/md-toolbar&gt;

        &lt;md-toolbar&gt;
          &lt;div class=&quot;md-title&quot;&gt;Toolbar&lt;/div&gt;
        &lt;/md-toolbar&gt;

        &lt;md-toolbar class=&quot;md-primary md-elevation-2&quot;&gt;
          &lt;div class=&quot;md-title&quot;&gt;Toolbar&lt;/div&gt;
        &lt;/md-toolbar&gt;

        &lt;md-toolbar class=&quot;md-accent md-elevation-2&quot;&gt;
          &lt;div class=&quot;md-title&quot;&gt;Toolbar&lt;/div&gt;
        &lt;/md-toolbar&gt;
      </div>
    </code-example>
  </page-container>
</template>

<style lang="scss" scoped>

</style>

<script>
  export default {
    name: 'Button'
  }
</script>
