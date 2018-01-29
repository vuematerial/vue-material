<template>
  <div>
    <md-autocomplete
      v-model="selectedEmployee"
      :md-options="employees"
      md-layout="box"
      md-dense>
      <label>Employees</label>
    </md-autocomplete>

    <md-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>
        </div>

        <md-autocomplete
          class="search"
          v-model="selectedEmployee"
          :md-options="employees"
          md-layout="box">
          <label>Search...</label>
        </md-autocomplete>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>refresh</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>more_vert</md-icon>
          </md-button>
        </div>
      </div>
    </md-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'AutocompleteBox',
    data: () => ({
      selectedEmployee: null,
      employees: [
        'Jim Halpert',
        'Dwight Schrute',
        'Michael Scott',
        'Pam Beesly',
        'Angela Martin',
        'Kelly Kapoor',
        'Ryan Howard',
        'Kevin Malone',
        'Creed Bratton',
        'Oscar Nunez',
        'Toby Flenderson',
        'Stanley Hudson',
        'Meredith Palmer',
        'Phyllis Lapin-Vance'
      ]
    })
  }
</script>

<style lang="scss" scoped>
  .search {
    max-width: 500px;
  }
</style>
