<template>
  <div class="md-checkbox" :class="[$mdActiveTheme, checkClasses]">
    <div class="md-checkbox-container" @click.stop="toggleCheck">
      <md-ripple md-centered :md-active.sync="rippleActive" :md-disabled="disabled">
        <input :id="id" type="checkbox" v-bind="attrs" :indeterminate.prop="indeterminate">
      </md-ripple>
    </div>

    <label :for="id" class="md-checkbox-label" v-if="$slots.default" @click.prevent="toggleCheck">
      <slot />
    </label>
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdCheckboxMixin from 'components/MdCheckbox/MdCheckboxMixin'
  import MdUuid from 'core/utils/MdUuid'

  export default new MdComponent({
    name: 'MdCheckbox',
    mixins: [MdCheckboxMixin],
    props: {
      id: {
        type: String,
        default: () => 'md-checkbox-' + MdUuid()
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
      position: relative;
      line-height: $md-checkbox-size;
    }
  }

  .md-checkbox.md-indeterminate {
    .md-checkbox-container {
      &:after {
        width: 12px;
        height: 2px;
        top: 50%;
        left: 50%;
        z-index: 7;
        border-style: solid;
        border-width: 0 0 2px;
        opacity: 0;
        transform: translate(-50%, -50%) !important;
      }
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

  .md-checkbox.md-required {
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
