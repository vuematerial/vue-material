<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item">
      <md-field>
        <label for="movies">Movies</label>
        <md-select v-model="selectedMovies" name="movies" id="movies" multiple>
          <md-option value="fight-club">Fight Club</md-option>
          <md-option value="godfather">Godfather</md-option>
          <md-option value="godfather-ii">Godfather II</md-option>
          <md-option value="godfather-iii">Godfather III</md-option>
          <md-option value="godfellas">Godfellas</md-option>
          <md-option value="pulp-fiction">Pulp Fiction</md-option>
          <md-option value="scarface">Scarface</md-option>
        </md-select>
      </md-field>

      <div>
        <strong>Selected movies:</strong>
        {{ selectedMovies }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MultipleSelect',
    data: () => ({
      selectedMovies: []
    })
  }
</script>

<style lang="scss" scoped>
  .md-field {
    max-width: 300px;
  }
</style>
