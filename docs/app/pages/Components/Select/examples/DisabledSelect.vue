<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item">
      <md-field>
        <label for="movie">Disabled Select</label>
        <md-select v-model="movie" name="movie" id="movie" disabled>
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

    <div class="md-layout-item">
      <md-field>
        <label for="country">Disabled Options</label>
        <md-select v-model="country" name="country" id="country">
          <md-option value="australia">Australia</md-option>
          <md-option value="brazil" disabled>Brazil</md-option>
          <md-option value="japan">Japan</md-option>
          <md-option value="united-states">United States</md-option>
        </md-select>
      </md-field>
    </div>

    <div class="md-layout-item">
      <md-field>
        <label for="food">Disabled groups</label>
        <md-select v-model="food" name="food" id="food">
          <md-optgroup label="Baked Goods" disabled>
            <md-option value="apple-pie">Apple Pie</md-option>
            <md-option value="chocolate-cake">Chocolate Cake</md-option>
          </md-optgroup>

          <md-optgroup label="Fruits">
            <md-option value="apples">Apples</md-option>
            <md-option value="bananas">Bananas</md-option>
            <md-option value="oranges">Oranges</md-option>
            <md-option value="peaches">Peaches</md-option>
          </md-optgroup>

          <md-optgroup label="Vegetables">
            <md-option value="broccoli">Broccoli</md-option>
            <md-option value="carrots">Carrots</md-option>
            <md-option value="cucumbers">Cucumbers</md-option>
          </md-optgroup>
        </md-select>
      </md-field>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DisabledSelect',
    data: () => ({
      movie: null,
      country: null,
      food: null
    })
  }
</script>
