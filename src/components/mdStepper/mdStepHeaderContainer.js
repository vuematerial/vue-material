import uniqueId from '../../core/utils/uniqueId';

export default {
  functional: true,
  props: {
    mdVertical: {
      type: Boolean,
      default: false
    }
  },
  render(createElement, { children, props }) {
    const insertDividerIntoArray = (arr) => {
      return arr.reduce((result, element, index, array) => {

        result.push(element);

        if (index < array.length - 1) {
          var mdDivider = createElement('md-divider', { key: 'divider-' + uniqueId() });

          result.push(mdDivider);
        }

        return result;
      }, []);
    };

    if (!props.mdVertical) {
      children = insertDividerIntoArray(children);
    }

    return createElement('div', { class: 'md-steps-navigation-container'}, children);
  }
};
