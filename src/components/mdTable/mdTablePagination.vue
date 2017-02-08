<template>
  <div class="md-table-pagination">
    <span class="md-table-pagination-label">{{ mdLabel }}:</span>

    <md-select v-model="currentSize" md-menu-class="md-pagination-select" @change="changeSize" v-if="mdPageOptions">
      <md-option v-for="amount in mdPageOptions" :value="amount">{{ amount }}</md-option>
    </md-select>

    <span>{{ ((currentPage - 1) * currentSize) + 1 }}-{{ subTotal }} {{ mdSeparator }} {{ mdTotal }}</span>

    <md-button class="md-icon-button md-table-pagination-previous" @click.native="previousPage" :disabled="currentPage === 1">
      <md-icon>keyboard_arrow_left</md-icon>
    </md-button>

    <md-button class="md-icon-button md-table-pagination-next" @click.native="nextPage" :disabled="currentSize * currentPage >= totalItems">
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
        subTotal: 0,
        currentSize: parseInt(this.mdSize, 10),
        currentPage: parseInt(this.mdPage, 10),
        totalItems: isNaN(this.mdTotal) ? Number.MAX_SAFE_INTEGER : parseInt(this.mdTotal, 10)
      };
    },
    computed: {
      lastPage() {
        return false;
      }
    },
    methods: {
      emitPaginationEvent() {
        if (this.canFireEvents) {
          const sub = this.currentPage * this.currentSize;

          this.subTotal = sub > this.mdTotal ? this.mdTotal : sub;
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
        this.subTotal = this.currentPage * this.currentSize;
        this.mdPageOptions = this.mdPageOptions || [10, 25, 50, 100];
        this.currentSize = this.mdPageOptions[0];
        this.canFireEvents = true;
      });
    }
  };
</script>
