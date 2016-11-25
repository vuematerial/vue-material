<template>
  <page-content page-title="Components - Checkbox">
    <docs-component>
      <div slot="description">
        <p>Checkboxes allow the user to select multiple options from a set.</p>
        <p>The following classes can be applied to change the color palette:</p>
        <ul class="md-body-2">
          <li><code>md-primary</code></li>
          <li><code>md-warn</code></li>
        </ul>
      </div>

      <div slot="api">
        <api-table name="md-checkbox">
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
                <md-table-cell>name</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Set the checkbox name.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>id</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Set the checkbox id.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>disabled</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Disable the checkbox and prevent his actions. Default <code>false</code></md-table-cell>
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
                <md-table-cell>Receive the state of the checkbox</md-table-cell>
                <md-table-cell>Triggered when the checkbox changes his value.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div slot="demo">
            <md-checkbox id="my-test1" name="my-test1" v-model="checkbox">Regular Checkbox</md-checkbox>
            <md-checkbox id="my-test2" name="my-test2" v-model="checkbox" class="md-primary">Primary Color</md-checkbox>
            <md-checkbox id="my-test3" name="my-test3" v-model="checkbox" class="md-warn">Warn Color</md-checkbox>
            <md-checkbox id="my-test4" name="my-test4" v-model="checkbox" disabled>Disabled</md-checkbox>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-checkbox id=&quot;my-test1&quot; name=&quot;my-test1&quot; v-model=&quot;checkbox&quot;&gt;Regular Checkbox&lt;/md-checkbox&gt;
              &lt;md-checkbox id=&quot;my-test2&quot; name=&quot;my-test2&quot; v-model=&quot;checkbox&quot; class=&quot;md-primary&quot;&gt;Primary Color&lt;/md-checkbox&gt;
              &lt;md-checkbox id=&quot;my-test3&quot; name=&quot;my-test3&quot; v-model=&quot;checkbox&quot; class=&quot;md-warn&quot;&gt;Warn Color&lt;/md-checkbox&gt;
              &lt;md-checkbox id=&quot;my-test4&quot; name=&quot;my-test4&quot; v-model=&quot;checkbox&quot; disabled&gt;Disabled&lt;/md-checkbox&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Themes">
          <div slot="demo">
            <div class="themed" v-md-theme="'orange'">
              <md-checkbox id="my-test5" name="my-test5" v-model="checkbox2" class="md-primary">Primary Orange</md-checkbox>
            </div>

            <div class="themed" v-md-theme="'green'">
              <md-checkbox id="my-test6" name="my-test6" v-model="checkbox2" class="md-primary">Primary Green</md-checkbox>
            </div>

            <div class="themed" v-md-theme="'light-blue'">
              <md-checkbox id="my-test7" name="my-test7" v-model="checkbox2" class="md-primary">Primary Light Blue</md-checkbox>
            </div>

            <div class="themed" v-md-theme="'indigo'">
              <md-checkbox id="my-test8" name="my-test8" v-model="checkbox2" class="md-primary">Primary Indigo</md-checkbox>
            </div>

            <div class="themed" v-md-theme="'brown'">
              <md-checkbox id="my-test9" name="my-test9" v-model="checkbox2" class="md-primary" disabled>Primary Brown Disabled</md-checkbox>
            </div>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;div v-md-theme=&quot;&#039;orange&#039;&quot;&gt;
                &lt;md-checkbox id=&quot;my-test5&quot; name=&quot;my-test5&quot; v-model=&quot;checkbox2&quot; class=&quot;md-primary&quot;&gt;Primary Orange&lt;/md-checkbox&gt;
              &lt;/div&gt;

              &lt;div v-md-theme=&quot;&#039;green&#039;&quot;&gt;
                &lt;md-checkbox id=&quot;my-test6&quot; name=&quot;my-test6&quot; v-model=&quot;checkbox2&quot; class=&quot;md-primary&quot;&gt;Primary Green&lt;/md-checkbox&gt;
              &lt;/div&gt;

              &lt;div v-md-theme=&quot;&#039;light-blue&#039;&quot;&gt;
                &lt;md-checkbox id=&quot;my-test7&quot; name=&quot;my-test7&quot; v-model=&quot;checkbox2&quot; class=&quot;md-primary&quot;&gt;Primary Light Blue&lt;/md-checkbox&gt;
              &lt;/div&gt;

              &lt;div v-md-theme=&quot;&#039;indigo&#039;&quot;&gt;
                &lt;md-checkbox id=&quot;my-test8&quot; name=&quot;my-test8&quot; v-model=&quot;checkbox2&quot; class=&quot;md-primary&quot;&gt;Primary Indigo&lt;/md-checkbox&gt;
              &lt;/div&gt;

              &lt;div v-md-theme=&quot;&#039;brown&#039;&quot;&gt;
                &lt;md-checkbox id=&quot;my-test9&quot; name=&quot;my-test9&quot; v-model=&quot;checkbox2&quot; class=&quot;md-primary&quot; disabled&gt;Primary Brown Disabled&lt;/md-checkbox&gt;
              &lt;/div&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="scss" scoped>
  .themed {
    display: inline-block;
  }
</style>

<script>
  export default {
    data() {
      return {
        checkbox: true,
        checkbox2: false
      };
    }
  };
</script>
