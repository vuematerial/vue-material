<template>
  <div class="md-table-alternate-header" :class="[themeClass, classes]">
    <md-toolbar>
      <div class="md-counter">
        <span ref="counter">{{ tableInstance.numberOfSelected }}</span>
        <span>{{ mdSelectedLabel }}</span>
      </div>

      <slot></slot>
    </md-toolbar>
  </div>
</template>

<script>
  import theme from '../../core/components/mdTheme/mixin';
  import getClosestVueParent from '../../core/utils/getClosestVueParent';

  export default {
    props: {
      mdSelectedLabel: {
        type: String,
        default: 'selected'
      }
    },
    mixins: [theme],
    data() {
      return {
        classes: {},
        tableInstance: {}
      };
    },
    mounted() {
      this.parentCard = getClosestVueParent(this.$parent, 'md-table-card');

      this.$nextTick(() => {
        this.tableInstance = this.parentCard.tableInstance;

        this.$watch('tableInstance.numberOfSelected', () => {
          this.$refs.counter.textContent = this.tableInstance.numberOfSelected;
          this.classes = {
            'md-active': this.tableInstance.numberOfSelected > 0
          };
        });
      });
    }
  };
</script>
