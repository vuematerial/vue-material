<template>
  <page-content page-title="Components - Select">
    <docs-component>
      <div slot="description">
        <p>A dropdown button selects between multiple selections. The select displays the current state and a down arrow.</p>
      </div>

      <div slot="api">
        <api-table name="md-select">
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
                <md-table-cell>v-model</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>A required model object to bind the value.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>name</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The name of the select</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>id</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The id of the select</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>disabled</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Disable the input and prevent his actions. Default <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>required</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Apply the required rule to style the label with an "*". Default <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>placeholder</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Sets the placeholder.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-menu-class</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The css class to be applied on the opened select holder</md-table-cell>
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
                <md-table-cell>selected</md-table-cell>
                <md-table-cell>Receives the value of the model</md-table-cell>
                <md-table-cell>Triggered when the model changes.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table name="md-option">
          <p>Displays a single item inside the select.</p>

          <div slot="properties">
            <md-table>
              <md-table-header>
                <md-table-row>
                  <md-table-head>Name</md-table-head>
                  <md-table-head>Type</md-table-head>
                  <md-table-head>Description</md-table-head>
                </md-table-row>
              </md-table-header>

              <md-table-body>
                <md-table-row>
                  <md-table-cell>value</md-table-cell>
                  <md-table-cell><code>String</code></md-table-cell>
                  <md-table-cell>The value of the option to be binded on the v-model</md-table-cell>
                </md-table-row>

                <md-table-row>
                  <md-table-cell>disabled</md-table-cell>
                  <md-table-cell><code>Boolean</code></md-table-cell>
                  <md-table-cell>Disable the button and prevent his actions. Default <code>false</code></md-table-cell>
                </md-table-row>
              </md-table-body>
            </md-table>
          </div>

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
                <md-table-cell>selected</md-table-cell>
                <md-table-cell>Receives the <code>$event</code></md-table-cell>
                <md-table-cell>Triggered when the item receives a click.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div slot="demo">
            <div class="field-group">
              <md-input-container>
                <label for="movie">Movie</label>
                <md-select name="movie" id="movie" v-model="movie">
                  <md-option value="fight_club">Fight Club</md-option>
                  <md-option value="godfather">Godfather</md-option>
                  <md-option value="godfather_ii">Godfather II</md-option>
                  <md-option value="godfather_iii">Godfather III</md-option>
                  <md-option value="godfellas">Godfellas</md-option>
                  <md-option value="pulp_fiction">Pulp Fiction</md-option>
                  <md-option value="scarface">Scarface</md-option>
                </md-select>
              </md-input-container>

              <md-input-container>
                <label for="country">Country</label>
                <md-select name="country" id="country" v-model="country">
                  <md-option value="australia">Australia</md-option>
                  <md-option value="brazil">Brazil</md-option>
                  <md-option value="japan">Japan</md-option>
                  <md-option value="united_states">United States</md-option>
                </md-select>
              </md-input-container>

              <md-input-container>
                <label for="font">Font</label>
                <md-select name="font" id="font" v-model="font">
                  <md-option value="arial">Arial</md-option>
                  <md-option value="calibri">Calibri</md-option>
                  <md-option value="cambria">Cambria</md-option>
                  <md-option value="comic_sans">Comic Sans</md-option>
                  <md-option value="consolas">Consolas</md-option>
                  <md-option value="courier">Courier</md-option>
                  <md-option value="droid_sans">Droid Sans</md-option>
                  <md-option value="georgia">Georgia</md-option>
                  <md-option value="helvetica">Helvetica</md-option>
                  <md-option value="impact">Impact</md-option>
                  <md-option value="roboto">Roboto</md-option>
                  <md-option value="segoe_ui">Segoe UI</md-option>
                  <md-option value="times_new_roman">Times New Roman</md-option>
                  <md-option value="ubuntu">Ubuntu</md-option>
                  <md-option value="verdana">Verdana</md-option>
                </md-select>
              </md-input-container>
            </div>

            <md-button class="md-raised md-primary" @click="setPulpFiction">Set Pulp Fiction</md-button>
          </div>

          <div slot="code">
            <code-block lang="xml">

            </code-block>
          </div>
        </example-box>

        <example-box card-title="Multiple">
          <div class="multiple" slot="demo">
            <md-input-container>
              <label for="food">Food</label>
              <md-select name="food" id="food" v-model="food">
                <md-subheader>Fruits</md-subheader>
                <md-option value="apples">Apples</md-option>
                <md-option value="bananas">Bananas</md-option>
                <md-option value="peaches">Peaches</md-option>
                <md-option value="oranges">Oranges</md-option>

                <md-subheader>Vegetables</md-subheader>
                <md-option value="carrots">Carrots</md-option>
                <md-option value="cucumbers">Cucumbers</md-option>

                <md-subheader>Baked Goods</md-subheader>
                <md-option value="apple_pie">Apple Pie</md-option>
                <md-option value="chocolate_cake">Chocolate Cake</md-option>
              </md-select>
            </md-input-container>

            <md-input-container>
              <label for="users">Users</label>
              <md-select name="users" id="users" multiple v-model="users">
                <md-subheader>Managers</md-subheader>
                <md-option value="jim_halpert">Jim Halpert</md-option>
                <md-option value="dwight_schrute">Dwight Schrute</md-option>
                <md-option value="michael_scott">Michael Scott</md-option>

                <md-subheader>Employees</md-subheader>
                <md-option value="pam_beesly">Pam Beesly</md-option>
                <md-option value="angela_martin">Angela Martin</md-option>
                <md-option value="kelly_kapoor">Kelly Kapoor</md-option>
                <md-option value="ryan_howard">Ryan Howard</md-option>
                <md-option value="kevin_malone">Kevin Malone</md-option>
                <md-option value="creed_bratton">Creed Bratton</md-option>
                <md-option value="oscar_nunez">Oscar Nunez</md-option>
                <md-option value="toby_flenderson">Toby Flenderson</md-option>
                <md-option value="stanley_hudson">Stanley Hudson</md-option>
                <md-option value="meredith_palmer">Meredith Palmer</md-option>
                <md-option value="phyllis_lapin_vance">Phyllis Lapin-Vance</md-option>
              </md-select>
            </md-input-container>

            <div>Selected users: {{ users }}</div>
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
  .field-group {
    display: flex;
  }

  .md-input-container + .md-input-container {
    margin-left: 4px;
  }

  .multiple {
    height: 300px;
  }
</style>

<script>
  export default {
    data: () => ({
      movie: 'godfather',
      country: '',
      font: '',
      food: '',
      users: [
        'jim_halpert',
        'michael_scott'
      ]
    }),
    methods: {
      setPulpFiction() {
        this.movie = 'pulp_fiction';
      }
    }
  };
</script>
