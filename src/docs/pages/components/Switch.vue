<template>
  <demo-page>
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
    </div>

    <div slot="code">
      <h2>Code</h2>
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
        checked7: true
      };
    },
    mounted() {
      this.$root.pageTitle = 'Components - Switch';
    }
  };
</script>
