<template>
  <page-content page-title="Components - Chips">
    <docs-component>
      <div slot="description">
        <p>A chip may contain entities such as a photo, text, rules, an icon, or a contact.</p>
      </div>

      <div slot="api">
        <api-table name="md-chips">
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
        <example-box card-title="Static">
          <div slot="demo">
            <md-chip>Marcos Moura</md-chip>
            <md-chip md-deletable>Marcos Moura</md-chip>
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
