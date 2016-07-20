<template>
  <div class="md-button-group md-button-toggle">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdButtonToggle.scss"></style>

<script>
  let onClickButton;

  export default {
    props: {
      type: String
    },
    ready() {
      this.$children.forEach((child) => {
        let element = child.$el;

        onClickButton = () => {
          if (this.type === 'radio') {
            this.$children.forEach((child) => {
              child.$el.classList.remove('md-toggle');
            });

            element.classList.add('md-toggle');
          } else {
            element.classList.toggle('md-toggle');
          }
        };

        if (element && element.classList.contains('md-button')) {
          element.addEventListener('click', onClickButton);
        }
      });
    },
    beforeDestroy() {
      this.$children.forEach((child) => {
        let element = child.$el;

        if (element && element.classList.contains('md-button')) {
          element.removeEventListener('click', onClickButton);
        }
      });
    }
  };
</script>
