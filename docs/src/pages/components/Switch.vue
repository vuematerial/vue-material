<template>
  <demo-page label="Components - Switch">
    <div slot="examples">
      <demo-example label="Default">
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
      </demo-example>

      <demo-example label="Themed">
        <div v-md-theme="'orange'">
          <md-switch v-model="checked4" id="my-test4" name="my-test4" class="md-primary"></md-switch>
        </div>

        <div v-md-theme="'green'">
          <md-switch v-model="checked5" id="my-test5" name="my-test5" class="md-primary">Green Primary Color</md-switch>
        </div>

        <div v-md-theme="'brown'">
          <md-switch v-model="checked6" id="my-test6" name="my-test6" class="md-primary">Brown Primary Color</md-switch>
        </div>

        <div v-md-theme="'light-blue'">
          <md-switch v-model="checked7" id="my-test7" name="my-test7" class="md-primary" disabled>Light Blue Primary Color Disabled</md-switch>
        </div>
      </demo-example>

      <demo-example label="Typed">
        <md-switch v-model="checked8" id="my-test8" name="my-test8">Button (default)</md-switch>

        <div>
          <form @click.stop.prevent="submit">
            <md-switch type="submit" v-model="checked9" id="my-test9" name="my-test9" class="md-primary">Submit</md-switch>
          </form>
        </div>
      </demo-example>
    </div>

    <div slot="code">
      <demo-example label="Default">
        <code-block lang="xml">
&lt;md-switch v-model=&quot;checked0&quot; id=&quot;my-test0&quot; name=&quot;my-test0&quot;&gt;&lt;/md-switch&gt;
&lt;md-switch v-model=&quot;checked1&quot; id=&quot;my-test1&quot; name=&quot;my-test1&quot; class=&quot;md-primary&quot;&gt;Primary Color&lt;/md-switch&gt;
&lt;md-switch v-model=&quot;checked2&quot; id=&quot;my-test2&quot; name=&quot;my-test2&quot; class=&quot;md-warn&quot;&gt;Warn Color&lt;/md-switch&gt;
&lt;md-switch v-model=&quot;checked3&quot; id=&quot;my-test3&quot; name=&quot;my-test3&quot; disabled&gt;Disabled&lt;/md-switch&gt;
        </code-block>
      </demo-example>

      <demo-example label="Themed">
        <code-block lang="xml">
&lt;div v-md-theme=&quot;&#039;orange&#039;&quot;&gt;
  &lt;md-switch v-model=&quot;checked4&quot; id=&quot;my-test4&quot; name=&quot;my-test4&quot; class=&quot;md-primary&quot;&gt;&lt;/md-switch&gt;
&lt;/div&gt;

&lt;div v-md-theme=&quot;&#039;green&#039;&quot;&gt;
  &lt;md-switch v-model=&quot;checked5&quot; id=&quot;my-test5&quot; name=&quot;my-test5&quot; class=&quot;md-primary&quot;&gt;Green Primary Color&lt;/md-switch&gt;
&lt;/div&gt;

&lt;div v-md-theme=&quot;&#039;brown&#039;&quot;&gt;
  &lt;md-switch v-model=&quot;checked6&quot; id=&quot;my-test6&quot; name=&quot;my-test6&quot; class=&quot;md-primary&quot;&gt;Brown Primary Color&lt;/md-switch&gt;
&lt;/div&gt;

&lt;div v-md-theme=&quot;&#039;light-blue&#039;&quot;&gt;
  &lt;md-switch v-model=&quot;checked7&quot; id=&quot;my-test7&quot; name=&quot;my-test7&quot; class=&quot;md-primary&quot; disabled&gt;Light Blue Primary Color Disabled&lt;/md-switch&gt;
&lt;/div&gt;
        </code-block>
      </demo-example>

      <demo-example label="Typed">
        <code-block lang="xml">
&lt;div&gt;
  &lt;md-switch v-model=&quot;checked8&quot; id=&quot;my-test8&quot; name=&quot;my-test8&quot; class=&quot;md-primary&quot;&gt;Button (default)&lt;/md-switch&gt;
&lt;/div&gt;

&lt;form @click.stop.prevent=&quot;submit&quot;&gt;
  &lt;md-switch type=&quot;submit&quot; v-model=&quot;checked9&quot; id=&quot;my-test9&quot; name=&quot;my-test9&quot;&gt;Submit&lt;/md-switch&gt;
&lt;/form&gt;
        </code-block>

        <code-block lang="javascript">
export default {
  methods: {
    submit(e) {
      alert('This switch submits the form');
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
