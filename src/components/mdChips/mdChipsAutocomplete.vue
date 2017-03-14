<template>
  <div class="md-chips chips-autocomplete chips-autocomplete--expandable"
    :class="[themeClass, classes]"
    @focus="focusInputContainer">
    <md-input-container @click.native="applyInputFocus">
      <md-chip
        v-for="chip in selectedChips"
        :md-deletable="isDeletable"
        :disabled="disabled"
        @delete="deleteChip(chip)">
				{{ chip[printAttribute] }}
      </md-chip>
      <md-input
        v-show="!mdStatic"
        v-model="query"
        :type="mdInputType"
        :placeholder="mdInputPlaceholder"
        :id="inputId"
        :name="mdInputName"
        :disabled="disabled"
        :required="required"
        @input="update"
        @keydown.native.delete="deleteLastChip"
        @keydown.native.prevent.enter="hit"
        @keydown.native.prevent.186="hit"
        @keydown.down="down"
        @keydown.up="up"
        tabindex="0"
        ref="input">
      </md-input>
      <ul class="md-list md-theme-default ChipsAutocomplete__List"
        ref="resultList"
        v-if="items && items.length">
        <li class="md-list-item md-menu-item md-option ChipsAutocomplete__Item"
          :class="{
	          'active': this.current === index,
	        }"
          v-for="(item, index) in items"
          @mousedown="hit"
          @mousemove="setActive(index)">
          <md-button @click.native="hit"
            @keydown.native.delete="deleteLastChip"
            @keydown.native.prevent.enter="hit"
            @keydown.native.prevent.186="hit"
            @mousemover="setActive(index)">
            {{ item[printAttribute] }}
          </md-button>
        </li>
      </ul>
    </md-input-container>
  </div>
</template>
<script>
  import getClosestVueParent from '../../core/utils/getClosestVueParent';
  import theme from '../../core/components/mdTheme/mixin';
  import uniqueId from '../../core/utils/uniqueId';

  import {
    copyObject,
    getClosestThemedParent,
  } from '../common/functions/helpers';

  export default {
    name: 'ChipsAutocomplete',
    props: {
      disabled: Boolean,
      fetchFunction: {
        type: Function,
      },
      mdInputId: String,
      mdInputName: String,
      mdInputPlaceholder: {
        type: String,
        default: 'Buscar por algo...',
      },
      mdInputType: {
        type: String,
        default: 'text',
      },
      mdMax: {
        type: Number,
        default: Infinity,
      },
      mdStatic: Boolean,
      mdTheme: String,
      printAttribute: {
        type: String,
        default() { return 'nome'; },
      },
      queryParam: {
        type: String,
        default() { return 'q'; },
      },
      required: Boolean,
      saveOne: Boolean,
      source: {
        type: Array,
        default() { return []; },
      },
      url: {
        type: String,
        default() {
          return 'https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search';
        },
      },
      value: {
        type: Array,
        default() { return []; },
      },
    },
    data() {
      return {
        closestThemedParent: false,
        current: -1,
        inputId: this.mdInputId || `chips-${uniqueId()}`,
        items: [],
        query: null,
        selectedChips: this.value,
      };
    },
    watch: {
      value(value) {
        this.selectedChips = value;
      },
      source(newVal) {
        this.mergeSource(newVal);
      },
    },
    computed: {
      classes() {
        return {
          'md-disabled': this.disabled,
          'md-static': this.mdStatic,
        };
      },
      isDeletable() {
        return !(this.mdStatic || this.selectedChips.length === 1);
      },
      themeClass() {
        if (this.mdTheme) {
          return `md-theme-${this.mdTheme}`;
        }
        let theme = this.closestThemedParent.mdTheme;
        if (!theme) {
          theme = (this.closestThemedParent) ?
            this.closestThemedParent.mdName :
            theme = this.$material.currentTheme;
        }
        return `md-theme-${theme}`;
      },
    },
    methods: {
      addChip() {
        if (this.query && this.selectedChips.length < this.mdMax) {
          const value = this.query.trim();
          if (this.selectedChips.indexOf(value) < 0) {
            this.selectedChips.push(value);
            this.query = null;
            this.$emit('input', this.selectedChips);
            this.$emit('change', this.selectedChips);
            this.applyInputFocus();
          }
        }
      },
      addSelectChip(value) {
        if (this.findChipIndex(value) < 0) {
          this.selectedChips.push(value);
          this.query = null;
          this.$emit('input', this.selectedChips);
          this.$emit('change', this.selectedChips);
          this.applyInputFocus();
        }
      },
      applyInputFocus() {
        this.$nextTick(() => {
          this.$refs.input.$el.focus();
        });
      },
      callFetch() {
        return (this.fetchFunction) ?
        this.fetchFunction(this.queryParamObject())
          .then(response => this.handleRequest(response)) :
        this.fetch()
          .then(response => this.handleRequest(response));
      },
      deleteChip(chip) {
        const index = this.selectedChips.indexOf(chip);
        if (index >= 0) {
          this.selectedChips.splice(index, 1);
        }
        this.$emit('delete', chip);
        this.$emit('change', this.selectedChips);
        this.applyInputFocus();
      },
      deleteLastChip() {
        if (!this.query) {
          this.selectedChips.pop();
          this.$emit('change', this.selectedChips);
          this.applyInputFocus();
        }
      },
      down() {
        if ((this.current + 1) >= this.selectedChips.length) {
          this.current = 0;
          return;
        }
        this.current += 1;
      },
      fetch() {
        if (!this.url) {
          console.warn('You need to set the `src` property', this); // eslint-disable-line
          return this;
        }
        const src = this.queryParam
          ? this.url
          : this.url + this.query;
        const params = this.queryParam
          ? Object.assign({ [this.queryParam]: this.query }, this.data)
          : this.data;
        return this.$http.get(src, { params });
      },
      findChipIndex(chip) {
        if (typeof chip === 'string') {
          return this.selectedChips.indexOf(chip);
        }
        const selectedChip = (chip.hasOwnProperty('id')) ?
          this.selectedChips.find(el => el.id === chip.id) :
          this.selectedChips.indexOf(chip);
        if (typeof selectedChip !== 'number') {
          return (!selectedChip) ?
          -1 :
          this.selectedChips.indexOf(selectedChip);
        }
        return selectedChip;
      },
      focusInputContainer() {
        this.$refs.input.$el.focus();
      },
      handleRequest(response) {
        if (this.query) {
          let data = (response.data.hasOwnProperty('length')) ?
            response.data :
            response.data.resposta;

          data = this.prepareResponseData ?
            this.prepareResponseData(data) :
            data;

          this.items = this.limit ?
            data.slice(0, this.limit) :
            data;

          this.current = -1;
          this.loading = false;
          if (this.selectFirst) {
            this.down();
          }
        }
        return response;
      },
      hit() {
        if (this.current !== -1 && this.items && this.items[this.current]) {
          this.onHit(this.items[this.current]);
        }
      },
      mergeSource(val) {
        const source = (val || this.source);
        if (this.selectedChips.length !== source.length) {
          this.selectedChips = copyObject(source);
        }
      },
      onHit(hit) {
        this.addSelectChip(hit);
        this.reset();
      },
      queryParamObject() {
        const param = {};
        if (this.queryParam) {
          param[this.queryParam] = this.query;
        }
        return param;
      },
      reset() {
        this.items = [];
        this.query = '';
        this.loading = false;
        setTimeout(() => {
          this.applyInputFocus();
        }, 3E2);
      },
      setActive(index) {
        this.current = index;
      },
      setTheme() {
        this.closestThemedParent = getClosestThemedParent(this.$parent);
        if (!this.$material.currentTheme) {
          this.$material.setCurrentTheme('default');
        }
      },
      startComponent() {
        this.setTheme();
        this.mergeSource();
      },
      up() {
        if (this.current - 1 < 0) {
          this.current = this.selectedChips.length - 1;
          return;
        }
        this.current -= 1;
      },
      update() {
        if (!this.query) {
          return this.reset();
        }
        if (this.minChars && this.query.length < this.minChars) {
          return null;
        }
        this.loading = true;
        return this.callFetch();
      },
    },
    mounted() {
      this.startComponent();
    },
  };
