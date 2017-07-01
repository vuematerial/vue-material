<template>
  <div class="md-field" :class="[$mdActiveTheme, fieldClasses]">
    <slot />

    <span class="md-count" v-if="hasCounter">{{ valueLength }} / {{ state.maxlength }}</span>

    <transition name="md-input-action" appear>
      <md-button tabindex="-1" class="md-icon-button md-dense md-input-action md-clear" @click="clearInput" v-if="hasValue && mdClearable">
        <md-clear-icon />
      </md-button>
    </transition>

    <transition name="md-input-action" appear>
      <md-button tabindex="-1" class="md-icon-button md-dense md-input-action md-toggle-password" @click="togglePassword" v-if="hasPasswordToggle">
        <md-password-off-icon v-if="state.togglePassword" />
        <md-password-on-icon v-else />
      </md-button>
    </transition>
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdClearIcon from 'core/Icons/MdClearIcon'
  import MdPasswordOffIcon from 'core/Icons/MdPasswordOffIcon'
  import MdPasswordOnIcon from 'core/Icons/MdPasswordOnIcon'

  export default new MdComponent({
    name: 'MdField',
    components: {
      MdClearIcon,
      MdPasswordOffIcon,
      MdPasswordOnIcon
    },
    provide: {
      state: {}
    },
    props: {
      mdInline: Boolean,
      mdClearable: Boolean,
      mdCounter: {
        type: Boolean,
        default: true
      },
      mdTogglePassword: {
        type: Boolean,
        default: true
      }
    },
    data: () => ({
      showPassword: false,
      state: {
        value: null,
        focused: false,
        disabled: false,
        required: false,
        placeholder: false,
        textarea: false,
        autogrow: false,
        maxlength: null,
        password: null,
        togglePassword: false,
        clear: false
      }
    }),
    computed: {
      hasCounter () {
        return this.mdCounter && this.state.maxlength
      },
      hasPasswordToggle () {
        return this.mdTogglePassword && this.state.password
      },
      hasValue () {
        return this.state.value && this.state.value.length > 0
      },
      valueLength () {
        if (this.state.value) {
          return this.state.value.length
        }

        return 0
      },
      fieldClasses () {
        return {
          'md-inline': this.mdInline,
          'md-clearable': this.mdClearable,
          'md-focused': this.state.focused,
          'md-disabled': this.state.disabled,
          'md-required': this.state.required,
          'md-has-value': this.state.value && this.state.value.length > 0,
          'md-has-placeholder': this.state.placeholder,
          'md-has-textarea': this.state.textarea,
          'md-has-password': this.state.password,
          'md-autogrow': this.state.autogrow
          /* ,
          'md-has-select': this.state.mdHasSelect,
          'md-has-file': this.state.hasFile,
           */
        }
      }
    },
    methods: {
      async clearInput () {
        this.state.clear = true
        await this.$nextTick()
        this.state.clear = false
      },
      async togglePassword () {
        this.state.togglePassword = !this.state.togglePassword
      }
    },
    created () {
      this._provided.state = this.state
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  $md-input-height: 32px;

  .md-field {
    width: 100%;
    min-height: 48px;
    margin: 4px 0 24px;
    padding-top: 16px;
    display: flex;
    position: relative;

    &:before,
    &:after {
      height: 1px;
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 1;
      transition: $md-transition-stand;
      transition-property: background-color, transform, height, border;
      content: " ";
    }

    &:before {
      z-index: 2;
      transform: scaleX(.54);
    }

    label {
      position: absolute;
      top: 23px;
      left: 0;
      pointer-events: none;
      transition: $md-transition-stand;
      transition-duration: .3s;
      font-size: 16px;
      line-height: 20px;
    }

    .md-input,
    .md-textarea {
      width: 100%;
      height: $md-input-height;
      padding: 0;
      display: block;
      flex: 1;
      border: none;
      background: none;
      transition: $md-transition-stand;
      transition-property: font-size, padding-top, color;
      font-family: inherit;
      font-size: 1px;
      line-height: $md-input-height;

      &:focus {
        outline: none;
      }

      &::-webkit-input-placeholder {
        font-size: 16px;
        text-shadow: none;
        -webkit-text-fill-color: initial;
        transition: $md-transition-stand;
        transition-property: font-size, color;
      }
    }

    .md-textarea {
      min-height: 32px;
      max-height: 230px;
      padding: 5px 0;
      resize: none;
      line-height: 1.3em;
    }

    .md-helper-text,
    .md-error,
    .md-count {
      height: 20px;
      position: absolute;
      bottom: -22px;
      font-size: 12px;
      transition: $md-transition-default;
    }

    .md-error {
      display: block !important;
      left: 0;
      opacity: 0;
      transform: translate3d(0, -8px, 0);
    }

    .md-count {
      right: 0;
    }

    .md-input-action {
      width: 24px;
      min-width: 24px;
      height: 24px;
      margin: 0;
      position: absolute;
      top: 20px;
      right: 0;
      transition: $md-transition-default;

      &.md-input-action-enter-active,
      &.md-input-action-leave-active {
        opacity: 0;
      }

      &.md-input-action-enter-to {
        opacity: 1;
      }
    }

    > .md-icon {
      margin: 4px auto;
      position: relative;
      z-index: 3;
      color: rgba(#000, .54);
      transition: $md-transition-stand;

      &:last-of-type:not(:first-child):after {
        display: none;
      }

      &:after {
        width: 36px;
        height: 2px;
        position: absolute;
        left: 0;
        bottom: -4px;
        content: "";
      }

      ~ {
        label {
          left: 36px;
        }

        .md-input,
        .md-textarea,
        .md-file {
          margin-left: 12px;
        }
      }
    }
  }

  .md-field {
    + .md-has-textarea:not(.md-autogrow) {
      margin-top: 36px;
    }

    &.md-has-placeholder {
      label {
        pointer-events: auto;
        top: 10px;
        opacity: 0;
        font-size: 12px;
      }

      .md-input,
      .md-textarea {
        font-size: 16px;
      }
    }

    &.md-has-textarea:not(.md-autogrow) {
      &:after {
        display: none;
      }

      &:before {
        height: auto;
        top: 0;
        bottom: 0;
        transform: none;
        background: none !important;
        border: 1px solid transparent;
        border-radius: 3px;
        pointer-events: none;
      }

      label {
        top: 16px;
        left: 16px;
      }

      .md-textarea {
        min-height: 100px;
        padding: 0 16px;
      }

      > .md-icon {
        position: absolute;
        top: 6px;
        right: 6px;
        z-index: 3;
      }

      .md-count {
        right: 6px;
        bottom: 2px;
      }

      .md-clear {
        top: 6px;
        right: 6px;
      }

      &:hover,
      &.md-focused {
        &:before {
          border-width: 2px;
        }
      }

      &.md-focused,
      &.md-has-value {
        label {
          top: 6px;
        }

        .md-textarea {
          padding-top: 10px;
        }
      }
    }

    &:hover,
    &.md-focused {
      &:after,
      &:before {
        height: 2px;
      }
    }

    &.md-focused {
      &:before {
        transform: scaleX(1);
      }
    }

    &.md-focused,
    &.md-has-value {
      label {
        pointer-events: auto;
        top: 0;
        opacity: 1;
        font-size: 12px;
      }

      .md-input,
      .md-textarea {
        font-size: 16px;
      }
    }

    &.md-has-value {
      .md-input,
      .md-textarea {
        color: rgba(#000, .87);
      }
    }

    &.md-inline {
      label {
        pointer-events: none;
      }

      &.md-focused {
        label {
          top: 23px;
          font-size: 16px;
        }
      }

      &.md-has-value {
        label {
          opacity: 0;
        }
      }
    }

    &.md-disabled {
      &:after {
        background: bottom left repeat-x;
        background-size: 4px 1px;
      }
    }

    &.md-has-password {
      .md-toggle-password {
        margin: 0;
        position: absolute;
        right: 0;
        bottom: -2px;

        svg {
          width: 22px;
          height: 22px;
        }
      }
    }

    &.md-clearable {
      .md-input {
        padding-right: 30px;
      }

      .md-clear {
        svg {
          width: 17px;
          height: 17px;
        }
      }
    }

    &.md-invalid {
      &.md-has-textarea:not(.md-autogrow) {
        &:before {
          border-width: 2px;
        }
      }

      .md-error {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }

      .md-helper-text {
        opacity: 0;
        transform: translate3d(0, -8px, 0);
      }
    }

    &.md-required {
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

    &.md-has-select:hover {
      .md-select:not(.md-disabled):after {
        color: rgba(#000, .87);
      }
    }
  }
</style>
