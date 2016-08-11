<template>
  <section>
    <h2 class="title">Select</h2>

    <validator name="validation">
      <form novalidate @submit.stop.prevent="submit">
        <div class="field-group">
          <md-input-container>
            <label for="movie">Movie</label>
            <md-select :model.sync="movie" :name="movie" id="movie">
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
            <md-select :model.sync="country" name="country" id="country" required v-validate:country="['required']" initial="off">
              <md-option value="Australia">Australia</md-option>
              <md-option value="Brazil">Brazil</md-option>
              <md-option value="Japan">Japan</md-option>
              <md-option value="United States">United States</md-option>

              <span class="md-error">Validation message</span>
            </md-select>

            <span class="md-error">Validation message</span>
          </md-input-container>
        </div>
      </form>
    </validator>
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
        country: ''
      };
    },
    methods: {
      submit() {
        console.log('Submit');
      }
    }
  };
</script>
