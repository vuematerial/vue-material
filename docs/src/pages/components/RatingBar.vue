<template>
  <page-content page-title="Components - Rating Bar">
    <docs-component>
      <div slot="description">
        <p>Rating Bar can be used to show a rating to user or capture a rating from user.</p>
        <p>The following classes can be applied to change the color palette:</p>
        <ul class="md-body-2">
          <li><code>md-primary</code></li>
          <li><code>md-accent</code></li>
          <li><code>md-warn</code></li>
        </ul>
      </div>

      <div slot="api">
        <api-table name="md-radio">
          <md-table slot="properties">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Type</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>v-model</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>A required model object to bind the value. The value is limited by range [0, 1].</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-num-stars</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Number of the stars. Default <code>5</code>.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-front-icon</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The font icon used to represent full star. Default <code>star</code>.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-back-icon</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The font icon used to represent empty star. Default <code>star</code>.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>disabled</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Disable the rating and prevent his actions. Default <code>false</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>

          <md-table slot="events">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Value</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>change</md-table-cell>
                <md-table-cell>Receive the new rating</md-table-cell>
                <md-table-cell>Triggered when the rating changes his value by user interaction.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div slot="demo">
              <md-rating-bar v-model="rating1" disabled></md-rating-bar>
              <md-rating-bar v-model="rating2" :md-num-stars="10" disabled></md-rating-bar>
              <md-rating-bar v-model="rating3" :md-num-stars="7" class="md-primary" disabled></md-rating-bar>
              <md-rating-bar v-model="rating4" :md-num-stars="7" class="md-accent" disabled></md-rating-bar>
              <md-rating-bar v-model="rating5" :md-num-stars="7" class="md-warn" disabled></md-rating-bar>
              <md-rating-bar v-model="rating6" :md-num-stars="7" class="md-primary" :md-back-icon="'star_border'"></md-rating-bar>
              <md-rating-bar v-model="rating7" :md-num-stars="5" class="md-warn" :md-back-icon="'panorama_fish_eye'" :md-front-icon="'lens'"></md-rating-bar>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-rating-bar v-model="rating1" disabled&gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating2" :md-num-stars="10" disabled&gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating3" :md-num-stars="7" class="md-primary" disabled&gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating4" :md-num-stars="7" class="md-accent" disabled&gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating5" :md-num-stars="7" class="md-warn" disabled&gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating6" :md-num-stars="7" class="md-primary" :md-back-icon="'star_border'"&gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating7" :md-num-stars="5" class="md-warn" :md-back-icon="'panorama_fish_eye'" :md-front-icon="'lens'"&gt;&lt;/md-rating-bar&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Themes">
          <div slot="demo">
              <md-rating-bar v-model="rating8" class="md-primary" md-theme="orange" disabled></md-rating-bar>
              <md-rating-bar v-model="rating9" class="md-primary" md-theme="brown" disabled></md-rating-bar>
              <md-rating-bar v-model="rating10" class="md-primary" md-theme="light-blue"></md-rating-bar>
              <md-rating-bar v-model="rating11" class="md-primary" md-theme="teal" :md-back-icon="'star_border'"></md-rating-bar>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-rating-bar v-model="rating8" class="md-primary" md-theme="orange" disabled&gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating9" class="md-primary" md-theme="brown" disabled&gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating10" class="md-primary" md-theme="light-blue"&gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating11" class="md-primary" md-theme="teal" :md-back-icon="'star_border'"&gt;&lt;/md-rating-bar&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<script>
  export default {
    data() {
      return {
        rating1: 0.70,
        rating2: 0.6,
        rating3: 0.2,
        rating4: 0.84,
        rating5: 0.7,
        rating6: 0.5,
        rating7: 0.90,
        rating8: 0.9,
        rating9: 0.18,
        rating10: 0.45,
        rating11: 0.82
      };
    }
  };
</script>
