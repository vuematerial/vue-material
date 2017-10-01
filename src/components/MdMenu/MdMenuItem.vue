<template>
  <md-list-item class="md-menu-item" v-on="listeners" v-bind="$attrs">
    <slot />
  </md-list-item>
</template>

<script>
  import MdInteractionEvents from 'core/utils/MdInteractionEvents'
  import MdListItem from 'components/MdList/MdListItem/MdListItem'

  export default {
    name: 'MdMenuItem',
    inject: ['MdMenu'],
    data: () => ({
      listeners: {}
    }),
    created () {
      if (this.MdMenu.closeOnSelect) {
        let listenerNames = Object.keys(this.$listeners)
        let hasInteraction = false

        listenerNames.forEach(listener => {
          if (MdInteractionEvents.includes(listener)) {
            this.listeners[listener] = ($event) => {
              this.$listeners[listener]($event)
              this.MdMenu.active = false

              if (this.MdMenu.eventObserver) {
                this.MdMenu.eventObserver.destroy()
              }
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdLayout/mixins";


</style>
