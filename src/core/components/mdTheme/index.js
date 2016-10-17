import palette from './palette';
import rgba from './rgba';

const VALID_THEME_TYPE = ['primary', 'accent', 'background', 'warn', 'hue-1', 'hue-2', 'hue-3'];
const DEFAULT_THEME_COLORS = {
  primary: 'indigo',
  accent: 'pink',
  background: 'grey',
  warn: 'deep-orange'
};
/*const DEFAULT_HUES = {
  accent: {
    'hue-1': 'A100',
    'hue-2': 'A400',
    'hue-3': 'A700'
  },
  background: {
    'hue-1': 'A100',
    'hue-2': '100',
    'hue-3': '300'
  }
};*/

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

let registeredThemes = [];

const parseStyle = (style, theme) => {
  VALID_THEME_TYPE.forEach((type) => {
    style = style.replace(RegExp('(' + type.toUpperCase() + ')-(COLOR|CONTRAST)-?(A?\\d*)-?(\\d*\\.?\\d+)?', 'g'), (match, paletteType, colorType, hue, opacity) => {
      let color;
      let colorVariant = +hue === 0 ? 500 : hue;

      if (theme[type]) {
        if (typeof theme[type] === 'string') {
          color = palette[theme[type]];
        } else {
          color = palette[theme[type].color] || palette[DEFAULT_THEME_COLORS[type]];
          colorVariant = +hue === 0 ? theme[type].hue : hue;
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

        if (opacity) {
          return rgba(color[colorVariant], opacity);
        }

        return color[colorVariant];
      }

      if (color.darkText.indexOf(colorVariant) >= 0) {
        if (opacity) {
          return rgba('#000', opacity);
        }

        return 'rgba(0, 0, 0, .87)';
      }

      if (opacity) {
        return rgba('#fff', opacity);
      }

      return 'rgba(255, 255, 255, .87)';
    });
  });

  return style;
};

const registerTheme = (theme, name, themeStyles) => {
  let parsedStyle = [];

  themeStyles.forEach((style) => {
    parsedStyle.push(parseStyle(style, theme));
  });

  createNewStyleElement(parsedStyle.join('\n'), name);
};

const registerAllThemes = (themes, themeStyles) => {
  let themeNames = themes ? Object.keys(themes) : [];

  if (themeNames.indexOf('default') === -1) {
    registerTheme(DEFAULT_THEME_COLORS, 'default', themeStyles);
    registeredThemes.push('default');
  }

  themeNames.forEach((name) => {
    registerTheme(themes[name], name, themeStyles);
    registeredThemes.push(name);
  });
};

const registerDirective = (element, { value, oldValue }) => {
  let theme = value;
  let newClass = 'md-theme-' + theme;
  let oldClass = 'md-theme-' + oldValue;

  if (!element.classList.contains(newClass)) {
    element.classList.remove(oldClass);

    if (theme && registeredThemes.indexOf(theme) >= 0) {
      element.classList.add(newClass);
    } else {
      element.classList.add(oldClass);
      console.warn('Attempted to use unregistered theme "' + theme + '\".');
    }
  }
};

export default function install(Vue) {
  Vue.directive('mdTheme', registerDirective);

  Vue.material.theme = {
    register(name, spec) {
      let theme = {};

      theme[name] = spec;

      registerAllThemes(theme, Vue.material.styles);
    },
    registerAll(themes) {
      registerAllThemes(themes, Vue.material.styles);
    }
  };
}
