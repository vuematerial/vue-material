const createNewStyleElement = (style, name) => {
  let head = document.head;
  let styleId = 'md-theme-' + name;

  if (!head.querySelector('#' + styleId)) {
    let newTag = document.createElement('style');

    style = style.replace(/THEME_NAME/g, styleId);

    newTag.type = 'text/css';
    newTag.id = styleId;
    newTag.textContent = style;

    document.head.appendChild(newTag);
  }
};

const parseStyle = (style, theme) => {
  style = style
    .replace(/PRIMARY/g, theme.primary)
    .replace(/ACCENT/g, theme.accent)
    .replace(/BACKGROUND/g, theme.background);

  return style;
};

const registerTheme = (theme, name) => {
  let themeStyles = window.VueMaterial.styles;
  let parsedStyle = [];

  themeStyles.forEach((style) => {
    parsedStyle.push(parseStyle(style, theme));
  });

  createNewStyleElement(parsedStyle.join('\n'), name);
};

export default function install(Vue, themes) {
  let themeNames = Object.keys(themes);

  if (themeNames.length) {
    themeNames.forEach((name) => {
      registerTheme(themes[name], name);
    });
  }

  document.body.classList.add('md-theme-default');

  Vue.directive('mdTheme', (theme) => {
    if (theme) {
      console.log(theme);
    }
  });
}
