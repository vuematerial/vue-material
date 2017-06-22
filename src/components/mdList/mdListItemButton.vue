<template>
  <li class="md-list-item" :class="classes">
    <div class="md-list-item-container md-button">
      <slot></slot>
    </div>

    <md-button type="button" class="md-button-ghost" @click="$emit('click', $event)" :disabled="disabled"></md-button>
  </li>
</template>

<script>
  export default {
    name: 'md-list-item',
    props: {
      disabled: Boolean
    },
    computed: {
      classes() {
        return {
          'md-disabled': this.disabled
        };
      }
    }
  };
</script>
