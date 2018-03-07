<template>
  <div :class="classes" @click="toggleControl">
    <md-list-item-content :md-disabled="isDisabled">
      <slot />
    </md-list-item-content>
  </div>
</template>

<script>
  import MdListItemMixin from './MdListItemMixin'

  export default {
    name: 'MdListItemDefault',
    mixins: [MdListItemMixin],
    props: {
      mdRipple: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      if (this.getControl()) {
        this.isRippleEnabled = true
      }
    },
    data() {
      return {
        isRippleEnabled: this.mdRipple
      }
    },
    computed: {
      classes() {
        return {
          'md-list-item-default': this.isDisabled
        }
      },
      isDisabled () {
        return !this.isRippleEnabled || this.disabled
      }
    },
    methods: {
      toggleControl () {
        const control = this.getControl()

        if (control) {
          control.click()
        }
      },
      getControl () {
        return this.$el.querySelector('.md-checkbox-container, .md-switch-container, .md-radio-container')
      }
    }
  }
</script>
