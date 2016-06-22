import './mdInkRipple.vue';

export default function install(Vue) {
  let rippleParentClass = 'md-ink-ripple';
  let rippleClass = 'md-ripple';
  let rippleActiveClass = 'md-active';

  let registerMouseEvent = (element) => {
    Vue.nextTick(() => {
      let rect = element.getBoundingClientRect();
      let ripple = element.querySelector('.' + rippleClass);

      element.addEventListener('mousedown', function(event) {
        ripple.classList.remove(rippleActiveClass);

        let top = event.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
        let left = event.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;

        ripple.style.top = top + 'px';
        ripple.style.left = left + 'px';

        ripple.classList.add(rippleActiveClass);
      });
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

  let createRipple = (element) => {
    let ripple = element.querySelector('.' + rippleClass);

    if (!ripple) {
      Vue.nextTick(() => {
        let elementSize = Math.round(Math.max(element.offsetWidth, element.offsetHeight)) + 'px';
        let rippleParent = createElement(ripple, rippleParentClass);
        let rippleElement = createElement(ripple, rippleClass, elementSize);

        rippleParent.appendChild(rippleElement);
        element.appendChild(rippleParent);

        registerMouseEvent(element);
      });
    }
  };

  Vue.directive('mdInkRipple', function() {
    createRipple(this.el);
  });
}
