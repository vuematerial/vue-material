<template>
  <div>
    <md-field>
      <md-chips v-model="fruits" md-placeholder="Add fruit..."></md-chips>
    </md-field>
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
