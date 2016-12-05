<style lang="scss" src="./mdButton.scss"></style>

<script>
  export default {
    props: {
      href: String,
      type: String,
      disabled: Boolean
    },
    render(createElement) {
      let isDisabled = Boolean(this.disabled);
      let hasLink = Boolean(this.href);
      let tag = 'button';
      let options = {
        staticClass: 'md-button',
        attrs: {
          type: this.type || 'button',
          disabled: isDisabled
        },
        on: {
          click: ($event) => {
            this.$emit('click', $event);
          }
        }
      };
      let ripple = createElement('md-ink-ripple', {
        attrs: {
          mdDisabled: isDisabled
        }
      });

      if (hasLink) {
        tag = 'a';
        options.attrs.href = this.href;
        delete options.attrs.type;
      }

      return createElement(tag, options, [...this.$slots.default, ripple]);
    }
  };
</script>
