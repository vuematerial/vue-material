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
      </demo-example>

      <demo-example label="Within cards with Pagination and Inline Edit">
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

          <md-table md-sort="dessert" md-sort-type="desc" @select="onSelect" @sort="onSort">
            <md-table-header>
              <md-table-row>
                <md-table-head md-sort-by="dessert">Dessert (100g serving)</md-table-head>
                <md-table-head md-sort-by="calories" md-numeric md-tooltip="The total amount of food energy and the given serving size">Calories (g)</md-table-head>
                <md-table-head md-sort-by="fat" md-numeric>Fat (g)</md-table-head>
                <md-table-head md-sort-by="carbs" md-numeric>Carbs (g)</md-table-head>
                <md-table-head md-sort-by="protein" md-numeric>Protein (g)</md-table-head>
                <md-table-head>
                  <md-icon>message</md-icon>
                  <span>Comments</span>
                </md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row v-for="(row, rowIndex) in nutrition" :key="rowIndex" :md-item="row" md-auto-select md-selection>
                <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex" :md-numeric="columnIndex !== 'dessert' && columnIndex !== 'comment'" v-if="columnIndex !== 'type'">
                  <md-table-edit
                    :md-name="'comment' + columnIndex"
                    :md-id="'comment' + columnIndex"
                    md-placeholder="Add a comment"
                    md-maxlength="120"
                    v-model="nutrition[rowIndex].comment"
                    v-if="columnIndex === 'comment'"></md-table-edit>

                  <span v-if="columnIndex !== 'comment'">{{ column }}</span>
                </md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>

          <md-table-pagination
            md-size="10"
            md-total="5"
            md-page="1"
            md-label="Rows"
            md-separator="of"
            :md-page-options="[5, 10, 25, 50]"
            @pagination="onPagination"></md-table-pagination>
        </md-table-card>

        <div class="output">
          <h2 class="md-title">Selected Data</h2>
          <pre>{{ selectedData }}</pre>
        </div>

        <div class="output">
          <h2 class="md-title">Current Sort</h2>
          <pre>{{ sort }}</pre>
        </div>

        <div class="output">
          <h2 class="md-title">Current Pagination</h2>
          <pre>{{ page }}</pre>
        </div>
      </demo-example>

      <demo-example label="Inline Menus and Edit Icon">
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

          <md-table-alternate-header md-selected-label="selected">
            <md-button class="md-icon-button">
              <md-icon>delete</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </md-table-alternate-header>

          <md-table md-sort="calories">
            <md-table-header>
              <md-table-row>
                <md-table-head md-sort-by="dessert">Dessert (100g serving)</md-table-head>
                <md-table-head md-sort-by="type" width="100px">Type</md-table-head>
                <md-table-head md-sort-by="calories" md-numeric md-tooltip="The total amount of food energy and the given serving size">Calories (g)</md-table-head>
                <md-table-head md-sort-by="fat" md-numeric>Fat (g)</md-table-head>
                <md-table-head md-sort-by="carbs" md-numeric>Carbs (g)</md-table-head>
                <md-table-head md-sort-by="protein" md-numeric>Protein (g)</md-table-head>
                <md-table-head>
                  <md-icon>message</md-icon>
                  <span>Comments</span>
                </md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row v-for="(row, rowIndex) in nutrition" :key="rowIndex" :md-item="row" md-selection>
                <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex" :md-numeric="columnIndex !== 'dessert' && columnIndex !== 'comment' && columnIndex !== 'type'">
                  <span v-if="columnIndex === 'comment'">{{ column }}</span>

                  <md-button class="md-icon-button" v-if="columnIndex === 'comment'">
                    <md-icon>edit</md-icon>
                  </md-button>

                  <md-select
                    placeholder="Type"
                    :name="'type' + columnIndex"
                    :id="'type' + columnIndex"
                    v-model="nutrition[rowIndex].type"
                    v-if="columnIndex === 'type'">
                    <md-option value="ice_cream">Ice Cream</md-option>
                    <md-option value="pastry">Pastry</md-option>
                    <md-option value="other">Other</md-option>
                  </md-select>

                  <span v-if="columnIndex !== 'type' && columnIndex !== 'comment'">{{ column }}</span>
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

  .output {
    margin-top: 24px;

    .md-title {
      font-size: 20px;
    }
  }
</style>

<script>
  export default {
    data: () => ({
      nutrition: [
        {
          dessert: 'Frozen yogurt',
          type: 'ice_cream',
          calories: '159',
          fat: '6.0',
          carbs: '24',
          protein: '4.0',
          comment: 'Icy'
        },
        {
          dessert: 'Ice cream sandwich',
          type: 'ice_cream',
          calories: '237',
          fat: '9.0',
          carbs: '37',
          protein: '4.3',
          comment: 'Super Tasty'
        },
        {
          dessert: 'Eclair',
          type: 'pastry',
          calories: '262',
          fat: '16.0',
          carbs: '24',
          protein: '6.0',
          comment: ''
        },
        {
          dessert: 'Cupcake',
          type: 'pastry',
          calories: '305',
          fat: '3.7',
          carbs: '67',
          protein: '4.3',
          comment: ''
        },
        {
          dessert: 'Gingerbread',
          type: 'other',
          calories: '356',
          fat: '16.0',
          carbs: '49',
          protein: '3.9',
          comment: ''
        }
      ],
      selectedData: [],
      sort: {},
      page: {}
    }),
    methods: {
      onSelect(data) {
        this.selectedData = data;
        this.$forceUpdate();
      },
      onSort(sort) {
        this.sort = sort;
      },
      onPagination(page) {
        this.page = page;
      }
    }
  };
</script>
