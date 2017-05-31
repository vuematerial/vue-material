<template>
  <div class="md-table-alternate-header" :class="[themeClass, classes]">
    <md-toolbar>
      <div class="md-counter">
        <span ref="counter">{{ numberOfSelected }}</span>
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
    name: 'md-table-alternate-header',
    mixins: [theme],
    props: {
      mdSelectedLabel: {
        type: String,
        default: 'selected'
      }
    },
    data() {
      return {
        classes: {},
        tableInstance: {}
      };
    },
    computed: {
      numberOfSelected() {
        return this.tableInstance.numberOfSelected || 0;
      }
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
