<template>
  <md-tag-switcher :md-tag="contentTag" class="md-table">
    <slot name="md-table-toolbar" />

    <keep-alive>
      <md-table-alternate-header v-if="$scopedSlots['md-table-alternate-header'] && selectedCount">
        <slot name="md-table-alternate-header" :count="selectedCount" />
      </md-table-alternate-header>
    </keep-alive>

    <div class="md-table-fixed-header" :class="headerClasses" :style="headerStyles" v-if="mdFixedHeader">
      <div class="md-table-fixed-header-container" ref="fixedHeaderContainer" @scroll="setHeaderScroll">
        <table :style="fixedHeaderTableStyles">
          <md-table-thead />
        </table>
      </div>
    </div>

    <md-content class="md-table-content md-scrollbar" :class="contentClasses" :style="contentStyles" @scroll="setScroll">
      <table ref="contentTable">
        <md-table-thead :class="headerClasses" v-if="!mdFixedHeader && $scopedSlots['md-table-row']" />

        <tbody v-if="!$scopedSlots['md-table-row']">
          <slot />
        </tbody>

        <tbody v-else-if="value.length">
          <md-table-row-ghost
            v-for="(item, index) in value"
            :key="getRowId(item, mdModelId)"
            :md-id="getRowId(item, mdModelId)"
            :md-index="index"
            :md-item="item">
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

      <slot name="md-table-pagination" />
    </md-content>

    <slot v-if="!hasValue && $scopedSlots['md-table-row']" />
  </md-tag-switcher>
</template>

