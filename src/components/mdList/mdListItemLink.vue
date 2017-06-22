<template>
  <li class="md-list-item" :class="classes">
    <a class="md-list-item-container md-button" :href="href" :target="target" @click="$emit('click', $event)" :disabled="disabled">
      <slot />
    </a>

    <md-ink-ripple :disabled="disabled" />
  </li>
</template>

<script>
  export default {
    name: 'md-list-item',
    props: {
      href: String,
      target: String,
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
