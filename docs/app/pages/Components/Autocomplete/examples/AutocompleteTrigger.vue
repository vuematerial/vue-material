<template>
  <div>
    <md-autocomplete v-model="selectedCountry" :md-options="countries">
      <label>Country</label>
    </md-autocomplete>

    <md-autocomplete v-model="selectedEmployee" :md-options="employees" :md-open-on-focus="false">
      <label>Employees</label>
    </md-autocomplete>
  </div>
</template>

<script>
  export default {
    name: 'AutocompleteTrigger',
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
