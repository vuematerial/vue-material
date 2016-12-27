<template>
  <div class="md-snackbar" :class="classes">
    <div class="md-snackbar-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" src="./mdSnackbar.scss"></style>

<script>
  export default {
    props: {
      mdPosition: {
        type: String,
        default: 'bottom center'
      },
      mdDuration: {
        type: [String, Number],
        default: 4000
      }
    },
    data() {
      return {
        active: false,
        rootElement: {},
        snackbarElement: {}
      };
    },
    computed: {
      classes() {
        let cssClasses = {
          'md-active': this.active
        };

        cssClasses['md-position-' + this.mdPosition.replace(/ /g, '-')] = true;

        return cssClasses;
      }
    },
    methods: {
      open() {
        this.active = true;
        this.$emit('open');
      },
      close() {
        this.active = false;
        this.$emit('close');
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.rootElement = this.$root.$el;
        this.snackbarElement = this.$el;
      });
    },
    beforeDestroy() {

    }
  };
</script>
