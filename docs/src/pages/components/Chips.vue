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
        <example-box card-title="Single Chips">
          <div slot="demo">
            <md-chip>Marcos Moura</md-chip>
            <md-chip md-deletable>Luiza Ivanenko</md-chip>
          </div>

          <div slot="code">
            <code-block lang="xml">

            </code-block>
          </div>
        </example-box>

        <example-box card-title="Static">
          <div slot="demo">
            <md-chips v-model="fruits" md-static>
              <template scope="chip">{{ chip.value }}</template>
            </md-chips>
          </div>

          <div slot="code">
            <code-block lang="xml">

            </code-block>
          </div>
        </example-box>

        <example-box card-title="Editable">
          <div slot="demo">
            <md-chips v-model="contacts" md-input-placeholder="Add a contact">
              <template scope="chip">{{ chip.value }}</template>
            </md-chips>
          </div>

          <div slot="code">
            <code-block lang="xml">

            </code-block>
          </div>
        </example-box>

        <example-box card-title="Limit">
          <div slot="demo">
            <md-chips v-model="cities" :md-max="5" md-input-placeholder="Cities...">
              <template scope="chip">
                <span>{{ chip.value }}</span>
                <small v-if="chip.value === 'Belo Horizonte'">(favorite)</small>
              </template>
            </md-chips>
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
      fruits: ['Orange', 'Apple', 'Pineapple'],
      contacts: ['Marcos Moura'],
      cities: ['Amsterdam', 'Belo Horizonte']
    })
  };
</script>
