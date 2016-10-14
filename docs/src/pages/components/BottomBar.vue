<template>
  <demo-page label="Components - Bottom Bar">
    <div slot="examples">
      <demo-example label="Default">
        <div class="phone-viewport">
          <md-bottom-bar>
            <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
          </md-bottom-bar>
        </div>
      </demo-example>

      <demo-example label="Shifting">
        <div class="phone-viewport">
          <md-bottom-bar md-shift>
            <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
          </md-bottom-bar>
        </div>

        <div class="phone-viewport">
          <md-bottom-bar class="md-accent" md-shift>
            <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
          </md-bottom-bar>
        </div>

        <div class="phone-viewport">
          <md-bottom-bar class="md-warn" md-shift>
            <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
          </md-bottom-bar>
        </div>

        <div class="phone-viewport">
          <md-bottom-bar class="md-transparent" md-shift>
            <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
          </md-bottom-bar>
        </div>
      </demo-example>

      <demo-example label="Themed">
        <div class="phone-viewport">
          <md-bottom-bar v-md-theme="'indigo'">
            <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
          </md-bottom-bar>
        </div>

        <div class="phone-viewport">
          <md-bottom-bar v-md-theme="'orange'">
            <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
          </md-bottom-bar>
        </div>

        <div class="phone-viewport">
          <md-bottom-bar md-shift v-md-theme="'green'">
            <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
          </md-bottom-bar>
        </div>

        <div class="phone-viewport">
          <md-bottom-bar md-shift v-md-theme="'brown'">
            <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
          </md-bottom-bar>
        </div>
      </demo-example>

      <demo-example label="Dynamic Theme">
        <div class="phone-viewport">
          <md-bottom-bar md-shift v-md-theme="playground.theme">
            <md-bottom-bar-item @click="setTheme('blue')" md-icon="ondemand_video">Movies</md-bottom-bar-item>
            <md-bottom-bar-item @click="setTheme('teal')" md-icon="music_note">Music</md-bottom-bar-item>
            <md-bottom-bar-item @click="setTheme('brown')" md-icon="books" md-active>Books</md-bottom-bar-item>
            <md-bottom-bar-item @click="setTheme('indigo')" md-icon="photo">Pictures</md-bottom-bar-item>
          </md-bottom-bar>
        </div>
      </demo-example>
    </div>

    <div slot="code">
      <demo-example label="Default">
        <code-block lang="xml">
&lt;md-bottom-bar&gt;
  &lt;md-bottom-bar-item md-icon=&quot;history&quot;&gt;Recents&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;favorite&quot; md-active&gt;Favorites&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;near_me&quot;&gt;Nearby&lt;/md-bottom-bar-item&gt;
&lt;/md-bottom-bar&gt;
        </code-block>
      </demo-example>

      <demo-example label="Shifting">
        <code-block lang="xml">
&lt;md-bottom-bar md-shift&gt;
  &lt;md-bottom-bar-item md-icon=&quot;ondemand_video&quot;&gt;Movies&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;music_note&quot;&gt;Music&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;books&quot; md-active&gt;Books&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;photo&quot;&gt;Pictures&lt;/md-bottom-bar-item&gt;
&lt;/md-bottom-bar&gt;
        </code-block>

        <code-block lang="xml">
&lt;md-bottom-bar class=&quot;md-accent&quot; md-shift&gt;
  &lt;md-bottom-bar-item md-icon=&quot;ondemand_video&quot;&gt;Movies&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;music_note&quot;&gt;Music&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;books&quot; md-active&gt;Books&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;photo&quot;&gt;Pictures&lt;/md-bottom-bar-item&gt;
&lt;/md-bottom-bar&gt;
        </code-block>

        <code-block lang="xml">
&lt;md-bottom-bar class=&quot;md-warn&quot; md-shift&gt;
  &lt;md-bottom-bar-item md-icon=&quot;ondemand_video&quot;&gt;Movies&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;music_note&quot;&gt;Music&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;books&quot; md-active&gt;Books&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;photo&quot;&gt;Pictures&lt;/md-bottom-bar-item&gt;
