<template>
  <div class="md-table-pagination">
    <span class="md-table-pagination-label">{{ mdLabel }}:</span>

    <md-select v-model="currentSize" md-menu-class="md-pagination-select" @change="changeSize" v-if="mdPageOptions">
      <md-option v-for="amount in mdPageOptions" :value="amount">{{ amount }}</md-option>
    </md-select>

    <span>{{ (currentSize - currentSize + 1) * currentPage }}-{{ currentSize }} {{ mdSeparator }} {{ mdTotal }}</span>

    <md-button class="md-icon-button md-table-pagination-previous" @click="changePage" :disabled="currentPage === 1">
      <md-icon>keyboard_arrow_left</md-icon>
    </md-button>

    <md-button class="md-icon-button md-table-pagination-next" @click="changePage" :disabled="currentSize * currentPage >= mdTotal">
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
        currentSize: parseInt(this.mdSize, 10),
        currentPage: parseInt(this.mdPage, 10)
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
      changePage() {
        if (this.canFireEvents) {
          this.$emit('page', this.currentPage);
          this.emitPaginationEvent();
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.mdPageOptions = this.mdPageOptions || [10, 25, 50, 100];
        this.currentSize = this.mdPageOptions[0];
        this.canFireEvents = true;
      });
    }
  };
</script>
