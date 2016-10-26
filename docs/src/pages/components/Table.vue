<template>
  <demo-page label="Components - Table">
    <div slot="examples">
      <demo-example label="Default">
        <md-table-card>
          <md-toolbar>
            <h1 class="md-title">Nutrition</h1>
            <md-button class="md-icon-button">
              <md-icon>filter_list</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>search</md-icon>
            </md-button>
          </md-toolbar>

          <md-table md-row-selection>
            <thead>
              <md-table-row>
                <th>Head 1</th>
                <th>Head 2</th>
                <th>Head 3</th>
                <th>Head 4</th>
              </md-table-row>
            </thead>

            <tbody>
              <md-table-row v-for="test in 100">
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
                <td>Cell 4</td>
              </md-table-row>
            </tbody>
          </md-table>
        </md-table-card>
      </demo-example>
    </div>

    <div slot="code">

    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>

<script>
  export default {

  };
</script>
