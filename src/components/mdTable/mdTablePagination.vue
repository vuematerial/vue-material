<template>
  <div class="md-table-pagination">
    <template v-if="mdPageOptions !== false">
      <span class="md-table-pagination-label">{{ mdLabel }}:</span>

      <md-select v-model="currentSize" md-menu-class="md-pagination-select" @change="changeSize">
        <md-option v-for="amount in mdPageOptions" :key="amount" :value="amount">{{ amount }}</md-option>
      </md-select>
    </template>

    <span>{{ ((currentPage - 1) * currentSize) + 1 }}-{{ subTotal }} {{ mdSeparator }} {{ mdTotal }}</span>

    <md-button class="md-icon-button md-table-pagination-previous" @click="previousPage" :disabled="currentPage === 1">
      <md-icon>keyboard_arrow_left</md-icon>
    </md-button>

    <md-button class="md-icon-button md-table-pagination-next" @click="nextPage" :disabled="shouldDisable">
      <md-icon>keyboard_arrow_right</md-icon>
    </md-button>
  </div>
</template>

<script>
  export default {
    name: 'md-table-pagination',
    props: {
      mdSize: {
        type: [Number, String],
        default: 10
      },
      mdPageOptions: {
        type: [Array, Boolean],
        default: () => [10, 25, 50, 100]
      },
      mdPage: {
        type: [Number, String],
        default: 1
      },
      mdTotal: {
        type: [Number, String],
        default: 'Many'
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
        totalItems: 0,
        currentPage: 1,
        currentSize: parseInt(this.mdSize, 10)
      };
    },
    watch: {
      mdTotal(val) {
        this.totalItems = isNaN(val) ? Number.MAX_SAFE_INTEGER : parseInt(val, 10);
      },
      mdSize(val) {
        this.currentSize = parseInt(val, 10);
      },
      mdPage(val) {
        this.currentPage = parseInt(val, 10);
      }
    },
    computed: {
      lastPage() {
        return false;
      },
      shouldDisable() {
        return this.currentSize * this.currentPage >= this.totalItems;
      },
      subTotal() {
        const sub = this.currentPage * this.currentSize;

        return sub > this.mdTotal ? this.mdTotal : sub;
      }
    },
    methods: {
      emitPaginationEvent() {
        if (this.canFireEvents) {
          this.$emit('pagination', {
            size: this.currentSize,
            page: this.currentPage
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
        this.totalItems = isNaN(this.mdTotal) ? Number.MAX_SAFE_INTEGER : parseInt(this.mdTotal, 10);
        if (this.mdPageOptions) {
          this.currentSize = this.mdPageOptions.includes(this.currentSize) ? this.currentSize : this.mdPageOptions[0];
        } else {
          this.currentSize = this.mdSize;
        }
        this.canFireEvents = true;
      });
    }
  };
</script>
