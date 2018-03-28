<template>
  <md-list-item class="md-menu-item" v-bind="$attrs" :class="[itemClasses, $mdActiveTheme]" :disabled="disabled" :tabindex="highlighted && -1" v-on="listeners">
    <slot />
  </md-list-item>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdInteractionEvents from 'core/utils/MdInteractionEvents'
  import MdListItem from 'components/MdList/MdListItem/MdListItem'

  export default new MdComponent({
    name: 'MdMenuItem',
    props: {
      disabled: Boolean
    },
    inject: ['MdMenu'],
    data: () => ({
      highlighted: false
    }),
    computed: {
      itemClasses () {
        return {
          'md-highlight': this.highlighted
        }
      },
      listeners () {
        if (this.disabled) {
          return {}
        }

        if (!this.MdMenu.closeOnSelect) {
          return this.$listeners
        }

        let listeners = {}
        let listenerNames = Object.keys(this.$listeners)

        listenerNames.forEach(listener => {
          if (MdInteractionEvents.includes(listener)) {
            listeners[listener] = $event => {
              this.$listeners[listener]($event)
              this.closeMenu()
            }
          } else {
            listeners[listener] = this.$listeners[listener]
          }
        })

        return listeners
      }
    },
    methods: {
      closeMenu () {
        this.MdMenu.active = false

        if (this.MdMenu.eventObserver) {
          this.MdMenu.eventObserver.destroy()
        }
      },

      triggerCloseMenu () {
        if (!this.disabled) {
          this.closeMenu()
        }
      }
    },
    mounted () {
      if (this.$el.children && this.$el.children[0]) {
        let listItem = this.$el.children[0]

        if (listItem.tagName.toUpperCase() === 'A') {
          this.$el.addEventListener('click', this.triggerCloseMenu)
        }
      }
    },

    beforeDestroy () {
      this.$el.removeEventListener('click', this.triggerCloseMenu)
    }
  })
</script>
