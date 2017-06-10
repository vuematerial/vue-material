<template>
  <div>
    <div>
      <small>Regular</small>
      <md-button class="md-fab">{{ $t('default') }}</md-button>
    </div>

    <div>
      <small>Dense</small>
      <md-button class="md-fab">{{ $t('default') }}</md-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .md-button {
    border-radius: 0;
  }
</style>

<script>
  export default {
    name: 'FloatingButtons'
  }
</script>
