<script>
  export default {
    props: {
      href: String,
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

      let expand;
      let expandIndex;

      slot.some((slot, index) => {
        if (slot.componentOptions && slot.componentOptions.tag === 'md-list-expand') {
          expand = slot;
          expandIndex = index;

          return true;
        }
      });

      if (expand) {
        let expandArrow = createElement('md-icon', {
          staticClass: 'md-list-expand-indicator'
        }, 'keyboard_arrow_down');

        slot.splice(expandIndex, 1);
        slot.push(expandArrow);

        let container = createElement('div', {
          staticClass: containerClass,
          on: {
            click: () => {
              let target;

              this.$parent.$children.some((child) => {
                if (child.$el.classList.contains('md-list-item-expand') && child.$el.classList.contains('md-active')) {
                  target = child;
                  child.$el.classList.remove('md-active');

                  return true;
                }
              });

              if (!target || this.$el !== target.$el) {
                this.$el.classList.add('md-active');
              }

              this.$emit('click');
            }
          },
          directives: [{
            name: 'md-ink-ripple'
          }]
        }, slot);

        listItem.staticClass += ' md-list-item-expand';

        return createElement('li', listItem, [container, expand]);
      }

      let button = createElement('md-button', {
        staticClass: containerClass,
        attrs: {
          target: this.target,
          href: this.href
        }
      }, slot);

      if (this.target) {
        button.data.attrs.rel = 'noopener';
      }

      return createElement('li', listItem, [button]);
    }
  };
</script>
