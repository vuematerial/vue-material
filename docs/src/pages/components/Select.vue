<template>
  <demo-page label="Components - Select">
    <div slot="examples">
      <demo-example label="Default" height="350">
        <div class="field-group">
          <md-input-container>
            <label for="movie">Movie</label>
            <md-select name="movie" id="movie" v-model="movie">
              <md-option value="Fight Club">Fight Club</md-option>
              <md-option value="Godfather II">Godfather II</md-option>
              <md-option value="Godfather III">Godfather III</md-option>
              <md-option value="Godfather">Godfather</md-option>
              <md-option value="Godfellas">Godfellas</md-option>
              <md-option value="Pulp Fiction">Pulp Fiction</md-option>
              <md-option value="Scarface">Scarface</md-option>
            </md-select>
          </md-input-container>

          <md-input-container>
            <label for="country">Country</label>
            <md-select name="country" id="country" v-model="country">
              <md-option value="Australia">Australia</md-option>
              <md-option value="Brazil">Brazil</md-option>
              <md-option value="Japan">Japan</md-option>
              <md-option value="United States">United States</md-option>
            </md-select>
          </md-input-container>

          <md-input-container>
            <label for="font">Font</label>
            <md-select name="font" id="font" v-model="font">
              <md-option value="Arial">Arial</md-option>
              <md-option value="Calibri">Calibri</md-option>
              <md-option value="Cambria">Cambria</md-option>
              <md-option value="Comic Sans">Comic Sans</md-option>
              <md-option value="Consolas">Consolas</md-option>
              <md-option value="Courier">Courier</md-option>
              <md-option value="Droid Sans">Droid Sans</md-option>
              <md-option value="Georgia">Georgia</md-option>
              <md-option value="Helvetica">Helvetica</md-option>
              <md-option value="Impact">Impact</md-option>
              <md-option value="Roboto">Roboto</md-option>
              <md-option value="Segoe UI">Segoe UI</md-option>
              <md-option value="Times New Roman">Times New Roman</md-option>
              <md-option value="Ubuntu">Ubuntu</md-option>
              <md-option value="Verdana">Verdana</md-option>
            </md-select>
          </md-input-container>
        </div>
      </demo-example>

      <demo-example label="Groups" height="350">
        <div class="field-group">
          <md-input-container>
            <label for="food">Food</label>
            <md-select name="food" id="food" v-model="food">
              <md-subheader>Fruits</md-subheader>
              <md-option value="Apples">Apples</md-option>
              <md-option value="Bananas">Bananas</md-option>
              <md-option value="Peaches">Peaches</md-option>
              <md-option value="Oranges">Oranges</md-option>

              <md-subheader>Vegetables</md-subheader>
              <md-option value="Carrots">Carrots</md-option>
              <md-option value="Cucumbers">Cucumbers</md-option>

              <md-subheader>Baked Goods</md-subheader>
              <md-option value="Apple Pie">Apple Pie</md-option>
              <md-option value="Chocolate Cake">Chocolate Cake</md-option>
            </md-select>
          </md-input-container>
        </div>
      </demo-example>
    </div>

    <div slot="code">
      <demo-example label="Default">
        <code-block lang="xml">
