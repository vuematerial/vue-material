<style lang="scss" src="./mdSubheader.scss"></style>

<script>
  export default {
    render(createElement) {
      let tag = 'div';
      let options = {
        staticClass: 'md-subheader'
      };

      if (this.$parent.$options._componentTag === 'md-list') {
        tag = 'li';
      }

      return createElement(tag, options, this.$slots.default);
    }
  };
</script>
