<template>
  <div>
    <md-chips class="md-primary" v-model="clubs" md-placeholder="Add club..." :md-format="toUppercase">
      <label>La Liga Clubs</label>
      <div class="md-helper-text">Three uppercase letters</div>
    </md-chips>
    
    <md-chips class="md-primary" v-model="artists" md-placeholder="Add artist..." :md-format="formatName">
      <label>Artists</label>
      <div class="md-helper-text">Try inserting `Eugène Ysaÿe`. The formatter will remove diacritics.</div>
    </md-chips>
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
