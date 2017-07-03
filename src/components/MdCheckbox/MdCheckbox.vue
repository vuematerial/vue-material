<template>
  <div class="md-checkbox" :class="[$mdActiveTheme, checkboxClasses]">
    <div class="md-checkbox-container" @click.stop="toggleCheck">
      <md-ripple md-centered :md-active.sync="rippleActive" :md-disabled="disabled">
        <input type="checkbox" v-bind="{ id, disabled, required, value }">
      </md-ripple>
    </div>

    <label :for="id" class="md-checkbox-label" v-if="$slots.default" @click.prevent="toggleCheck">
      <slot></slot>
    </label>
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdUuid from 'core/MdUuid'
  import MdRipple from 'components/MdRipple/MdRipple'

  export default new MdComponent({
    name: 'MdCheckbox',
    components: {
      MdRipple
    },
    props: {
      model: [String, Number, Boolean, Array],
      value: {
        type: [String, Number, Boolean],
        default: 'on'
      },
      id: {
        type: String,
        default () {
          return 'md-checkbox-' + MdUuid()
        }
      },
      required: Boolean,
      disabled: Boolean
    },
    model: {
      prop: 'model',
      event: 'change'
    },
    data: () => ({
      rippleActive: false
    }),
    computed: {
      isSelected () {
        if (this.isArray) {
          return this.model.includes(this.value)
        }

        if (this.isBoolean) {
          return Boolean(this.model)
        }

        return this.model === this.value
      },
      isArray () {
        return Array.isArray(this.model)
      },
      isBoolean () {
        return typeof this.model === 'boolean'
      },
      checkboxClasses () {
        return {
          'md-checked': this.isSelected,
          'md-disabled': this.disabled
        }
      }
    },
    methods: {
      removeItemFromModel (newModel) {
        const index = newModel.indexOf(this.value)

        if (index !== -1) {
          newModel.splice(index, 1)
        }
      },
      handleArrayCheckbox () {
        const newModel = this.model

        if (!this.isSelected) {
          newModel.push(this.value)
        } else {
          this.removeItemFromModel(newModel)
        }

        this.$emit('change', newModel)
      },
      handleStringCheckbox () {
        if (!this.isSelected) {
          this.$emit('change', this.value)
        } else {
          this.$emit('change', null)
        }
      },
      handleBooleanCheckbox () {
        this.$emit('change', !this.isSelected)
      },
      toggleCheck () {
        if (!this.disabled) {
          this.rippleActive = true

          if (this.isArray) {
            this.handleArrayCheckbox()
          } else if (this.isBoolean) {
            this.handleBooleanCheckbox()
          } else {
            this.handleStringCheckbox()
          }
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  $md-checkbox-size: 20px;
  $md-checkbox-touch-size: 48px;

  .md-checkbox {
    width: auto;
    margin: 16px 16px 16px 0;
    display: inline-flex;
    position: relative;

    &:not(.md-disabled) {
      cursor: pointer;

      .md-checkbox-label {
        cursor: pointer;
      }
    }

    .md-checkbox-container {
      width: $md-checkbox-size;
      min-width: $md-checkbox-size;
      height: $md-checkbox-size;
      position: relative;
      border-radius: 2px;
      border: 2px solid transparent;
      transition: $md-transition-stand;

      &:focus {
        outline: none;
      }

      &:before,
      &:after {
        position: absolute;
        transition: $md-transition-drop;
        content: " ";
      }

      &:before {
        width: $md-checkbox-touch-size;
        height: $md-checkbox-touch-size;
        top: 50%;
        left: 50%;
        z-index: 11;
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }

      &:after {
        width: 6px;
        height: 13px;
        top: 0;
        left: 5px;
        z-index: 12;
        border: 2px solid transparent;
        border-top: 0;
        border-left: 0;
        opacity: 0;
        transform: rotate(45deg) scale3D(.15, .15, 1);
      }

      .md-ripple {
        width: $md-checkbox-touch-size !important;
        height: $md-checkbox-touch-size !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%);
        border-radius: 50%;
      }

      input {
        position: absolute;
        left: -999em;
      }
    }

    .md-checkbox-label {
      height: $md-checkbox-size;
      padding-left: 16px;
      line-height: $md-checkbox-size;
    }
  }

  .md-checkbox.md-checked {
    .md-checkbox-container {
      &:after {
        opacity: 1;
        transform: rotate(45deg) scale3D(1, 1, 1);
        transition: $md-transition-stand;
      }
    }
  }

  .md-checkbox.md-disabled.md-checked {
    .md-checkbox-container {
      border-color: transparent !important;
    }
  }
</style>

