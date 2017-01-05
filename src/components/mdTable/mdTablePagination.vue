<template>
  <div class="md-table-pagination">
    <span class="md-table-pagination-label">{{ mdLabel }}:</span>

    <md-select v-model="currentSize" md-menu-class="md-pagination-select" @change="changeSize" v-if="mdPageOptions">
      <md-option v-for="amount in mdPageOptions" :value="amount">{{ amount }}</md-option>
    </md-select>

    <span>{{ from }}-{{ toCorrected }} {{ mdSeparator }} {{ mdTotal }}</span>

    <md-button class="md-icon-button md-table-pagination-previous" @click="previousPage" :disabled="currentPage === 1">
      <md-icon>keyboard_arrow_left</md-icon>
    </md-button>

    <md-button class="md-icon-button md-table-pagination-next" @click="nextPage" :disabled="currentSize * currentPage >= totalItems">
      <md-icon>keyboard_arrow_right</md-icon>
    </md-button>
  </div>
</template>

<script>
  export default {
    props: {
      mdSize: {
        type: [Number, String],
        default: 10
      },
      mdPageOptions: [Array, Boolean],
      mdPage: {
        type: [Number, String],
        default: 1
      },
      mdTotal: {
        type: [Number, String],
        default: 'Unknown'
      },
      mdLabel: {
        type: String,
        default: 'Rows per page'
      },
      mdSeparator: {
        type: String,
        default: 'of'
      }
    },
    data() {
      return {
        currentSize: parseInt(this.mdSize, 10),
        currentPage: parseInt(this.mdPage, 10),
        totalItems: parseInt(this.mdTotal, 10)
      };
    },
    computed: {
      from() {
        return (this.currentPage - 1) * this.currentSize + 1;
      },
      to() {
        return this.currentPage * this.currentSize;
      },
      toCorrected() {
        return this.isLastPage ? this.mdTotal : this.to;
      },
      total() {
        return isNaN(this.mdTotal) ? Number.MAX_SAFE_INTEGER : this.mdTotal;
      },
      lastPage() {
        return Math.ceil(this.totalItems / this.currentSize);
      },
      isLastPage() {
        return this.to >= this.mdTotal;
      }
    },
    watch: {
      lastPage: function() {
        if (this.isLastPage) {
          this.currentPage = this.lastPage;
        }
      }
    },
    methods: {
      emitPaginationEvent() {
        if (this.canFireEvents) {
          this.$nextTick(() => {
            this.$emit('pagination', {
              size: this.currentSize,
              page: this.currentPage
            });
          });
        }
      },
      changeSize() {
        if (this.canFireEvents) {
          this.$emit('size', this.currentSize);
          this.emitPaginationEvent();
        }
      },
      previousPage() {
        if (this.canFireEvents) {
          this.currentPage--;
          this.$emit('page', this.currentPage);
          this.emitPaginationEvent();
        }
      },
      nextPage() {
        if (this.canFireEvents) {
          this.currentPage++;
          this.$emit('page', this.currentPage);
          this.emitPaginationEvent();
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.mdPageOptions = this.mdPageOptions || [10, 25, 50, 100];
        this.canFireEvents = true;
      });
    }
  };
</script>
