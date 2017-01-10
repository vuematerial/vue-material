<template>
  <div class="md-speed-dial" :class="classes">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdSpeedDial.scss"></style>

<script>
  export default {
    props: {

    },
    data: () => ({
      fabTrigger: null,
      active: false
    }),
    computed: {
      classes() {
        return {
          'md-active': this.active
        };
      }
    },
    methods: {
      toggleSpeedDial() {
        this.active = !this.active;
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.fabTrigger = this.$el.querySelector('[md-fab-trigger]');
        this.fabTrigger.addEventListener('click', this.toggleSpeedDial);
      });
    },
    beforeDestroy() {

    }
  };
</script>
