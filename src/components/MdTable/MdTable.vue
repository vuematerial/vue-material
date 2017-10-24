<template>
  <md-tag-switcher :md-tag="contentTag" class="md-table">
    <slot name="md-table-toolbar" />

    <div class="md-table-fixed-header" :class="headerClasses" :style="headerStyles">
      <table>
        <md-table-thead v-if="mdFixedHeader" />
      </table>
    </div>

    <md-content class="md-table-content md-scrollbar" :style="contentStyles" @scroll="setScroll">
      <table>
        <md-table-thead :class="headerClasses" v-if="!mdFixedHeader" />

        <tbody v-if="value.length">
          <md-table-row-ghost v-for="(item, index) in value" :key="index" :md-index="index">
            <slot name="md-table-row" :item="item" />
          </md-table-row-ghost>
        </tbody>

        <tbody v-else-if="$scopedSlots['md-table-empty-state']">
          <tr>
            <td :colspan="headerCount">
              <slot name="md-table-empty-state" />
            </td>
          </tr>
        </tbody>
      </table>
    </md-content>
  </md-tag-switcher>
</template>

<script>
  import sortWith from 'ramda/es/sortWith'
  import ascend from 'ramda/es/ascend'
  import descend from 'ramda/es/descend'
  import prop from 'ramda/es/prop'
  import raf from 'raf'

  import MdTagSwitcher from 'components/MdTagSwitcher/MdTagSwitcher'
  import MdPropValidator from 'core/utils/MdPropValidator'
  import MdTableThead from './MdTableThead'
  import MdTableRow from './MdTableRow'
  import MdTableRowGhost from './MdTableRowGhost'
  import MdTableCellSelection from './MdTableCellSelection'

  export default {
    name: 'MdTable',
    components: {
      MdTagSwitcher,
      MdTableThead,
      MdTableRow,
      MdTableRowGhost,
      MdTableCellSelection
    },
    props: {
      value: [Array, Object],
      mdCard: Boolean,
      mdFixedHeader: Boolean,
      mdHeight: {
        type: Number,
        default: 400
      },
      mdSort: String,
      mdSortOrder: {
        type: String,
        default: 'asc',
        ...MdPropValidator('md-sort-order', ['asc', 'desc'])
      },
      mdSortFn: {
        type: Function,
        default (value) {
          if (this.MdTable.sortOrder === 'asc') {
            return sortWith([
              ascend(prop(this.MdTable.sort))
            ])(value)
          }

          return sortWith([
            descend(prop(this.MdTable.sort))
          ])(value)
        }
      }
    },
    data: () => ({
      fixedHeaderPadding: 0,
      hasContentScroll: false,
      MdTable: {
        items: {},
        sort: null,
        sortOrder: null,
        selectable: [],
        fixedHeader: null,
        contentPadding: null,
        contentEl: null
      }
    }),
    computed: {
      contentTag () {
        if (this.mdCard) {
          return 'md-card'
        }

        return 'md-content'
      },
      headerCount () {
        return Object.keys(this.MdTable.items).length
      },
      headerStyles () {
        if (this.mdFixedHeader) {
          return `padding-right: ${this.fixedHeaderPadding}px`
        }
      },
      headerClasses () {
        if ((this.mdFixedHeader && this.hasContentScroll) || this.value.length === 0) {
          return 'md-table-fixed-header-active'
        }
      },
      contentStyles () {
        if (this.mdFixedHeader) {
          return `height: ${this.mdHeight}px`
        }
      }
    },
    provide () {
      const MdTable = this.MdTable

      MdTable.emitEvent = this.emitEvent
      MdTable.sortTable = this.sortTable

      return { MdTable }
    },
    watch: {
      mdSort: {
        immediate: true,
        handler () {
          this.MdTable.sort = this.mdSort
        }
      },
      mdSortOrder: {
        immediate: true,
        handler () {
          this.MdTable.sortOrder = this.mdSortOrder
        }
      },
      mdFixedHeader: {
        immediate: true,
        handler () {
          this.MdTable.fixedHeader = this.mdFixedHeader
        }
      }
    },
    methods: {
      emitEvent (eventName, value) {
        this.$emit(eventName, value)
      },
      setScroll ($event) {
        raf(() => {
          this.hasContentScroll = $event.target.scrollTop > 0
        })
      },
      getContentEl () {
        return this.$el.querySelector('.md-table-content')
      },
      setContentEl () {
        this.MdTable.contentEl = this.getContentEl()
      },
      setHeaderPadding () {
        this.setContentEl()

        const { contentEl } = this.MdTable
        const tableEl = contentEl.childNodes[0]

        this.fixedHeaderPadding = contentEl.offsetWidth - tableEl.offsetWidth
      },
      sortTable () {
        if (Array.isArray(this.value)) {
          this.$emit('input', this.mdSortFn(this.value))
        }
      }
    },
    mounted () {
      this.setContentEl()

      if (this.mdFixedHeader) {
        this.setHeaderPadding()
      }
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-table {
    display: flex;
    flex-flow: column wrap;
    overflow-x: auto;

    .md-table-fixed-header {
      position: relative;
    }

    .md-table-fixed-header-active {
      border-bottom: 1px solid;
    }

    .md-table-content {
      flex: 1;
      overflow-x: auto;
      transition: height .3s $md-transition-default-timing;
    }

    table {
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;
      overflow: hidden;
    }
  }
</style>
