<template>
  <div>
    <md-field md-variant="bottom-line">
      <md-chips v-model="cities" readonly></md-chips>
    </md-field>
  </div>
</template>

<script>
export default {
  name: 'Static',
  data: () => ({
    cities: [
      'New York',
      'Amsterdam',
      'Tokyo',
      'Rome'
    ]
  })
}
</script>
