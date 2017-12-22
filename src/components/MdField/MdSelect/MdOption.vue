<template>
  <md-menu-item :class="optionClasses" :disabled="isDisabled" @click="setSelection">
    <md-checkbox class="md-primary" v-model="isChecked" v-if="MdSelect.multiple" :disabled="isDisabled" />

    <span class="md-list-item-text" ref="text">
      <slot />
    </span>
  </md-menu-item>
</template>

<script>
  import MdUuid from 'core/utils/MdUuid'

  export default {
    name: 'MdOption',
    props: {
      value: [String, Number, Boolean],
      disabled: Boolean
    },
    inject: {
      MdSelect: {},
      MdOptgroup: {
        default: {}
      }
    },
    data: () => ({
      uniqueId: 'md-option-' + MdUuid(),
      isSelected: false,
      isChecked: false
    }),
    computed: {
      selectValue () {
        return this.MdSelect.modelValue
      },
      isMultiple () {
        return this.MdSelect.multiple
      },
      isDisabled () {
        return this.MdOptgroup.disabled || this.disabled
      },
      key () {
        let isSet = (this.value || this.value === 0)
        return isSet ? this.value : this.uniqueId
      },
      inputLabel () {
        return this.MdSelect.label
      },
      optionClasses () {
        return {
          'md-selected': this.isSelected || this.isChecked
        }
      }
    },
    watch: {
      selectValue () {
        this.setIsSelected()
      },
      isChecked (val) {
        if (val === this.isSelected) {
          return
        }
        this.setSelection()
      },
      isSelected (val) {
        this.isChecked = val
      }
    },
    methods: {
      getTextContent () {
        if (this.$el) {
          return this.$el.textContent.trim()
        }

        const slot = this.$slots.default

        return slot ? slot[0].text.trim() : ''
      },
      setIsSelected () {
        if (!this.isMultiple) {
          this.isSelected = this.selectValue === this.value
          return
        }
        if (this.selectValue === undefined) {
          this.isSelected = false
          return
        }
        this.isSelected = this.selectValue.includes(this.value)
      },
      setSingleSelection () {
        this.MdSelect.setValue(this.value)
      },
      setMultipleSelection () {
        this.MdSelect.setMultipleValue(this.value)
      },
      setSelection () {
        if (!this.isDisabled) {
          if (this.isMultiple) {
            this.setMultipleSelection()
          } else {
            this.setSingleSelection()
          }
        }
      },
      setItem () {
        this.$set(this.MdSelect.items, this.key, this.getTextContent())
      }
    },
    updated () {
      this.setItem()
    },
    created () {
      this.setItem()
      this.setIsSelected()
    }
  }
</script>

<style lang="scss">

</style>
