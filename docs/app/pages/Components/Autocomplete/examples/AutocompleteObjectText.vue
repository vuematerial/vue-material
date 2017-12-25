<template>
  <div>
    <md-autocomplete v-model="value" :md-options="icons">
      <label>Without custom get plain text method</label>

      <template slot="md-autocomplete-item" slot-scope="{ item, term }">
        <md-icon>{{item.icon}}</md-icon>
        <md-highlight-text :md-term="term">{{ item.name }}</md-highlight-text>
      </template>

      <template slot="md-autocomplete-empty" slot-scope="{ term }">
        No icons matching "{{ term }}" were found.
      </template>
    </md-autocomplete>

    <md-autocomplete v-model="value" :md-options="icons" :md-get-plain-text="getPlainTextMethodFromElement">
      <label>Custom get plain text method from element</label>

      <template slot="md-autocomplete-item" slot-scope="{ item, term }">
        <md-icon>{{item.icon}}</md-icon>
        <md-highlight-text :md-term="term">{{ item.name }}</md-highlight-text>
      </template>

      <template slot="md-autocomplete-empty" slot-scope="{ term }">
        No icons matching "{{ term }}" were found.
      </template>
    </md-autocomplete>

    <md-autocomplete v-model="value" :md-options="icons" :md-get-plain-text="getPlainTextMethodFromSelectedItem">
      <label>Custom get plain text method from selected item</label>

      <template slot="md-autocomplete-item" slot-scope="{ item, term }">
        <md-icon>{{item.icon}}</md-icon>
        <md-highlight-text :md-term="term">{{ item.name }}</md-highlight-text>
      </template>

      <template slot="md-autocomplete-empty" slot-scope="{ term }">
        No icons matching "{{ term }}" were found.
      </template>
    </md-autocomplete>
  </div>
</template>

<script>
  export default {
    name: 'AutocompleteObjectText',
    data: () => ({
      value: null,
      icons: [
        { icon: 'ac_unit', name: 'AC Unit' },
        { icon: 'airport_shuttle', name: 'Airport Shuttle' },
        { icon: 'all_inclusive', name: 'All Inclusive' },
        { icon: 'beach_access', name: 'Beach Access' },
        { icon: 'business_center', name: 'Business Center' },
        { icon: 'casino', name: 'Casino' },
        { icon: 'child_care', name: 'Child Care' },
        { icon: 'child_friendly', name: 'Child Friendly' },
        { icon: 'fitness_center', name: 'Fitness Center' },
        { icon: 'free_breakfast', name: 'Free Breakfast' },
        { icon: 'golf_course', name: 'Golf Course' },
        { icon: 'hot_tub', name: 'Hot Tub' },
        { icon: 'kitchen', name: 'Kitchen' },
        { icon: 'pool', name: 'Pool' },
        { icon: 'room_service', name: 'Room Service' },
        { icon: 'rv_hookup', name: 'RV Hookup' },
        { icon: 'smoke_free', name: 'Smoke Free' },
        { icon: 'smoking_rooms', name: 'Smoke Rooms' },
        { icon: 'spa', name: 'SPA' }
      ]
    }),
    methods: {
      getPlainTextMethodFromElement (item, el) {
        return el.querySelector('.md-highlight-text').textContent.trim()
      },
      getPlainTextMethodFromSelectedItem (item) {
        return item.name
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
