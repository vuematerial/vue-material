// Highlights & Credits : https://github.com/EducationLink/vue-tel-input
<template>
<div :class="['vue-tel-input', wrapperClasses, { disabled: disabled }]">
    <div
      :tabindex="dropdownOptions && dropdownOptions.tabindex ? dropdownOptions.tabindex : 0"
      :class="{ open: open }"
      class="dropdown"
      @keydown="keyboardNav"
      @click="toggleDropdown"
      @keydown.esc="reset"
    >
      <span class="selection">
        <div v-if="enabledFlags" :class="activeCountry.iso2.toLowerCase()" class="iti-flag" />
        <span v-if="enabledCountryCode" class="country-code">+{{ activeCountry.dialCode }}</span>
        <slot :open="open" name="arrow-icon">
          <span class="dropdown-arrow">{{ open ? "▲" : "▼" }}</span>
        </slot>
      </span>
      <ul v-show="open" ref="list">
        <li
          v-for="(pb, index) in sortedCountries"
          :key="pb.iso2 + (pb.preferred ? '-preferred' : '')"
          :class="getItemClass(index, pb.iso2)"
          class="dropdown-item"
          @click="choose(pb, true)"
          @mousemove="selectedIndex = index"
        >
          <div v-if="enabledFlags" :class="pb.iso2.toLowerCase()" class="iti-flag" />
          <strong>{{ pb.name }}</strong>
          <span v-if="dropdownOptions && !dropdownOptions.disabledDialCode"
            >+{{ pb.dialCode }}</span
          >
        </li>
      </ul>
    </div>
    <input
      ref="input"
      v-model="phone"
      :disabled="disabled"
      :required="required"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :name="name"
      :class="inputClasses"
      :id="inputId"
      :maxlength="maxLen"
      :tabindex="inputOptions && inputOptions.tabindex ? inputOptions.tabindex : 0"
      type="tel"
      @input="onInput"
      @keyup.enter="onEnter"
      @keyup.space="onSpace"
      v-bind="attributes"
      v-on="listeners"
      @blur="onBlur"
      class="md-input"
    />
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdUuid from 'core/utils/MdUuid'
  import MdFieldMixin from '../MdFieldMixin'

  import PhoneNumber from 'awesome-phonenumber';
  import utils, { getCountry, setCaretPosition } from './assets/utils';

  function getDefault(key) {
    const value = utils.options[key];
    if (typeof value === 'undefined') {
      return utils.options[key];
    }
    return value;
  }
  
  // Polyfill for Event.path in IE 11: https://stackoverflow.com/a/46093727
  function getParents(node, memo) {
    const parsedMemo = memo || [];
    const { parentNode } = node;
    if (!parentNode) {
      return parsedMemo;
    }
    return getParents(parentNode, parsedMemo.concat(parentNode));
  }

  export default new MdComponent({
    name: 'MdPhone',
    mixins: [MdFieldMixin],
    inject: ['MdField'],
    directives: {
      // Click-outside by BosNaufal: https://github.com/BosNaufal/vue-click-outside
      'click-outside': {
        bind(el, binding, vNode) {
          // Provided expression must evaluate to a function.
          if (typeof binding.value !== 'function') {
            const compName = vNode.context.name;
            let warn = `[Vue-click-outside:] provided expression ${binding.expression} is not a function, but has to be`;
            if (compName) {
              warn += `Found in component ${compName}`;
            }
            console.warn(warn);
          }
          // Define Handler and cache it on the element
          const { bubble } = binding.modifiers;
          const handler = (e) => {
            // Fall back to composedPath if e.path is undefined
            const path = e.path
              || (e.composedPath ? e.composedPath() : false)
              || getParents(e.target);
            if (bubble || (path.length && !el.contains(path[0]) && el !== path[0])) {
              binding.value(e);
            }
          };
          el.__vueClickOutside__ = handler;
          // add Event Listeners
          document.addEventListener('click', handler);
        },
        unbind(el) {
          // Remove Event Listeners
          document.removeEventListener('click', el.__vueClickOutside__);
          el.__vueClickOutside__ = null;
        },
      },
    },
    props: {
      id: {
        type: String,
        default: () => 'md-input-' + MdUuid()
      },
      value: {
        type: String,
        default: '',
      },
      disabledFetchingCountry: {
        type: Boolean,
        default: () => getDefault('disabledFetchingCountry'),
      },
      disabled: {
        type: Boolean,
        default: () => getDefault('disabled'),
      },
      disabledFormatting: {
        type: Boolean,
        default: () => getDefault('disabledFormatting'),
      },
      mode: {
        type: String,
        default: () => getDefault('mode'),
      },
      invalidMsg: {
        type: String,
        default: () => getDefault('invalidMsg'),
      },
      required: {
        type: Boolean,
        default: () => getDefault('required'),
      },
      allCountries: {
        type: Array,
        default: () => getDefault('allCountries'),
      },
      defaultCountry: {
      // Default country code, ie: 'AU'
      // Will override the current country of user
        type: String,
        default: () => getDefault('defaultCountry'),
      },
      enabledCountryCode: {
        type: Boolean,
        default: () => getDefault('enabledCountryCode'),
      },
      enabledFlags: {
        type: Boolean,
        default: () => getDefault('enabledFlags'),
      },
      preferredCountries: {
        type: Array,
        default: () => getDefault('preferredCountries'),
      },
      onlyCountries: {
        type: Array,
        default: () => getDefault('onlyCountries'),
      },
      ignoredCountries: {
        type: Array,
        default: () => getDefault('ignoredCountries'),
      },
      autocomplete: {
        type: String,
        default: () => getDefault('autocomplete'),
      },
      autofocus: {
        type: Boolean,
        default: () => getDefault('autofocus'),
      },
      name: {
        type: String,
        default: () => getDefault('name'),
      },
      wrapperClasses: {
        type: [String, Array, Object],
        default: () => getDefault('wrapperClasses'),
      },
      inputClasses: {
        type: [String, Array, Object],
        default: () => getDefault('inputClasses'),
      },
      inputId: {
        type: String,
        default: () => getDefault('inputId'),
      },
      dropdownOptions: {
        type: Object,
        default: () => getDefault('dropdownOptions'),
      },
      inputOptions: {
        type: Object,
        default: () => getDefault('inputOptions'),
      },
      maxLen: {
        type: Number,
        default: () => getDefault('maxLen'),
      },
      validCharactersOnly: {
        type: Boolean,
        default: () => getDefault('validCharactersOnly'),
      },
    },
    data() {
      return {
        phone: '',
        activeCountry: { iso2: '' },
        open: false,
        finishMounted: false,
        selectedIndex: null,
        typeToFindInput: '',
        typeToFindTimer: null,
        cursorPosition: 0,
      };
    },
    computed: {
      listeners () {
        var l = {...this.$listeners}
        delete l.input
        return l
      },
      parsedMode() {
        if (this.mode) {
          if (!['international', 'national'].includes(this.mode)) {
            console.error('Invalid value of prop "mode"');
          } else {
            return this.mode;
          }
        }
        if (!this.phone || this.phone[0] !== '+') {
          return 'national';
        }
        return 'international';
      },
      filteredCountries() {
      // List countries after filtered
        if (this.onlyCountries.length) {
          return this.getCountries(this.onlyCountries);
        }
        if (this.ignoredCountries.length) {
          return this.allCountries.filter(
          ({ iso2 }) => !this.ignoredCountries.includes(iso2.toUpperCase())
            && !this.ignoredCountries.includes(iso2.toLowerCase()),
        );
        }
        return this.allCountries;
      },
      sortedCountries() {
      // Sort the list countries: from preferred countries to all countries
        const preferredCountries = this.getCountries(this.preferredCountries)
        .map(country => ({ ...country, preferred: true }));
        return [...preferredCountries, ...this.filteredCountries];
      },
      phoneObject() {
        const result = PhoneNumber(this.phone, this.activeCountry.iso2).toJSON();
        Object.assign(result, {
          isValid: result.valid,
          country: this.activeCountry,
        });
        return result;
      },
      phoneText() {
        let key = 'input';
        if (this.phoneObject.valid) {
          key = this.parsedMode;
        }
        return this.phoneObject.number[key] || '';
      },
    },
    watch: {
      // eslint-disable-next-line func-names
      'phoneObject.valid': function (value) {
        if (value) {
          this.phone = this.phoneText;
        }
        this.$emit('validate', this.phoneObject);
        this.$emit('onValidate', this.phoneObject); // Deprecated
      },
      value() {
        this.phone = this.value;
      },
      open(isDropdownOpened) {
      // Emit open and close events
        if (isDropdownOpened) {
          this.$emit('open');
        } else {
          this.$emit('close');
        }
      },
      phone(newValue, oldValue) {
        if (this.validCharactersOnly && !this.testCharacters()) {
          this.$nextTick(() => { this.phone = oldValue; });
        } else if (newValue) {
          if (newValue[0] === '+') {
            const code = PhoneNumber(newValue).getRegionCode();
            if (code) {
              this.activeCountry = this.findCountry(code) || this.activeCountry;
            }
          }
        }
      // Reset the cursor to current position if it's not the last character.
        if (this.cursorPosition < oldValue.length) {
          this.$nextTick(() => { setCaretPosition(this.$refs.input, this.cursorPosition); });
        }
      },
      activeCountry(value) {
        if (value && value.iso2) {
          this.$emit('country-changed', value);
        }
      },
    },
    methods: {
      initializeCountry() {
        return new Promise((resolve) => {
        /**
         * 1. If the phone included prefix (+12), try to get the country and set it
         */
          if (this.phone && this.phone[0] === '+') {
            const activeCountry = PhoneNumber(this.phone).getRegionCode();
            if (activeCountry) {
              this.choose(activeCountry);
              resolve();
              return;
            }
          }
        /**
         * 2. Use default country if passed from parent
         */
          if (this.defaultCountry) {
            const defaultCountry = this.findCountry(this.defaultCountry);
            if (defaultCountry) {
              this.choose(defaultCountry);
              resolve();
              return;
            }
          }
          const fallbackCountry = this.findCountry(this.preferredCountries[0])
          || this.filteredCountries[0];
        /**
         * 3. Check if fetching country based on user's IP is allowed, set it as the default country
         */
          if (!this.disabledFetchingCountry) {
            getCountry()
            .then((res) => {
              this.activeCountry = this.findCountry(res) || this.activeCountry;
            })
            .catch((error) => {
              console.warn(error);
              /**
               * 4. Use the first country from preferred list (if available) or all countries list
               */
              this.choose(fallbackCountry);
            })
            .finally(() => {
              resolve();
            });
          } else {
          /**
           * 4. Use the first country from preferred list (if available) or all countries list
           */
            this.choose(fallbackCountry);
            resolve();
          }
        });
      },
    /**
     * Get the list of countries from the list of iso2 code
     */
      getCountries(list = []) {
        return list
        .map(countryCode => this.findCountry(countryCode))
        .filter(Boolean);
      },
      findCountry(iso = '') {
        return this.allCountries.find(country => country.iso2 === iso.toUpperCase());
      },
      getItemClass(index, iso2) {
        const highlighted = this.selectedIndex === index;
        const lastPreferred = index === this.preferredCountries.length - 1;
        const preferred = this.preferredCountries.some(c => c.toUpperCase() === iso2);
        return {
          highlighted,
          'last-preferred': lastPreferred,
          preferred,
        };
      },
      choose(country, toEmitInputEvent = false) {
        this.activeCountry = country || this.activeCountry || {};
        if (this.phone
        && this.phone[0] === '+'
        && this.activeCountry.iso2
        && this.phoneObject.number.national) {
        // Attach the current phone number with the newly selected country
          this.phone = PhoneNumber(this.phoneObject.number.national, this.activeCountry.iso2)
          .getNumber('international');
        } else if (this.inputOptions && this.inputOptions.showDialCode && country) {
        // Reset phone if the showDialCode is set
          this.phone = `+${country.dialCode}`;
        }
        if (toEmitInputEvent) {
          this.$emit('input', this.phoneText, this.phoneObject);
          this.$emit('onInput', this.phoneObject); // Deprecated
        }
      },
      testCharacters() {
        const re = /^[()\-+0-9\s]*$/;
        return re.test(this.phone);
      },
      onInput(e) {
        if (this.validCharactersOnly && !this.testCharacters()) {
          return;
        }
        this.$refs.input.setCustomValidity(this.phoneObject.valid ? '' : this.invalidMsg);
      // Returns response.number to assign it to v-model (if being used)
      // Returns full response for cases @input is used
      // and parent wants to return the whole response.
        this.$emit('input', this.phoneText, this.phoneObject);
        this.$emit('onInput', this.phoneObject); // Deprecated
      // Keep the current cursor position just in case the input reformatted
      // and it gets moved to the last character.
        if (e && e.target) {
          this.cursorPosition = e.target.selectionStart;
        }
      },
      onBlur() {
        this.$emit('blur');
        this.$emit('onBlur'); // Deprecated
      },
      onEnter() {
        this.$emit('enter');
        this.$emit('onEnter'); // Deprecated
      },
      onSpace() {
        this.$emit('space');
        this.$emit('onSpace'); // Deprecated
      },
      focus() {
        this.$refs.input.focus();
      },
      toggleDropdown() {
        if (this.disabled) {
          return;
        }
        this.open = !this.open;
      },
      clickedOutside() {
        this.open = false;
      },
      keyboardNav(e) {
        if (e.keyCode === 40) {
        // down arrow
          e.preventDefault();
          this.open = true;
          if (this.selectedIndex === null) {
            this.selectedIndex = 0;
          } else {
            this.selectedIndex = Math.min(this.sortedCountries.length - 1, this.selectedIndex + 1);
          }
          const selEle = this.$refs.list.children[this.selectedIndex];
          if (selEle.offsetTop + selEle.clientHeight
          > this.$refs.list.scrollTop + this.$refs.list.clientHeight) {
            this.$refs.list.scrollTop = selEle.offsetTop
            - this.$refs.list.clientHeight
            + selEle.clientHeight;
          }
        } else if (e.keyCode === 38) {
        // up arrow
          e.preventDefault();
          this.open = true;
          if (this.selectedIndex === null) {
            this.selectedIndex = this.sortedCountries.length - 1;
          } else {
            this.selectedIndex = Math.max(0, this.selectedIndex - 1);
          }
          const selEle = this.$refs.list.children[this.selectedIndex];
          if (selEle.offsetTop < this.$refs.list.scrollTop) {
            this.$refs.list.scrollTop = selEle.offsetTop;
          }
        } else if (e.keyCode === 13) {
        // enter key
          if (this.selectedIndex !== null) {
            this.choose(this.sortedCountries[this.selectedIndex]);
          }
          this.open = !this.open;
        } else {
        // typing a country's name
          this.typeToFindInput += e.key;
          clearTimeout(this.typeToFindTimer);
          this.typeToFindTimer = setTimeout(() => {
            this.typeToFindInput = '';
          }, 700);
        // don't include preferred countries so we jump to the right place in the alphabet
          const typedCountryI = this.sortedCountries
          .slice(this.preferredCountries.length)
          .findIndex(c => c.name.toLowerCase().startsWith(this.typeToFindInput));
          if (typedCountryI >= 0) {
            this.selectedIndex = this.preferredCountries.length + typedCountryI;
            const selEle = this.$refs.list.children[this.selectedIndex];
            const needToScrollTop = selEle.offsetTop < this.$refs.list.scrollTop;
            const needToScrollBottom = selEle.offsetTop + selEle.clientHeight
            > this.$refs.list.scrollTop + this.$refs.list.clientHeight;
            if (needToScrollTop || needToScrollBottom) {
              this.$refs.list.scrollTop = selEle.offsetTop - this.$refs.list.clientHeight / 2;
            }
          }
        }
      },
      reset() {
        this.selectedIndex = this.sortedCountries.map(c => c.iso2).indexOf(this.activeCountry.iso2);
        this.open = false;
      },
    },
    mounted() {
      this.$parent.$el.className += " md-phone-container";
      this.initializeCountry()
      .then(() => {
        if (!this.phone
        && this.inputOptions
        && this.inputOptions.showDialCode
        && this.activeCountry.dialCode) {
          this.phone = `+${this.activeCountry.dialCode}`;
        }
        this.$emit('validate', this.phoneObject);
        this.$emit('onValidate', this.phoneObject); // Deprecated
      })
      .catch(console.error)
      .finally(() => {
        this.finishMounted = true;
      });
    },
    created() {
      if (this.value) {
        this.phone = this.value.trim();
      }
    },
  })
