<script>
  import MdInteractionEvents from 'core/utils/MdInteractionEvents'
  import MdRouterLinkProps from 'core/utils/MdRouterLinkProps'
  import MdListItemDefault from './MdListItemDefault'
  import MdListItemButton from './MdListItemButton'
  import MdListItemLink from './MdListItemLink'
  import MdListItemRouter from './MdListItemRouter'
  import MdListItemExpand from './MdListItemExpand'
  import MdButton from 'components/MdButton/MdButton'

  function hasExpansion (props) {
    return props.hasOwnProperty('mdExpand') && props.mdExpand !== false
  }

  function resolveScopedSlot (props, children) {
    if (hasExpansion(props)) {
      return {
        'md-expand': () => {
          return children['md-expand'][0]
        }
      }
    }
  }

  function shouldRenderButtonWithListener (listeners) {
    let listenerNames = Object.keys(listeners)
    let shouldRender = false

    listenerNames.forEach(listener => {
      if (MdInteractionEvents.includes(listener)) {
        shouldRender = true
      }
    })

    return shouldRender
  }

  function isRouterLink(parent, props) {
    return parent && parent.$router && props.to
  }

  function createListComponent (props, parent, listeners) {
    if (hasExpansion(props)) {
      return MdListItemExpand
    }

    if (props.disabled) {
      return MdListItemButton
    }

    if (isRouterLink(parent, props)) {
      MdListItemRouter.props = MdRouterLinkProps(parent, {
        target: String
      })
      delete MdListItemRouter.props.href

      return MdListItemRouter
    }

    if (props.href) {
      return MdListItemLink
    }

    if (shouldRenderButtonWithListener(listeners)) {
      return MdListItemButton
    }

    return MdListItemDefault
  }

  export default {
    name: 'MdListItem',
    functional: true,
    components: {
      MdButton
    },
    render (createElement, { parent, props, listeners, data, slots }) {
      let children = slots()
      let listComponent = createListComponent(props, parent, listeners)
      let staticClass = 'md-list-item'

      if (data.staticClass) {
        staticClass += ' ' + data.staticClass
      }

      return createElement('li', {
        ...data,
        staticClass,
        on: listeners
      }, [
        createElement(listComponent, {
          props,
          scopedSlots: resolveScopedSlot(props, children),
          staticClass: 'md-list-item-container md-button-clean',
          on: listeners,
        }, children.default)
      ])
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-list-item {
    height: auto;
    position: relative;
    z-index: 2;

    &.md-inset {
      .md-list-item-content {
        padding-left: 72px;
      }
    }

    .md-icon {
      margin: 0;
      transition-property: color, margin-right;
    }
  }

  .md-list-item-container {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    text-transform: none;

    &:not(.md-list-item-default):not([disabled]) {
      user-select: none;
      cursor: pointer;
    }

    &.md-button-clean:hover {
      opacity: 1;
      text-decoration: none;
    }
  }

  .md-list-item-content {
    min-height: 48px;
    padding: 4px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: padding .4s $md-transition-stand-timing;
    will-change: padding;

    .md-list.md-dense & {
      min-height: 40px;
      font-size: 13px;

      > .md-avatar {
        margin-top: 0;
        margin-bottom: 0;

        &:not(.md-small) {
          width: 36px;
          min-width: 36px;
          height: 36px;
        }

        &:first-child {
          margin-right: 20px;
        }
      }
    }

    .md-list.md-double-line & {
      min-height: 72px;
    }

    .md-list.md-double-line.md-dense & {
      min-height: 60px;
    }

    .md-list.md-triple-line & {
      min-height: 88px;
    }

    .md-list.md-triple-line.md-dense & {
      min-height: 76px;
    }

    .md-list-action {
      margin: 0 -10px 0 0;

      &:last-of-type {
        margin: 0 -10px 0 16px;

        .md-list.md-triple-line & {
          align-self: flex-start;
        }
      }
    }

    > .md-icon:first-child {
      margin-right: 32px;
    }

    > .md-icon:last-child {
      margin-left: 16px;
    }

    > .md-checkbox,
    > .md-radio {
      margin: 0;

      &:first-child {
        margin-right: 36px;
      }
    }

    > .md-switch {
      margin: 0;

      &:first-child {
        margin-right: 22px;
      }
    }

    > .md-avatar {
      margin: 4px 0;

      &:first-child {
        margin-right: 16px;
      }
    }
  }

  .md-list-item-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    line-height: 1.25em;
    white-space: nowrap;

    .md-list.md-dense & {
      font-size: 13px;
    }

    * {
      width: 100%;
      margin: 0;
      overflow: hidden;
      line-height: 1.25em;
      text-overflow: ellipsis;
    }

    :nth-child(2),
    :nth-child(3) {
      font-size: 14px;
    }

    .md-list.md-dense & * {
      font-size: 13px;
    }
  }
</style>
