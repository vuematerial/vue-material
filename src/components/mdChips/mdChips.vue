<template>
  <md-input-container class="md-chips" :class="[themeClass, classes]" @click="applyInputFocus">
    <md-chip
      v-for="chip in selectedChips"
      :key="chip"
      :md-editable="!mdStatic"
      :md-deletable="!mdStatic"
      :disabled="disabled"
      @edit="editChip(chip)"
      @delete="deleteChip(chip)">
      <slot name="chip" :value="chip">{{ chip }}</slot>
    </md-chip>

    <md-input
      v-show="!mdStatic"
      v-model="currentChip"
      :type="mdInputType"
      :placeholder="mdInputPlaceholder"
      :id="inputId"
      :name="mdInputName"
      :disabled="disabled"
      @keydown.native.delete="deleteLastChip"
      @keydown.native.prevent.enter="addChip"
      @keydown.native.prevent.186="addChip"
      tabindex="0"
      :debounce="0"
      ref="input">
    </md-input>

    <slot></slot>
  </md-input-container>
</template>

<style lang="scss" src="./mdChips.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';
  import uniqueId from '../../core/utils/uniqueId';

  export default {
    name: 'md-chips',
    props: {
      value: Array,
      disabled: Boolean,
      debounce: {
        type: Number,
        default: 1E2
      },
      mdInputId: String,
      mdInputName: String,
      mdInputPlaceholder: String,
      mdInputType: {
        type: String,
        default: 'text'
      },
      mdStatic: Boolean,
      mdMax: {
        type: Number,
        default: Infinity
      }
    },
    mixins: [theme],
    data() {
      return {
        currentChip: null,
        selectedChips: this.value,
        inputId: this.mdInputId || 'chips-' + uniqueId()
      };
    },
    watch: {
      value(value) {
        this.selectedChips = value;
      }
    },
    computed: {
      classes() {
        return {
          'md-static': this.mdStatic,
          'md-disabled': this.disabled,
          'md-chips': true
        };
      }
    },
    methods: {
      applyInputFocus() {
        this.$nextTick(() => {
          this.$refs.input.$el.focus();
        });
      },
      addChip() {
        if (this.currentChip && this.selectedChips.length < this.mdMax) {
          const value = this.currentChip.trim();

          if (this.selectedChips.indexOf(value) < 0) {
            this.selectedChips.push(value);
            this.currentChip = null;
            this.$emit('input', this.selectedChips);
            this.$emit('change', this.selectedChips);
            this.applyInputFocus();
          }
        }
      },
      deleteChip(chip) {
        let index = this.selectedChips.indexOf(chip);

        if (index >= 0) {
          this.selectedChips.splice(index, 1);
        }

        this.$emit('change', this.selectedChips);
        this.applyInputFocus();
      },
      editChip(chip) {
        let index = this.selectedChips.indexOf(chip);

        if (index >= 0) {
          this.selectedChips.splice(index, 1);
        }

        this.currentChip = chip;
        this.$emit('change', this.selectedChips);
        this.applyInputFocus();
      },
      deleteLastChip() {
        if (!this.currentChip) {
          this.selectedChips.pop();
          this.$emit('change', this.selectedChips);
          this.applyInputFocus();
        }
      }
    }
  };
</script>
