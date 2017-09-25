<script>
  import MdRouterLinkProps from 'core/utils/MdRouterLinkProps'
  import MdListItemDefault from './MdListItemDefault'
  import MdListItemButton from './MdListItemButton'
  import MdListItemLink from './MdListItemLink'
  import MdListItemRouter from './MdListItemRouter'
  import MdButton from 'components/MdButton/MdButton'

  export default {
    name: 'MdListItem',
    functional: true,
    components: {
      MdButton
    },
    render (createElement, { data, parent, props, listeners, children }) {
      const interactionEvents = [
        'click',
        'contextmenu',
        'dblclick',
        'mousedown',
        'mouseup'
      ]
      let listComponent = MdListItemDefault

      if (parent && parent.$router && props.to) {
        listComponent = MdListItemRouter
        listComponent.props = MdRouterLinkProps(parent, {
          target: String
        })
        delete listComponent.props.href
      } else if (props.href) {
        listComponent = MdListItemLink
      } else {
        let listenerNames = Object.keys(listeners)

        listenerNames.forEach(listener => {
          if (interactionEvents.includes(listener)) {
            listComponent = MdListItemButton
          }
        })
      }

      return createElement('li', {
        on: listeners,
        staticClass: 'md-list-item'
      }, [
        createElement(listComponent, {
          staticClass: 'md-list-item-container md-button-clean',
          props
        }, [children])
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
    display: flex;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    text-transform: none;

    .md-list.md-dense & {
      font-size: 13px;
    }

    &:not(.md-list-item-default) {
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
    padding: 8px 16px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    flex: 1;
    transition: padding .4s $md-transition-stand-timing;
    will-change: padding;

    .md-list.md-dense & {
      min-height: 40px;
      padding-top: 4px;
      padding-bottom: 4px;

      > .md-avatar {
        width: 36px;
        height: 36px;

        &:first-child {
          margin-right: 20px;
        }
      }
    }

    > .md-icon:first-child {
      margin-right: 32px;
    }

    > .md-avatar:first-child {
      margin-right: 16px;
    }

    .md-list-action {
      margin: 0 -10px 0 0;

      &:last-of-type {
        margin: 0 -10px 0 16px;
      }
    }
  }

  .md-list-item-text {
    flex: 1;
  }
</style>
