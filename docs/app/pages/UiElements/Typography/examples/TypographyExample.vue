<template>
  <div>
    <span class="md-display-4">Display 4</span>
    <span class="md-display-3">Display 3</span>
    <span class="md-display-2">Display 2</span>
    <span class="md-display-1">Display 1</span>
    <span class="md-headline">Headline</span>
    <span class="md-title">Title</span>
    <span class="md-subheading">Subheading</span>
    <span class="md-body-2">Body 2</span>
    <span class="md-body-1">Body 1</span>
    <span class="md-caption">Caption</span>
    <router-link to="/ui-elements/typography">Links</router-link>
    <md-button>Buttons</md-button>
  </div>
</template>

<script>
  export default {
    name: 'TypographyExample'
  }
</script>

<style lang="scss" scoped>
  div > * {
    margin: .5em 0;
    display: block;
  }
</style>
