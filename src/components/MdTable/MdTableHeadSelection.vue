<template>
  <md-table-head class="md-table-cell-selection" v-if="selectableCount">
    <div class="md-table-cell-container">
      <md-checkbox :model="allSelected" :disabled="isDisabled" @change="onChange" />
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
      },
      allSelected () {
        return this.selectedItems.length === this.selectableCount
      }
    },
    methods: {
      onChange (val) {
        if (val) {
          this.MdTable.selectedItems = [].concat(this.MdTable.selectable)
        } else {
          this.MdTable.selectedItems = []
        }
      }
    }
  }
</script>
