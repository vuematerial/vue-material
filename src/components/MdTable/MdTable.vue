<template>
  <md-tag-switcher :md-tag="contentTag" class="md-table">
    <slot name="md-table-toolbar" />

    <keep-alive>
      <md-table-alternate-header v-if="$scopedSlots['md-table-alternate-header'] && selectedCount">
        <slot name="md-table-alternate-header" :count="selectedCount" />
      </md-table-alternate-header>
    </keep-alive>

    <div class="md-table-fixed-header" :class="headerClasses" :style="headerStyles" v-if="mdFixedHeader">
      <table>
        <md-table-thead />
      </table>
    </div>

    <md-content class="md-table-content md-scrollbar" :class="contentClasses" :style="contentStyles" @scroll="setScroll">
      <table>
        <md-table-thead :class="headerClasses" v-if="!mdFixedHeader && $scopedSlots['md-table-row']" />

        <tbody v-if="!$scopedSlots['md-table-row']">
          <slot />
        </tbody>

        <tbody v-else-if="value.length">
          <md-table-row-ghost
            v-for="(item, index) in value"
            :key="getRowId(item[mdModelId])"
            :md-id="getRowId(item[mdModelId])"
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

    <slot v-if="value" />
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
        }
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
          return `height: ${this.mdHeight}px;max-height: ${this.mdHeight}px`
        }
      },
      contentClasses () {
        if (this.mdFixedHeader && this.value.length === 0) {
          return `md-table-empty`
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
      'MdTable.selectedItems' (val) {
        this.select(val)
      },
      'MdTable.singleSelection' (val) {
        this.select(val)
      },
      mdSelectedValue () {
        this.syncSelectedValue()
      }
    },
    methods: {
      emitEvent (eventName, value) {
        this.$emit(eventName, value)
      },
      getRowId (id) {
        if (id) {
          return id
        }

        return 'md-row-' + MdUuid()
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
        switch (this.MdTable.selectingMode) {
          case 'single':
            this.MdTable.singleSelection = this.mdSelectedValue
            break
          case 'multiple':
            this.MdTable.selectedItems = this.mdSelectedValue || []
            break
        }
      }
    },
    async created () {
      // wait for `selectingMode` from `TableRow`
      await this.$nextTick()
      this.syncSelectedValue()
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
