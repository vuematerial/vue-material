import allCountries from './all-countries';

export function getCountry() {
  return fetch('https://ip2c.org/s')
    .then(response => response.text())
    .then((response) => {
      const result = (response || '').toString();

      if (!result || result[0] !== '1') {
        throw new Error('unable to fetch the country');
      }

      return result.substr(2, 2);
    });
}

// Credits: http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
export function setCaretPosition(ctrl, pos) {
  // Modern browsers
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);

  // IE8 and below
  } else if (ctrl.createTextRange) {
    const range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

export const defaultOptions = {
  placeholder: 'Enter a phone number',
  disabledFetchingCountry: false,
  disabled: false,
  disabledFormatting: false,
  mode: '',
  invalidMsg: '',
  required: false,
  allCountries,
  defaultCountry: '',
  enabledCountryCode: false,
  enabledFlags: true,
  preferredCountries: [],
  onlyCountries: [],
  ignoredCountries: [],
  autofocus: false,
  autocomplete: 'on',
  name: 'telephone',
  wrapperClasses: '',
  inputClasses: '',
  inputId: '',
  dropdownOptions: {},
  inputOptions: {},
  maxLen: 25,
  validCharactersOnly: false,
  dynamicPlaceholder: false,
};

export default {
  options: { ...defaultOptions },
};
