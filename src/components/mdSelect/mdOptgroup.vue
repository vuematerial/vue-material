<template>
  <div class="md-option-group">
    <span class="md-option-group-label">{{ label }}</span>

    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: ['label']
  };
</script>
