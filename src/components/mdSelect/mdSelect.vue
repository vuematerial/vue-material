<template>
  <div
    class="md-select"
    :class="classes"
    :tabindex="disabled ? null : '0'"
    v-on-clickaway="hideMenu"
    @invalid="onInvalid"
    @valid="onValid">
    <span class="md-select-value" @click="showMenu">{{ model }}</span>

    <div class="md-select-menu" tabindex="-1">
      <ul class="md-select-menu-container">
        <slot></slot>
      </ul>
    </div>

    <select v-model="model" :name="name" :id="id" :required="required" tabindex="-1">
      <option :value="model">{{ model }}</option>
    </select>
  </div>
</template>

<style lang="scss" src="./mdSelect.scss"></style>

<script>
  let hasValueClass = 'md-has-value';
  let invalidClass = 'md-input-invalid';

  let handleModelValue = (target, value) => {
    if (value) {
      target.add(hasValueClass);
    } else {
      target.remove(hasValueClass);
    }
  };

  export default {
    props: {
      model: {
        type: [String, Array, Boolean],
        required: true,
        twoWay: true
      },
      name: String,
      required: Boolean,
      value: String,
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
    watch: {
      model(value) {
        handleModelValue(this.$parent.$el.classList, value);
      }
    },
    methods: {
      onInvalid() {
        this.$parent.$el.classList.add(invalidClass);
      },
      onValid() {
        this.$parent.$el.classList.remove(invalidClass);
      },
      showMenu() {
        this.active = true;
      },
      hideMenu() {
        this.active = false;
      },
      selectOption(option) {
        this.model = option;
        this.hideMenu();
      }
    },
    ready() {
      if (!this.$parent.$el.classList.contains('md-input-container')) {
        this.$destroy();

        throw new Error('You should wrap the md-select in a md-input-container');
      }

      handleModelValue(this.$parent.$el.classList, this.model);
    }
  };
</script>
