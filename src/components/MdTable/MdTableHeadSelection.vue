<template>
  <md-table-head class="md-table-cell-selection" v-if="false">
    <div class="md-table-cell-container">
      <md-checkbox v-model="allSelected" @change="selectAll" />
    </div>
  </md-table-head>
</template>

<script>
  import MdTableHead from './MdTableHead'

  function chunk (arr, len) {
    let chunks = []
    let i = 0
    let n = arr.length

    while (i < n) {
      chunks.push(arr.slice(i, i += len))
    }

    return chunks
  }

  export default {
    name: 'MdTableHeadSelection',
    components: {
      MdTableHead
    },
    inject: ['MdTable'],
    data: () => ({
      allSelected: false
    }),
    methods: {
      selectAll () {

      }
    }
  }
</script>
