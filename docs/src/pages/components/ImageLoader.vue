<template>
  <page-content page-title="Components - Image Loader">
    <docs-component>
      <div slot="description">
        <p>Illustrations and photographs may load and transition in three phases by staggering opacity, exposure, and saturation levels.</p>
      </div>

      <div slot="api">
        <api-table name="md-image">
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
            <md-image md-src="https://storage.googleapis.com/material-design/publish/material_v_10/assets/0B7WCemMG6e0VNUdkX1d5NU5KYzg/patterns_loading_images.png"></md-image>
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

    })
  };
</script>
