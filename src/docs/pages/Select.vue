<template>
  <section>
    <h2 class="title">Select</h2>

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
  </section>
</template>

<style lang="scss" scoped>
  section {
    margin: 24px;
  }

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
        country: '',
        font: '',
        food: ''
      };
    }
  };
</script>
