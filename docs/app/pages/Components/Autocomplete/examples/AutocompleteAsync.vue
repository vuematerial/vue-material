<template>
  <div>
    <md-autocomplete v-model="value" :md-options="countries" @md-changed="getCountries" @md-opened="getCountries">
      <label>Country</label>

      <template slot="md-autocomplete-item" slot-scope="{ item }">{{ item.name }}</template>
    </md-autocomplete>
  </div>
</template>

<script>
  export default {
    name: 'AutocompleteAsync',
    data: () => ({
      value: null,
      countryList: [
        {
          id: 1,
          name: 'Algeria'
        },
        {
          id: 2,
          name: 'Argentina'
        },
        {
          id: 3,
          name: 'Brazil'
        },
        {
          id: 4,
          name: 'Canada'
        },
        {
          id: 5,
          name: 'Italy'
        },
        {
          id: 6,
          name: 'Japan'
        },
        {
          id: 7,
          name: 'United Kingdom'
        },
        {
          id: 8,
          name: 'United States'
        }
      ],
      countries: []
    }),
    methods: {
      getCountries (searchTerm) {
        this.countries = new Promise(resolve => {
          window.setTimeout(() => {
            if (!searchTerm) {
              resolve(this.countryList)
            } else {
              const term = searchTerm.toLowerCase()

              resolve(this.countryList.filter(({ name }) => name.toLowerCase().includes(term)))
            }
          }, 500)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-autocomplete {

  }
</style>
