<template>
  <div class="md-table-alternate-header" :class="classes">
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
  export default {
    props: {
      mdSelectedLabel: String
    },
    data() {
      return {
        classes: {},
        tableInstance: {}
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.tableInstance = this.$parent.tableInstance;

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
