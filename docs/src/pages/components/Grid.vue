<template>
  <page-content page-title="Components - Grid">
    <docs-component>
      <div slot="description">
        <p>The grid offers a compact view of many items in the same page. Unlike cards, they offer small information and focus on media and a simple action, if able.</p>
      </div>

      <div slot="api">
        <api-table name="md-grid">
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
                <md-table-cell></md-table-cell>
                <md-table-cell></md-table-cell>
                <md-table-cell></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Simple grid">
          <div slot="demo">
            <md-grid>
              <md-grid-media>
                <md-grid-content class="double-line">
                  <span>Image title</span>
                  <span>Image title</span>
                </md-grid-content>
                <img src="https://placeimg.com/640/480/any"/>
              </md-grid-media>
              <md-grid-media>
                <md-grid-content class="single-line">
                  <span>Image title</span>
                </md-grid-content>
                <img src="https://placeimg.com/640/480/any"/>
                <md-grid-content class="single-line">
                  <span>Image title</span>
                </md-grid-content>
              </md-grid-media>
              <md-grid-media>
                <img src="https://placeimg.com/640/480/any"/>
                <md-grid-content class="double-line">
                  <span>Image title</span>
                  <span>Image title</span>
                </md-grid-content>
              </md-grid-media>
            </md-grid>
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
  
  };
</script>
