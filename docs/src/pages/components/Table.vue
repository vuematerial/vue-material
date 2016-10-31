<template>
  <demo-page label="Components - Table">
    <div slot="examples">
      <demo-example label="Default">
        <md-table md-sort="calories">
          <md-table-header>
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
          </md-table-header>

          <md-table-body>
            <md-table-row v-for="(row, index) in 5" :key="index">
              <md-table-cell>Dessert Name</md-table-cell>
              <md-table-cell v-for="(col, index) in 7" :key="index" md-numeric>10</md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>

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
            <md-table-header>
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
            </md-table-header>

            <md-table-body>
              <md-table-row v-for="(row, index) in 5" :key="index" md-auto-select>
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
            </md-table-body>
          </md-table>

          <md-table-pagination></md-table-pagination>
        </md-table-card>

        <md-table-card>
          <md-table-alternate-header>
            <md-button class="md-primary">Remove</md-button>
          </md-table-alternate-header>

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
            <md-table-header>
              <md-table-row>
                <md-table-head md-sort-by="dessert">Dessert (100g serving)</md-table-head>
                <md-table-head md-sort-by="type" width="100px">Type</md-table-head>
                <md-table-head md-sort-by="calories" md-numeric md-tooltip="The total amount of food energy and the given serving size">Calories (g)</md-table-head>
                <md-table-head md-sort-by="fat" md-numeric>Fat (g)</md-table-head>
                <md-table-head md-sort-by="carbs" md-numeric>Carbs (g)</md-table-head>
                <md-table-head>
                  <md-icon>message</md-icon>
                  <span>Comments</span>
                </md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row v-for="(row, index) in 5" :key="index">
                <md-table-cell>Dessert Name</md-table-cell>
                <md-table-cell>
                  <md-select placeholder="Type" :name="'type' + index" :id="'type' + index" v-model="type">
                    <md-option value="Ice Cream">Ice Cream</md-option>
                    <md-option value="Pastry">Pastry</md-option>
                    <md-option value="Other">Other</md-option>
                  </md-select>
                </md-table-cell>
                <md-table-cell v-for="(col, index) in 3" :key="index" md-numeric>10</md-table-cell>
                <md-table-cell>
                  <span>Super tasty</span>
                  <md-button class="md-icon-button">
                    <md-icon>edit</md-icon>
                  </md-button>
                </md-table-cell>
              </md-table-row>
            </md-table-body>
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
  .md-table + .md-table-card,
  .md-table-card + .md-table-card {
    margin-top: 24px;
  }
</style>

<script>
  export default {
    data() {
      return {
        comment: null,
        type: null
      };
    }
  };
</script>
