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

          <md-table md-row-selection md-sort="calories">
            <thead>
              <md-table-row>
                <md-table-head md-sort-by="dessert">Dessert (100g serving)</md-table-head>
                <md-table-head md-sort-by="calories" md-numeric md-tooltip="The total amount of food energy and the given serving size">Calories (g)</md-table-head>
                <md-table-head md-sort-by="fat" md-numeric>Fat (g)</md-table-head>
                <md-table-head md-sort-by="carbs" md-numeric>Carbs (g)</md-table-head>
                <md-table-head md-sort-by="protein" md-numeric>Protein (g)</md-table-head>
                <md-table-head md-sort-by="sodium" md-numeric>Sodium (mg)</md-table-head>
                <md-table-head md-sort-by="calcium" md-numeric>Calcium (%)</md-table-head>
                <md-table-head md-sort-by="iron" md-numeric>Iron (%)</md-table-head>
              </md-table-row>
            </thead>

            <tbody>
              <md-table-row v-for="(row, index) in 5" :key="index" md-auto-select>
                <md-table-cell>Dessert Name</md-table-cell>
                <md-table-cell v-for="(col, index) in 7" :key="index" md-numeric>10</md-table-cell>
              </md-table-row>
            </tbody>
          </md-table>
        </md-table-card>

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

          <md-table md-row-selection md-sort="calories">
            <thead>
              <md-table-row>
                <md-table-head md-sort-by="dessert">Dessert (100g serving)</md-table-head>
                <md-table-head md-sort-by="calories" md-numeric md-tooltip="The total amount of food energy and the given serving size">Calories (g)</md-table-head>
                <md-table-head md-sort-by="fat" md-numeric>Fat (g)</md-table-head>
                <md-table-head md-sort-by="carbs" md-numeric>Carbs (g)</md-table-head>
                <md-table-head>
                  <md-icon>message</md-icon>
                  <span>Comments</span>
                </md-table-head>
              </md-table-row>
            </thead>

            <tbody>
              <md-table-row v-for="(row, index) in 5" :key="index">
                <md-table-cell>Dessert Name</md-table-cell>
                <md-table-cell v-for="(col, index) in 3" :key="index" md-numeric>10</md-table-cell>
                <md-table-cell>
                  <md-table-edit
                    v-model="comment"
                    :md-name="comment + index"
                    :md-id="comment + index"
                    md-placeholder="Add a comment"
                    md-maxlength="120"></md-table-edit>
                </md-table-cell>
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

<style lang="scss" scoped>
  .md-table-card + .md-table-card {
    margin-top: 24px;
  }
</style>

<script>
  export default {
    data() {
      return {
        comment: 'Test'
      };
    }
  };
</script>
