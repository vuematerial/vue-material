/*<template>
  <li class="md-list-item" :class="classes">
    <md-button class="md-list-item-container" :href="href" :disabled="disabled" :target="target" v-if="href">
      <slot></slot>
    </md-button>

    <slot v-else-if="isRouterLink"></slot>

    <div class="md-list-item-container" v-else>
      <slot></slot>

      <md-icon class="md-list-expand-indicator" v-if="hasExpand">keyboard_arrow_down</md-icon>
    </div>

    <md-ink-ripple v-if="isRouterLink" :md-disabled="disabled"></md-ink-ripple>
    <md-button class="md-button md-button-ghost" @click="hasExpand && toggleExpandList" :disabled="disabled" v-if="!href && !isRouterLink"></md-button>
  </li>
</template>

<script>
  import MdListItemButton from 'mdListItemButton';

  export default {
    props: {
      href: String,
      target: String,
      disabled: Boolean
    },
    data: () => ({
      hasExpand: false,
      isRouterLink: false
    }),
    computed: {
      classes() {
        return {
          'md-list-item-expand': this.hasExpand
        };
      }
    },
    methods: {
      toggleExpandList() {
        let target;
        const recalculateExpand = (element) => {
          element.$children.some((expand) => {
            if (expand.$el.classList.contains('md-list-expand')) {
              expand.calculatePadding();
            }
          });
        };

        this.$parent.$children.some((child) => {
          var classList = child.$el.classList;

          if (classList.contains('md-list-item-expand') && classList.contains('md-active')) {
            target = child;
            classList.remove('md-active');

            recalculateExpand(child);

            return true;
          }
        });

        if (!target || this.$el !== target.$el) {
          this.$el.classList.add('md-active');
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        const children = this.$children;
        const containerClass = 'md-button md-list-item-container';

        if (children) {
          children.forEach((child) => {
            if (child.$options && child.$options._componentTag === 'router-link') {
              child.$el.className = containerClass;
              child.$vnode.data.attrs.class = containerClass;
              this.isRouterLink = true;
            }
          });
        }
      });
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
          click: ($event) => {
            this.$emit('click', $event);
          }
        }
      };

      let createItemHolder = (content) => {
        return createElement('div', { staticClass: holderClass }, content);
      };

      let createRipple = () => {
        return createElement('md-ink-ripple');
      };

      let createCompatibleRouterLink = () => {
        slot[0].data.staticClass = containerClass + ' ' + holderClass;

        return createElement('li', listItemSpec, [...slot, createRipple()]);
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
          }
        }, [createItemHolder(slot), createRipple()]);
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
</script>*/

import MdListItemButton from './mdListItemButton';
import MdListItemLink from './mdListItemLink';
import MdListItemRouter from './mdListItemRouter';
import mdListItemExpand from './mdListItemExpand';
import MdListItemDefault from './mdListItemDefault';

export default {
  functional: true,
  props: {
    href: String,
    disabled: Boolean
  },
  render(createElement, { children, data, props }) {
    const getItemComponent = () => {
      const nativeOn = data.nativeOn;
      const interactionEvents = [
        'contextmenu',
        'dblclick',
        'dragend',
        'mousedown',
        'touchstart',
        'click'
      ];
      let childrenCount = children.length;

      if (props.href) {
        return MdListItemLink;
      }

      if (nativeOn) {
        let counter = interactionEvents.length;

        while (counter--) {
          if (nativeOn[interactionEvents[counter]]) {
            return MdListItemButton;
          }
        }
      }

      while (childrenCount--) {
        const options = children[childrenCount].componentOptions;

        if (options) {
          if (options.tag === 'md-list-expand') {
            const expandComponent = children[childrenCount];

            data.scopedSlots = {
              expand: () => expandComponent
            };

            children.splice(childrenCount, 1);

            return mdListItemExpand;
          } else if (options.tag === 'router-link') {
            children[childrenCount].data.staticClass = 'md-list-item-container md-button';

            return MdListItemRouter;
          }
        }
      }

      return MdListItemDefault;
    };

    return createElement(getItemComponent(), { props, ...data }, children);
  }
};
