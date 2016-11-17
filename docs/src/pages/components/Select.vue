<template>
  <demo-page label="Components - Select">
    <div slot="examples">
      <demo-example label="Default" height="350">
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
      </demo-example>

      <demo-example label="Groups &amp; Multiple" height="350">
        <div class="field-group">
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
        </div>

        {{ users }}
      </demo-example>
    </div>

    <div slot="code">
      <demo-example label="Default">
        <code-block lang="xml">
&lt;div class=&quot;field-group&quot;&gt;
  &lt;md-input-container&gt;
    &lt;label for=&quot;movie&quot;&gt;Movie&lt;/label&gt;
    &lt;md-select name=&quot;movie&quot; id=&quot;movie&quot; v-model=&quot;movie&quot;&gt;
      &lt;md-option value=&quot;fight_club&quot;&gt;Fight Club&lt;/md-option&gt;
      &lt;md-option value=&quot;godfather&quot;&gt;Godfather&lt;/md-option&gt;
      &lt;md-option value=&quot;godfather_ii&quot;&gt;Godfather II&lt;/md-option&gt;
      &lt;md-option value=&quot;godfather_iii&quot;&gt;Godfather III&lt;/md-option&gt;
      &lt;md-option value=&quot;godfellas&quot;&gt;Godfellas&lt;/md-option&gt;
      &lt;md-option value=&quot;pulp_fiction&quot;&gt;Pulp Fiction&lt;/md-option&gt;
      &lt;md-option value=&quot;scarface&quot;&gt;Scarface&lt;/md-option&gt;
    &lt;/md-select&gt;
  &lt;/md-input-container&gt;

  &lt;md-input-container&gt;
    &lt;label for=&quot;country&quot;&gt;Country&lt;/label&gt;
    &lt;md-select name=&quot;country&quot; id=&quot;country&quot; v-model=&quot;country&quot;&gt;
      &lt;md-option value=&quot;australia&quot;&gt;Australia&lt;/md-option&gt;
      &lt;md-option value=&quot;brazil&quot;&gt;Brazil&lt;/md-option&gt;
      &lt;md-option value=&quot;japan&quot;&gt;Japan&lt;/md-option&gt;
      &lt;md-option value=&quot;united_states&quot;&gt;United States&lt;/md-option&gt;
    &lt;/md-select&gt;
  &lt;/md-input-container&gt;

  &lt;md-input-container&gt;
    &lt;label for=&quot;font&quot;&gt;Font&lt;/label&gt;
    &lt;md-select name=&quot;font&quot; id=&quot;font&quot; v-model=&quot;font&quot;&gt;
      &lt;md-option value=&quot;arial&quot;&gt;Arial&lt;/md-option&gt;
      &lt;md-option value=&quot;calibri&quot;&gt;Calibri&lt;/md-option&gt;
      &lt;md-option value=&quot;cambria&quot;&gt;Cambria&lt;/md-option&gt;
      &lt;md-option value=&quot;comic_sans&quot;&gt;Comic Sans&lt;/md-option&gt;
      &lt;md-option value=&quot;consolas&quot;&gt;Consolas&lt;/md-option&gt;
      &lt;md-option value=&quot;courier&quot;&gt;Courier&lt;/md-option&gt;
      &lt;md-option value=&quot;droid_sans&quot;&gt;Droid Sans&lt;/md-option&gt;
      &lt;md-option value=&quot;georgia&quot;&gt;Georgia&lt;/md-option&gt;
      &lt;md-option value=&quot;helvetica&quot;&gt;Helvetica&lt;/md-option&gt;
      &lt;md-option value=&quot;impact&quot;&gt;Impact&lt;/md-option&gt;
      &lt;md-option value=&quot;roboto&quot;&gt;Roboto&lt;/md-option&gt;
      &lt;md-option value=&quot;segoe_ui&quot;&gt;Segoe UI&lt;/md-option&gt;
      &lt;md-option value=&quot;times_new_roman&quot;&gt;Times New Roman&lt;/md-option&gt;
      &lt;md-option value=&quot;ubuntu&quot;&gt;Ubuntu&lt;/md-option&gt;
      &lt;md-option value=&quot;verdana&quot;&gt;Verdana&lt;/md-option&gt;
    &lt;/md-select&gt;
  &lt;/md-input-container&gt;
