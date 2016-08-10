<template>
  <section>
    <h2 class="title">Select</h2>

    <div>
      <md-input-container>
        <label for="movies">Movies</label>
        <md-select :model.sync="movies" name="movies" id="movies">
          <md-option value="Fight Club">Fight Club</md-option>
          <md-option value="Godfather">Godfather</md-option>
          <md-option value="Pulp Fiction">Pulp Fiction</md-option>
          <md-option value="Scarface">Scarface</md-option>
        </md-select>
      </md-input-container>

      <md-input-container>
        <label for="countries">Countries</label>
        <md-select :model.sync="countries" name="countries" id="countries">
          <md-option value="Australia">Australia</md-option>
          <md-option value="Brazil">Brazil</md-option>
          <md-option value="Japan">Japan</md-option>
          <md-option value="United States">United States</md-option>
        </md-select>
      </md-input-container>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  section {
    margin: 24px;
  }

  div {
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
        movies: 'Pulp Fiction',
        countries: null
      };
    },
    methods: {

    }
  };
</script>
