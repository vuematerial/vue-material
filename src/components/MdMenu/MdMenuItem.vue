<template>
  <md-list-item class="md-menu-item" v-bind="$attrs" :class="itemClasses" :disabled="disabled" :tabindex="highlighted && -1" v-on="listeners">
    <slot />
  </md-list-item>
</template>

<script>
  import MdInteractionEvents from 'core/utils/MdInteractionEvents'
  import MdListItem from 'components/MdList/MdListItem/MdListItem'

  export default {
    name: 'MdMenuItem',
    props: {
      disabled: Boolean
    },
    inject: ['MdMenu'],
    data: () => ({
      listeners: {},
      highlighted: false
    }),
    computed: {
      itemClasses () {
        return {
          'md-highlight': this.highlighted
        }
      }
    },
    created () {
      if (this.MdMenu.closeOnSelect) {
        let listenerNames = Object.keys(this.$listeners)
        let hasInteraction = false

        listenerNames.forEach(listener => {
          if (MdInteractionEvents.includes(listener)) {
            this.listeners[listener] = $event => {
              if (!this.disabled) {
                this.$listeners[listener]($event)
                this.MdMenu.active = false

                if (this.MdMenu.eventObserver) {
                  this.MdMenu.eventObserver.destroy()
                }
              }
            }
          } else {
            this.listeners[listener] = this.$listeners[listener]
          }
        })
      } else {
        this.listeners = this.$listeners
      }
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdLayout/mixins";


</style>
