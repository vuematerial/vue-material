<template>
  <page-content page-title="Components - Whiteframe">
    <docs-component>
      <div slot="description">
        <p>In the physical world, objects can be stacked or affixed to one another, but cannot pass through each other. Objects also cast shadows and reflect light.</p>
      </div>

      <div slot="api">
        <api-table name="md-whiteframe">
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
                <md-table-cell>md-elevation</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>The amount of elevation. From 0 to 24. <br>Default: <code>1</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-tag</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The generated html tag <br>Default: <code>div</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div slot="demo">
            <md-whiteframe md-tag="section">1dp</md-whiteframe>
            <md-whiteframe md-elevation="2">2dp</md-whiteframe>
            <md-whiteframe md-elevation="3">3dp</md-whiteframe>
            <md-whiteframe md-elevation="4">4dp</md-whiteframe>
            <md-whiteframe md-elevation="5">5dp</md-whiteframe>
            <md-whiteframe md-elevation="6">6dp</md-whiteframe>
            <md-whiteframe md-elevation="7">7dp</md-whiteframe>
            <md-whiteframe md-elevation="8">8dp</md-whiteframe>
            <md-whiteframe md-elevation="9">9dp</md-whiteframe>
            <md-whiteframe md-elevation="10">10dp</md-whiteframe>
            <md-whiteframe md-elevation="11">11dp</md-whiteframe>
            <md-whiteframe md-elevation="12">12dp</md-whiteframe>
            <md-whiteframe md-elevation="13">13dp</md-whiteframe>
            <md-whiteframe md-elevation="14">14dp</md-whiteframe>
            <md-whiteframe md-elevation="15">15dp</md-whiteframe>
            <md-whiteframe md-elevation="16">16dp</md-whiteframe>
            <md-whiteframe md-elevation="17">17dp</md-whiteframe>
            <md-whiteframe md-elevation="18">18dp</md-whiteframe>
            <md-whiteframe md-elevation="19">19dp</md-whiteframe>
            <md-whiteframe md-elevation="20">20dp</md-whiteframe>
            <md-whiteframe md-elevation="21">21dp</md-whiteframe>
            <md-whiteframe md-elevation="22">22dp</md-whiteframe>
            <md-whiteframe md-elevation="23">23dp</md-whiteframe>
            <md-whiteframe md-elevation="24">24dp</md-whiteframe>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-whiteframe md-tag=&quot;section&quot;&gt;1dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;2&quot;&gt;2dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;3&quot;&gt;3dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;4&quot;&gt;4dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;5&quot;&gt;5dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;6&quot;&gt;6dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;7&quot;&gt;7dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;8&quot;&gt;8dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;9&quot;&gt;9dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;10&quot;&gt;10dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;11&quot;&gt;11dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;12&quot;&gt;12dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;13&quot;&gt;13dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;14&quot;&gt;14dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;15&quot;&gt;15dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;16&quot;&gt;16dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;17&quot;&gt;17dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;18&quot;&gt;18dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;19&quot;&gt;19dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;20&quot;&gt;20dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;21&quot;&gt;21dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;22&quot;&gt;22dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;23&quot;&gt;23dp&lt;/md-whiteframe&gt;
              &lt;md-whiteframe md-elevation=&quot;24&quot;&gt;24dp&lt;/md-whiteframe&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="sass" scoped>
  .md-whiteframe {
    width: 100px;
    height: 100px;
    margin: 24px 12px 12px 24px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
</style>
