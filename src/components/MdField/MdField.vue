<template>
  <div class="md-field" :class="[$mdActiveTheme, fieldClasses]" @blur="onBlur">
    <slot />

    <span class="md-count" v-if="hasCounter">{{ valueLength }} / {{ MdField.maxlength || MdField.counter }}</span>

    <transition name="md-input-action" appear>
      <md-button tabindex="-1" class="md-icon-button md-dense md-input-action md-clear" @click="clearInput" v-if="hasValue && mdClearable" :disabled="MdField.disabled">
        <md-clear-icon />
      </md-button>
    </transition>

    <transition name="md-input-action" appear>
      <md-button tabindex="-1" class="md-icon-button md-dense md-input-action md-toggle-password" @click="togglePassword" v-if="hasPasswordToggle">
        <md-password-off-icon v-if="MdField.togglePassword" />
        <md-password-on-icon v-else />
      </md-button>
    </transition>
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdClearIcon from 'core/icons/MdClearIcon'
  import MdPasswordOffIcon from 'core/icons/MdPasswordOffIcon'
  import MdPasswordOnIcon from 'core/icons/MdPasswordOnIcon'
  import MdPropValidator from 'core/utils/MdPropValidator'

  export default new MdComponent({
    name: 'MdField',
    components: {
      MdClearIcon,
      MdPasswordOffIcon,
      MdPasswordOnIcon
    },
    props: {
      mdVariant: {
        type: String,
        default: 'bottom-line',
        ...MdPropValidator('md-variant', [
          'bottom-line',
          'box',
          'raised'
        ])
      },
      mdInline: Boolean,
      mdDense: Boolean,
      mdNested: Boolean,
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
      MdField: {
        value: null,
        focused: false,
        highlighted: false,
        disabled: false,
        required: false,
        placeholder: false,
        textarea: false,
        autogrow: false,
        maxlength: null,
        counter: null,
        password: null,
        togglePassword: false,
        clear: false,
        file: false,
        dense: false,
        variant: 'bottom-line',
        $el: null
      }
    }),
    provide () {
      return {
        MdField: this.MdField
      }
    },
    computed: {
      isBottomLineVariant () {
        return this.mdVariant === 'bottom-line'
      },
      isBoxVariant () {
        return this.mdVariant === 'box'
      },
      isRaisedVariant () {
        return this.mdVariant === 'raised'
      },
      stringValue () {
        return (this.MdField.value || this.MdField.value === 0) && this.MdField.value.toString()
      },
      hasCounter () {
        return this.mdCounter && (this.MdField.maxlength || this.MdField.counter)
      },
      hasPasswordToggle () {
        return this.mdTogglePassword && this.MdField.password
      },
      hasValue () {
        return this.stringValue && this.stringValue.length > 0
      },
      valueLength () {
        if (this.stringValue) {
          return this.stringValue.length
        }

        return 0
      },
      fieldClasses () {
        return {
          'md-field-bottom-line': this.isBottomLineVariant,
          'md-field-box': this.isBoxVariant,
          'md-field-raised': this.isRaisedVariant,
          'md-inline': this.mdInline || this.isRaisedVariant || this.mdNested,
          'md-dense': this.mdDense,
          'md-nested': this.mdNested,
          'md-clearable': this.mdClearable,
          'md-focused': this.MdField.focused,
          'md-highlight': this.MdField.highlighted,
          'md-disabled': this.MdField.disabled,
          'md-required': this.MdField.required,
          'md-has-value': this.hasValue,
          'md-has-placeholder': this.MdField.placeholder,
          'md-has-textarea': this.MdField.textarea,
          'md-has-password': this.MdField.password,
          'md-has-file': this.MdField.file,
          'md-has-select': this.MdField.select,
          'md-autogrow': this.MdField.autogrow
        }
      }
    },
    methods: {
      clearInput () {
        this.MdField.clear = true
        this.$emit('md-clear')
        this.$nextTick().then(() => {
          this.MdField.clear = false
        })
      },
      togglePassword () {
        this.MdField.togglePassword = !this.MdField.togglePassword
      },
      onBlur () {
        this.MdField.highlighted = false
      },
      setVariant () {
        this.MdField.variant = this.mdVariant
      },
      setDense () {
        this.MdField.dense = this.mdDense
      }
    },
    created () {
      this.setVariant()
      this.setDense()
    },
    mounted () {
      this.MdField.$el = this.$el;
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdElevation/mixins";

  .md-field {
    width: 100%;
    margin: 16px 0 28px;
    display: flex;
    position: relative;
    font-family: inherit;

    &:before,
    &:after {
      position: absolute;
      right: 0;
      left: 0;
      z-index: 1;
      transition: border .3s $md-transition-default-timing,
                  opacity .3s $md-transition-default-timing,
                  transform 0s .3s $md-transition-default-timing;
      will-change: border, opacity, transform;
      content: " ";
    }

    label {
      position: absolute;
      pointer-events: none;
      transition: $md-transition-stand;
      transition-duration: .3s;
      line-height: 1;
    }
    .md-suffix {
      font-size: 16px;
      line-height: 32px;
      align-self: center;
      justify-self: center;
    }

    .md-prefix {
      display: none;
      padding-right: 4px;
      font-size: 16px;
      line-height: 32px;
      align-self: center;
      justify-self: center;
    }

    &.md-focused, &.md-has-value {
      .md-prefix {
        display: block;
      }
    }

    .md-input,
    .md-textarea {
      padding: 0;
      display: block;
      flex: 1;
      border: none;
      background: none;
      transition: $md-transition-stand;
      transition-property: font-size, padding-top, padding-bottom, color;
      font-family: inherit;
      margin: 0;

      &[disabled] {
        cursor: default;
      }

      &:focus {
        outline: none;
      }

      &::-webkit-input-placeholder {
        text-shadow: none;
        -webkit-text-fill-color: initial;
        transition: $md-transition-stand;
        transition-property: font-size, color;
      }
    }

    .md-textarea {
      resize: none;
    }

    .md-helper-text,
    .md-error,
    .md-count {
      position: absolute;
      font-size: 12px;
      line-height: 1;
      transition: .3s $md-transition-default-timing;
      right: 0;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .md-error {
      display: block !important;
      opacity: 0;
      transform: translate3d(0, -8px, 0);
    }

    .md-input-action {
      width: 32px;
      min-width: 32px;
      height: 32px;
      margin: 0;
      position: absolute;
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
      // position: absolute;
      z-index: 3;
      transition: $md-transition-stand;
    }

    &.md-required {
      label:after {
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(calc(100% + 2px));
        content: "*";
        line-height: 1em;
        vertical-align: top;
      }
    }
  }

  .md-field.md-field-bottom-line {
    min-height: 48px;
    padding-top: 16px;

    &:before,
    &:after {
      bottom: 0;
      right: 0;
      left: 0;
    }

    &:after {
      height: 1px;
    }

    &:before {
      height: 2px;
      z-index: 2;
      opacity: 0;
      transform: scaleX(.12);
    }

    label {
      top: 24px;
      left: 0;
      font-size: 16px;
    }

    .md-input,
    .md-textarea, {
      height: 32px;
      font-size: 16px;
      line-height: 32px;
    }

    .md-textarea {
      min-height: 32px;
      max-height: 230px;
      padding: 6px 0 6px;
      line-height: 20px;
    }

    .md-helper-text,
    .md-error,
    .md-count {
      bottom: -20px;
      font-size: 12px;
    }

    .md-helper-text,
    .md-error {
      left: 0;
    }

    .md-count {
      right: 0;
    }

    > .md-input-action {
      bottom: 0;
      right: 0;
    }

    > .md-icon {
      margin: 4px auto;
      margin-right: 12px;

      &:last-of-type:not(:first-child) {
        right: 0;
        margin-left: 12px;
        margin-right: 0;
      }

      &:last-of-type:not(:first-child):after {
        display: none;
      }

      &:after {
        width: 37px;
        height: 4px;
        position: absolute;
        left: -1px;
        bottom: -2px;
        transition: .3s $md-transition-default-timing;
        content: "";
      }

      ~ {
        label {
          left: 36px;
        }
      }
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
      padding-top: 0;

      &:before,
      &:after {
        height: auto;
        pointer-events: none;
        top: 0;
        bottom: 0;
        transform: none;
        background: none !important;
        border: 1px solid transparent;
        border-radius: 3px;
      }

      &:before {
        border-width: 2px;
      }

      label {
        top: 16px;
        left: 16px;
      }

      .md-textarea {
        min-height: 100px;
        padding: 26px 16px 4px 16px;
        resize: vertical;
      }

      > .md-icon {
        position: absolute;
        top: 6px;
        right: 6px;
        z-index: 3;
      }

      .md-count {
        right: 6px;
        bottom: 4px;
      }

      .md-clear {
        top: 0px;
        right: 6px;
      }

      &.md-focused,
      &.md-has-value {
        label {
          top: 8px;
        }
      }
    }

    &.md-focused,
    &.md-highlight {
      &:before {
        opacity: 1;
        transform: scaleX(1);
        transition: .3s $md-transition-default-timing;
        transition-property: border, opacity, transform;
      }
    }

    &.md-focused,
    &.md-has-value {
      label {
        pointer-events: auto;
        top: 2px;
        opacity: 1;
        font-size: 12px;
      }

      .md-input,
      .md-textarea {
        font-size: 16px;
      }
    }

    &.md-disabled {
      &:after {
        background: bottom left repeat-x;
        background-size: 4px 1px;
      }
    }

    &.md-invalid {
      @keyframes md-invalid-shake {
        10%, 90% {
          transform: translate3d(-1px, 0, 0);
        }

        30%, 70% {
          transform: translate3d(-4px, 0, 0);
        }

        40%, 60% {
          transform: translate3d(4px, 0, 0);
        }
      }

      &.md-has-value label:not(:focus) {
        animation: md-invalid-shake .4s $md-transition-default-timing both;
        backface-visibility: hidden;
        perspective: 1000px;
      }

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

    &.md-clearable {
      &.md-has-value {
        padding-right: 40px;
      }
    }

    &.md-has-password {
      padding-right: 40px;

      .md-toggle-password {
        svg {
          width: 22px;
          height: 22px;
        }
      }
    }

    &.md-inline {
      min-height: 32px;
      margin-top: 8px;
      padding-top: 0;

      label {
        pointer-events: none;
        top: 8px;
      }

      .md-input,
      .md-textarea {
        height: 32px;
        min-height: 32px;
        padding-top: 8px;
        padding-bottom: 8px;
      }

      .md-textarea {
        padding-top: 6px;
        padding-bottom: 6px;
      }

      &.md-has-textarea:not(.md-autogrow) {
        .md-textarea {
          padding-top: 14px;
          padding-bottom: 16px;
        }

        &.md-focused,
        &.md-has-value {
          label {
            top: 16px;
          }
        }
      }

      &.md-focused,
      &.md-has-value {
        label {
          top: 8px;
          font-size: 16px;
        }
      }

      &.md-focused {
        .md-prefix, {
          display: none;
        }
      }

      &.md-has-value {
        label {
          opacity: 0;
        }

        .md-prefix, {
          display: block;
        }
      }
    }

    .md-toolbar &.md-nested {
      margin: 8px 0 0;

      > .md-icon {
        &:after {
          display: none;
        }
      }
    }
  }

  .md-field.md-field-bottom-line.md-dense {
    margin: 8px 0 24px;
    min-height: 40px;

    label {
      top: 18px;
      font-size: 13px;
    }

    .md-input,
    .md-textarea {
      height: 24px;
      min-height: 24px;
      padding: 0 0 4px;
      line-height: 20px;
      font-size: 13px;
    }

    .md-textarea {
      line-height: 16px;
      padding: 2px 0 6px;
    }

    .md-prefix,
    .md-suffix {
      font-size: 13px;
      line-height: 20px;
      padding-bottom: 4px;
    }

    .md-helper-text,
    .md-error,
    .md-count {
      bottom: -16px;
    }

    > .md-input-action {
      bottom: 2px;
      width: 24px;
      min-width: 24px;
      height: 24px;

      .md-icon,
      svg {
        font-size: 18px !important;
        width: 18px;
        min-width: 18px;
        height: 18px;
      }
    }

    > .md-icon {
      font-size: 18px !important;
      width: 18px !important;
      min-width: 18px;
      height: 18px;
      margin-top: 0;

      &:after {
        width: 30px;
      }

      ~ {
        label {
          left: 30px;
        }
      }
    }

    &.md-has-textarea:not(.md-autogrow) {

      label {
        top: 16px;
      }

      > .md-icon {
        top: 2px;
      }

      &.md-focused,
      &.md-has-value {
        label {
          top: 8px;
        }

        .md-textarea {
          padding-top: 24px;
        }
      }
    }

    &.md-focused,
    &.md-has-value {
      label {
        top: 2px;
        font-size: 12px;
      }

      .md-input,
      .md-textarea {
        font-size: 13px;
      }
    }

    &.md-inline {
      min-height: 25px;

      label {
        top: 3px;
      }

      &.md-has-textarea:not(.md-autogrow) {
        .md-textarea {
          padding-top: 14px;
        }

        &.md-focused,
        &.md-has-value {
          label {
            top: 16px;
          }
        }
      }

      &.md-focused,
      &.md-has-value {
        label {
          top: 3px;
          font-size: 13px;
        }

        .md-input,
        .md-textarea {
          font-size: 13px;
        }
      }
    }
  }

  .md-field.md-field-box {
    min-height: 56px;
    border-radius: 4px;
    padding: 0 16px;

    &:before,
    &:after {
      bottom: 0;
      right: 0;
      left: 0;
    }

    &:after {
      height: 1px;
    }

    &:before {
      height: 2px;
      z-index: 2;
      opacity: 0;
      transform: scaleX(.12);
    }

    label {
      top: 20px;
      left: 16px;
      font-size: 16px;
    }

    .md-input,
    .md-textarea, {
      height: 56px;
      padding: 20px 0 1px;
      margin-top: 0;
      font-size: 1px;
      line-height: 1.15;

      &[type="date"] {
        font-size: 16px;
      }
    }

    .md-textarea {
      min-height: 56px;
      max-height: 230px;
      line-height: 1.3em;
      padding: 28px 0 9px;
    }

    .md-prefix,
    .md-suffix {
      transition: $md-transition-stand;
      transition-property: padding-top;
    }

    .md-helper-text,
    .md-error,
    .md-count {
      bottom: -20px;
      font-size: 12px;
    }

    .md-helper-text,
    .md-error {
      left: 16px;
    }

    .md-count {
      right: 16px;
    }

    > .md-input-action {
      top: 50%;
      transform: translateY(-50%);
      right: 8px;
    }

    > .md-icon {

      &:first-child {
        margin-right: 16px;
      }

      &:last-of-type:not(:first-child) {
        margin-left: 16px;
      }

      ~ {
        label {
          left: 56px;
        }
      }
    }

    &.md-has-placeholder {
      label {
        pointer-events: auto;
        top: 16px;
        opacity: 0;
        font-size: 12px;
      }

      .md-input,
      .md-textarea {
        padding-top: 10px;
        padding-bottom: 11px;
        font-size: 16px;
      }

      &.md-focused,
      &.md-has-value {
        .md-input,
        .md-textarea {
          padding-top: 20px;
          padding-bottom: 1px;
        }
      }
    }

    &.md-has-textarea:not(.md-autogrow) {
      .md-textarea {
        min-height: 100px;
        resize: vertical;
      }

      > .md-icon {
        top: 18px;
      }
    }

    .md-select {
      > .md-icon {
        margin-right: 12px;
      }
    }

    &.md-focused,
    &.md-highlight {
      &:before {
        opacity: 1;
        transform: scaleX(1);
        transition: .3s $md-transition-default-timing;
        transition-property: border, opacity, transform;
      }
    }

    &.md-focused,
    &.md-has-value {
      label {
        pointer-events: auto;
        top: 8px;
        opacity: 1;
        font-size: 12px;
      }

      .md-input,
      .md-textarea {
        font-size: 16px;
      }

      .md-prefix,
      .md-suffix {
        padding-top: 20px;
      }
    }

    &.md-disabled {
      &:after {
        opacity: 0;
      }
    }

    &.md-invalid {
      @keyframes md-invalid-shake {
        10%, 90% {
          transform: translate3d(-1px, 0, 0);
        }

        30%, 70% {
          transform: translate3d(-4px, 0, 0);
        }

        40%, 60% {
          transform: translate3d(4px, 0, 0);
        }
      }

      &.md-has-value label:not(:focus) {
        animation: md-invalid-shake .4s $md-transition-default-timing both;
        backface-visibility: hidden;
        perspective: 1000px;
      }

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

    &.md-clearable {
      &.md-has-value {
        padding-right: 56px;
      }
    }

    &.md-has-password {
      padding-right: 56px;

      .md-toggle-password {
        svg {
          width: 22px;
          height: 22px;
        }
      }
    }

    &.md-inline {
      min-height: 56px;

      label {
        pointer-events: none;
        top: 20px;
      }

      .md-input,
      .md-textarea {
        height: 56px;
        padding-top: 16px;
        padding-bottom: 18px;
      }

      .md-textarea {
        min-height: 56px;
        padding-top: 16px;
        padding-bottom: 18px;
      }

      &.md-focused,
      &.md-has-value {
        label {
          top: 20px;
          font-size: 16px;
        }

        .md-prefix,
        .md-suffix {
          padding-top: 0;
        }
      }

      &.md-focused {
        .md-prefix, {
          display: none;
        }
      }

      &.md-has-value {
        label {
          opacity: 0;
        }

        .md-prefix, {
          display: block;
        }
      }
    }

    .md-toolbar &.md-nested {
      min-height: 40px;
      height: 40px;
      margin: 0;

      label {
        top: 12px;
      }

      .md-input,
      .md-textarea {
        height: 40px;
        padding-top: 8px;
        padding-bottom: 10px;
      }
    }
  }

  .md-field.md-field-box.md-dense {
    margin: 8px 0 24px;
    min-height: 47px;

    label {
      top: 16px;
      font-size: 13px;
    }

    .md-input,
    .md-textarea {
      height: 47px;
      padding: 16px 0 1px;
    }

    .md-textarea {
      min-height: 47px;
      padding: 24px 0 9px;
    }

    .md-prefix,
    .md-suffix {
      font-size: 13px;
    }

    .md-helper-text,
    .md-error,
    .md-count {
      bottom: -16px;
    }

    > .md-input-action {
      width: 24px;
      min-width: 24px;
      height: 24px;

      .md-icon {
        font-size: 18px !important;
      }

      .md-icon,
      svg {
        width: 18px;
        min-width: 18px;
        height: 18px;
      }
    }

    > .md-icon {
      font-size: 18px !important;
      width: 18px !important;
      min-width: 18px;
      height: 18px;

      ~ {
        label {
          left: 50px;
        }
      }
    }

    &.md-has-placeholder {
      label {
        top: 16px;
        font-size: 12px;
      }

      .md-input,
      .md-textarea {
        padding-top: 10px;
        padding-bottom: 11px;
        font-size: 13px;
      }

      &.md-focused,
      &.md-has-value {
        .md-input,
        .md-textarea {
          padding-top: 16px;
          padding-bottom: 1px;
        }
      }
    }

    &.md-has-textarea:not(.md-autogrow) {
      > .md-icon {
        top: 16px;
      }
    }

    &.md-focused,
    &.md-has-value {
      label {
        top: 8px;
        font-size: 12px;
      }

      .md-input,
      .md-textarea {
        font-size: 13px;
      }

      .md-prefix,
      .md-suffix {
        padding-top: 16px;
      }
    }

    &.md-has-password {
      .md-toggle-password {
        svg {
          width: 16px;
          height: 16px;
        }
      }
    }

    &.md-inline {
      label {
        pointer-events: none;
        top: 17px;
      }

      .md-input,
      .md-textarea {
        padding-top: 16px;
        padding-bottom: 16px;
      }

      &.md-focused,
      &.md-has-value {
        label {
          top: 17px;
          font-size: 13px;
        }

        .md-prefix,
        .md-suffix {
          padding-top: 0;
        }
      }
    }
  }

  .md-field.md-inline.md-field-raised {
    @include md-elevation(2);
    border-radius: 2px;
    align-items: center;
    min-height: 48px;
    padding: 0 16px;

    &.md-focused {
      z-index: 120;
    }

    &:before,
    &:after {
      display: none;
    }

    label {
      left: 16px;
      font-size: 16px;
      line-height: 1.15;
      margin-top: 1px;
    }

    &.md-focused label,
    label {
      top: 50%;
      transform: translateY(-50%);
    }

    .md-input,
    .md-textarea, {
      height: 48px;
      padding: 15px 0 15px;
      margin-top: 0;
      font-size: 16px;
      line-height: 1.15;
    }

    .md-textarea {
      min-height: 48px;
      max-height: 230px;
      line-height: 1.3em;
      padding: 15px 0 15px;
    }

    .md-prefix,
    .md-suffix {
      padding-top: 2px;
    }

    .md-helper-text,
    .md-error,
    .md-count {
      bottom: -20px;
      font-size: 12px;
    }

    .md-helper-text,
    .md-error {
      left: 16px;
    }

    .md-count {
      right: 16px;
    }

    > .md-input-action {
      top: 50%;
      transform: translateY(-50%);
      right: 8px;
    }

    > .md-icon {
      &:first-child {
        margin-right: 16px;
      }

      &:last-of-type:not(:first-child) {
        margin-left: 16px;
      }

      ~ {
        label {
          left: 56px;
        }
      }
    }

    &.md-disabled {
      @include md-elevation(1);
      opacity: 0.7;
    }

    &.md-has-placeholder {
      label {
        opacity: 0;
      }
    }

    &.md-has-textarea:not(.md-autogrow) {
      label {
        top: 12px;
        transform: none;
      }

      .md-textarea {
        min-height: 100px;
        resize: vertical;
      }

      > .md-icon {
        top: 18px;
      }
    }

    .md-select {
      > .md-icon {
        margin-right: 12px;
      }
    }

    &.md-focused {
      .md-prefix {
        display: none;
      }
    }

    &.md-has-value {
      label {
        opacity: 0;
      }

      .md-prefix {
        display: block;
      }
    }

    &.md-invalid {
      @keyframes md-invalid-shake {
        10%, 90% {
          transform: translate3d(-1px, 0, 0);
        }

        30%, 70% {
          transform: translate3d(-4px, 0, 0);
        }

        40%, 60% {
          transform: translate3d(4px, 0, 0);
        }
      }

      &.md-has-value label:not(:focus) {
        animation: md-invalid-shake .4s $md-transition-default-timing both;
        backface-visibility: hidden;
        perspective: 1000px;
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

    &.md-clearable {
      &.md-has-value {
        padding-right: 56px;
      }
    }

    &.md-has-password {
      padding-right: 56px;

      .md-toggle-password {
        svg {
          width: 22px;
          height: 22px;
        }
      }
    }

    .md-toolbar &.md-nested {
      transition: $md-transition-default;
      transition-property: background-color, box-shadow;
      min-height: 40px;
      height: 40px;
      margin: 0;
      box-shadow: none;

      &.md-focused {
        @include md-elevation(2);
      }
    }
  }

  .md-field.md-inline.md-field-raised.md-dense {
    min-height: 37px;

    label {
      font-size: 13px;
    }

    .md-input,
    .md-textarea, {
      height: 37px;
      padding: 12px 0 10px;
      font-size: 13px;
    }

    .md-textarea {
      min-height: 37px;
      max-height: 230px;
      line-height: 1.3em;
      padding: 12px 0 10px;
    }

    .md-prefix,
    .md-suffix {
      font-size: 13px;
    }

    .md-helper-text,
    .md-error,
    .md-count {
      bottom: -18px;
    }

    > .md-input-action {
      width: 24px;
      min-width: 24px;
      height: 24px;

      .md-icon {
        font-size: 18px !important;
      }

      .md-icon,
      svg {
        width: 18px;
        min-width: 18px;
        height: 18px;
      }
    }

    > .md-icon {
      font-size: 18px !important;
      width: 18px !important;
      min-width: 18px;
      height: 18px;

      ~ {
        label {
          left: 48px;
        }
      }
    }

    &.md-clearable {
      &.md-has-value {
        padding-right: 48px;
      }
    }

    &.md-has-password {
      padding-right: 48px;

      .md-toggle-password {
        svg {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
</style>
