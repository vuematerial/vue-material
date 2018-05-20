<template>
  <div class="md-switch" :class="[$mdActiveTheme, checkClasses]">
    <div class="md-switch-container" @click.stop="toggleCheck">
      <div class="md-switch-thumb">
        <md-ripple md-centered :md-active.sync="rippleActive" :md-disabled="disabled">
          <input :id="id" type="checkbox" v-bind="{ id, name, disabled, required, value }">
        </md-ripple>
      </div>
    </div>

    <label :for="id" class="md-switch-label" v-if="$slots.default" @click.prevent="toggleCheck">
      <slot />
    </label>
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdCheckboxMixin from 'components/MdCheckbox/MdCheckboxMixin'
  import MdUuid from 'core/utils/MdUuid'

  export default new MdComponent({
    name: 'MdSwitch',
    mixins: [MdCheckboxMixin],
    props: {
      id: {
        type: String,
        default: () => 'md-switch-' + MdUuid()
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdElevation/mixins";

  $md-switch-width: 34px;
  $md-switch-height: 14px;
  $md-switch-size: 20px;
  $md-switch-touch-size: 48px;

  .md-switch {
    width: auto;
    margin: 16px 16px 16px 0;
    display: inline-flex;
    position: relative;

    &:not(.md-disabled) {
      cursor: pointer;

      .md-switch-label {
        cursor: pointer;
      }
    }

    .md-switch-container {
      width: $md-switch-width;
      min-width: $md-switch-width;
      height: $md-switch-height;
      margin: 3px 0;
      display: flex;
      align-items: center;
      position: relative;
      border-radius: $md-switch-height;
      transition: $md-transition-stand;
    }

    .md-switch-thumb {
      @include md-elevation(1);
      width: $md-switch-size;
      height: $md-switch-size;
      position: relative;
      border-radius: 50%;
      transition: $md-transition-stand;

      &:before {
        width: $md-switch-touch-size;
        height: $md-switch-touch-size;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 11;
        transform: translate(-50%, -50%);
        content: " ";
      }

      .md-ripple {
        width: $md-switch-touch-size !important;
        height: $md-switch-touch-size !important;
        top: 50% !important;
        left: 50% !important;
        position: absolute;
        transform: translate(-50%, -50%);
        border-radius: 50%;
      }

      input {
        position: absolute;
        left: -999em;
      }
    }

    .md-switch-label {
      height: $md-switch-size;
      padding-left: 16px;
      position: relative;
      line-height: $md-switch-size;
    }
  }

  .md-switch.md-checked {
    .md-switch-thumb {
      transform: translate3d(15px, 0, 0);
    }
  }

  .md-switch.md-required {
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
