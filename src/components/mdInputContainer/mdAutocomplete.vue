<template lang="html">
  <div style="width:100%;"
    @focus="onFocus"
    @blur="onBlur">
    <md-menu md-menu-trigger
      ref="menu">
      <span md-menu-trigger></span>
      <input class="md-input"
        ref="input"
        type="text"
        v-model="query"
        :disabled="disabled"
        :required="required"
        :placeholder="placeholder"
        :maxlength="maxlength"
        @focus="onFocus"
        @blur="onBlur"
        @input="debounceUpdate"
        @keydown.up="onInput"
        @keydown.down="onInput"/>

      <md-menu-content>
        <md-menu-item v-if="items.length"
          v-for="item in items"
          @click.native="hit(item)">{{ item[printAttribute] }}</md-menu-item>
      </md-menu-content>
    </md-menu>
  </div>
</template>

<script>
  import { util } from 'vue';
  import common from './common';
  import getClosestVueParent from '../../core/utils/getClosestVueParent';

  export default {
    mixins: [common],
    props: {
      debounce: {
        type: Number,
        default: 1E3
      },
      fetch: {
        type: Function
      },
      queryParam: {
        type: String,
        default: 'q'
      },
      printAttribute: {
        type: String,
        default: 'name'
      },
      minChars: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        current: -1,
        items: [],
        loading: false,
        query: '',
        selected: null,
        src: 'https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search',
        timeout: 0
      };
    },
    watch: {
      query(value) {
        this.$refs.input.value = value;
        this.setParentUpdateValue(value);
      },
      value(value) {
        this.query = value;
        this.setParentUpdateValue(value);
      }
    },
    methods: {
      activeClass(index) {
        return {
          active: this.current === index
        };
      },
      debounceUpdate() {
        this.onInput();

        if (this.timeout) {
          window.clearTimeout(this.timeout);
        }

        this.timeout = window.setTimeout(() => {
          this.update();
        }, this.debounce);
      },
      down() {
        if (this.current < this.items.length - 1) {
          this.current++;
        } else {
          this.current = -1;
        }
      },
      fetchUrl() {
        if (!this.$http) {
          return util.warn('You need to provide a HTTP client', this);
        }

        if (!this.src || this.fetch) {
          return util.warn('You need to set the `src` or a `fetch` property', this);
        }

        const src = this.queryParam ?
          this.src :
          `${this.src}${this.queryParam}=${this.query}`;

        const params = this.queryParam ?
          Object.assign({ [this.queryParam]: this.query }, this.data) :
          this.data;

        return this.$http.get(src, { params });
      },
      getResource() {
        return this.fetch ?
          this.fetch :
          this.fetchUrl;
      },
      hit(item) {
        debugger;
        this.query = item[this.printAttribute];
        this.$refs.input.value = item[this.printAttribute];
        this.selected = item;
        this.onInput();
      },
      onInput() {
        this.updateValues();
        this.$emit('change', this.$refs.input.value);
        this.$emit('input', this.$refs.input.value);
        this.$emit('selected', this.selected, this.$refs.input.value);
      },
      reset() {
        this.items = [];
        this.query = '';
        this.loading = false;
      },
      setActive(index) {
        this.current = index;
      },
      setParentValue(value) {
        this.parentContainer.setValue(value || this.$refs.input.value);
      },
      setParentDisabled() {
        this.parentContainer.isDisabled = this.disabled;
      },
      setParentRequired() {
        this.parentContainer.isRequired = this.required;
      },
      setParentPlaceholder() {
        this.parentContainer.hasPlaceholder = !!this.placeholder;
      },
      setParentUpdateValue(value) {
        this.setParentValue(value);
        this.updateValues(value);
      },
      up() {
        if (this.current > 0) {
          this.current--;
        } else if (this.current === -1) {
          this.current = this.items.length - 1;
        } else {
          this.current = -1;
        }
      },
      update() {
        if (!this.query) {
          return this.reset();
        }

        if (this.minChars && this.query.length < this.minChars) {
          return;
        }

        this.loading = true;

        this.getResource()()
          .then((response) => {
            if (this.query) {
              let data = response.data;

              data = this.prepareResponseData ?
                this.prepareResponseData(data) :
                data;
              this.items = this.limit ?
                data.slice(0, this.limit) :
                data;
              this.current = -1;
              this.loading = false;

              this.toggleMenu();

              if (this.selectFirst) {
                this.down();
              }
            }
          });
      },
      toggleMenu() {
        if (this.items.length) {
          this.$refs.menu.toggle();
        }
      },
      updateValues(value) {
        const newValue = value || this.$refs.input.value || this.value;

        this.setParentValue(newValue);
        this.parentContainer.inputLength = newValue ? newValue.length : 0;
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.parentContainer = getClosestVueParent(this.$parent, 'md-input-container');
        this.query = this.value;

        if (!this.parentContainer) {
          this.$destroy();

          throw new Error('You should wrap the md-input in a md-input-container');
        }

        this.setParentDisabled();
        this.setParentRequired();
        this.setParentPlaceholder();
        this.handleMaxLength();
        this.updateValues();
      });
    }
  };
</script>

<style lang="css">
</style>
