<template>
  <div class="md-radio" :class="[$mdActiveTheme, radioClasses]">
    <div class="md-radio-container" @click.stop="toggleCheck">
      <md-ripple md-centered :md-active.sync="rippleActive" :md-disabled="disabled">
        <input type="radio" v-bind="{ id, name, disabled, required, value, checked: isSelected }">
      </md-ripple>
    </div>

    <label :for="id" class="md-radio-label" v-if="$slots.default" @click.prevent="toggleCheck">
      <slot />
    </label>
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdUuid from 'core/utils/MdUuid'
  import MdRipple from 'components/MdRipple/MdRipple'

  export default new MdComponent({
    name: 'MdRadio',
    components: {
      MdRipple
    },
    props: {
      model: [String, Number, Boolean, Object],
      value: {
        type: [String, Number, Boolean, Object],
        default: 'on'
      },
      id: {
        type: String,
        default: () => 'md-radio-' + MdUuid()
      },
      name: [String, Number],
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
        return this.model === this.value
      },
      radioClasses () {
        return {
          'md-checked': this.isSelected,
          'md-disabled': this.disabled,
          'md-required': this.required
        }
      }
    },
    methods: {
      toggleCheck () {
        if (!this.disabled) {
          this.rippleActive = true
          this.$emit('change', this.value)
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  $md-radio-size: 20px;
  $md-radio-touch-size: 48px;

  .md-radio {
    width: auto;
    margin: 16px 16px 16px 0;
    display: inline-flex;
    position: relative;

    &:not(.md-disabled) {
      cursor: pointer;

      .md-radio-label {
        cursor: pointer;
      }
    }

    .md-radio-container {
      width: $md-radio-size;
      min-width: $md-radio-size;
      height: $md-radio-size;
      position: relative;
      border: 2px solid transparent;
      border-radius: 50%;
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
        width: $md-radio-touch-size;
        height: $md-radio-touch-size;
        top: 50%;
        left: 50%;
        z-index: 11;
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }

      &:after {
        position: absolute;
        top: 3px;
        right: 3px;
        bottom: 3px;
        left: 3px;
        border-radius: 50%;
        opacity: 0;
        transform: scale3D(.38, .38, 1);
        content: " ";
      }

      .md-ripple {
        width: $md-radio-touch-size !important;
        height: $md-radio-touch-size !important;
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

    .md-radio-label {
      height: $md-radio-size;
      padding-left: 16px;
      position: relative;
      line-height: $md-radio-size;
    }
  }

  .md-radio.md-checked {
    .md-radio-container {
      &:after {
        opacity: 1;
        transform: scale3D(1, 1, 1);
        transition: $md-transition-stand;
      }
    }
  }

  .md-radio.md-required {
    label:after {
      position: absolute;
      top: 2px;
      right: 0;
      transform: translateX(calc(100% + 2px));
      content: "*";
      line-height: 1em;
      vertical-align: top;
    }
  }
</style>
