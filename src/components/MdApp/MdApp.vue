<script>
  import MdAppSideDrawer from './MdAppSideDrawer'
  import MdAppInternalDrawer from './MdAppInternalDrawer'

  const componentTypes = [
    'md-toolbar',
    'md-drawer',
    'md-content'
  ]

  function buildSlots (children, context, functionalContext, options) {
    let slots = []

    children.forEach(child => {
      const opts = child.componentOptions

      if (opts && componentTypes.includes(opts.tag)) {
        child.data.slot = opts.tag
        child.data.provide = options.Ctor.options.provide
        child.context = context
        child.functionalContext = functionalContext

        if (opts.tag === 'md-content') {
          child.data.staticClass = 'md-flex'
        }

        slots.push(child)
      }
    })

    return slots
  }

  function getDrawer (children) {
    const drawerVnode = children.filter(child => {
      return child.componentOptions.tag === 'md-drawer'
    })

    return drawerVnode && drawerVnode[0]
  }

  function isInternal (props) {
    return props.mdPermanent && (props.mdPermanent === 'clipped' || props.mdPermanent === 'card')
  }

  export default {
    name: 'MdApp',
    functional: true,
    render (createElement, { children, injections }) {
      let appComponent = MdAppSideDrawer
      const { context, functionalContext, componentOptions } = createElement(appComponent)
      const slots = buildSlots(children, context, functionalContext, componentOptions)
      const drawer = getDrawer(slots)

      if (drawer && isInternal(drawer.componentOptions.propsData)) {
        appComponent = MdAppInternalDrawer
      }

      return createElement(appComponent, slots)
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdLayout/mixins";

  .md-app {
    overflow: hidden;
    position: relative;
    transition: .3s $md-transition-default-timing;

    .md-drawer {
      &.md-permanent-card + .md-content {
        @include md-layout-small-and-up {
          padding-left: 0;
          border-left: none;
        }
      }
    }

    .md-content {
      padding: 16px;

      @include md-layout-small-and-up {
        border-left: 1px solid transparent;
      }
    }
  }

  .md-app-container {
    transform: translate3D(0, 0, 0);
    transition: padding-left .4s $md-transition-default-timing;
    will-change: padding-left;
  }
</style>
