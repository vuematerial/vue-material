<template>
  <div class="md-button-group md-button-toggle">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdButtonToggle.scss"></style>

<script>
  let onClickButton;

  export default {
    ready() {
      this.$children.forEach((child) => {
        let element = child.$el;

        if (element && element.classList.contains('md-button')) {
          element.addEventListener('click', onClickButton = () => {
            element.classList.toggle('md-toggle');
          });
        }
      });
    },
    beforeDestroy() {
      this.$children.forEach((child) => {
        let element = child.$el;

        if (element && element.classList.contains('md-button')) {
          child.removeEventListener('click', onClickButton);
        }
      });
    }
  };
</script>
