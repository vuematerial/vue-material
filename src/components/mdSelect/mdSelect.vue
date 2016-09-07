<template>
  <div
    class="md-select"
    :class="classes"
    :tabindex="disabled ? null : '0'"
    v-on-clickaway="hideMenu">
    <span class="md-select-value" @click="showMenu">{{ value }}</span>

    <div class="md-select-menu" tabindex="-1">
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
        active: false
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
      showMenu() {
        this.active = true;
      },
      hideMenu() {
        this.active = false;
      },
      selectOption(value) {
        this.hideMenu();
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
    }
  };
</script>
