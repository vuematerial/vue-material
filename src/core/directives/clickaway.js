let handleClick;

export default {
  acceptStatement: true,
  priority: 700,
  update(element, handler) {
    handleClick = function(event) {
      if (!element.contains(event.target)) {
        handler.value(event);
      }
    };

    document.documentElement.addEventListener('click', handleClick);
  },
  unbind() {
    document.documentElement.removeEventListener(document.documentElement, 'click', handleClick);
  }
};
