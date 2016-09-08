<script>
  export default {
    props: {
      href: String,
      vLink: [String, Object],
      title: String,
      target: String
    },
    render(createElement) {
      let containerClass = 'md-button md-list-item-container';
      let listItem = {
        staticClass: 'md-list-item',
        on: {
          click: () => {
            this.$emit('click');
          }
        }
      };
      let slot = this.$slots.default;
      let componentOptions = slot[0].componentOptions;

      if (componentOptions && componentOptions.tag === 'router-link') {
        slot[0].data.staticClass = containerClass;
        slot[0].data.directives = [{
          name: 'md-ink-ripple'
        }];

        return createElement('li', listItem, slot);
      }

      let button = createElement('md-button', {
        staticClass: containerClass,
        attrs: {
          title: this.title,
          target: this.target,
          href: this.href
        }
      }, slot);

      return createElement('li', listItem, [button]);
    }
  };
</script>
