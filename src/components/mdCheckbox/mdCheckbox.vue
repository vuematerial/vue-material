<template>
  <div class="md-checkbox" :class="[themeClass, classes]">
    <div class="md-checkbox-container" @click.stop="toggleCheck" tabindex="0">
      <input type="checkbox" :name="name" :id="id" :disabled="disabled" :value="mdValue" :checked="checked" tabindex="-1">
      <md-ink-ripple :md-disabled="disabled" />
    </div>

    <label :for="id || name" class="md-checkbox-label" v-if="$slots.default" @click.prevent="toggleCheck">
      <slot></slot>
    </label>
  </div>
</template>

<style lang="scss" src="./mdCheckbox.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    name: 'md-checkbox',
    props: {
      name: String,
      value: [String, Boolean, Array],
      id: String,
      disabled: Boolean,
      mdValue: [String]
    },
    mixins: [theme],
    data() {
      return {
        checked: this.value || false
      };
    },
    computed: {
      classes() {
        return {
          'md-checked': this.isArray() ? this.value.indexOf(this.mdValue) >= 0 : this.checked,
          'md-disabled': this.disabled
        };
      }
    },
    watch: {
      value() {
        if (!this.isArray()) {
          this.checked = !!this.value;
        }
      }
    },
    methods: {
      toggleCheck($event) {

        if (!this.disabled) {
          if (this.isArray()) {
            let index = this.value.indexOf(this.mdValue);
  
            if (index >= 0) {
              this.value.splice(index, 1);
            } else {
              this.value.push(this.mdValue);
            }

            this.$emit('change', this.value, $event);
            this.$emit('input', this.value, $event);
          } else {
            this.checked = !this.checked;
            this.$emit('change', this.checked, $event);
            this.$emit('input', this.checked, $event);
          }
        }
      },

      isArray() {
        return Array.isArray(this.value);
      }
    }
  };
</script>
