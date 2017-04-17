<template lang="html">
  <div class="md-autocomplete"
    @focus="onFocus"
    @blur="onBlur">
    <md-menu :md-offset-x="8"
      md-offset-y="45"
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
        :name="name"
        @focus="onFocus"
        @blur="onBlur"
        @input="debounceUpdate"/>

      <md-menu-content>
        <md-menu-item v-for="item in items"
          v-if="items.length"
          @keyup.enter="hit(item)"
          @click.native="hit(item)">
          {{ item[printAttribute] }}
        </md-menu-item>
      </md-menu-content>
    </md-menu>
  </div>
</template>

<script>
  import autocompleteCommon from '../../core/utils/autocomplete-common';
  import common from './common';
  import getClosestVueParent from '../../core/utils/getClosestVueParent';

  export default {
    mixins: [common, autocompleteCommon],
    data() {
      return {
        items: [],
        loading: false,
        query: '',
        selected: null,
        timeout: 0,
        parentContainer: null,
      };
    },
    computed: {
      listIsEmpty() {
        return this.list.length === 0;
      }
    },
    watch: {
      list(value) {
        this.items = Object.assign([], value);
      },
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
      debounceUpdate() {
        this.onInput();

        if (this.timeout) {
          window.clearTimeout(this.timeout);
        }

        this.timeout = window.setTimeout(() => {
          if (!this.listIsEmpty) {
            this.renderFilteredList();
            return;
          }
          this.update();
        }, this.debounce);
      },
      hit(item) {
        this.query = item[this.printAttribute];
        this.$refs.input.value = item[this.printAttribute];
        this.selected = item;
        this.onInput();
        this.$emit('selected', this.selected, this.$refs.input.value);
      },
      onFocus() {
        if (this.parentContainer) {
          this.parentContainer.isFocused = true;
        }
        this.$refs.input.focus();
      },
      onInput() {
        this.updateValues();
        this.$emit('change', this.$refs.input.value);
        this.$emit('input', this.$refs.input.value);
      },
      renderFilteredList() {
        if (this.filterList) {
          this.items = this.filterList(Object.assign([], this.list), this.query);
        }
        this.toggleMenu();
      },
      reset() {
        this.items = [];
        this.query = '';
        this.loading = false;
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
      update() {
        if (!this.query && !this.list.length) {
          return this.reset();
        }

        if (this.minChars && this.query.length < this.minChars) {
          return;
        }

        this.loading = true;

        const queryObject = { [this.queryParam]: this.query };

        this.fetch(queryObject)
          .then((response) => {
            if (this.query) {
              let data = response || response.data || response.body;

              data = this.prepareResponseData ?
                this.prepareResponseData(data) :
                data;
              this.items = this.limit ?
                data.slice(0, this.limit) :
                data;

              this.loading = false;

              this.toggleMenu();
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

        if (!this.listIsEmpty) {
          this.items = Object.assign([], this.list);
        }

        this.query = this.value;

        this.verifyProps();

        this.setParentDisabled();
        this.setParentRequired();
        this.setParentPlaceholder();
        this.handleMaxLength();
        this.updateValues();
      });
    }
  };
</script>
