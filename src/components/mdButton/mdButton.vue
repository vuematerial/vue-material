<template>
  <button class="md-button" :class="[themeClass]" :type="type" :disabled="disabled" v-if="!href">
    <md-ink-ripple :md-disabled="disabled"></md-ink-ripple>
    <slot></slot>
  </button>

  <a class="md-button" :class="[themeClass]" :href="href" :disabled="disabled" :target="target" :rel="newRel" v-else>
    <md-ink-ripple :md-disabled="disabled"></md-ink-ripple>
    <slot></slot>
  </a>
</template>

<style lang="scss" src="./mdButton.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    props: {
      href: String,
      target: String,
      rel: String,
      type: {
        type: String,
        default: 'button'
      },
      disabled: Boolean
    },
    mixins: [theme],
    computed: {
      newRel() {
        if (this.target === '_blank') {
          return this.rel || 'noopener';
        }

        return this.rel;
      }
    }
  };
</script>