&lt;/md-bottom-bar&gt;
        </code-block>

        <code-block lang="xml">
&lt;md-bottom-bar class=&quot;md-transparent&quot; md-shift&gt;
  &lt;md-bottom-bar-item md-icon=&quot;ondemand_video&quot;&gt;Movies&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;music_note&quot;&gt;Music&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;books&quot; md-active&gt;Books&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;photo&quot;&gt;Pictures&lt;/md-bottom-bar-item&gt;
&lt;/md-bottom-bar&gt;
        </code-block>
      </demo-example>

      <demo-example label="Themed">
        <code-block lang="xml">
&lt;md-bottom-bar v-md-theme=&quot;&#039;indigo&#039;&quot;&gt;
  &lt;md-bottom-bar-item md-icon=&quot;history&quot;&gt;Recents&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;favorite&quot; md-active&gt;Favorites&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;near_me&quot;&gt;Nearby&lt;/md-bottom-bar-item&gt;
&lt;/md-bottom-bar&gt;
        </code-block>

        <code-block lang="xml">
&lt;md-bottom-bar v-md-theme=&quot;&#039;orange&#039;&quot;&gt;
  &lt;md-bottom-bar-item md-icon=&quot;history&quot;&gt;Recents&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;favorite&quot; md-active&gt;Favorites&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;near_me&quot;&gt;Nearby&lt;/md-bottom-bar-item&gt;
&lt;/md-bottom-bar&gt;
        </code-block>

        <code-block lang="xml">
&lt;md-bottom-bar md-shift v-md-theme=&quot;&#039;green&#039;&quot;&gt;
  &lt;md-bottom-bar-item md-icon=&quot;ondemand_video&quot;&gt;Movies&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;music_note&quot;&gt;Music&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;books&quot; md-active&gt;Books&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;photo&quot;&gt;Pictures&lt;/md-bottom-bar-item&gt;
&lt;/md-bottom-bar&gt;
        </code-block>

        <code-block lang="xml">
&lt;md-bottom-bar md-shift v-md-theme=&quot;&#039;brown&#039;&quot;&gt;
  &lt;md-bottom-bar-item md-icon=&quot;ondemand_video&quot;&gt;Movies&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;music_note&quot;&gt;Music&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;books&quot; md-active&gt;Books&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item md-icon=&quot;photo&quot;&gt;Pictures&lt;/md-bottom-bar-item&gt;
&lt;/md-bottom-bar&gt;
        </code-block>
      </demo-example>

      <demo-example label="Dynamic Theme">
        <code-block lang="xml">
&lt;md-bottom-bar md-shift v-md-theme=&quot;playground.theme&quot;&gt;
  &lt;md-bottom-bar-item @click=&quot;setTheme(&#039;blue&#039;)&quot; md-icon=&quot;ondemand_video&quot;&gt;Movies&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item @click=&quot;setTheme(&#039;teal&#039;)&quot; md-icon=&quot;music_note&quot;&gt;Music&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item @click=&quot;setTheme(&#039;brown&#039;)&quot; md-icon=&quot;books&quot; md-active&gt;Books&lt;/md-bottom-bar-item&gt;
  &lt;md-bottom-bar-item @click=&quot;setTheme(&#039;indigo&#039;)&quot; md-icon=&quot;photo&quot;&gt;Pictures&lt;/md-bottom-bar-item&gt;
&lt;/md-bottom-bar&gt;
        </code-block>

        <code-block lang="javascript">
export default {
  data() {
    return {
      playground: {
        theme: 'brown'
      }
    };
  },
  methods: {
    setTheme(theme) {
      this.playground.theme = theme;
    }
  }
};
        </code-block>
      </demo-example>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>

<style lang="scss" scoped>
  .md-bottom-bar {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .phone-viewport {
    width: 320px;
    height: 480px;
    margin-right: 16px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    background-color: darken(#fafafa, 5%);
  }
</style>

<script>
  export default {
    data() {
      return {
        playground: {
          theme: 'brown'
        }
      };
    },
    methods: {
      setTheme(theme) {
        this.playground.theme = theme;
      }
    }
  };
</script>