</script>

<style src="./assets/sprite.css"></style>
<style lang="scss">
.md-phone-container:not(.md-has-value):not(.md-focused) label{
  padding-left: 41px !important; 
}
.md-phone-container .md-has-value label,
.md-phone-container .md-focused label{
  top:-4px;
}


.md-phone-container {
  li.last-preferred {
    border-bottom: 1px solid #cacaca;
  }
  .iti-flag {
    margin-right: 5px;
    margin-left: 5px;
  }
  .dropdown-item .iti-flag {
    display: inline-block;
    margin-right: 5px;
  }
  .selection {
    font-size: 0.8em;
    display: flex;
    align-items: center;
  }
  .vue-tel-input {
    display: flex;
    width: 100%;
    text-align: left;
  }

  input {
    border: none;
    border-radius: 0 2px 2px 0;
    width: 100%;
    outline: none;
    padding-left: 7px;
  }
  ul {
    z-index: 2;
    padding: 0;
    margin: 0;
    text-align: left;
    list-style: none;
    max-height: 200px;
    overflow-y: scroll;
    position: absolute;
    top: 33px;
    left: -1px;
    background-color: #fff;
    border: 1px solid #ccc;
    width: 390px;
  }
  .dropdown {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    position: relative;
    padding: 7px 0px;
    cursor: pointer;
  }
  /* .dropdown.open {
  background-color: #f3f3f3;
}
.dropdown:hover {
  background-color: #f3f3f3;
} */
  .country-code {
    color: #666;
  }
  .dropdown-arrow {
    transform: scaleY(0.5);
    display: inline-block;
    color: #666;
  }
  .dropdown-item {
    cursor: pointer;
    padding: 4px 15px;
  }
  .dropdown-item.highlighted {
    background-color: #f3f3f3;
  }
  .dropdown-menu.show {
    max-height: 300px;
    overflow: scroll;
  }
  .vue-tel-input.disabled .selection,
  .vue-tel-input.disabled .dropdown,
  .vue-tel-input.disabled input {
    cursor: no-drop;
  }
}
</style>