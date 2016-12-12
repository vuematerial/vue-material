<style lang="scss" src="./mdLayout.scss"></style>

<script>
  export default {
    props: {
      mdTag: {
        type: String,
        default: 'div'
      }
    },
    render(createElement) {
      return createElement(this.mdTag, {
        staticClass: 'md-layout',
        class: this.classes
      }, this.$slots.default);
    }
  };
</script>
