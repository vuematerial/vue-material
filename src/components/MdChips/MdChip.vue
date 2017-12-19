<template>
  <transition name="md-chip" appear>
    <div class="md-chip" :class="[$mdActiveTheme, chipClasses]" tabindex="0" v-on="$listeners">
      <md-ripple :md-disabled="mdDisabled" v-if="mdClickable || !mdRipple">
        <slot />
      </md-ripple>

      <slot v-else />

      <transition name="md-input-action" appear>
        <md-button tabindex="-1" class="md-icon-button md-dense md-input-action md-clear" v-if="mdDeletable" @click="$emit('md-delete', $event)">
          <md-clear-icon />
        </md-button>
      </transition>
    </div>
  </transition>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdFocused from 'core/mixins/MdFocused/MdFocused'
  import MdRipple from 'core/mixins/MdRipple/MdRipple'
  import MdClearIcon from 'core/icons/MdClearIcon'
  import MdButton from 'components/MdButton/MdButton'

  export default new MdComponent({
    name: 'MdChip',
    components: {
      MdButton,
      MdClearIcon
    },
    mixins: [
      MdFocused,
      MdRipple
    ],
    props: {
      mdDisabled: Boolean,
      mdDeletable: Boolean,
      mdClickable: Boolean,
      mdDuplicated: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      chipClasses () {
        return {
          'md-disabled': this.mdDisabled,
          'md-deletable': this.mdDeletable,
          'md-clickable': this.mdClickable,
          'md-focused': this.mdHasFocus,
          'md-duplicated': this.mdDuplicated
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdElevation/mixins";

  $md-chips-height: 32px;

  .md-chip {
    height: $md-chips-height;
    padding: 0 12px;
    display: inline-block;
    cursor: default;
    border-radius: $md-chips-height;
    transition: .3s $md-transition-stand-timing;
    transition-property: background-color, color, opacity, transform, box-shadow;
    will-change: background-color, color, opacity, transform, box-shadow;
    font-size: 13px;
    line-height: $md-chips-height;
    vertical-align: middle;
    white-space: nowrap;

    &:focus {
      outline: none;
    }

    &.md-chip-enter-active,
    &.md-chip-leave-active {
      opacity: 0;
      transform: transformZ(0) scale(.8);
    }

    &.md-chip-enter-to {
      opacity: 1;
      transform: transformZ(0) scale(1);
    }

    &.md-clickable,
    &.md-deletable {
      &:not(.md-disabled):active {
        @include md-elevation(3);
      }
    }

    &.md-focused {
      @include md-elevation(3);
    }

    &.md-clickable {
      padding: 0;
      cursor: pointer;

      > .md-ripple {
        padding: 0 12px;
      }
    }

    &.md-deletable {
      padding-right: 32px;
      position: relative;

      &.md-clickable {
        padding-right: 0;

        > .md-ripple {
          padding-right: 32px;
        }
      }
    }

    &.md-disabled {
      cursor: default;
    }

    + .md-chip {
      margin-left: 4px;
    }

    .md-button.md-input-action {
      width: 18px;
      min-width: 18px;
      height: 18px;
      margin: 0;
      position: absolute;
      top: 50%;
      right: 7px;
      z-index: 11;
      transform: translate3D(0, -50%, 0);
      transition-duration: .3s;
      transition-timing-function: $md-transition-stand-timing;
      font-size: 18px;

      .md-ripple {
        padding: 0;
      }

      .md-button-content {
        height: 14px;
      }

      .md-icon {
        width: 14px;
        min-width: 14px;
        height: 14px;
        font-size: 14px !important;
        vertical-align: top;

        svg {
          transition-duration: .3s;
          transition-timing-function: $md-transition-stand-timing;
        }
      }
    }
  }
</style>
