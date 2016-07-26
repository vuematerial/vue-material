<template>
  <div class="md-input-container">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdInputContainer.scss"></style>

<script>
  let focusedClass = 'md-input-focused';
  let hasValueClass = 'md-has-value';

  let focusBindFunction;
  let blurBindFunction;

  let manageHasValueClass = function(element, parent) {
    if (element.value.length > 0) {
      parent.classList.add(hasValueClass);
    } else {
      parent.classList.remove(hasValueClass);
    }
  };

  export default {
    data() {
      return {
        input: false
      };
    },
    ready() {
      let container = this.$el;

      this.input = container.querySelector('input');

      focusBindFunction = function() {
        container.classList.add(focusedClass);
      };

      blurBindFunction = function() {
        container.classList.remove(focusedClass);
        manageHasValueClass(this, container);
      };

      this.input.addEventListener('focus', focusBindFunction);
      this.input.addEventListener('blur', blurBindFunction);

      manageHasValueClass(this.input, container);
    }
  };
</script>
