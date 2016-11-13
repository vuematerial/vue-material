<script>
  export default {
    props: {
      href: String,
      target: String,
      disabled: Boolean
    },
    render(createElement) {
      let containerClass = 'md-button md-list-item-container';
      let holderClass = 'md-list-item-holder';
      let slot = this.$slots.default;
      let componentOptions = slot[0].componentOptions;
      let expandSlot;
      let expandSlotIndex;

      let listItemSpec = {
        staticClass: 'md-list-item',
        on: {
          click: () => {
            this.$emit('click');
          }
        }
      };

      let createItemHolder = (content) => {
        return createElement('div', { staticClass: holderClass }, content);
      };

      let createCompatibleRouterLink = () => {
        slot[0].data.staticClass = containerClass + ' ' + holderClass;
        slot[0].data.directives = [{
          name: 'md-ink-ripple'
        }];

        return createElement('li', listItemSpec, slot);
      };

      let prepareExpandList = () => {
        slot.some((slot, index) => {
          if (slot.componentOptions && slot.componentOptions.tag === 'md-list-expand') {
            expandSlot = slot;
            expandSlotIndex = index;

            return true;
          }
        });
      };

      let createExpandIndicator = () => {
        return createElement('md-icon', {
          staticClass: 'md-list-expand-indicator'
        }, 'keyboard_arrow_down');
      };

      let recalculateExpand = (element) => {
        element.$children.some((expand) => {
          if (expand.$el.classList.contains('md-list-expand')) {
            expand.calculatePadding();
          }
        });
      };

      let handleExpandClick = (scope) => {
        let target;

        scope.$parent.$children.some((child) => {
          var classList = child.$el.classList;

          if (classList.contains('md-list-item-expand') && classList.contains('md-active')) {
            target = child;
            classList.remove('md-active');

            recalculateExpand(child);

            return true;
          }
        });

        if (!target || scope.$el !== target.$el) {
          scope.$el.classList.add('md-active');
        }
      };

      let createExpandElement = () => {
        slot.splice(expandSlotIndex, 1);
        slot.push(createExpandIndicator());

        return createElement('button', {
          staticClass: containerClass,
          on: {
            click: () => {
              handleExpandClick(this);
              this.$emit('click');
            }
          },
          directives: [{
            name: 'md-ink-ripple'
          }]
        }, [createItemHolder(slot)]);
      };

      let createExpandList = () => {
        listItemSpec.staticClass += ' md-list-item-expand';

        return createElement('li', listItemSpec, [createExpandElement(), expandSlot]);
      };

      if (componentOptions && componentOptions.tag === 'router-link') {
        return createCompatibleRouterLink();
      }

      prepareExpandList();

      if (expandSlot) {
        return createExpandList();
      }

      let buttonSpec = createElement('md-button', {
        staticClass: containerClass,
        attrs: {
          target: this.target,
          href: this.href,
          disabled: this.disabled
        }
      }, [createItemHolder(slot)]);

      if (this.target) {
        buttonSpec.data.attrs.rel = 'noopener';
      }

      return createElement('li', listItemSpec, [buttonSpec]);
    }
  };
</script>
