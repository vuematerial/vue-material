<template name="floating-buttons">
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

<script>
  export default {
    name: 'FloatingButtons'
  }
</script>
