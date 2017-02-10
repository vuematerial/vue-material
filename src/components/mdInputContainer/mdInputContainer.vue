<template>
  <div class="md-input-container" :class="[themeClass, classes]">
    <slot></slot>

    <span class="md-count" v-if="enableCounter">{{ inputLength }} / {{ counterLength }}</span>

    <md-button class="md-icon-button md-toggle-password" @click.native="togglePasswordType" v-if="mdHasPassword">
      <md-icon>{{ showPassword ? 'visibility_off' : 'visibility' }}</md-icon>
    </md-button>
  </div>
</template>

<style lang="scss" src="./mdInputContainer.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';
  import isArray from '../../core/utils/isArray';

  export default {
    props: {
      mdInline: Boolean,
      mdHasPassword: Boolean
    },
    mixins: [theme],
    data() {
      return {
        value: '',
        input: false,
        showPassword: false,
        enableCounter: false,
        hasSelect: false,
        hasPlaceholder: false,
        hasFile: false,
        isDisabled: false,
        isRequired: false,
        isFocused: false,
        counterLength: 0,
        inputLength: 0
      };
    },
    computed: {
      hasValue() {
        if (isArray(this.value)) {
          return this.value.length > 0;
        }

        return Boolean(this.value);
      },
      classes() {
        return {
          'md-input-inline': this.mdInline,
          'md-has-password': this.mdHasPassword,
          'md-has-select': this.hasSelect,
          'md-has-file': this.hasFile,
          'md-has-value': this.hasValue,
          'md-input-placeholder': this.hasPlaceholder,
          'md-input-disabled': this.isDisabled,
          'md-input-required': this.isRequired,
          'md-input-focused': this.isFocused
        };
      }
    },
    methods: {
      isInput() {
        return this.input && this.input.tagName.toLowerCase() === 'input';
      },
      togglePasswordType() {
        if (this.isInput()) {
          if (this.input.type === 'password') {
            this.input.type = 'text';
            this.showPassword = true;
          } else {
            this.input.type = 'password';
            this.showPassword = false;
          }

          this.input.focus();
        }
      },
      setValue(value) {
        this.value = value;
      }
    },
    mounted() {
      this.input = this.$el.querySelectorAll('input, textarea, select, .md-file')[0];

      if (!this.input) {
        this.$destroy();

        throw new Error('Missing input/select/textarea inside md-input-container');
      }
    }
  };
</script>
