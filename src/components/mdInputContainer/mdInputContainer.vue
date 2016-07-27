<template>
  <div class="md-input-container" :class="classes">
    <slot></slot>

    <md-button class="md-icon-button md-toggle-password" @click="togglePasswordType" v-if="mdHasPassword">
      <md-icon>{{ showPassword ? 'visibility_off' : 'visibility' }}</md-icon>
    </md-button>
  </div>
</template>

<style lang="scss" src="./mdInputContainer.scss"></style>

<script>
  let focusedClass = 'md-input-focused';
  let inlineClass = 'md-input-inline';
  let disabledClass = 'md-input-disabled';
  let hasValueClass = 'md-has-value';
  let hasPasswordClass = 'md-has-password';

  let focusBindFunction;
  let blurBindFunction;
  let inputBindFunction;

  let manageHasValueClass = function(element, parent) {
    if (element.value.length > 0) {
      parent.classList.add(hasValueClass);
    } else {
      parent.classList.remove(hasValueClass);
    }
  };

  let manageDisabled = function(disabled, element) {
    if (disabled) {
      element.setAttribute('disabled', 'true');
    } else {
      element.removeAttribute('disabled');
    }
  };

  export default {
    props: {
      mdInline: Boolean,
      mdDisabled: Boolean,
      mdHasPassword: Boolean
    },
    computed: {
      classes() {
        let cssClasses = [];

        this.mdInline && cssClasses.push(inlineClass);
        this.mdDisabled && cssClasses.push(disabledClass);
        this.mdHasPassword && cssClasses.push(hasPasswordClass);

        return cssClasses.join(' ');
      }
    },
    watch: {
      mdDisabled(disabled) {
        manageDisabled(disabled, this.input);
      }
    },
    data() {
      return {
        input: false,
        inputType: false,
        showPassword: false
      };
    },
    methods: {
      togglePasswordType() {
        if (this.input.tagName.toLowerCase() === 'input') {
          let type = this.input.type;

          if (type === 'password') {
            this.input.type = 'text';
            this.showPassword = true;
          } else {
            this.input.type = 'password';
            this.showPassword = false;
          }
        }
      }
    },
    ready() {
      let container = this.$el;

      this.input = container.querySelector('input') || container.querySelector('textarea');
      this.inputType = this.input.type;

      focusBindFunction = function() {
        container.classList.add(focusedClass);
      };

      blurBindFunction = function() {
        container.classList.remove(focusedClass);
        manageHasValueClass(this, container);
      };

      inputBindFunction = function() {
        manageHasValueClass(this, container);
      };

      this.input.addEventListener('focus', focusBindFunction);
      this.input.addEventListener('blur', blurBindFunction);
      this.input.addEventListener('input', inputBindFunction);

      manageHasValueClass(this.input, container);
      manageDisabled(this.mdDisabled, this.input);
    },
    beforeDestroy() {
      this.input.removeEventListener('focus', focusBindFunction);
      this.input.removeEventListener('blur', blurBindFunction);
      this.input.removeEventListener('input', inputBindFunction);
    }
  };
</script>
