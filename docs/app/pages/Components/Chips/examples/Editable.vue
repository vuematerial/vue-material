<template>
  <div>
    <md-chips v-model="fruits" md-placeholder="Add fruit..."></md-chips>
  </div>
</template>

<script>
export default {
  name: 'Editable',
  data: () => ({
    fruits: [
      'Orange',
      'Apple',
      'Pineapple'
    ]
  })
}
</script>
