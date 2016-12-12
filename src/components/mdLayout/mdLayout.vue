<style lang="scss" src="./mdLayout.scss"></style>

<script>
  import tag from './tag';

  export default {
    mixins: [tag],
    render(createElement) {
      return createElement(this.mdTag, {
        staticClass: 'md-layout',
        class: this.classes
      }, this.$slots.default);
    }
  };
</script>
