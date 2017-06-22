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
      const on = data.on;
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

      if (on) {
        let counter = interactionEvents.length;

        while (counter--) {
          if (on[interactionEvents[counter]]) {
            return MdListItemButton;
          }
        }
      }

      return MdListItemDefault;
    };

    return createElement(getItemComponent(), { props, ...data }, children);
  }
};
