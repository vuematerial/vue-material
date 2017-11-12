<template>
  <div>
    <md-autocomplete v-model="value" :md-options="countries">
      <label>Country</label>

      <template slot="md-autocomplete-item" slot-scope="{ item, term }">
        <md-highlight-text :md-term="term">{{ item.name }}</md-highlight-text>
      </template>

      <template slot="md-autocomplete-empty" slot-scope="{ term }">
        No countries matching "{{ term }}" were found. <a @click="noop()">Create a new</a> one!
      </template>
    </md-autocomplete>
  </div>
</template>

<script>
  export default {
    name: 'Example',
    data: () => ({
      value: null,
      countries: [
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
      ]
    }),
    methods: {
      noop () {
        window.alert('noop')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-autocomplete {

  }
</style>
