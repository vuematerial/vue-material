import palette from './palette';

let registedThemes = [];
const VALID_THEME_TYPE = ['primary', 'accent', 'background', 'warn'];
const DEFAULT_THEME_COLORS = {
  primary: 'indigo',
  accent: 'pink',
  background: 'white',
  warn: 'deep-orange'
};

const createNewStyleElement = (style, name) => {
  let head = document.head;
  let styleId = 'md-theme-' + name;

  if (!head.querySelector('#' + styleId)) {
    let newTag = document.createElement('style');

    style = style.replace(/THEME_NAME/g, styleId);

    newTag.type = 'text/css';
    newTag.id = styleId;
    newTag.textContent = style;

    head.appendChild(newTag);
  }
};

const parseStyle = (style, theme) => {
  VALID_THEME_TYPE.forEach((type) => {
    style = style.replace(RegExp('(' + type.toUpperCase() + ')-(COLOR|CONTRAST)-?(A?\\d\\.?\\d*)?', 'g'), (match, paletteType, colorType, hue) => {
      let color;
      let colorVariant = hue || 500;

      if (theme[type]) {
        if (typeof theme[type] === 'string') {
          color = palette[theme[type]];
        } else {
          color = palette[theme[type].color] || palette[DEFAULT_THEME_COLORS[type]];
          colorVariant = hue || theme[type].hue;
        }
      } else {
        color = palette[DEFAULT_THEME_COLORS[type]];
      }

      if (colorType === 'COLOR') {
        let isDefault = palette[theme[type]];

        if (!hue && !isDefault) {
          if (type === 'accent') {
            colorVariant = 'A200';
          } else if (type === 'background') {
            colorVariant = 50;
          }
        }

        return color[colorVariant];
      }

      if (color.darkText.indexOf(colorVariant) >= 0) {
        return 'rgba(0, 0, 0, .87)';
      }

      return 'rgba(255, 255, 255, .87)';
    });
  });

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
  let themeNames = themes ? Object.keys(themes) : [];

  if (themeNames.indexOf('default') === -1) {
    registerTheme(DEFAULT_THEME_COLORS, 'default');
    registedThemes.push('default');
  }

  themeNames.forEach((name) => {
    registerTheme(themes[name], name);
    registedThemes.push(name);
  });

  document.body.classList.add('md-theme-default');

  Vue.directive('mdTheme', function(theme) {
    if (theme && registedThemes.indexOf(theme) >= 0) {
      this.el.classList.add('md-theme-' + theme);
    } else {
      console.warn('Attempted to use unregistered theme "' + theme + '\".');
    }
  });
}
