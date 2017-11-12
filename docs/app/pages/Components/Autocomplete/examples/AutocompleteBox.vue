<template>
  <div>
    <md-autocomplete v-model="selectedEmployee" :md-options="employees" md-layout="box" md-dense>
      <label>Employees</label>
    </md-autocomplete>
  </div>
</template>

<script>
  export default {
    name: 'AutocompleteStatic',
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
