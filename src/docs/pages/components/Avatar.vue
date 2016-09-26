<template>
  <demo-page>
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
      <h2>Code</h2>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>

<script>
  export default {
    mounted() {
      this.$root.pageTitle = 'Components - Avatar';
    }
  };
</script>