<script>
  import raf from 'raf'

  import MdTagSwitcher from 'components/MdTagSwitcher/MdTagSwitcher'
  import MdUuid from 'core/utils/MdUuid'
  import MdPropValidator from 'core/utils/MdPropValidator'
  import MdTableThead from './MdTableThead'
  import MdTableAlternateHeader from './MdTableAlternateHeader'
  import MdTableRow from './MdTableRow'
  import MdTableRowGhost from './MdTableRowGhost'
  import MdTableCellSelection from './MdTableCellSelection'
  import MdResizeObserver from 'core/utils/MdResizeObserver'

  const getObjectAttribute = (object, key) => {
    let value = object

    for (const attribute of key.split('.')) {
      value = value[attribute]
    }

    return value
  }

  export default {
    name: 'MdTable',
    components: {
      MdTagSwitcher,
      MdTableAlternateHeader,
      MdTableThead,
      MdTableRow,
      MdTableRowGhost,
      MdTableCellSelection
    },
    props: {
      value: [Array, Object],
      mdModelId: {
        type: String,
        default: 'id'
      },
      mdCard: Boolean,
      mdFixedHeader: Boolean,
      mdHeight: {
        type: [Number, String],
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
          return value.sort((a, b) => {
            const sortBy = this.MdTable.sort
            const aAttr = getObjectAttribute(a, sortBy)
            const bAttr = getObjectAttribute(b, sortBy)
            const isAsc = this.MdTable.sortOrder === 'asc'
            let isNumber = typeof aAttr === 'number'

            if (isNumber) {
              return isAsc ? (bAttr - aAttr) : (aAttr - bAttr)
            }

            if (isAsc) {
              return bAttr.localeCompare(aAttr)
            }

            return aAttr.localeCompare(bAttr)
          })
        }
      },
      mdSelectedValue: {
        type: [Array, Object]
      }
    },
    data () {
      return {
        windowResizeObserver: null,
        fixedHeaderTableWidth: 0,
        fixedHeaderPadding: 0,
        hasContentScroll: false,
        MdTable: {
          items: {},
          sort: null,
          sortOrder: null,
          singleSelection: null,
          selectedItems: [],
          selectable: [],
          fixedHeader: null,
          contentPadding: null,
          contentEl: null,
          // computed
          hasValue: this.hasValue,
          // methods
          emitEvent: this.emitEvent,
          sortTable: this.sortTable,
          manageItemSelection: this.manageItemSelection,
          getModel: this.getModel,
          getModelItem: this.getModelItem,
          selectingMode: null
        },
        itemsUuidMap: new WeakMap()
      }
    },
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
      selectedCount () {
        return this.MdTable.selectedItems.length
      },
      headerStyles () {
        if (this.mdFixedHeader) {
          return `padding-right: ${this.fixedHeaderPadding}px`
        }
      },
      hasValue () {
        return this.value && this.value.length !== 0
      },
      headerClasses () {
        if ((this.mdFixedHeader && this.hasContentScroll) || !this.hasValue) {
          return 'md-table-fixed-header-active'
        }
      },
      contentStyles () {
        if (this.mdFixedHeader) {
          const height = typeof this.mdHeight === 'number'
            ? `${this.mdHeight}px`
            : this.mdHeight
          return `height: ${height};max-height: ${height}`
        }
      },
      contentClasses () {
        if (this.mdFixedHeader && this.value.length === 0) {
          return `md-table-empty`
        }
      },
      fixedHeaderTableStyles () {
        return {
          width: this.fixedHeaderTableWidth + 'px'
        }
      }
    },
    provide () {
      const MdTable = this.MdTable

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
      },
      hasValue: {
        immediate: true,
        handler () {
          this.MdTable.hasValue = this.hasValue
        }
      },
      'MdTable.selectedItems' (val, old) {
        let changed = (() => {
          let isValEmpty = this.isEmpty(val)
          let isOldEmpty = this.isEmpty(old)
          let hasValues = isValEmpty && isOldEmpty

          if (hasValues) {
            return false
          } else if (!hasValues) {
            return (val.length !== old.length) ? true : !val.every((item, index) => item == old[index])
          }

          return true
        })()

        if (changed) {
          this.select(val)
        }
      },
      'MdTable.singleSelection' (val, old) {
        if (val != old) {
          this.select(val)
        }
      },
      mdSelectedValue () {
        this.syncSelectedValue()
      }
    },
    methods: {
      isEmpty (value) {
        return !value || value.length === 0
      },
      emitEvent (eventName, value) {
        this.$emit(eventName, value)
      },
      getRowId (item, propertyName) {
        let id = item[propertyName]

        if (id) {
          return id
        }

        id = this.itemsUuidMap.get(item)

        if (!id) {
          id = 'md-row-' + MdUuid()
          this.itemsUuidMap.set(item, id)
        }

        return id
      },
      setScroll ($event) {
        raf(() => {
          if (this.mdFixedHeader) {
            this.$refs.fixedHeaderContainer.scrollLeft = $event.target.scrollLeft
          }

          this.hasContentScroll = $event.target.scrollTop > 0
        })
      },
      setHeaderScroll ($event) {
        raf(() => {
          this.MdTable.contentEl.scrollLeft = $event.target.scrollLeft
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
      getModel () {
        return this.value
      },
      getModelItem (index) {
        return this.value[index]
      },
      manageItemSelection (item) {
        if (this.MdTable.selectedItems.includes(item)) {
          this.MdTable.selectedItems = this.MdTable.selectedItems.filter(target => target !== item)
        } else {
          this.MdTable.selectedItems.push(item)
        }
      },
      sortTable () {
        if (Array.isArray(this.value)) {
          this.$emit('input', this.mdSortFn(this.value))
        }
      },
      select (val) {
        this.$emit('update:mdSelectedValue', val)
        this.$emit('md-selected', val)
      },
      syncSelectedValue () {
        if (this.MdTable.selectingMode === 'single') {
          this.MdTable.singleSelection = this.mdSelectedValue
        } else if (this.MdTable.selectingMode === 'multiple') {
          this.MdTable.selectedItems = this.mdSelectedValue || []
        }
      },
      setWidth () {
        if (this.mdFixedHeader) {
          this.fixedHeaderTableWidth = this.$refs.contentTable.offsetWidth
        }
      }
    },
    created () {
      this.$nextTick().then(() => {
        this.syncSelectedValue()
      })
    },
    mounted () {
      this.setContentEl()
      this.$nextTick().then(this.setWidth)

      if (this.mdFixedHeader) {
        this.setHeaderPadding()
        this.windowResizeObserver = new MdResizeObserver(window, this.setWidth)
      }
    },
    beforeDestroy () {
      if (this.windowResizeObserver) {
        this.windowResizeObserver.destroy()
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

      .md-table-fixed-header-container {
        -webkit-box-flex: 1;
        flex: 1;
        overflow-x: auto;

        &::-webkit-scrollbar,
        &::-webkit-scrollbar-thumb,
        &::-webkit-scrollbar-button {
          display: none;
        }
      }
    }

    .md-table-fixed-header-active {
      border-bottom: 1px solid;
    }

    .md-table-content {
      flex: 1;
      overflow-x: auto;
      transition: height .3s $md-transition-default-timing;
    }

    .md-table-empty {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    table {
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;
      overflow: hidden;
    }
  }
</style>
