<template>
  <div class="md-input-container" :class="classes">
    <slot></slot>

    <span class="md-count" v-if="enableCounter">{{ inputLength }} / {{ counterLength }}</span>

    <md-button class="md-icon-button md-toggle-password" @click="togglePasswordType" v-if="mdHasPassword">
      <md-icon>{{ showPassword ? 'visibility_off' : 'visibility' }}</md-icon>
    </md-button>
  </div>
</template>

<style lang="scss" src="./mdInputContainer.scss"></style>

<script>
  let inlineClass = 'md-input-inline';
  let hasPasswordClass = 'md-has-password';

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
        this.mdHasPassword && cssClasses.push(hasPasswordClass);

        return cssClasses.join(' ');
      }
    },
    data() {
      return {
        input: false,
        inputType: false,
        showPassword: false,
        enableCounter: false,
        counterLength: 0,
        inputLength: 0
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

          this.input.focus();
        }
      }
    },
    ready() {
      this.input = this.$el.querySelector('input') || this.$el.querySelector('textarea');

      if (!this.input) {
        this.$destroy();

        throw new Error('Missing input inside md-input-container');
      }

      this.inputType = this.input.type;
    }
  };
</script>
