<template>
  <demo-page>
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
      <h2>Code</h2>
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
    },
    mounted() {
      this.$root.pageTitle = 'Checkbox';
    }
  };
</script>
