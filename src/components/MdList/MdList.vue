<template>
  <ul class="md-list" :class="[$mdActiveTheme]" v-bind="$attrs" v-on="$listeners">
    <slot />
  </ul>
</template>

<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdList',
    data () {
      return {
        MdList: {
          expandable: [],
          expandATab: this.expandATab,
          pushExpandable: this.pushExpandable,
          removeExpandable: this.removeExpandable
        }
      }
    },
    provide () {
      return {
        MdList: this.MdList
      }
    },
    props: {
      mdExpandSingle: {
        default: false
      }
    },
    methods: {
      expandATab (expandedListItem) {
        if (this.mdExpandSingle && expandedListItem) {
          const otherExpandableListItems = this.MdList.expandable.filter(target => target !== expandedListItem)
          otherExpandableListItems.forEach(expandableListItem => expandableListItem.close())
        }
      },
      pushExpandable (expandableListItem) {
        let expandableListItems = this.MdList.expandable

        if (!expandableListItems.find(target => target === expandableListItem)) {
          this.MdList.expandable = expandableListItems.concat([expandableListItem])
        }
      },
      removeExpandable (expandableListItem) {
        let expandableListItems = this.MdList.expandable

        if (expandableListItems.find(target => target === expandableListItem)) {
          this.MdList.expandable = expandableListItems.filter(target => target !== expandableListItem)
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-list {
    margin: 0;
    padding: 8px 0;
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    list-style: none;

    &.md-dense {
      padding: 4px 0;
    }

    .md-divider {
      margin-top: -1px;
    }

    .md-subheader {
      &.md-inset {
        padding-left: 72px;
      }
    }

    > .md-subheader:first-of-type {
      margin-top: -8px;
    }
  }
</style>