</script>

<style lang="css">
  .chips-autocomplete--expandable {
    transition: all .5s cubic-bezier(.35,0,.25,1);
    width: 100%;
  }

  .md-list-item
  .chips-autocomplete
  .md-chip
  .md-button:not(.md-button-ghost):not(.md-list-item-container) {
    position: absolute;
  }

  .md-list.ChipsAutocomplete__List {
    position: absolute;
    top: 55px;
    width: 100%;
    z-index: 10;
    max-height: 200px;
    overflow-y: scroll;
    box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
  }

	.md-list.ChipsAutocomplete__List button.md-button {
		width: calc(100% - 24px);
	}

  .ChipsAutocomplete__Item.active {
    background-color: rgba(153, 153, 153, 0.2);
    text-decoration: none;
  }

	.ChipsAutocomplete__Item.active .md-button.md-theme-default {
    background-color: transparent;
  }
  .ChipsAutocomplete__IconButton {
    position: absolute;
    right: 0;
    top: 12px;
  }

  .ChipsAutocomplete__IconButton .md-icon {
    color: rgba(0,0,0,0.7);
  }

  .md-table .md-table-cell .chips-autocomplete .md-chip .md-button.md-delete,
  .md-table .md-table-cell .chips-autocomplete--expandable .md-chip .md-button.md-delete {
    margin: 2px -10px 0px 0;
    width: 33px;
    min-width: 30px;
    height: 24px;
    min-height: 24px;
  }

  .md-table-body .md-table-row:nth-last-child(-n+3) .md-list.ChipsAutocomplete__List {
    top: -190px;
  }

  .md-table-cell-container
  .md-chips.chips-autocomplete.chips-autocomplete--expandable.md-theme-default > div{
    width: calc(100% + 5px);
  }
</style>
