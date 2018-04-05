<template>
  <div>
    <md-field md-variant="bottom-line">
      <label>La Liga Clubs</label>
      <md-chips class="md-primary" v-model="clubs" :md-format="toUppercase"></md-chips>
      <div class="md-helper-text">Three uppercase letters</div>
    </md-field>

    <md-field md-variant="bottom-line">
      <label>Artists</label>
      <md-chips class="md-primary" v-model="artists" md-placeholder="Add artist..." :md-format="formatName"></md-chips>
      <div class="md-helper-text">Try inserting `Eugène Ysaÿe`. The formatter will remove diacritics.</div>
    </md-field>
  </div>
</template>

<script>
export default {
  name: 'Format',
  data: () => ({
    clubs: [
      'FCB',
      'MAD'
    ],
    artists: [
      'Claude Debussy',
      'Jules Massenet',
      'Gabriel Dupont',
      'Emma Bardac',
      'Mary Garden'
    ]
  }),
  methods: {
    toUppercase (str) {
      str = str.replace(/\s/g, '').toUpperCase()
      if (str.length !== 3) return false
      return str
    },
    formatName (str) {
      let words = str.split(' ').filter(str => str !== '')
      // remove accents / diacritics
      words = words.map(str => str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
      // capitalize
      words = words.map(str => str[0].toUpperCase() + str.slice(1))
      return words.join(' ')
    }
  }
}
</script>
