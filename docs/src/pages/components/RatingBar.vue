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
        <api-table name="md-rating-bar">
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
                <md-table-cell>A required model object to bind the value. The value is limited by range [0, <code>md-max-rating</code>].</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-max-rating</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Max rating allowed. Default <code>5</code>.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-full-icon</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The icon used to represent full star. Can be a material icon from google font or src of the image file (svg or png). Default <code>star</code>.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-empty-icon</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The icon used to represent empty star. Can be a material icon from google font or src of the image file (svg or png). Default <code>star</code>.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-full-iconset</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The font icon set used on full star. Example: <code>md-iconset="fa fa-heart"</code> for font awesome.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-empty-iconset</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The font icon set used on empty star. Example: <code>md-iconset="fa fa-heart-o"</code> for font awesome.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-icon-size</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Change the icon size. From 1 to 5, it corresponds the 1x to 5x of the md-size-{type} class in md-icon, where in 1x, the icon has <code>24px</code>. Default <code>1</code>.</md-table-cell>
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
              <md-table-row>
                <md-table-cell>hover</md-table-cell>
                <md-table-cell>Receive the pointer rating</md-table-cell>
                <md-table-cell>Triggered when the user points over a new rating.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div slot="demo">
              <md-rating-bar v-model="rating1" disabled></md-rating-bar>
              <md-rating-bar v-model="rating2" :md-max-rating="10" disabled></md-rating-bar>
              <md-rating-bar v-model="rating3" :md-max-rating="7" class="md-primary" disabled></md-rating-bar>
              <md-rating-bar v-model="rating4" :md-max-rating="7" class="md-accent" disabled></md-rating-bar>
              <md-rating-bar v-model="rating5" :md-max-rating="7" class="md-warn" disabled></md-rating-bar>
              <md-rating-bar v-model="rating6" :md-max-rating="7" class="md-primary" :md-empty-icon="'star_border'"></md-rating-bar>
              <md-rating-bar v-model="rating7" :md-max-rating="5" class="md-warn" :md-empty-icon="'panorama_fish_eye'" :md-full-icon="'lens'"></md-rating-bar>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-rating-bar v-model="rating1" disabled&gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating2" :md-max-rating="10" disabled&gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating3" :md-max-rating="7" class="md-primary" disabled&gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating4" :md-max-rating="7" class="md-accent" disabled&gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating5" :md-max-rating="7" class="md-warn" disabled&gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating6" :md-max-rating="7" class="md-primary" :md-empty-icon="'star_border'"&gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating7" :md-max-rating="5" class="md-warn" :md-empty-icon="'panorama_fish_eye'" :md-full-icon="'lens'"&gt;&lt;/md-rating-bar&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Themes">
          <div slot="demo">
              <md-rating-bar v-model="rating8" class="md-primary" md-theme="orange" disabled></md-rating-bar>
              <md-rating-bar v-model="rating9" class="md-primary" md-theme="brown" disabled></md-rating-bar>
              <md-rating-bar v-model="rating10" class="md-primary" md-theme="light-blue"></md-rating-bar>
              <md-rating-bar v-model="rating11" class="md-primary" md-theme="teal" :md-empty-icon="'star_border'"></md-rating-bar>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-rating-bar v-model="rating8" class="md-primary" md-theme="orange" disabled&gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating9" class="md-primary" md-theme="brown" disabled&gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating10" class="md-primary" md-theme="light-blue"&gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating11" class="md-primary" md-theme="teal" :md-empty-icon="'star_border'"&gt;&lt;/md-rating-bar&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Sizes">
          <div slot="demo">
            <md-rating-bar v-model="rating12" ></md-rating-bar>
            <md-rating-bar v-model="rating12" :md-icon-size="2" ></md-rating-bar>
            <md-rating-bar v-model="rating12" :md-icon-size="3" ></md-rating-bar>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-rating-bar v-model="rating12" &gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating12" :md-icon-size="2" &gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating12" :md-icon-size="3" &gt;&lt;/md-rating-bar&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Images">
          <div slot="demo">
            <md-layout :md-gutter="true">
              <md-layout>
                <strong class="md-body-2">SVG:</strong>
                <md-rating-bar v-model="rating13" class="md-primary" :md-empty-icon="'assets/icon-home.svg'" :md-full-icon="'assets/icon-home.svg'"></md-rating-bar>
                <md-rating-bar v-model="rating13" class="md-primary" :md-empty-icon="'assets/icon-home.svg'" :md-full-icon="'assets/icon-home.svg'" :md-icon-size="2"></md-rating-bar>
              </md-layout>

              <md-layout>
                <strong class="md-body-2">PNG:</strong>
                <md-rating-bar v-model="rating13" :md-empty-icon="'assets/icon-home-back.png'" :md-full-icon="'assets/icon-home-front.png'"></md-rating-bar>
                <md-rating-bar v-model="rating13" :md-empty-icon="'assets/icon-home-back.png'" :md-full-icon="'assets/icon-home-front.png'" :md-icon-size="2"></md-rating-bar>
              </md-layout>
            </md-layout>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-layout :md-gutter="true"&gt;<br />
                &lt;md-layout&gt;<br />
                  &lt;strong class="md-body-2"&gt;SVG:&lt;/strong&gt;<br />
                  &lt;md-rating-bar v-model="rating13" class="md-primary" :md-empty-icon="'assets/icon-home.svg'" :md-full-icon="'assets/icon-home.svg'"&gt;&lt;/md-rating-bar&gt;<br />
                  &lt;md-rating-bar v-model="rating13" class="md-primary" :md-empty-icon="'assets/icon-home.svg'" :md-full-icon="'assets/icon-home.svg'" :md-icon-size="2"&gt;&lt;/md-rating-bar&gt;<br />
                &lt;/md-layout&gt;<br />
                <br />
                &lt;md-layout&gt;<br />
                  &lt;strong class="md-body-2"&gt;PNG:&lt;/strong&gt;<br />
                  &lt;md-rating-bar v-model="rating13" :md-empty-icon="'assets/icon-home-back.png'" :md-full-icon="'assets/icon-home-front.png'"&gt;&lt;/md-rating-bar&gt;<br />
                  &lt;md-rating-bar v-model="rating13" :md-empty-icon="'assets/icon-home-back.png'" :md-full-icon="'assets/icon-home-front.png'" :md-icon-size="2"&gt;&lt;/md-rating-bar&gt;<br />
                &lt;/md-layout&gt;<br />
              &lt;/md-layout&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Font Icons">
          <!-- had a few trouble on making webpack accept font awesome and others,
               therefore i'm using those cdn's' for the sake of a good example -->
          <div slot="demo">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div>This first example uses <a href="http://fontawesome.io/icons/" target="fa_icons">Font Awesome Icons</a></div>
            <md-rating-bar v-model="rating14" class="md-primary" :md-empty-iconset="'fa fa-bell-o'" :md-full-iconset="'fa fa-bell'"></md-rating-bar>
            <md-rating-bar v-model="rating14" class="md-warn" :md-icon-size="2" :md-empty-iconset="'fa fa-heart-o'" :md-full-iconset="'fa fa-heart'"></md-rating-bar>
            <hr/>
            <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"/>
            <div>This second example uses <a href="http://ionicons.com/" target="ion_icons">Ion Icons</a></div>
            <md-rating-bar v-model="rating14" class="md-primary" :md-empty-iconset="'ion-ios-bell-outline'" :md-full-iconset="'ion-ios-bell'"></md-rating-bar>
            <md-rating-bar v-model="rating14" class="md-warn" :md-icon-size="2" :md-empty-iconset="'ion-android-favorite-outline'" :md-full-iconset="'ion-android-favorite'"></md-rating-bar>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/&gt;<br />
              &lt;div&gt;This first example uses &lt;a href="http://fontawesome.io/icons/" target="fa_icons"&gt;Font Awesome Icons&lt;/a&gt;&lt;/div&gt;<br />
              &lt;md-rating-bar v-model="rating14" class="md-primary" :md-empty-iconset="'fa fa-bell-o'" :md-full-iconset="'fa fa-bell'"&gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating14" class="md-warn" :md-icon-size="2" :md-empty-iconset="'fa fa-heart-o'" :md-full-iconset="'fa fa-heart'"&gt;&lt;/md-rating-bar&gt;<br />
              &lt;style type="text/css"&gt;&lt;!-- offset fix to awesome icons--&gt;<br />
                .fa {<br />
                  font-size: 19px !important;<br />
                  line-height: 1.3em !important;<br />
                  padding-left: 0.1em;<br />
                }<br />
                .fa.md-size-2x {<br />
                  font-size: 38px !important;<br />
                }<br />
                <br />
                .fa.md-size-3x {<br />
                  font-size: 57px !important;<br />
                }<br />
                <br />
                .fa.md-size-4x {<br />
                  font-size: 76px !important;<br />
                }<br />
                <br />
                .fa.md-size-5x {<br />
                  font-size: 95px !important;<br />
                }<br />
              &lt;/style&gt;<br />
              &lt;hr/&gt;<br />
              &lt;link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"/&gt;<br />
              &lt;div&gt;This second example uses &lt;a href="http://ionicons.com/" target="ion_icons"&gt;Ion Icons&lt;/a&gt;&lt;/div&gt;<br />
              &lt;md-rating-bar v-model="rating14" class="md-primary" :md-empty-iconset="'ion-ios-bell-outline'" :md-full-iconset="'ion-ios-bell'"&gt;&lt;/md-rating-bar&gt;<br />
              &lt;md-rating-bar v-model="rating14" class="md-warn" :md-size="2" :md-empty-iconset="'ion-android-favorite-outline'" :md-full-iconset="'ion-android-favorite'"&gt;&lt;/md-rating-bar&gt;<br />
              &lt;style type="text/css"&gt; &lt;!-- offset fix to ion icons--&gt;<br />
                i[class*="ion-"]{<br />
                  padding-left: 0.1em;<br />
                }<br />
              &lt;/style&gt;
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
        rating1: 5 * 0.70,
        rating2: 10 * 0.6,
        rating3: 7 * 0.2,
        rating4: 7 * 0.84,
        rating5: 7 * 0.7,
        rating6: 7 * 0.5,
        rating7: 5 * 0.90,
        rating8: 5 * 0.9,
        rating9: 5 * 0.18,
        rating10: 5 * 0.45,
        rating11: 5 * 0.82,
        rating12: 5 * 0.5,
        rating13: 5 * 0.7,
        rating14: 5 * 0.4
      };
    }
  };
</script>

<style>
  .fa {
    font-size: 19px !important;
    line-height: 1.3em !important;
    padding-left: 0.1em;
  }
  .fa.md-size-2x {
    font-size: 38px !important;
  }

  .fa.md-size-3x {
    font-size: 57px !important;
  }

  .fa.md-size-4x {
    font-size: 76px !important;
  }

  .fa.md-size-5x {
    font-size: 95px !important;
  }
  i[class*="ion-"]{
    padding-left: 0.1em;
  }
</style>
