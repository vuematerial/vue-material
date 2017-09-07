<template>
  <div>
    <md-chip class="md-primary" v-for="chip in primary" :key="chip">{{ chip }}</md-chip>
    <md-chip class="md-accent" v-for="chip in accent" :key="chip" md-clickable>{{ chip }}</md-chip>
  </div>
</template>

<script>
export default {
  name: 'Themed',
  data: () => ({
    primary: [
      'Orange',
      'Apple',
      'Pineapple'
    ],
    accent: [
      'Cat',
      'Dog',
      'Rabbit'
    ]
  })
}
</script>

<style lang="scss" scoped>
  .md-chips {
    margin-bottom: 24px;
  }

  small {
    font-weight: 500;
  }
</style>
