<template>
  <demo-page>
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
      <h2>Code</h2>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>

<script>
  export default {
    mounted() {
      this.$root.pageTitle = 'Icon';
    }
  };
</script>
