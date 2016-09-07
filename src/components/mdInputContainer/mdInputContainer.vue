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
  export default {
    props: {
      mdInline: Boolean,
      mdDisabled: Boolean,
      mdHasPassword: Boolean
    },
    computed: {
      classes() {
        return {
          'md-input-inline': this.mdInline,
          'md-has-password': this.mdHasPassword,
          'md-has-select': this.mdHasSelect,
          'md-has-value': Boolean(this.value)
        };
      }
    },
    data() {
      return {
        value: null,
        input: false,
        inputType: false,
        showPassword: false,
        enableCounter: false,
        mdHasSelect: false,
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
      },
      setValue(value) {
        this.value = value;
      }
    },
    mounted() {
      this.input = this.$el.querySelector('input') || this.$el.querySelector('textarea') || this.$el.querySelector('select');

      if (!this.input) {
        this.$destroy();

        throw new Error('Missing input/select/textarea inside md-input-container');
      }

      this.inputType = this.input.type;
    }
  };
</script>
