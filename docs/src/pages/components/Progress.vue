<template>
  <page-content page-title="Components - Progress">
    <docs-component>
      <div slot="description">
        <p>A linear progress indicator should always fill from 0% to 100% and never decrease in value. It should be represented by bars on the edge of a header or sheet that appear and disappear.</p>
        <p>The following classes can be applied to change the color palette:</p>
        <ul class="md-body-2">
          <li><code>md-accent</code></li>
          <li><code>md-warn</code></li>
        </ul>
      </div>

      <div slot="api">
        <api-table name="md-progress">
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
                <md-table-cell>empty</md-table-cell>
                <md-table-cell><code>Type</code></md-table-cell>
                <md-table-cell>Description</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Determinate">
          <div class="progress-demo" slot="demo">
            <md-progress></md-progress>
          </div>

          <div slot="code">
            <code-block lang="xml">

            </code-block>
          </div>
        </example-box>

        <example-box card-title="Indeterminate">
          <div class="progress-demo" slot="demo">
            <md-progress></md-progress>
          </div>

          <div slot="code">
            <code-block lang="xml">

            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="scss" scoped>

</style>

<script>
  export default {
    data: () => ({

    }),
    methods: {

    },
    mounted() {
      console.log(this.$material);
    }
  };
</script>
