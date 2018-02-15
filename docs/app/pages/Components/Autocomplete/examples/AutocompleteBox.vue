<template>
  <div>
    <md-field>
      <label>Employees</label>
      <md-autocomplete v-model="selectedEmployee" :md-options="employees"></md-autocomplete>
    </md-field>

    <md-field md-variant="box">
      <label>Employees</label>
      <md-autocomplete v-model="selectedEmployee" :md-options="employees"></md-autocomplete>
    </md-field>

    <md-field md-variant="raised">
      <label>Employees</label>
      <md-autocomplete v-model="selectedEmployee" :md-options="employees"></md-autocomplete>
    </md-field>

    <md-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>
        </div>

        <md-field md-nested class="search">
          <label>Search...</label>
          <md-autocomplete v-model="selectedEmployee" :md-options="employees"></md-autocomplete>
        </md-field>

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

    <md-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>
        </div>

        <md-field md-variant="box" md-nested class="search">
          <label>Search...</label>
          <md-autocomplete v-model="selectedEmployee" :md-options="employees"></md-autocomplete>
        </md-field>

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

    <md-toolbar class="md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>
        </div>

        <md-field md-variant="raised" md-nested class="search">
          <label>Search...</label>
          <md-autocomplete v-model="selectedEmployee" :md-options="employees"></md-autocomplete>
        </md-field>

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

  .md-toolbar + .md-toolbar {
    margin-top: 24px;
  }
</style>
