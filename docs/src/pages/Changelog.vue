<template>
  <page-content page-title="Changelog">
    <div class="main-content changelog" v-html="content"></div>
  </page-content>
</template>

<style lang="scss">
  .changelog section {
    max-width: 960px;

    + section {
      margin-top: 56px;
    }

    .md-headline a {
      color: inherit;
    }

    ul a {
      font-weight: 700;
    }
  }
</style>

<script>
  export default {
    data: () => ({
      content: ''
    }),
    mounted() {
      const request = new XMLHttpRequest();
      const self = this;

      request.open('GET', '/changelog.html', true);
      request.setRequestHeader('Content-Type', 'text/html');
      request.onload = function() {
        self.content = this.response;
      };
      request.send();
    }
  };
</script>
