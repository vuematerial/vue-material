<template lang="html">
  <div class="md-autocomplete"
    @focus="onFocus"
    @blur="onBlur">
    <md-menu
      md-align-trigger
      md-auto-width
      md-fixed
      md-no-focus
      md-manual-toggle
      :md-max-height="maxHeight"
      ref="menu"
      class="md-autocomplete-menu">
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
        @input="debounceUpdate"
        @keydown.up.prevent="contentHighlightItem('up')"
        @keydown.down.prevent="contentHighlightItem('down')"
        @keydown.enter.prevent="contentFireClick()"
        md-menu-trigger/>

      <md-menu-content class="md-autocomplete-content">
        <md-menu-item v-if="items.length"
          v-for="(item, index) in items"
          :key="index"
          @keyup.enter="hit(item)"
          @click="hit(item)">
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
        searchButton: null
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

        if (this.callback) {
          this.callback(item);
        }
      },
      makeFetchRequest(queryObject) {
        return this.fetch(queryObject)
          .then((response) => {
            let data = response || response.data || response.body;

            data = this.prepareResponseData ?
              this.prepareResponseData(data) :
              data;
            this.items = this.limit ?
              data.slice(0, this.limit) :
              data;

            this.loading = false;
          });
      },
      onFocus() {
        if (this.parentContainer) {
          this.parentContainer.isFocused = true;
        }
        
        this.$refs.input.focus();

        if (this.openOnFocus) {
          this.openMenu();
        }
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

        if (this.items.length !== 0) {
          if (this.menuContent === undefined || this.menuContent === null) {
            this.menuContent = document.body.querySelector('.md-autocomplete-content');
          }

          if (this.menuContent !== null) {
            if (this.menuContent.__vue__.highlighted > this.items.length) {
              this.menuContent.highlighted;
            }
          }
          this.openMenu();
        }
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
      setSearchButton() {
        this.searchButton = this.parentContainer.$el.querySelector('[md-autocomplete-search]');

        if (this.searchButton) {
          this.searchButton.addEventListener('click', this.makeFetchRequest);
        }
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

        return this.makeFetchRequest(queryObject);
      },
      toggleMenu() {
        if (this.items.length) {
          this.$refs.menu.toggle();
        }
      },
      openMenu() {
        if (this.items.length > 0) {
          this.$refs.menu.open();           
        }
      },
      closeMenu() {
        this.$refs.menu.close();
      },
      updateValues(value) {
        const newValue = value || this.$refs.input.value || this.value;

        this.setParentValue(newValue);
        this.parentContainer.inputLength = newValue ? newValue.length : 0;
      },
      contentHighlightItem(direction) {
        this.menuContent = document.body.querySelector('.md-autocomplete-content');

        if (this.menuContent === null) {
            return false;
        }

        this.menuContent.__vue__.highlightItem(direction);

        return true;
      },
      contentFireClick() {
        this.menuContent = document.body.querySelector('.md-autocomplete-content');

        if (this.menuContent === null ||
            this.menuContent.__vue__.highlighted === false ||
            this.menuContent.__vue__.highlighted < 1) {

            this.closeMenu();

            return false;
        }

        this.hit(this.list[this.menuContent.__vue__.highlighted - 1]);
        this.closeMenu();

        return true;
      }
    },
    beforeDestroy() {
      if (this.searchButton) {
        this.searchButton.removeEventListener('click', this.makeFetchRequest);
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.parentContainer = getClosestVueParent(this.$parent, 'md-input-container');
        this.menuContent = document.body.querySelector('.md-autocomplete-content');         

        if (!this.listIsEmpty) {
          this.items = Object.assign([], this.list);
        }

        this.query = this.value;

        this.verifyProps();
        this.setSearchButton();

        this.setParentDisabled();
        this.setParentRequired();
        this.setParentPlaceholder();
        this.handleMaxLength();
        this.updateValues();
      });
    }
  };
</script>
