<template>
  <page-content page-title="Components - Radio">
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
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>A required model object to bind the value.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>num-stars</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Number of the stars. Default is <code>5</code>.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>front-icon</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The font icon used to represent full star. Default is <code>star</code>.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>back-icon</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The font icon used to represent empty star. Default is <code>star</code>.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>disabled</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Disable the radio and prevent his actions. Default <code>false</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">

      </div>
    </docs-component>
  </page-content>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
  };
</script>
