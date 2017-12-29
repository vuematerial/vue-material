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
        if (this.selectableCount === 0) {
          return false
        }

        return this.selectable.every(item => this.selectedItems.includes(item))
      }
    },
    methods: {
      onChange (val) {
        if (val) {
          this.MdTable.selectedItems = this.selectedItems.concat(this.selectable.filter(item => !this.selectedItems.includes(item)))
        } else {
          this.MdTable.selectedItems = this.selectedItems.filter(item => !this.selectable.includes(item))
        }
      }
    }
  }
</script>
