<template>
  <button :type="type || 'button'" :disabled="disabled" class="md-button" v-md-ink-ripple>
    <slot></slot>
  </button>
</template>

<style lang="scss" src="mdButton.scss"></style>

<script src="mdButton.js"></script>
