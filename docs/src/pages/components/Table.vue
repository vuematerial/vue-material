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
      <demo-example label="Default">
<code-block lang="xml">
&lt;md-table md-sort=&quot;calories&quot;&gt;
  &lt;md-table-header&gt;
    &lt;md-table-row&gt;
      &lt;md-table-head md-sort-by=&quot;dessert&quot;&gt;Dessert (100g serving)&lt;/md-table-head&gt;
      &lt;md-table-head md-sort-by=&quot;calories&quot; md-numeric md-tooltip=&quot;The total amount of food energy and the given serving size&quot;&gt;Calories (g)&lt;/md-table-head&gt;
      &lt;md-table-head md-sort-by=&quot;fat&quot; md-numeric&gt;Fat (g)&lt;/md-table-head&gt;
      &lt;md-table-head md-sort-by=&quot;carbs&quot; md-numeric&gt;Carbs (g)&lt;/md-table-head&gt;
      &lt;md-table-head md-sort-by=&quot;protein&quot; md-numeric&gt;Protein (g)&lt;/md-table-head&gt;
      &lt;md-table-head md-sort-by=&quot;sodium&quot; md-numeric&gt;Sodium (mg)&lt;/md-table-head&gt;
      &lt;md-table-head md-sort-by=&quot;calcium&quot; md-numeric&gt;Calcium (%)&lt;/md-table-head&gt;
      &lt;md-table-head md-sort-by=&quot;iron&quot; md-numeric&gt;Iron (%)&lt;/md-table-head&gt;
    &lt;/md-table-row&gt;
  &lt;/md-table-header&gt;

  &lt;md-table-body&gt;
    &lt;md-table-row v-for=&quot;(row, index) in 5&quot; :key=&quot;index&quot;&gt;
      &lt;md-table-cell&gt;Dessert Name&lt;/md-table-cell&gt;
      &lt;md-table-cell v-for=&quot;(col, index) in 7&quot; :key=&quot;index&quot; md-numeric&gt;10&lt;/md-table-cell&gt;
    &lt;/md-table-row&gt;
  &lt;/md-table-body&gt;
&lt;/md-table&gt;
</code-block>
      </demo-example>

      <demo-example label="Within cards with Pagination and Inline Edit">
<code-block lang="xml">
&lt;md-table-card&gt;
  &lt;md-toolbar&gt;
    &lt;h1 class=&quot;md-title&quot;&gt;Nutrition&lt;/h1&gt;
    &lt;md-button class=&quot;md-icon-button&quot;&gt;
      &lt;md-icon&gt;filter_list&lt;/md-icon&gt;
    &lt;/md-button&gt;

    &lt;md-button class=&quot;md-icon-button&quot;&gt;
      &lt;md-icon&gt;search&lt;/md-icon&gt;
    &lt;/md-button&gt;
  &lt;/md-toolbar&gt;

  &lt;md-table md-sort=&quot;dessert&quot; md-sort-type=&quot;desc&quot; @select=&quot;onSelect&quot; @sort=&quot;onSort&quot;&gt;
    &lt;md-table-header&gt;
      &lt;md-table-row&gt;
        &lt;md-table-head md-sort-by=&quot;dessert&quot;&gt;Dessert (100g serving)&lt;/md-table-head&gt;
        &lt;md-table-head md-sort-by=&quot;calories&quot; md-numeric md-tooltip=&quot;The total amount of food energy and the given serving size&quot;&gt;Calories (g)&lt;/md-table-head&gt;
        &lt;md-table-head md-sort-by=&quot;fat&quot; md-numeric&gt;Fat (g)&lt;/md-table-head&gt;
        &lt;md-table-head md-sort-by=&quot;carbs&quot; md-numeric&gt;Carbs (g)&lt;/md-table-head&gt;
        &lt;md-table-head md-sort-by=&quot;protein&quot; md-numeric&gt;Protein (g)&lt;/md-table-head&gt;
        &lt;md-table-head&gt;
          &lt;md-icon&gt;message&lt;/md-icon&gt;
          &lt;span&gt;Comments&lt;/span&gt;
        &lt;/md-table-head&gt;
      &lt;/md-table-row&gt;
    &lt;/md-table-header&gt;

    &lt;md-table-body&gt;
      &lt;md-table-row v-for=&quot;(row, rowIndex) in nutrition&quot; :key=&quot;rowIndex&quot; :md-item=&quot;row&quot; md-auto-select md-selection&gt;
        &lt;md-table-cell v-for=&quot;(column, columnIndex) in row&quot; :key=&quot;columnIndex&quot; :md-numeric=&quot;columnIndex !== &#039;dessert&#039; &amp;&amp; columnIndex !== &#039;comment&#039;&quot; v-if=&quot;columnIndex !== &#039;type&#039;&quot;&gt;
          &lt;md-table-edit
            :md-name=&quot;&#039;comment&#039; + columnIndex&quot;
            :md-id=&quot;&#039;comment&#039; + columnIndex&quot;
            md-placeholder=&quot;Add a comment&quot;
            md-maxlength=&quot;120&quot;
            v-model=&quot;nutrition[rowIndex].comment&quot;
            v-if=&quot;columnIndex === &#039;comment&#039;&quot;&gt;&lt;/md-table-edit&gt;

          &lt;span v-if=&quot;columnIndex !== &#039;comment&#039;&quot;&gt;{{ column }}&lt;/span&gt;
        &lt;/md-table-cell&gt;
      &lt;/md-table-row&gt;
    &lt;/md-table-body&gt;
  &lt;/md-table&gt;

  &lt;md-table-pagination
    md-size=&quot;10&quot;
    md-total=&quot;5&quot;
    md-page=&quot;1&quot;
    md-label=&quot;Rows&quot;
    md-separator=&quot;of&quot;
    :md-page-options=&quot;[5, 10, 25, 50]&quot;
    @pagination=&quot;onPagination&quot;&gt;&lt;/md-table-pagination&gt;
