<template>
  <div class="md-menu-item" v-md-ink-ripple @click="$emit('click')">
    <div class="md-menu-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {

  };
</script>
