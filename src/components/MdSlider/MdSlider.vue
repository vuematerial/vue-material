<template>
  <div class="md-slider-content">
    <label v-if="$slots.default">
      <slot />
    </label>
    <div :class="['md-slider-container', { 'ie': isIeEdge }]">
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
      },
      isIeEdge () {
        if (!this.$isServer) {
          return navigator.userAgent.toLowerCase().includes('trident') || navigator.userAgent.toLowerCase().includes('edge')
        }
        return false
      },
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

  _:-ms-input-placeholder, :root .md-slider {
    -ms-appearance: none;
    // The thumb can't overflow the track or the rest of the control in IE, so we
    // need to make it tall enough to contain the largest version of the thumb.
    height: 32px;
    margin: 0;
  }

  .md-slider {
    transition: .3s $md-transition-default-timing;
    height: 6px;
    background: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
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
    min-height: 20px; // Edge fix
    @supports (-ms-ime-align: auto) {
      // Edge fix to lower margins
      margin: 0 10px;
    }

    &::-moz-focus-outer {
      border: 0;
    }

    &::-ms-tooltip {
      display: none;
    }

    // tracks
    &::-webkit-slider-runnable-track {
      background: transparent;
    }

    &::-moz-range-track {
      background: transparent;
      border: none;
    }

    &::-ms-track {
      background: none;
      color: transparent;
      height: 2px;
      width: 100%;
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

    &::-ms-thumb {
      width: 32px;
      height: 32px;
      border: none;
      border-radius: 50%;
      transform: scale(0.375);
      // -ms-thumb doesn't currently support transitions, but leaving this here
      // in case support ever gets added.
      transition: transform .3s $md-transition-default-timing,
      background .3s $md-transition-default-timing;
    }

    &:active::-ms-thumb {
      transform: scale(0.5625);
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

    &.is-lowest-value:active +
        .md-slider-background > .md-slider-background-upper {
      left: 9px;
    }

    &.is-lowest-value:active::-ms-thumb {
      transform: scale(1.5);
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

    &.is-lowest-value::-ms-thumb {
      transform: scale(0.375);
    }

    &.is-lowest-value:focus:not(:active)::-ms-thumb {
      transform: scale(0.375);
    }

    &.is-lowest-value:active::-ms-thumb {
      transform: scale(0.375);
    }

    &.is-lowest-value::-ms-fill-lower {
      background: transparent;
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

    &:disabled:focus::-ms-thumb,
    &:disabled:active::-ms-thumb,
    &:disabled::-ms-thumb {
      transform: scale(0.375);
    }

    &.is-lowest-value:disabled:focus::-ms-thumb,
    &.is-lowest-value:disabled:active::-ms-thumb,
    &.is-lowest-value:disabled::-ms-thumb {
      transform: scale(0.25);
    }
  }

  .md-slider-container {
    width: 100%;
    height: 18px;
    position: relative;
    background: none;
    display: flex;
    flex-direction: row;
    .ie {
      height: 18px;
      overflow: visible;
      border: none;
      margin: none;
      padding: none;
    }
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
