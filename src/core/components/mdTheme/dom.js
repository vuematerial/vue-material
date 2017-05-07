export var changeHtmlMetaColor;
export var createNewStyleElement;

if (process.env.VUE_ENV !== 'server') {
  changeHtmlMetaColor = (color, themeClass, previousClass) => {
    var elem = document.querySelector('meta[name="theme-color"]');

    if (elem) {
      elem.setAttribute('content', color);
    } else {
      elem = document.createElement('meta');
      elem.setAttribute('name', 'theme-color');
      elem.setAttribute('content', color);

      document.head.appendChild(elem);
    }

    document.body.classList.remove(previousClass);
    document.body.classList.add(themeClass);
  };

  createNewStyleElement = (style, styleId) => {
    const head = document.head;
    const styleElement = head.querySelector('#' + styleId);

    if (!styleElement) {
      const newTag = document.createElement('style');

      newTag.type = 'text/css';
      newTag.id = styleId;
      newTag.textContent = style;

      head.appendChild(newTag);
    } else {
      styleElement.textContent = style;
    }
  };
}
