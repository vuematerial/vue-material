<template>
  <div class="md-slider-content">
    <label v-if="$slots.default">
      <slot />
    </label>
    <div class="md-slider-container">
      <input
        :class="['md-slider', $mdActiveTheme, isLowestValue]"
        v-model.number="currentValue"
        type="range"
        @change="onChange"
        v-bind="{ name, min, max, step, required, disabled }">
      <div :class="['md-slider-background', isLowestValue]">
        <div class="md-slider-background-lower" :style="lowerStyles" />
        <div class="md-slider-background-upper" :style="upperStyles" />
      </div>
    </div>
    <div class="md-slider-editable" v-if="mdEditable">
      <md-field>
        <md-input v-model.number="editableField" v-bind="{ disabled }" />
      </md-field>
    </div>
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdSlider',
    props: {
      value: {
        type: Number,
        default: 0
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: [Number, String],
        default: 1
      },
      name: String,
      required: Boolean,
      disabled: Boolean,
      mdEditable: Boolean
    },
    computed: {
      editableField: {
        get () {
          return this.value
        },
        set (newValue) {
          const value = (newValue < this.min)
            ? this.min
            : newValue > this.max ? this.max : newValue
          this.currentValue = value || this.min
        },
      },
      currentValue: {
        get () {
          return this.value
        },
        set (newValue) {
          this.$emit('input', newValue)
        },
      },
      isLowestValue () {
        return {
          'is-lowest-value': this.min === this.currentValue
        }
      },
      fraction () {
        return (this.currentValue - this.min) / (this.max - this.min)
      },
      lowerStyles () {
        return {
          'flex': this.fraction
        }
      },
      upperStyles () {
        return {
          'flex': 1 - this.fraction
        }
      }
    },
    methods: {
      onChange ({ target }) {
        this.$emit('md-change', parseFloat(target.value))
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-slider-content {
    display: flex;
    align-items: center;
    margin: 4px 0 24px;
    label {
      white-space: nowrap;
    }
    .md-slider-editable {
      width: 30px;
      .md-field {
        padding: 0;
        margin: 0;
        min-height: 20px;
        input {
          max-width: 30px;
          text-align: center;
        }
      }
    }
  }

  .md-slider {
    transition: .3s $md-transition-default-timing;
    height: 6px;
    background: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    outline: 0;
    padding: 0;
    align-self: center;
    z-index: 1;
    cursor: pointer;
    width: 100%;
    margin: 0 20px;

    &::-moz-focus-outer {
      border: 0;
    }

    // tracks
    &::-webkit-slider-runnable-track {
      background: transparent;
    }

    &::-moz-range-track {
      background: transparent;
      border: none;
    }

    // thumbs
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 12px;
      height: 12px;
      box-sizing: border-box;
      border-radius: 50%;
      border: none;
      transition: transform .3s $md-transition-default-timing,
      border .3s $md-transition-default-timing,
      box-shadow .3s $md-transition-default-timing,
      background .3s $md-transition-default-timing;
    }

    &::-moz-range-thumb {
      -moz-appearance: none;
      width: 12px;
      height: 12px;
      box-sizing: border-box;
      border-radius: 50%;
      background-image: none;
      border: none;
      transition: transform .3s $md-transition-default-timing,
      border .3s $md-transition-default-timing,
      box-shadow .3s $md-transition-default-timing,
      background .3s $md-transition-default-timing;
    }

    &:active::-webkit-slider-thumb {
      background-image: none;
      transform: scale(1.5);
    }

    &:active::-moz-range-thumb {
      background-image: none;
      transform: scale(1.5);
    }

    // 0 value
    &.is-lowest-value::-webkit-slider-thumb {
      border: 2px solid;
      background: transparent;
    }

    &.is-lowest-value::-moz-range-thumb {
      border: 2px solid;
      background: transparent;
    }

    &.is-lowest-value:active::-webkit-slider-thumb {
      border: 1.6px solid;
      transform: scale(1.5);
    }
    &.is-lowest-value:active::-moz-range-thumb {
      border: 1.5px solid;
      transform: scale(1.5);
    }

    &.is-lowest-value +
        .md-slider-background > .md-slider-background-upper {
      left: 6px;
    }

    // disabled
    &:disabled:focus::-webkit-slider-thumb,
    &:disabled:active::-webkit-slider-thumb,
    &:disabled::-webkit-slider-thumb {
      transform: scale(0.667);
    }

    &:disabled:focus::-moz-range-thumb,
    &:disabled:active::-moz-range-thumb,
    &:disabled::-moz-range-thumb {
      transform: scale(0.667);
    }

    &:disabled +
        .md-slider-background > .md-slider-background-lower {
      left: -6px;
    }

    &:disabled +
        .md-slider-background > .md-slider-background-upper {
      left: 6px;
    }

    &.is-lowest-value:disabled:focus::-webkit-slider-thumb,
    &.is-lowest-value:disabled:active::-webkit-slider-thumb,
    &.is-lowest-value:disabled::-webkit-slider-thumb {
      border: 3px solid;
      background: transparent;
      transform: scale(0.667);
    }

    &.is-lowest-value:disabled:focus::-moz-range-thumb,
    &.is-lowest-value:disabled:active::-moz-range-thumb,
    &.is-lowest-value:disabled::-moz-range-thumb {
      border: 3px solid;
      background: transparent;
      transform: scale(0.667);
    }

    &.is-lowest-value:disabled:active +
        .md-slider-background > .md-slider-background-upper {
      left: 6px;
    }
  }

  .md-slider-container {
    width: 100%;
    height: 18px;
    position: relative;
    background: none;
    display: flex;
    flex-direction: row;
  }

  .md-slider-background {
    background: transparent;
    position: absolute;
    height: 2px;
    width: calc(100% - 52px);
    top: 50%;
    left: 0;
    margin: 0 26px;
    display: flex;
    overflow: hidden;
    border: 0;
    padding: 0;
    transform: translate(0, -1px);
    .md-slider-background-lower {
      flex: 0;
      position: relative;
      border: 0;
      padding: 0;
    }
    .md-slider-background-upper {
      flex: 0;
      position: relative;
      border: 0;
      padding: 0;
      transition: left .3s $md-transition-default-timing;
    }
  }
</style>
