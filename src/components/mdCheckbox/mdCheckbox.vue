<template>
  <div class="md-checkbox md-checked">
    <div class="md-checkbox-container" v-md-ink-ripple>
      <input type="checkbox" id="temp">
      <md-icon>check</md-icon>
    </div>

    <label class="md-checkbox-label" for="temp">
      <slot></slot>
    </label>
  </div>
</template>

<style lang="scss" src="./mdCheckbox.scss"></style>
