<template>
  <div class="md-backdrop" @click="close" @keyup.esc="close"></div>
</template>

<style lang="scss" src="./mdBackdrop.scss"></style>

<script>
  export default {
    methods: {
      close() {
        this.$emit('close');
      }
    }
  };
</script>
