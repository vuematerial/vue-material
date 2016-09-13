<template>
  <div
    class="md-select"
    :class="classes"
    :tabindex="disabled ? null : '0'">
    <span
      class="md-select-value"
      @click="open"
      @keydown.enter.prevent="open"
      ref="value">{{ value }}</span>

    <div
      class="md-select-menu"
      tabindex="-1"
      ref="menu"
      @keydown.esc.prevent="close"
      @keydown.tab.prevent="close"
      @keydown.up.prevent="highlightOption(highlighted - 1)"
      @keydown.down.prevent="highlightOption(highlighted + 1)">
      <div class="md-select-menu-container">
        <slot></slot>
      </div>
    </div>

    <select :name="name" :id="id" :required="required" tabindex="-1">
      <option :value="value">{{ value }}</option>
    </select>
  </div>
</template>

<style lang="scss" src="./mdSelect.scss"></style>

<script>
  export default {
    props: {
      name: String,
      required: Boolean,
      value: [String, Number, Boolean],
      id: String,
      disabled: Boolean
    },
    data() {
      return {
        active: false,
        highlighted: false,
        optionsAmount: 0
      };
    },
    computed: {
      classes() {
        return {
          'md-disabled': this.disabled,
          'md-active': this.active
        };
      }
    },
    methods: {
      open() {
        this.active = true;
        document.addEventListener('click', this.closeOnOffClick);
        this.$refs.menu.focus();
      },
      close() {
        if (this.active) {
          this.$refs.menu.blur();
          this.active = false;
          document.removeEventListener('click', this.closeOnOffClick);
          this.$refs.value.focus();
        }
      },
      closeOnOffClick(event) {
        if (!this.$el.contains(event.target)) {
          this.close();
        }
      },
      highlightOption(factor) {
        if (factor >= 1 && factor <= this.optionsAmount) {
          this.highlighted = factor;
        } else {
          this.highlighted = 1;
        }
      },
      selectOption(value) {
        this.close();
        this.$parent.setValue(value);
        this.$emit('change', value);
        this.$emit('input', value);
      }
    },
    mounted() {
      if (!this.$parent.$el.classList.contains('md-input-container')) {
        this.$destroy();

        throw new Error('You should wrap the md-select in a md-input-container');
      }

      this.$parent.setValue(this.value);
      this.$parent.hasSelect = true;

    },
    beforeDestroy() {
      this.$parent.setValue(null);
      this.$parent.hasSelect = false;

      document.removeEventListener('click', this.closeOnOffClick);
    }
  };
</script>
