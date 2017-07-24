import palette from './palette';
import rgba from './rgba';
import mdTheme from './mdTheme';
import { changeHtmlMetaColor, createNewStyleElement } from './dom';

const VALID_THEME_TYPE = ['primary', 'accent', 'background', 'warn', 'hue-1', 'hue-2', 'hue-3'];
const TYPE_REGEX = new RegExp('(' + VALID_THEME_TYPE.join('|').toUpperCase() + ')-(COLOR|CONTRAST)-?(A?\\d*)-?(\\d*\\.?\\d+)?', 'g');
const DEFAULT_THEME_COLORS = {
  primary: 'indigo',
  accent: 'pink',
  background: 'white',
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

const registeredPrimaryColor = {};
const injectedStyles = {};

const parseStyle = (style, theme, name) => {
  return style.replace(TYPE_REGEX, (match, type, colorType, hue, opacity) => {
    let color;
    let colorVariant = +hue === 0 ? 500 : hue;

    type = type.toLowerCase();

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

      if (!colorVariant && !isDefault) {
        if (type === 'accent') {
          colorVariant = 'A200';
        } else if (type === 'background') {
          colorVariant = 50;
        }
      }

      if (type === 'primary') {
        registeredPrimaryColor[name] = color[colorVariant];
      }

      if (opacity) {
        return rgba(color[colorVariant], opacity);
      }

      return color[colorVariant];
    }

    let isDarkText = color.darkText.indexOf(colorVariant) >= 0;

    if (theme[type] && typeof theme[type] !== 'string' && theme[type].textColor) {
      if (theme[type].textColor === 'black') {
        isDarkText = true;
      } else if (theme[type].textColor === 'white') {
        isDarkText = false;
      }
    }

    if (isDarkText) {
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
};

function warnNotFound(themeName) {
  console.warn(`The theme '${themeName}' doesn't exists. You need to register` +
    ' it first in order to use.');
}

function injectStyle(style, spec, name, styleId) {
  if (createNewStyleElement) {
    style = parseStyle(style, spec, name);
    style = style.replace(/THEME_NAME/g, styleId);

    createNewStyleElement(style, styleId);
  }
}

export default function install(Vue) {
  Vue.material = new Vue({
    data: {
      currentTheme: null,
      inkRipple: true,
      prefix: 'md-theme-',
      styles: [],
      themes: {
        default: DEFAULT_THEME_COLORS
      }
    },
    watch: {
      styles() {
        this.refreshInjectedStyles();
      }
    },
    methods: {
      registerPalette(name, spec) {
        palette[name] = spec;
      },
      useTheme(name) {
        if (name in injectedStyles) {
          return;
        }
        const spec = this.themes[name];

        if (!spec) {
          return warnNotFound(name);
        }

        injectStyle(this.styles.join('\n'), spec, name, this.prefix + name);

        return injectedStyles[name] = true;
      },
      refreshInjectedStyles() {
        const styles = this.styles.join('\n');
        const prefix = this.prefix;

        Object.keys(injectedStyles).forEach((name) => {
          const spec = this.themes[name];

          injectStyle(styles, spec, name, prefix + name);
        });
      },
      registerTheme(name, spec) {
        if (typeof name === 'string') {
          this.themes[name] = spec;
        } else {
          Object.keys(name).forEach((k) => this.themes[k] = name[k]);
        }
      },
      setCurrentTheme(name) {
        if (name === this.currentTheme) {
          return;
        }

        const prefix = this.prefix;

        this.useTheme(name);

        if (changeHtmlMetaColor) {
          changeHtmlMetaColor(
            registeredPrimaryColor[name],
            prefix + name,
            prefix + this.currentTheme
          );
        }

        this.currentTheme = name;
      }
    },
    created() {
      // set the default theme by default
      this.setCurrentTheme('default');
    }
  });

  Vue.component('md-theme', mdTheme);

  Vue.prototype.$material = Vue.material;
}
