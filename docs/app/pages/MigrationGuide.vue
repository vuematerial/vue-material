<template>
  <page-container centered :title="$t('pages.about.title')">
    <section class="page-container-section">
      <h2 class="md-headline">Migration Guide</h2>
      <strong>A migration guide from 0.8.1 to 1.0.0</strong>
      <p>When coming from 0.8.1 you'll notice thatn Vue Material changed a lot. This is due a hard rewrite of all codebase to make the framework way smarter and easier to work.</p>
      <note-block>The old documentation is still available, but once Vue Material reach his 1.0, the 0.8.1 version will be discontinued.</note-block>
      <p>The main entry points that changed was:</p>
      <ul>
        <li>Theme Engine</li>
        <li>Ripple</li>
        <li>Sidenav</li>
        <li>Form Field</li>
        <li>Table</li>
      </ul>

      <p>On this guide you'll see which Core Features, Components and UI Elements have changed.</p>
      <p>
        Legend:

        <div><strong class="flag new">New</strong> is a new feature from Vue Material</div>
        <div><strong class="flag new-api">New API</strong> is a resource that was recreated and have a whole new API</div>
        <div><strong class="flag removed">Removed</strong> means that the item is not going to be part of Vue Material ecosystem anymore (and should be done on "userland")</div>
        <div><strong class="flag delayed">Delayed</strong> have been delayed to post 1.0 version.</div>
      </p>
    </section>

    <section class="page-container-section">
      <h2 class="md-headline">Components</h2>
      <p>Here is a list of all components that have differences between the versions:</p>
    </section>

    <section class="page-container-section">
      <h3 class="md-title">
        <span>Autocomplete</span>
        <strong class="flag new-api">New API</strong>
      </h3>
      <p>Autocomplete was completely recreated. It now have way more options to be customized.</p>
    </section>
  </page-container>
</template>

<script>
  export default {
    name: 'MigrationGuide'
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/theme/engine";

  .flag {
    padding: 4px;
    display: inline-block;
    border-radius: 2px;
    font-size: 11px;
    line-height: 1em;
    text-transform: uppercase;
    vertical-align: middle;

    &.new {
      background: md-get-palette-color(green, 500);
      color: #fff;
    }

    &.new-api {
      background: md-get-palette-color(blue, 500);
      color: #fff;
    }

    &.removed {
      background: md-get-palette-color(red, 500);
      color: #fff;
    }

    &.delayed {
      background: md-get-palette-color(orange, 500);
      color: #000;
    }
  }
</style>
