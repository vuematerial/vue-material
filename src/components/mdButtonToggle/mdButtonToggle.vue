<template>
  <div class="md-button-toggle" :class="[themeClass]" >
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdButtonToggle.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  let onClickButton;

  export default {
    props: {
      mdSingle: Boolean
    },
    mixins: [theme],
    mounted() {
      this.$children.forEach((child) => {
        let element = child.$el;
        let toggleClass = 'md-toggle';

        onClickButton = () => {
          if (this.mdSingle) {
            this.$children.forEach((child) => {
              child.$el.classList.remove(toggleClass);
            });

            element.classList.add(toggleClass);
          } else {
            element.classList.toggle(toggleClass);
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
