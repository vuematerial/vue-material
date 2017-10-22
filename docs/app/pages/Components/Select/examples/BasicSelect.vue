<template>
  <div>
    <div class="md-layout-row md-gutter">
      <div class="md-flex">
        <md-field>
          <label for="movie">Movie</label>
          <md-select v-model="movie" name="movie" id="movie">
            <md-option value="fight-club">Fight Club</md-option>
            <md-option value="godfather">Godfather</md-option>
            <md-option value="godfather-ii">Godfather II</md-option>
            <md-option value="godfather-iii">Godfather III</md-option>
            <md-option value="godfellas">Godfellas</md-option>
            <md-option value="pulp-fiction">Pulp Fiction</md-option>
            <md-option value="scarface">Scarface</md-option>
          </md-select>
        </md-field>
      </div>

      <div class="md-flex">
        <md-field>
          <label for="country">Country</label>
          <md-select v-model="country" name="country" id="country">
            <md-option value="australia">Australia</md-option>
            <md-option value="brazil">Brazil</md-option>
            <md-option value="japan">Japan</md-option>
            <md-option value="united-states">United States</md-option>
          </md-select>
        </md-field>
      </div>

      <div class="md-flex">
        <md-field>
          <label for="font">Font</label>
          <md-select v-model="font" name="font" id="font">
            <md-option value="arial">Arial</md-option>
            <md-option value="calibri">Calibri</md-option>
            <md-option value="cambria">Cambria</md-option>
            <md-option value="comic-sans">Comic Sans</md-option>
            <md-option value="consolas">Consolas</md-option>
            <md-option value="courier">Courier</md-option>
            <md-option value="droid-sans">Droid Sans</md-option>
            <md-option value="georgia">Georgia</md-option>
            <md-option value="helvetica">Helvetica</md-option>
            <md-option value="impact">Impact</md-option>
            <md-option value="roboto">Roboto</md-option>
            <md-option value="segoe-ui">Segoe UI</md-option>
            <md-option value="times-new-roman">Times New Roman</md-option>
            <md-option value="ubuntu">Ubuntu</md-option>
            <md-option value="verdana">Verdana</md-option>
          </md-select>
        </md-field>
      </div>
    </div>

    <md-button class="md-primary md-raised" @click="movie = 'pulp-fiction'">Set Pulp Fiction</md-button>
  </div>
</template>

<script>
  export default {
    name: 'Example',
    data: () => ({
      movie: 'godfather',
      country: null,
      font: null
    })
  }
</script>
