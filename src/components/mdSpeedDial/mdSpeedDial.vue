<template>
  <div class="md-speed-dial" :class="[themeClass, classes]">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdSpeedDial.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    name: 'md-speed-dial',
    props: {
      mdOpen: {
        type: String,
        default: 'click'
      },
      mdMode: {
        type: String,
        default: 'fling'
      },
      mdDirection: {
        type: String,
        default: 'top'
      }
    },
    mixins: [theme],
    data: () => ({
      fabTrigger: null,
      active: false
    }),
    computed: {
      classes() {
        let classes = {
          'md-active': this.active
        };

        classes['md-mode-' + this.mdMode] = true;
        classes['md-direction-' + this.mdDirection] = true;

        return classes;
      }
    },
    methods: {
      closeSpeedDial(event) {
        if (!event.target === this.fabTrigger || !this.fabTrigger.contains(event.target)) {
          this.active = false;
          document.body.removeEventListener('click', this.closeSpeedDial);
        }
      },
      toggleSpeedDial() {
        this.active = !this.active;

        window.setTimeout(() => {
          document.body.addEventListener('click', this.closeSpeedDial);
        }, 50);
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.fabTrigger = this.$el.querySelector('[md-fab-trigger]');

        if (this.mdOpen === 'click') {
          this.fabTrigger.addEventListener('click', this.toggleSpeedDial);
        } else {
          this.$el.addEventListener('mouseenter', this.toggleSpeedDial);
          this.$el.addEventListener('mouseleave', this.closeSpeedDial);
        }
      });
    },
    beforeDestroy() {
      this.fabTrigger.removeEventListener('click', this.toggleSpeedDial);
      document.body.removeEventListener('click', this.closeSpeedDial);
    }
  };
</script>
