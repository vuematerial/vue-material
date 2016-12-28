<template>
  <page-content page-title="Components - File">
    <docs-component>
      <div slot="description">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam debitis consequatur placeat! Velit, esse alias voluptatem dolor facere cumque placeat at similique consequatur, minima assumenda eaque quis laborum. Quia, deleniti.</p>
      </div>

      <div slot="api">
        <api-table name="md-file">
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
        <example-box card-title="Default">
          <div slot="demo">
            <md-input-container>
              <md-file></md-file>
            </md-input-container>
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

<script>
  export default {
    data: () => ({

    }),
    methods: {

    }
  };
</script>
