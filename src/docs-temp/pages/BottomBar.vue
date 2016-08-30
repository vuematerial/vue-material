<template>
  <page-container>
    <div slot="example">
      <code-section title="Bottom Bar">
        <div class="cell-phone" v-md-theme="'teal'">
          <md-bottom-bar>
            <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="favorite" class="md-active">Favorites</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
          </md-bottom-bar>
        </div>
      </code-section>

      <code-section title="Bottom Bar Shifting">
        <div class="cell-phone" v-md-theme="'teal'">
          <md-bottom-bar md-shift>
            <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
            <md-bottom-bar-item class="md-active" md-icon="books">Books</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
          </md-bottom-bar>
        </div>
      </code-section>
    </div>

    <div slot="documentation">
      <code-example>
&lt;!-- Bottom Bar --&gt;
&lt;md-bottom-bar&gt;
  &lt;md-bottom-bar-item md-icon=&quot;history&quot;&gt;Recents&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;favorite&quot; class=&quot;md-active&quot;&gt;Favorites&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;near_me&quot;&gt;Nearby&lt;/md-bottom-bar-item&gt;
&lt;/md-bottom-bar&gt;

&lt;!-- Bottom Bar Shifting --&gt;
&lt;md-bottom-bar md-shift&gt;
  &lt;md-bottom-bar-item md-icon=&quot;ondemand_video&quot;&gt;Movies&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;music_note&quot;&gt;Music&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item class=&quot;md-active&quot; md-icon=&quot;books&quot;&gt;Books&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;photo&quot;&gt;Pictures&lt;/md-bottom-bar-item&gt;
&lt;/md-bottom-bar&gt;
      </code-example>
    </div>
  </page-container>
</template>

<style lang="scss" scoped>
  .cell-phone {
    background-color: #eee;
    border: 1px solid #ccc;
  }
</style>

<script>
  export default {
    ready() {
      this.$dispatch('pageTitle', 'Bottom Bar');
    }
  };
</script>
