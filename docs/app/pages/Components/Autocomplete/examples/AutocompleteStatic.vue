<template>
  <div>
    <md-field md-clearable>
      <md-icon>place</md-icon>
      <label>Country</label>
      <md-autocomplete v-model="selectedCountry" :md-options="countries"></md-autocomplete>
    </md-field>

    <md-field md-dense>
      <label>Employees</label>
      <md-autocomplete v-model="selectedEmployee" :md-options="employees" md-dense></md-autocomplete>
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'AutocompleteStatic',
    data: () => ({
      selectedCountry: null,
      selectedEmployee: null,
      countries: [
        'Algeria',
        'Argentina',
        'Brazil',
        'Canada',
        'Italy',
        'Japan',
        'United Kingdom',
        'United States'
      ],
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
