<template>
  <page-content page-title="Components - Table">
    <docs-component>
      <div slot="description">
        <p>Data tables display sets of raw data. They usually appear in desktop enterprise products. Data tables may be embedded on a surface, such as a card.</p>
      </div>

      <div slot="api">
        <api-table name="md-table">
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
                <md-table-cell>md-sort</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Property name to match for sorting.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-sort-type</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The order to apply on the sort: <br>Values: <code>asc</code> | <code>desc</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>

          <md-table slot="events">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Value</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>sort</md-table-cell>
                <md-table-cell>Receive the sort object. Example: <br><code>{ name: 'calories', type: 'asc' }</code></md-table-cell>
                <md-table-cell>Triggered when a column is sorted.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>select</md-table-cell>
                <md-table-cell>Receive the all the selected rows as a <code>Object</code></md-table-cell>
                <md-table-cell>Triggered every time a row is selected.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table name="md-table-card">
          <p>Used to create tables inside cards. Optional.</p>
          <p>No options available</p>
        </api-table>

        <api-table name="md-table-header">
          <p>Used like a regular <code>thead</code>. Required.</p>
          <p>No options available</p>
        </api-table>

        <api-table name="md-table-body">
          <p>Used like a regular <code>tbody</code>. Required.</p>
          <p>No options available</p>
        </api-table>

        <api-table name="md-table-row">
          <p>Used like a regular <code>tr</code>. Required.</p>
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
                <md-table-cell>md-selection</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Enable selection inside a particular row. Only works inside <code>md-table-body</code>. Default <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-auto-select</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Click in any area of the row to select it. Only works inside <code>md-table-body</code>. Default <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-item</md-table-cell>
                <md-table-cell><code>Object</code></md-table-cell>
                <md-table-cell>The single item to be returned when the row is selected. Only works inside <code>md-table-body</code>.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table name="md-table-head">
          <p>Used like a regular <code>th</code>. Required.</p>
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
                <md-table-cell>md-numeric</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Align the header content to the right. Default <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-sort-by</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The property name to be returned after applying the sort order on that particular column.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-tooltip</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Text displayed inside a tooltip to provide definitions to column headers.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table name="md-table-cell">
          <p>Used like a regular <code>td</code>. Required.</p>
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
                <md-table-cell>md-numeric</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Align the cell content to the right. Default <code>false</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table name="md-table-pagination">
          <p>The pagination element doesn't accept any content inside.</p>
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
                <md-table-cell>md-size</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Set the amount of rows displayed. Required. Default <code>10</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-page-options</md-table-cell>
                <md-table-cell><code>Array | Boolean</code></md-table-cell>
                <md-table-cell>Set the values inside the page amout selector. Default <code>[10, 25, 50, 100]</code> <br>When false this flag will hide the page selector.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-page</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Current page of the table pagination. Required. Default <code>1</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-total</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Total of items in the collection. This will be used to calculate the amount of pages left. Default <code>Many</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-label</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Text to be shown on the left of the page selector. Default <code>Rows per page</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-separator</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Text to be shown on the left of the page selector. Default <code>of</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table name="md-table-alternate-header">
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
                <md-table-cell>md-selected-label</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The text to be shown after the amount of items selected.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Plain">
          <div slot="demo">
            <md-table v-once>
              <md-table-header>
                <md-table-row>
                  <md-table-head>Dessert (100g serving)</md-table-head>
                  <md-table-head md-numeric>Calories (g)</md-table-head>
                  <md-table-head md-numeric>Fat (g)</md-table-head>
                  <md-table-head md-numeric>Carbs (g)</md-table-head>
                  <md-table-head md-numeric>Protein (g)</md-table-head>
                </md-table-row>
              </md-table-header>

              <md-table-body>
                <md-table-row v-for="(row, index) in 5" :key="index">
                  <md-table-cell>Dessert Name</md-table-cell>
                  <md-table-cell v-for="(col, index) in 4" :key="index" md-numeric>10</md-table-cell>
                </md-table-row>
              </md-table-body>
            </md-table>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-table v-once&gt;
                &lt;md-table-header&gt;
                  &lt;md-table-row&gt;
                    &lt;md-table-head&gt;Dessert (100g serving)&lt;/md-table-head&gt;
                    &lt;md-table-head md-numeric&gt;Calories (g)&lt;/md-table-head&gt;
                    &lt;md-table-head md-numeric&gt;Fat (g)&lt;/md-table-head&gt;
                    &lt;md-table-head md-numeric&gt;Carbs (g)&lt;/md-table-head&gt;
                    &lt;md-table-head md-numeric&gt;Protein (g)&lt;/md-table-head&gt;
                  &lt;/md-table-row&gt;
                &lt;/md-table-header&gt;

                &lt;md-table-body&gt;
                  &lt;md-table-row v-for=&quot;(row, index) in 5&quot; :key=&quot;index&quot;&gt;
                    &lt;md-table-cell&gt;Dessert Name&lt;/md-table-cell&gt;
                    &lt;md-table-cell v-for=&quot;(col, index) in 4&quot; :key=&quot;index&quot; md-numeric&gt;10&lt;/md-table-cell&gt;
                  &lt;/md-table-row&gt;
                &lt;/md-table-body&gt;
              &lt;/md-table&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Sort">
          <div slot="demo">
            <md-table md-sort="calories">
              <md-table-header>
                <md-table-row>
                  <md-table-head md-sort-by="dessert">Dessert (100g serving)</md-table-head>
                  <md-table-head md-sort-by="calories" md-numeric md-tooltip="The total amount of food energy and the given serving size">Calories (g)</md-table-head>
                  <md-table-head md-sort-by="fat" md-numeric>Fat (g)</md-table-head>
                  <md-table-head md-sort-by="carbs" md-numeric>Carbs (g)</md-table-head>
                  <md-table-head md-sort-by="protein" md-numeric>Protein (g)</md-table-head>
                </md-table-row>
              </md-table-header>

              <md-table-body>
                <md-table-row v-for="(row, index) in 5" :key="index">
                  <md-table-cell>Dessert Name</md-table-cell>
                  <md-table-cell v-for="(col, index) in 4" :key="index" md-numeric>10</md-table-cell>
                </md-table-row>
              </md-table-body>
            </md-table>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-table md-sort=&quot;calories&quot;&gt;
                &lt;md-table-header&gt;
                  &lt;md-table-row&gt;
                    &lt;md-table-head md-sort-by=&quot;dessert&quot;&gt;Dessert (100g serving)&lt;/md-table-head&gt;
                    &lt;md-table-head md-sort-by=&quot;calories&quot; md-numeric md-tooltip=&quot;The total amount of food energy and the given serving size&quot;&gt;Calories (g)&lt;/md-table-head&gt;
                    &lt;md-table-head md-sort-by=&quot;fat&quot; md-numeric&gt;Fat (g)&lt;/md-table-head&gt;
                    &lt;md-table-head md-sort-by=&quot;carbs&quot; md-numeric&gt;Carbs (g)&lt;/md-table-head&gt;
                    &lt;md-table-head md-sort-by=&quot;protein&quot; md-numeric&gt;Protein (g)&lt;/md-table-head&gt;
                  &lt;/md-table-row&gt;
                &lt;/md-table-header&gt;

                &lt;md-table-body&gt;
                  &lt;md-table-row v-for=&quot;(row, index) in 5&quot; :key=&quot;index&quot;&gt;
                    &lt;md-table-cell&gt;Dessert Name&lt;/md-table-cell&gt;
                    &lt;md-table-cell v-for=&quot;(col, index) in 4&quot; :key=&quot;index&quot; md-numeric&gt;10&lt;/md-table-cell&gt;
                  &lt;/md-table-row&gt;
                &lt;/md-table-body&gt;
              &lt;/md-table&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Within cards with pagination">
          <div slot="demo">
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
                    <md-table-head>
                      <md-icon>message</md-icon>
                      <span>Comments</span>
                    </md-table-head>
                  </md-table-row>
                </md-table-header>

                <md-table-body>
                  <md-table-row v-for="(row, rowIndex) in nutrition" :key="rowIndex" :md-item="row" md-auto-select md-selection>
                    <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex" :md-numeric="columnIndex !== 'dessert' && columnIndex !== 'comment'" v-if="columnIndex !== 'type'">
                      {{ column }}
                    </md-table-cell>
                  </md-table-row>
                </md-table-body>
              </md-table>

              <md-table-pagination
                md-size="5"
                md-total="10"
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
          </div>

          <div slot="code">
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
                      &lt;md-table-head&gt;
                        &lt;md-icon&gt;message&lt;/md-icon&gt;
                        &lt;span&gt;Comments&lt;/span&gt;
                      &lt;/md-table-head&gt;
                    &lt;/md-table-row&gt;
                  &lt;/md-table-header&gt;

                  &lt;md-table-body&gt;
                    &lt;md-table-row v-for=&quot;(row, rowIndex) in nutrition&quot; :key=&quot;rowIndex&quot; :md-item=&quot;row&quot; md-auto-select md-selection&gt;
                      &lt;md-table-cell v-for=&quot;(column, columnIndex) in row&quot; :key=&quot;columnIndex&quot; :md-numeric=&quot;columnIndex !== &#039;dessert&#039; &amp;&amp; columnIndex !== &#039;comment&#039;&quot; v-if=&quot;columnIndex !== &#039;type&#039;&quot;&gt;
                        {{ '{{ column }\}' }}
                      &lt;/md-table-cell&gt;
                    &lt;/md-table-row&gt;
                  &lt;/md-table-body&gt;
                &lt;/md-table&gt;

                &lt;md-table-pagination
                  md-size=&quot;5&quot;
                  md-total=&quot;10&quot;
                  md-page=&quot;1&quot;
                  md-label=&quot;Rows&quot;
                  md-separator=&quot;of&quot;
                  :md-page-options=&quot;[5, 10, 25, 50]&quot;
                  @pagination=&quot;onPagination&quot;&gt;&lt;/md-table-pagination&gt;
              &lt;/md-table-card&gt;
            </code-block>

            <code-block lang="javascript">
              export default {
                data: () => ({
                  nutrition: [
                    {
                      dessert: 'Frozen yogurt',
                      type: 'ice_cream',
                      calories: '159',
                      fat: '6.0',
                      comment: 'Icy'
                    },
                    {
                      dessert: 'Ice cream sandwich',
                      type: 'ice_cream',
                      calories: '237',
                      fat: '9.0',
                      comment: 'Super Tasty'
                    },
                    {
                      dessert: 'Eclair',
                      type: 'pastry',
                      calories: '262',
                      fat: '16.0',
                      comment: ''
                    },
                    {
                      dessert: 'Cupcake',
                      type: 'pastry',
                      calories: '305',
                      fat: '3.7',
                      comment: ''
                    },
                    {
                      dessert: 'Gingerbread',
                      type: 'other',
                      calories: '356',
                      fat: '16.0',
                      comment: ''
                    }
                  ],
                })
              }
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Inline menus, edit icon and alternate headers">
          <div slot="demo">
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
          </div>

          <div slot="code">
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
                      &lt;md-table-head&gt;
                        &lt;md-icon&gt;message&lt;/md-icon&gt;
                        &lt;span&gt;Comments&lt;/span&gt;
                      &lt;/md-table-head&gt;
                    &lt;/md-table-row&gt;
                  &lt;/md-table-header&gt;

                  &lt;md-table-body&gt;
                    &lt;md-table-row v-for=&quot;(row, rowIndex) in nutrition&quot; :key=&quot;rowIndex&quot; :md-item=&quot;row&quot; md-selection&gt;
                      &lt;md-table-cell v-for=&quot;(column, columnIndex) in row&quot; :key=&quot;columnIndex&quot; :md-numeric=&quot;columnIndex !== &#039;dessert&#039; &amp;&amp; columnIndex !== &#039;comment&#039; &amp;&amp; columnIndex !== &#039;type&#039;&quot;&gt;
                        &lt;span v-if=&quot;columnIndex === &#039;comment&#039;&quot;&gt;{{ '{{ column }\}' }}&lt;/span&gt;

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

                        &lt;span v-if=&quot;columnIndex !== &#039;type&#039; &amp;&amp; columnIndex !== &#039;comment&#039;&quot;&gt;{{ '{{ column }\}' }}&lt;/span&gt;
                      &lt;/md-table-cell&gt;
                    &lt;/md-table-row&gt;
                  &lt;/md-table-body&gt;
                &lt;/md-table&gt;
              &lt;/md-table-card&gt;
            </code-block>

            <code-block lang="javascript">
              export default {
                data: () => ({
                  nutrition: [
                    {
                      dessert: 'Frozen yogurt',
                      type: 'ice_cream',
                      calories: '159',
                      fat: '6.0',
                      comment: 'Icy'
                    },
                    {
                      dessert: 'Ice cream sandwich',
                      type: 'ice_cream',
                      calories: '237',
                      fat: '9.0',
                      comment: 'Super Tasty'
                    },
                    {
                      dessert: 'Eclair',
                      type: 'pastry',
                      calories: '262',
                      fat: '16.0',
                      comment: ''
                    },
                    {
                      dessert: 'Cupcake',
                      type: 'pastry',
                      calories: '305',
                      fat: '3.7',
                      comment: ''
                    },
                    {
                      dessert: 'Gingerbread',
                      type: 'other',
                      calories: '356',
                      fat: '16.0',
                      comment: ''
                    }
                  ],
                })
              }
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="sass" scoped>
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
          comment: 'Icy'
        },
        {
          dessert: 'Ice cream sandwich',
          type: 'ice_cream',
          calories: '237',
          fat: '9.0',
          comment: 'Super Tasty'
        },
        {
          dessert: 'Eclair',
          type: 'pastry',
          calories: '262',
          fat: '16.0',
          comment: ''
        },
        {
          dessert: 'Cupcake',
          type: 'pastry',
          calories: '305',
          fat: '3.7',
          comment: ''
        },
        {
          dessert: 'Gingerbread',
          type: 'other',
          calories: '356',
          fat: '16.0',
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
