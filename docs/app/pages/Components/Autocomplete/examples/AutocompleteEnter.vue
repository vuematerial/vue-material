<template>
  <div>
    <p>Check the browser console!</p>

    <md-autocomplete
      v-model="selectedEmployee"
      :md-options="employees"
      :md-open-on-focus="false"
      @md-enter="onEnter()"
      @md-clear='onClear()'
    >
      <label>Employees</label>
    </md-autocomplete>
  </div>
</template>

<script>
export default {
  name: "AutocompleteEnter",
  data: () => ({
    selectedEmployee: null,
    employees: [
      "Jim Halpert",
      "Dwight Schrute",
      "Michael Scott",
      "Pam Beesly",
      "Angela Martin",
      "Kelly Kapoor",
      "Ryan Howard",
      "Kevin Malone",
      "Creed Bratton",
      "Oscar Nunez",
      "Toby Flenderson",
      "Stanley Hudson",
      "Meredith Palmer",
      "Phyllis Lapin-Vance"
    ]
  }),
  methods: {
    onEnter() {
      console.log("enter button pressed");
    },
    onClear() {
      console.log('clear event fired')
    }
  }
};
</script>
