<template>
  <th class="md-table-head" :class="classes" @click="changeSort">
    <div class="md-table-head-container">
      <div class="md-table-head-text md-test">
        <md-icon class="md-sortable-icon" v-if="mdSortBy">arrow_upward</md-icon>

        <slot></slot>

        <md-tooltip v-if="mdTooltip">{{ mdTooltip }}</md-tooltip>
      </div>

      <md-ink-ripple :md-disabled="!mdSortBy" />
    </div>
  </th>
</template>

<script>
  import getClosestVueParent from '../../core/utils/getClosestVueParent';

  export default {
    name: 'md-table-head',
    props: {
      mdNumeric: Boolean,
      mdSortBy: String,
      mdTooltip: String
    },
    data() {
      return {
        sortType: null,
        sorted: false,
        parentTable: {}
      };
    },
    computed: {
      classes() {
        const matchSort = this.hasMatchSort();

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
      hasMatchSort() {
        return this.parentTable.sortBy === this.mdSortBy;
      },
      changeSort() {
        if (this.mdSortBy) {
          if (this.sortType === 'asc' && this.sorted) {
            this.sortType = 'desc';
          } else {
            this.sortType = 'asc';
          }

          this.sorted = true;

          this.parentTable.sortType = this.sortType;
          this.parentTable.emitSort(this.mdSortBy);
        }
      },
      initSort() {
        if (this.hasMatchSort()) {
          this.sorted = true;
          this.sortType = this.parentTable.sortType || 'asc';
        }
      }
    },
    mounted() {
      this.parentTable = getClosestVueParent(this.$parent, 'md-table');
      this.initSort();
      this.parentTable.$on('sortInput', () => {
        this.initSort();
      });
    }
  };
</script>
