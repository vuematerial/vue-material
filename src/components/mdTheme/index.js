const createNewStyleElement = (style, name) => {
  let head = document.head;
  let styleId = 'md-theme-' + name;

  if (!head.querySelector('#' + styleId)) {
    let newTag = document.createElement('style');

    newTag.type = 'text/css';
    newTag.id = styleId;
    newTag.textContent = style;

    document.head.appendChild(newTag);
  }
};

const registerTheme = (theme, name) => {
  createNewStyleElement('', name);
};

export default function install(Vue, themes) {
  let themeNames = Object.keys(themes);

  if (themeNames.length) {
    themeNames.forEach((name) => {
      registerTheme(themes[name].primary, name);
    });
  }

  Vue.directive('mdTheme', (theme) => {
    if (theme) {
      console.log(theme);
    }
  });
}
