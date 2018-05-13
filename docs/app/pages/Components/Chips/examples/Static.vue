<template>
  <div>
    <md-chips v-model="cities" md-static></md-chips>
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
