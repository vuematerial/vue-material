<template>
  <md-table-head class="md-table-cell-selection" v-if="selectableCount">
    <div class="md-table-cell-container">
      <md-checkbox v-model="allSelected" :disabled="isDisabled" @change="onChange" />
    </div>
  </md-table-head>
</template>

<script>
  import MdTableHead from './MdTableHead'

  export default {
    name: 'MdTableHeadSelection',
    components: {
      MdTableHead
    },
    inject: ['MdTable'],
    data: () => ({
      allSelected: false
    }),
    computed: {
      selectableCount () {
        return Object.keys(this.selectable).length
      },
      isDisabled () {
        return !this.selectableCount
      },
      selectable () {
        return this.MdTable.selectable
      },
      selectedItems () {
        return this.MdTable.selectedItems
      }
    },
    watch: {
      selectedItems: {
        immediate: true,
        deep: true,
        handler (items) {
          window.setTimeout(() => {
            const countSelected = Object.keys(items).length

            if (this.selectableCount > 0 && countSelected > 0) {
              this.allSelected = countSelected === this.selectableCount
            }
          }, 10)
        }
      }
    },
    methods: {
      onChange () {
        Object.values(this.MdTable.selectable).forEach(callback => {
          callback(this.allSelected)
        })
      }
    }
  }
</script>
