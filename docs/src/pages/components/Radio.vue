<template>
  <page-content page-title="Components - Radio">
    <docs-component>
      <div slot="description">
        <p>Radio buttons allow the user to select one option from a set. Use radio buttons for exclusive selection if you think that the user needs to see all available options side-by-side.</p>
        <p>The following classes can be applied to change the color palette:</p>
        <ul class="md-body-2">
          <li><code>md-primary</code></li>
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
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>A required model object to bind the value.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-value</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The single value of the particular radio button. Required.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>name</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Set the radio name.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>id</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Set the radio id.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>disabled</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Disable the radio and prevent his actions. Default <code>false</code></md-table-cell>
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
                <md-table-cell>Receive the state of the radio</md-table-cell>
                <md-table-cell>Triggered when the radio changes his value.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div slot="demo">
            <div>
              <md-radio v-model="radio1" id="my-test1" name="my-test-group1" md-value="1">My beautiful radio</md-radio>
              <md-radio v-model="radio1" id="my-test2" name="my-test-group1" md-value="2">Another radio</md-radio>
              <md-radio v-model="radio1" id="my-test3" name="my-test-group1" md-value="3">Another another radio</md-radio>
            </div>

            <div>
              <md-radio v-model="radio2" id="my-test4" name="my-test-group2" md-value="1" class="md-primary">Primary radio</md-radio>
              <md-radio v-model="radio2" id="my-test5" name="my-test-group2" md-value="2" class="md-primary">Another primary radio</md-radio>
              <md-radio v-model="radio2" id="my-test6" name="my-test-group2" md-value="3" class="md-primary">Another another primary radio</md-radio>
            </div>

            <div>
              <md-radio v-model="radio3" id="my-test7" name="my-test-group3" md-value="1" class="md-warn">Warn radio</md-radio>
              <md-radio v-model="radio3" id="my-test8" name="my-test-group3" md-value="2" class="md-warn">Another warn radio</md-radio>
              <md-radio v-model="radio3" id="my-test9" name="my-test-group3" md-value="3" class="md-warn">Another another warn radio</md-radio>
            </div>

            <div>
              <md-radio v-model="radio4" id="my-test10" name="my-test-group3" md-value="1">My beautiful radio</md-radio>
              <md-radio v-model="radio4" id="my-test11" name="my-test-group3" md-value="2" disabled>Disabled</md-radio>
              <md-radio v-model="radio4" id="my-test12" name="my-test-group3" md-value="3">Another radio</md-radio>
            </div>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;div&gt;
                &lt;md-radio v-model=&quot;radio1&quot; id=&quot;my-test1&quot; name=&quot;my-test-group1&quot; md-value=&quot;1&quot;&gt;My beautiful radio&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;radio1&quot; id=&quot;my-test2&quot; name=&quot;my-test-group1&quot; md-value=&quot;2&quot;&gt;Another radio&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;radio1&quot; id=&quot;my-test3&quot; name=&quot;my-test-group1&quot; md-value=&quot;3&quot;&gt;Another another radio&lt;/md-radio&gt;
              &lt;/div&gt;

              &lt;div&gt;
                &lt;md-radio v-model=&quot;radio2&quot; id=&quot;my-test4&quot; name=&quot;my-test-group2&quot; md-value=&quot;1&quot; class=&quot;md-primary&quot;&gt;Primary radio&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;radio2&quot; id=&quot;my-test5&quot; name=&quot;my-test-group2&quot; md-value=&quot;2&quot; class=&quot;md-primary&quot;&gt;Another primary radio&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;radio2&quot; id=&quot;my-test6&quot; name=&quot;my-test-group2&quot; md-value=&quot;3&quot; class=&quot;md-primary&quot;&gt;Another another primary radio&lt;/md-radio&gt;
              &lt;/div&gt;

              &lt;div&gt;
                &lt;md-radio v-model=&quot;radio3&quot; id=&quot;my-test7&quot; name=&quot;my-test-group3&quot; md-value=&quot;1&quot; class=&quot;md-warn&quot;&gt;Warn radio&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;radio3&quot; id=&quot;my-test8&quot; name=&quot;my-test-group3&quot; md-value=&quot;2&quot; class=&quot;md-warn&quot;&gt;Another warn radio&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;radio3&quot; id=&quot;my-test9&quot; name=&quot;my-test-group3&quot; md-value=&quot;3&quot; class=&quot;md-warn&quot;&gt;Another another warn radio&lt;/md-radio&gt;
              &lt;/div&gt;

              &lt;div&gt;
                &lt;md-radio v-model=&quot;radio4&quot; id=&quot;my-test10&quot; name=&quot;my-test-group3&quot; md-value=&quot;1&quot;&gt;My beautiful radio&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;radio4&quot; id=&quot;my-test11&quot; name=&quot;my-test-group3&quot; md-value=&quot;2&quot; disabled&gt;Disabled&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;radio4&quot; id=&quot;my-test12&quot; name=&quot;my-test-group3&quot; md-value=&quot;3&quot;&gt;Another radio&lt;/md-radio&gt;
              &lt;/div&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Themes">
          <div slot="demo">
            <md-theme md-name="orange">
              <md-radio v-model="radio5" id="my-test13" name="my-test-group4" md-value="1" class="md-primary">Orange radio</md-radio>
              <md-radio v-model="radio5" id="my-test14" name="my-test-group4" md-value="2" class="md-primary">Another Orange radio</md-radio>
              <md-radio v-model="radio5" id="my-test15" name="my-test-group4" md-value="3" class="md-primary">Another another Orange radio</md-radio>
            </md-theme>

            <md-theme md-name="brown">
              <md-radio v-model="radio6" id="my-test16" name="my-test-group4" md-value="1" class="md-primary">Brown radio</md-radio>
              <md-radio v-model="radio6" id="my-test17" name="my-test-group4" md-value="2" class="md-primary">Another Brown radio</md-radio>
              <md-radio v-model="radio6" id="my-test18" name="my-test-group4" md-value="3" class="md-primary">Another another Brown radio</md-radio>
            </md-theme>

            <md-theme md-name="green">
              <md-radio v-model="radio7" id="my-test19" name="my-test-group6" md-value="1" class="md-primary">Green radio</md-radio>
              <md-radio v-model="radio7" id="my-test20" name="my-test-group6" md-value="2" class="md-primary">Another Green radio</md-radio>
              <md-radio v-model="radio7" id="my-test21" name="my-test-group6" md-value="3" class="md-primary">Another another Green radio</md-radio>
            </md-theme>

            <md-theme md-name="teal">
              <md-radio v-model="radio8" id="my-test22" name="my-test-group3" md-value="1" class="md-primary">Teal radio</md-radio>
              <md-radio v-model="radio8" id="my-test23" name="my-test-group3" md-value="2" class="md-primary" disabled>Teal disabled radio</md-radio>
              <md-radio v-model="radio8" id="my-test24" name="my-test-group3" md-value="3" class="md-primary">Another another Teal radio</md-radio>
            </md-theme>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-theme md-name=&quot;orange&quot;&gt;
                &lt;md-radio v-model=&quot;radio5&quot; id=&quot;my-test13&quot; name=&quot;my-test-group4&quot; md-value=&quot;1&quot; class=&quot;md-primary&quot;&gt;Orange radio&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;radio5&quot; id=&quot;my-test14&quot; name=&quot;my-test-group4&quot; md-value=&quot;2&quot; class=&quot;md-primary&quot;&gt;Another Orange radio&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;radio5&quot; id=&quot;my-test15&quot; name=&quot;my-test-group4&quot; md-value=&quot;3&quot; class=&quot;md-primary&quot;&gt;Another another Orange radio&lt;/md-radio&gt;
              &lt;/md-theme&gt;

              &lt;md-theme md-name=&quot;brown&quot;&gt;
                &lt;md-radio v-model=&quot;radio6&quot; id=&quot;my-test16&quot; name=&quot;my-test-group4&quot; md-value=&quot;1&quot; class=&quot;md-primary&quot;&gt;Brown radio&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;radio6&quot; id=&quot;my-test17&quot; name=&quot;my-test-group4&quot; md-value=&quot;2&quot; class=&quot;md-primary&quot;&gt;Another Brown radio&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;radio6&quot; id=&quot;my-test18&quot; name=&quot;my-test-group4&quot; md-value=&quot;3&quot; class=&quot;md-primary&quot;&gt;Another another Brown radio&lt;/md-radio&gt;
              &lt;/md-theme&gt;

              &lt;md-theme md-name=&quot;green&quot;&gt;
                &lt;md-radio v-model=&quot;radio7&quot; id=&quot;my-test19&quot; name=&quot;my-test-group6&quot; md-value=&quot;1&quot; class=&quot;md-primary&quot;&gt;Green radio&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;radio7&quot; id=&quot;my-test20&quot; name=&quot;my-test-group6&quot; md-value=&quot;2&quot; class=&quot;md-primary&quot;&gt;Another Green radio&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;radio7&quot; id=&quot;my-test21&quot; name=&quot;my-test-group6&quot; md-value=&quot;3&quot; class=&quot;md-primary&quot;&gt;Another another Green radio&lt;/md-radio&gt;
              &lt;/md-theme&gt;

              &lt;md-theme md-name=&quot;teal&quot;&gt;
                &lt;md-radio v-model=&quot;radio8&quot; id=&quot;my-test22&quot; name=&quot;my-test-group3&quot; md-value=&quot;1&quot; class=&quot;md-primary&quot;&gt;Teal radio&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;radio8&quot; id=&quot;my-test23&quot; name=&quot;my-test-group3&quot; md-value=&quot;2&quot; class=&quot;md-primary&quot; disabled&gt;Teal disabled radio&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;radio8&quot; id=&quot;my-test24&quot; name=&quot;my-test-group3&quot; md-value=&quot;3&quot; class=&quot;md-primary&quot;&gt;Another another Teal radio&lt;/md-radio&gt;
              &lt;/md-theme&gt;
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
        radio1: 2,
        radio2: 1,
        radio3: 1,
        radio4: 1,
        radio5: 2,
        radio6: 3,
        radio7: 1,
        radio8: 2
      };
    }
  };
</script>
