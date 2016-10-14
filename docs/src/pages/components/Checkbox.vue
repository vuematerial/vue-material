<template>
  <demo-page label="Components - Checkbox">
    <div slot="examples">
      <demo-example label="Default">
        <md-checkbox id="my-test1" name="my-test1" v-model="checkbox">Regular Checkbox</md-checkbox>
        <md-checkbox id="my-test2" name="my-test2" v-model="checkbox" class="md-primary">Primary Color</md-checkbox>
        <md-checkbox id="my-test3" name="my-test3" v-model="checkbox" class="md-warn">Warn Color</md-checkbox>
        <md-checkbox id="my-test4" name="my-test4" v-model="checkbox" disabled>Disabled</md-checkbox>
      </demo-example>

      <demo-example label="Themed">
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
      </demo-example>
    </div>

    <div slot="code">
      <demo-example label="Default">
          <code-block lang="xml">
&lt;md-checkbox id=&quot;my-test1&quot; name=&quot;my-test1&quot; v-model=&quot;checkbox&quot;&gt;Regular Checkbox&lt;/md-checkbox&gt;
&lt;md-checkbox id=&quot;my-test2&quot; name=&quot;my-test2&quot; v-model=&quot;checkbox&quot; class=&quot;md-primary&quot;&gt;Primary Color&lt;/md-checkbox&gt;
&lt;md-checkbox id=&quot;my-test3&quot; name=&quot;my-test3&quot; v-model=&quot;checkbox&quot; class=&quot;md-warn&quot;&gt;Warn Color&lt;/md-checkbox&gt;
&lt;md-checkbox id=&quot;my-test4&quot; name=&quot;my-test4&quot; v-model=&quot;checkbox&quot; disabled&gt;Disabled&lt;/md-checkbox&gt;
          </code-block>
      </demo-example>

      <demo-example label="Themed">
        <code-block lang="xml">
&lt;div class=&quot;themed&quot; v-md-theme=&quot;&#039;orange&#039;&quot;&gt;
  &lt;md-checkbox id=&quot;my-test5&quot; name=&quot;my-test5&quot; v-model=&quot;checkbox2&quot; class=&quot;md-primary&quot;&gt;Primary Orange&lt;/md-checkbox&gt;
&lt;/div&gt;

&lt;div class=&quot;themed&quot; v-md-theme=&quot;&#039;green&#039;&quot;&gt;
  &lt;md-checkbox id=&quot;my-test6&quot; name=&quot;my-test6&quot; v-model=&quot;checkbox2&quot; class=&quot;md-primary&quot;&gt;Primary Green&lt;/md-checkbox&gt;
&lt;/div&gt;

&lt;div class=&quot;themed&quot; v-md-theme=&quot;&#039;light-blue&#039;&quot;&gt;
  &lt;md-checkbox id=&quot;my-test7&quot; name=&quot;my-test7&quot; v-model=&quot;checkbox2&quot; class=&quot;md-primary&quot;&gt;Primary Light Blue&lt;/md-checkbox&gt;
&lt;/div&gt;

&lt;div class=&quot;themed&quot; v-md-theme=&quot;&#039;indigo&#039;&quot;&gt;
  &lt;md-checkbox id=&quot;my-test8&quot; name=&quot;my-test8&quot; v-model=&quot;checkbox2&quot; class=&quot;md-primary&quot;&gt;Primary Indigo&lt;/md-checkbox&gt;
&lt;/div&gt;

&lt;div class=&quot;themed&quot; v-md-theme=&quot;&#039;brown&#039;&quot;&gt;
  &lt;md-checkbox id=&quot;my-test9&quot; name=&quot;my-test9&quot; v-model=&quot;checkbox2&quot; class=&quot;md-primary&quot; disabled&gt;Primary Brown Disabled&lt;/md-checkbox&gt;
&lt;/div&gt;
        </code-block>
      </demo-example>
    </div>

    <div slot="api">

    </div>
  </demo-page>
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
