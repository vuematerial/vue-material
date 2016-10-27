<template>
  <th class="md-table-head" :class="classes" @click="changeSort">
    <div class="md-table-head-container" v-md-ink-ripple="!mdSortBy">
      <div class="md-table-head-text md-test">
        <md-icon class="md-sortable-icon" v-if="mdSortBy">arrow_downward</md-icon>

        <slot></slot>

        <md-tooltip v-if="mdTooltip">{{ mdTooltip }}</md-tooltip>
      </div>
    </div>
  </th>
</template>

<script>
  export default {
    props: {
      mdNumeric: Boolean,
      mdSortBy: String,
      mdTooltip: String
    },
    data() {
      return {
        sortType: null,
        sorted: false
      };
    },
    computed: {
      classes() {
        let matchSort = this.$parent.$parent.sortBy === this.mdSortBy;

        if (!matchSort) {
          this.sorted = false;
        }

        return {
          'md-numeric': this.mdNumeric,
          'md-sortable': this.mdSortBy,
          'md-sorted': matchSort && this.sorted,
          'md-sorted-descending': matchSort && this.sortType === 'desc'
        };
      }
    },
    methods: {
      changeSort() {
        let parent = this.$parent.$parent;

        if (this.sortType === 'asc' && this.sorted) {
          this.sortType = 'desc';
        } else {
          this.sortType = 'asc';
        }

        this.sorted = true;

        parent.sortType = this.sortType;
        parent.emitSort(this.mdSortBy);
      }
    }
  };
</script>