&lt;div class=&quot;field-group&quot;&gt;
  &lt;md-input-container&gt;
    &lt;label for=&quot;movie&quot;&gt;Movie&lt;/label&gt;
    &lt;md-select name=&quot;movie&quot; id=&quot;movie&quot; v-model=&quot;movie&quot;&gt;
      &lt;md-option value=&quot;Fight Club&quot;&gt;Fight Club&lt;/md-option&gt;
      &lt;md-option value=&quot;Godfather II&quot;&gt;Godfather II&lt;/md-option&gt;
      &lt;md-option value=&quot;Godfather III&quot;&gt;Godfather III&lt;/md-option&gt;
      &lt;md-option value=&quot;Godfather&quot;&gt;Godfather&lt;/md-option&gt;
      &lt;md-option value=&quot;Godfellas&quot;&gt;Godfellas&lt;/md-option&gt;
      &lt;md-option value=&quot;Pulp Fiction&quot;&gt;Pulp Fiction&lt;/md-option&gt;
      &lt;md-option value=&quot;Scarface&quot;&gt;Scarface&lt;/md-option&gt;
    &lt;/md-select&gt;
  &lt;/md-input-container&gt;

  &lt;md-input-container&gt;
    &lt;label for=&quot;country&quot;&gt;Country&lt;/label&gt;
    &lt;md-select name=&quot;country&quot; id=&quot;country&quot; v-model=&quot;country&quot;&gt;
      &lt;md-option value=&quot;Australia&quot;&gt;Australia&lt;/md-option&gt;
      &lt;md-option value=&quot;Brazil&quot;&gt;Brazil&lt;/md-option&gt;
      &lt;md-option value=&quot;Japan&quot;&gt;Japan&lt;/md-option&gt;
      &lt;md-option value=&quot;United States&quot;&gt;United States&lt;/md-option&gt;
    &lt;/md-select&gt;
  &lt;/md-input-container&gt;

  &lt;md-input-container&gt;
    &lt;label for=&quot;font&quot;&gt;Font&lt;/label&gt;
    &lt;md-select name=&quot;font&quot; id=&quot;font&quot; v-model=&quot;font&quot;&gt;
      &lt;md-option value=&quot;Arial&quot;&gt;Arial&lt;/md-option&gt;
      &lt;md-option value=&quot;Calibri&quot;&gt;Calibri&lt;/md-option&gt;
      &lt;md-option value=&quot;Cambria&quot;&gt;Cambria&lt;/md-option&gt;
      &lt;md-option value=&quot;Comic Sans&quot;&gt;Comic Sans&lt;/md-option&gt;
      &lt;md-option value=&quot;Consolas&quot;&gt;Consolas&lt;/md-option&gt;
      &lt;md-option value=&quot;Courier&quot;&gt;Courier&lt;/md-option&gt;
      &lt;md-option value=&quot;Droid Sans&quot;&gt;Droid Sans&lt;/md-option&gt;
      &lt;md-option value=&quot;Georgia&quot;&gt;Georgia&lt;/md-option&gt;
      &lt;md-option value=&quot;Helvetica&quot;&gt;Helvetica&lt;/md-option&gt;
      &lt;md-option value=&quot;Impact&quot;&gt;Impact&lt;/md-option&gt;
      &lt;md-option value=&quot;Roboto&quot;&gt;Roboto&lt;/md-option&gt;
      &lt;md-option value=&quot;Segoe UI&quot;&gt;Segoe UI&lt;/md-option&gt;
      &lt;md-option value=&quot;Times New Roman&quot;&gt;Times New Roman&lt;/md-option&gt;
      &lt;md-option value=&quot;Ubuntu&quot;&gt;Ubuntu&lt;/md-option&gt;
      &lt;md-option value=&quot;Verdana&quot;&gt;Verdana&lt;/md-option&gt;
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
      &lt;md-option value=&quot;Apples&quot;&gt;Apples&lt;/md-option&gt;
      &lt;md-option value=&quot;Bananas&quot;&gt;Bananas&lt;/md-option&gt;
      &lt;md-option value=&quot;Peaches&quot;&gt;Peaches&lt;/md-option&gt;
      &lt;md-option value=&quot;Oranges&quot;&gt;Oranges&lt;/md-option&gt;

      &lt;md-subheader&gt;Vegetables&lt;/md-subheader&gt;
      &lt;md-option value=&quot;Carrots&quot;&gt;Carrots&lt;/md-option&gt;
      &lt;md-option value=&quot;Cucumbers&quot;&gt;Cucumbers&lt;/md-option&gt;

      &lt;md-subheader&gt;Baked Goods&lt;/md-subheader&gt;
      &lt;md-option value=&quot;Apple Pie&quot;&gt;Apple Pie&lt;/md-option&gt;
      &lt;md-option value=&quot;Chocolate Cake&quot;&gt;Chocolate Cake&lt;/md-option&gt;
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
    data() {
      return {
        movie: 'Godfather',
        country: null,
        font: null,
        food: null
      };
    }
  };
</script>