&lt;/div&gt;
        </code-block>
      </demo-example>

      <demo-example label="Groups">
        <code-block lang="xml">
&lt;div class=&quot;field-group&quot;&gt;
  &lt;md-input-container&gt;
    &lt;label for=&quot;food&quot;&gt;Food&lt;/label&gt;
    &lt;md-select name=&quot;food&quot; id=&quot;food&quot; v-model=&quot;food&quot;&gt;
      &lt;md-subheader&gt;Fruits&lt;/md-subheader&gt;
      &lt;md-option value=&quot;apples&quot;&gt;Apples&lt;/md-option&gt;
      &lt;md-option value=&quot;bananas&quot;&gt;Bananas&lt;/md-option&gt;
      &lt;md-option value=&quot;peaches&quot;&gt;Peaches&lt;/md-option&gt;
      &lt;md-option value=&quot;oranges&quot;&gt;Oranges&lt;/md-option&gt;

      &lt;md-subheader&gt;Vegetables&lt;/md-subheader&gt;
      &lt;md-option value=&quot;carrots&quot;&gt;Carrots&lt;/md-option&gt;
      &lt;md-option value=&quot;cucumbers&quot;&gt;Cucumbers&lt;/md-option&gt;

      &lt;md-subheader&gt;Baked Goods&lt;/md-subheader&gt;
      &lt;md-option value=&quot;apple_pie&quot;&gt;Apple Pie&lt;/md-option&gt;
      &lt;md-option value=&quot;chocolate_cake&quot;&gt;Chocolate Cake&lt;/md-option&gt;
    &lt;/md-select&gt;
  &lt;/md-input-container&gt;

  &lt;md-input-container&gt;
    &lt;label for=&quot;users&quot;&gt;Users&lt;/label&gt;
    &lt;md-select name=&quot;users&quot; id=&quot;users&quot; multiple v-model=&quot;users&quot;&gt;
      &lt;md-subheader&gt;Managers&lt;/md-subheader&gt;
      &lt;md-option value=&quot;jim_halpert&quot;&gt;Jim Halpert&lt;/md-option&gt;
      &lt;md-option value=&quot;dwight_schrute&quot;&gt;Dwight Schrute&lt;/md-option&gt;
      &lt;md-option value=&quot;michael_scott&quot;&gt;Michael Scott&lt;/md-option&gt;

      &lt;md-subheader&gt;Employees&lt;/md-subheader&gt;
      &lt;md-option value=&quot;pam_beesly&quot;&gt;Pam Beesly&lt;/md-option&gt;
      &lt;md-option value=&quot;angela_martin&quot;&gt;Angela Martin&lt;/md-option&gt;
      &lt;md-option value=&quot;kelly_kapoor&quot;&gt;Kelly Kapoor&lt;/md-option&gt;
      &lt;md-option value=&quot;ryan_howard&quot;&gt;Ryan Howard&lt;/md-option&gt;
      &lt;md-option value=&quot;kevin_malone&quot;&gt;Kevin Malone&lt;/md-option&gt;
      &lt;md-option value=&quot;creed_bratton&quot;&gt;Creed Bratton&lt;/md-option&gt;
      &lt;md-option value=&quot;oscar_nunez&quot;&gt;Oscar Nunez&lt;/md-option&gt;
      &lt;md-option value=&quot;toby_flenderson&quot;&gt;Toby Flenderson&lt;/md-option&gt;
      &lt;md-option value=&quot;stanley_hudson&quot;&gt;Stanley Hudson&lt;/md-option&gt;
      &lt;md-option value=&quot;meredith_palmer&quot;&gt;Meredith Palmer&lt;/md-option&gt;
      &lt;md-option value=&quot;phyllis_lapin_vance&quot;&gt;Phyllis Lapin-Vance&lt;/md-option&gt;
    &lt;/md-select&gt;
  &lt;/md-input-container&gt;
&lt;/div&gt;
        </code-block>
      </demo-example>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>

<style lang="scss" scoped>
  .field-group {
    display: flex;
  }

  .md-input-container + .md-input-container {
    margin-left: 4px;
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
