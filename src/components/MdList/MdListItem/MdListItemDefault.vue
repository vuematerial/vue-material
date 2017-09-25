<template>
  <div class="md-list-item-default" @click="toggleControl">
    <md-list-item-content md-disabled>
      <slot />
    </md-list-item-content>
  </div>
</template>

<script>
  import MdListItemMixin from './MdListItemMixin'

  export default {
    name: 'MdListItemDefault',
    mixins: [MdListItemMixin],
    methods: {
      toggleControl () {
        const control = this.$el.querySelector('.md-checkbox-container, .md-switch-container, .md-radio-container')

        if (control) {
          control.click()
        }
      }
    }
  }
</script>
