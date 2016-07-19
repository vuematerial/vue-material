import 'scopedQuerySelectorShim/dist/scopedQuerySelectorShim';
import './mdInkRipple.vue';

export default function install(Vue) {
  let rippleParentClass = 'md-ink-ripple';
  let rippleClass = 'md-ripple';
  let rippleActiveClass = 'md-active';

  let registeredMouseFunction;

  let unregisterMouseEvent = (element) => {
    let ripple = element.querySelector(':scope > .' + rippleParentClass);

    if (ripple) {
      ripple.parentNode.removeChild(ripple);
      element.removeEventListener('mousedown', registeredMouseFunction);
    }
  };

  let registerMouseEvent = (element, holder) => {
    Vue.nextTick(() => {
      let rect = holder.getBoundingClientRect();
      let ripple = holder.querySelector(':scope > .' + rippleParentClass + '> .' + rippleClass);

      window.a = holder;

      if (ripple) {
        registeredMouseFunction = (event) => {
          ripple.classList.remove(rippleActiveClass);

          let top = event.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
          let left = event.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;

          ripple.style.top = top + 'px';
          ripple.style.left = left + 'px';

          ripple.classList.add(rippleActiveClass);
        };

        element.removeEventListener('mousedown', registeredMouseFunction);
        element.addEventListener('mousedown', registeredMouseFunction);
      }
    });
  };

  let createElement = (ripple, className, size) => {
    ripple = document.createElement('div');
    ripple.className = className;

    if (size) {
      ripple.style.width = size;
      ripple.style.height = size;
    }

    return ripple;
  };

  let checkPositionRelative = (element) => {
    return getComputedStyle(element).position === 'relative';
  };

  let getParentWithPositionRelatve = (element) => {
    let found = false;

    if (checkPositionRelative(element)) {
      return element;
    }

    while (!found) {
      let parent = element.parentNode;

      if (parent && checkPositionRelative(parent)) {
        found = parent;
      }
    }

    return found;
  };

  let createRipple = (element) => {
    Vue.nextTick(() => {
      let holder = getParentWithPositionRelatve(element);
      let ripple = holder.querySelector(':scope > .' + rippleParentClass + '> .' + rippleClass);

      if (!ripple) {
        let elementSize = Math.round(Math.max(holder.offsetWidth, holder.offsetHeight)) + 'px';
        let rippleParent = createElement(ripple, rippleParentClass);
        let rippleElement = createElement(ripple, rippleClass, elementSize);

        rippleParent.appendChild(rippleElement);
        holder.appendChild(rippleParent);
      }

      if (holder !== element) {
        registerMouseEvent(element, holder);
      } else if (!ripple) {
        registerMouseEvent(element, holder);
      }
    });
  };

  Vue.directive('mdInkRipple', function(disabled) {
    this.vm.$nextTick(() => {
      if (!disabled) {
        createRipple(this.el);
      } else {
        unregisterMouseEvent(this.el);
      }
    });
  });
}
