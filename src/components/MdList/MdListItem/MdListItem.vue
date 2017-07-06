<script>
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
      let listComponent = MdListItemButton

      if (parent && parent.$router && props.to) {
        listComponent = MdListItemRouter
        listComponent.props = {
          target: String,
          ...parent.$options.components['router-link'].options.props
        }
        delete listComponent.props.href
      } else if (props.href) {
        listComponent = MdListItemLink
      }

      return createElement('li', {
        on: listeners,
        staticClass: 'md-list-item ' + data.staticClass
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

    .md-icon {
      margin: 0;
      transition-property: color, margin-right;
    }

    &.md-inset {
      .md-list-item-content {
        padding-left: 72px;
      }
    }
  }

  .md-list-item-container {
    width: 100%;
    display: flex;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    text-transform: none;
    cursor: pointer;

    &.md-button-clean:hover {
      opacity: 1;
      text-decoration: none;
    }
  }

  .md-list-item-content {
    min-height: 48px;
    padding: 0 16px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    flex: 1;

    > .md-icon:first-child {
      margin-right: 32px;
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
