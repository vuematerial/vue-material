<template>
  <page-content page-title="Components - Switch">
    <docs-component>
      <div slot="description">
        <p>On/off switches toggle the state of a single settings option. The option that the switch controls, as well as the state it’s in, should be made clear from the corresponding inline label.</p>
        <p>The following classes can be applied to change the color palette:</p>
        <ul class="md-body-2">
          <li><code>md-primary</code></li>
          <li><code>md-warn</code></li>
        </ul>
      </div>

      <div slot="api">
        <api-table name="md-switch">
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
                <md-table-cell>type</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Sets the type. Default <code>button</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>name</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Set the switch name.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>id</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Set the switch id.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>disabled</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Disable the switch and prevent his actions. Default <code>false</code></md-table-cell>
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
                <md-table-cell>Receive the state of the switch</md-table-cell>
                <md-table-cell>Triggered when the switch changes his value.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div slot="demo">
            <div>
              <md-switch v-model="checked0" id="my-test0" name="my-test0"></md-switch>
            </div>

            <div>
              <md-switch v-model="checked1" id="my-test1" name="my-test1" class="md-primary">Primary Color</md-switch>
            </div>

            <div>
              <md-switch v-model="checked2" id="my-test2" name="my-test2" class="md-warn">Warn Color</md-switch>
            </div>

            <div>
              <md-switch v-model="checked3" id="my-test3" name="my-test3" disabled>Disabled</md-switch>
            </div>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-switch v-model=&quot;checked0&quot; id=&quot;my-test0&quot; name=&quot;my-test0&quot;&gt;&lt;/md-switch&gt;
              &lt;md-switch v-model=&quot;checked1&quot; id=&quot;my-test1&quot; name=&quot;my-test1&quot; class=&quot;md-primary&quot;&gt;Primary Color&lt;/md-switch&gt;
              &lt;md-switch v-model=&quot;checked2&quot; id=&quot;my-test2&quot; name=&quot;my-test2&quot; class=&quot;md-warn&quot;&gt;Warn Color&lt;/md-switch&gt;
              &lt;md-switch v-model=&quot;checked3&quot; id=&quot;my-test3&quot; name=&quot;my-test3&quot; disabled&gt;Disabled&lt;/md-switch&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="With type">
          <div slot="demo">
            <md-switch v-model="checked8" id="my-test8" name="my-test8">Default</md-switch>

            <form @click.stop.prevent="submit">
              <md-switch type="submit" v-model="checked9" id="my-test9" name="my-test9" class="md-primary">Submit</md-switch>
            </form>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-switch v-model=&quot;checked8&quot; id=&quot;my-test8&quot; name=&quot;my-test8&quot;&gt;Default&lt;/md-switch&gt;

              &lt;form @click.stop.prevent=&quot;submit&quot;&gt;
                &lt;md-switch type=&quot;submit&quot; v-model=&quot;checked9&quot; id=&quot;my-test9&quot; name=&quot;my-test9&quot; class=&quot;md-primary&quot;&gt;Submit&lt;/md-switch&gt;
              &lt;/form&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Themes">
          <div slot="demo">
            <div>
              <md-switch md-theme="orange" v-model="checked4" id="my-test4" name="my-test4" class="md-primary"></md-switch>
            </div>

            <div>
              <md-switch md-theme="green" v-model="checked5" id="my-test5" name="my-test5" class="md-primary">Green Primary Color</md-switch>
            </div>

            <div>
              <md-switch md-theme="brown" v-model="checked6" id="my-test6" name="my-test6" class="md-primary">Brown Primary Color</md-switch>
            </div>

            <div>
              <md-switch md-theme="light-blue" v-model="checked7" id="my-test7" name="my-test7" class="md-primary" disabled>Light Blue Primary Color Disabled</md-switch>
            </div>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-switch md-theme=&quot;orange&quot; v-model=&quot;checked4&quot; id=&quot;my-test4&quot; name=&quot;my-test4&quot; class=&quot;md-primary&quot;&gt;&lt;/md-switch&gt;
              &lt;md-switch md-theme=&quot;green&quot; v-model=&quot;checked5&quot; id=&quot;my-test5&quot; name=&quot;my-test5&quot; class=&quot;md-primary&quot;&gt;Green Primary Color&lt;/md-switch&gt;
              &lt;md-switch md-theme=&quot;brown&quot; v-model=&quot;checked6&quot; id=&quot;my-test6&quot; name=&quot;my-test6&quot; class=&quot;md-primary&quot;&gt;Brown Primary Color&lt;/md-switch&gt;
              &lt;md-switch md-theme=&quot;light-blue&quot; v-model=&quot;checked7&quot; id=&quot;my-test7&quot; name=&quot;my-test7&quot; class=&quot;md-primary&quot; disabled&gt;Light Blue Primary Color Disabled&lt;/md-switch&gt;
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
        checked0: true,
        checked1: true,
        checked2: true,
        checked3: true,
        checked4: true,
        checked5: true,
        checked6: true,
        checked7: true,
        checked8: true,
        checked9: true,
        checked10: true
      };
    },
    methods: {
      submit() {
        alert('This switch submits the form');
      }
    }
  };
</script>
