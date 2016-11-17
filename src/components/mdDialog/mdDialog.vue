<template>
  <div class="md-dialog" tabindex="0">
    <div class="md-dialog-container">
      <slot></slot>

      <md-backdrop class="md-dialog-backdrop" ref="backdrop" @close="close"></md-backdrop>
    </div>
  </div>
</template>

<style lang="scss" src="./mdDialog.scss"></style>

<script>
  import transitionEndEventName from '../../core/utils/transitionEndEventName';

  export default {
    data: () => ({
      active: false
    }),
    methods: {
      open() {
        this.close();
        this.$root.$el.appendChild(this.dialogElement);
        this.$root.$el.appendChild(this.backdropElement);

        getComputedStyle(this.dialogElement).opacity;
        this.dialogElement.focus();
        this.dialogElement.classList.add('md-active');
        this.backdropElement.classList.add('md-active');
      },
      close() {
        if (this.$root.$el.contains(this.dialogElement)) {
          let cleanElement = () => {
            this.dialogElement.removeEventListener(transitionEndEventName, close);
            this.$root.$el.removeChild(this.dialogElement);
            this.$root.$el.removeChild(this.backdropElement);
          };

          this.dialogElement.classList.remove('md-active');
          this.backdropElement.classList.remove('md-active');
          this.dialogElement.addEventListener(cleanElement, close);
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.rootElement = this.$root.$el;
        this.dialogElement = this.$el;
        this.backdropElement = this.$refs.backdrop.$el;
        this.$el.parentNode.removeChild(this.$el);
        this.$el.removeChild(this.$refs.backdrop.$el);
      });
    }
  };
</script>