&lt;/md-table-card&gt;
</code-block>

<code-block lang="javscript">
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
</code-block>
      </demo-example>

      <demo-example label="Inline Menus and Edit Icon">
<code-block lang="xml">
&lt;md-table-card&gt;
  &lt;md-toolbar&gt;
    &lt;h1 class=&quot;md-title&quot;&gt;Nutrition&lt;/h1&gt;
    &lt;md-button class=&quot;md-icon-button&quot;&gt;
      &lt;md-icon&gt;filter_list&lt;/md-icon&gt;
    &lt;/md-button&gt;

    &lt;md-button class=&quot;md-icon-button&quot;&gt;
      &lt;md-icon&gt;search&lt;/md-icon&gt;
    &lt;/md-button&gt;
  &lt;/md-toolbar&gt;

  &lt;md-table-alternate-header md-selected-label=&quot;selected&quot;&gt;
    &lt;md-button class=&quot;md-icon-button&quot;&gt;
      &lt;md-icon&gt;delete&lt;/md-icon&gt;
    &lt;/md-button&gt;

    &lt;md-button class=&quot;md-icon-button&quot;&gt;
      &lt;md-icon&gt;more_vert&lt;/md-icon&gt;
    &lt;/md-button&gt;
  &lt;/md-table-alternate-header&gt;

  &lt;md-table md-sort=&quot;calories&quot;&gt;
    &lt;md-table-header&gt;
      &lt;md-table-row&gt;
        &lt;md-table-head md-sort-by=&quot;dessert&quot;&gt;Dessert (100g serving)&lt;/md-table-head&gt;
        &lt;md-table-head md-sort-by=&quot;type&quot; width=&quot;100px&quot;&gt;Type&lt;/md-table-head&gt;
        &lt;md-table-head md-sort-by=&quot;calories&quot; md-numeric md-tooltip=&quot;The total amount of food energy and the given serving size&quot;&gt;Calories (g)&lt;/md-table-head&gt;
        &lt;md-table-head md-sort-by=&quot;fat&quot; md-numeric&gt;Fat (g)&lt;/md-table-head&gt;
        &lt;md-table-head md-sort-by=&quot;carbs&quot; md-numeric&gt;Carbs (g)&lt;/md-table-head&gt;
        &lt;md-table-head md-sort-by=&quot;protein&quot; md-numeric&gt;Protein (g)&lt;/md-table-head&gt;
        &lt;md-table-head&gt;
          &lt;md-icon&gt;message&lt;/md-icon&gt;
          &lt;span&gt;Comments&lt;/span&gt;
        &lt;/md-table-head&gt;
      &lt;/md-table-row&gt;
    &lt;/md-table-header&gt;

    &lt;md-table-body&gt;
      &lt;md-table-row v-for=&quot;(row, rowIndex) in nutrition&quot; :key=&quot;rowIndex&quot; :md-item=&quot;row&quot; md-selection&gt;
        &lt;md-table-cell v-for=&quot;(column, columnIndex) in row&quot; :key=&quot;columnIndex&quot; :md-numeric=&quot;columnIndex !== &#039;dessert&#039; &amp;&amp; columnIndex !== &#039;comment&#039; &amp;&amp; columnIndex !== &#039;type&#039;&quot;&gt;
          &lt;span v-if=&quot;columnIndex === &#039;comment&#039;&quot;&gt;{{ column }}&lt;/span&gt;

          &lt;md-button class=&quot;md-icon-button&quot; v-if=&quot;columnIndex === &#039;comment&#039;&quot;&gt;
            &lt;md-icon&gt;edit&lt;/md-icon&gt;
          &lt;/md-button&gt;

          &lt;md-select
            placeholder=&quot;Type&quot;
            :name=&quot;&#039;type&#039; + columnIndex&quot;
            :id=&quot;&#039;type&#039; + columnIndex&quot;
            v-model=&quot;nutrition[rowIndex].type&quot;
            v-if=&quot;columnIndex === &#039;type&#039;&quot;&gt;
            &lt;md-option value=&quot;ice_cream&quot;&gt;Ice Cream&lt;/md-option&gt;
            &lt;md-option value=&quot;pastry&quot;&gt;Pastry&lt;/md-option&gt;
            &lt;md-option value=&quot;other&quot;&gt;Other&lt;/md-option&gt;
          &lt;/md-select&gt;

          &lt;span v-if=&quot;columnIndex !== &#039;type&#039; &amp;&amp; columnIndex !== &#039;comment&#039;&quot;&gt;{{ column }}&lt;/span&gt;
        &lt;/md-table-cell&gt;
      &lt;/md-table-row&gt;
    &lt;/md-table-body&gt;
  &lt;/md-table&gt;
&lt;/md-table-card&gt;
</code-block>
      </demo-example>
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
