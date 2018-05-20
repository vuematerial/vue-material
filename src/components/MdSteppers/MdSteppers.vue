<template>
  <div class="md-steppers" :class="[steppersClasses, $mdActiveTheme]">
    <div class="md-steppers-navigation" v-if="!mdVertical">
      <md-step-header v-for="(_, index) in MdSteppers.items" :key="index" :index="index" />
    </div>

    <div class="md-steppers-wrapper" :style="contentStyles">
      <div class="md-steppers-container" :style="containerStyles">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdObserveElement from 'core/utils/MdObserveElement'
  import MdThrottling from 'core/utils/MdThrottling'
  import MdStepHeader from './MdStepHeader'

  export default new MdComponent({
    name: 'MdSteppers',
    components: {
      MdStepHeader
    },
    props: {
      mdSyncRoute: Boolean,
      mdDynamicHeight: Boolean,
      mdVertical: Boolean,
      mdLinear: Boolean,
      mdAlternative: Boolean,
      mdActiveStep: [String, Number]
    },
    data () {
      return {
        activeStepIndex: 0,
        noTransition: true,
        contentStyles: {},
        activeButtonEl: null,
        MdSteppers: {
          activeStep: 0,
          isLinear: false,
          isVertical: false,
          items: {},
          syncRoute: this.mdSyncRoute,
          getStepperNumber: this.getStepperNumber,
          setActiveStep: this.setActiveStep,
          isPreviousStepperDone: this.isPreviousStepperDone
        }
      }
    },
    provide () {
      return { MdSteppers: this.MdSteppers }
    },
    computed: {
      steppersClasses () {
        return {
          'md-no-transition': this.noTransition,
          'md-alternative': this.mdAlternative,
          'md-horizontal': !this.mdVertical,
          'md-vertical': this.mdVertical,
          'md-dynamic-height': this.mdDynamicHeight
        }
      },
      activeIndex () {
        return this.MdSteppers.activeStep
      },
      containerStyles () {
        return {
          transform: !this.mdVertical && `translate3D(${-this.activeStepIndex * 100}%, 0, 0)`
        }
      }
    },
    watch: {
      mdActiveStep (stepper) {
        this.MdSteppers.activeStep = stepper
        this.$emit('md-changed', stepper)
      },
      mdLinear (isLinear) {
        this.MdSteppers.isLinear = isLinear
      },
      mdVertical (isVertical) {
        this.MdSteppers.isVertical = isVertical
      },
      activeIndex () {
        this.$nextTick(this.setActiveButtonEl)
      },
      activeStepIndex () {
        this.onActiveStepIndex()
        this.$nextTick(this.calculateStepperPos)
      },
      activeButtonEl (activeButton) {
        this.activeStepIndex = activeButton ? [].indexOf.call(activeButton.parentNode.childNodes, activeButton) : 0
      },
      '$route' () {
        this.$nextTick(this.setActiveButtonEl)
      }
    },
    methods: {
      hasActiveStep () {
        return this.MdSteppers.activeStep || this.mdActiveStep
      },
      getItemsAndKeys () {
        const items = this.MdSteppers.items

        return {
          items,
          keys: Object.keys(items)
        }
      },
      getStepperNumber (id) {
        const stepperNames = Object.keys(this.MdSteppers.items)

        return stepperNames.indexOf(id) + 1
      },
      isStepperDone (id) {
        return this.MdSteppers.items[id].done
      },
      isPreviousStepperDone (id) {
        const { items } = this.MdSteppers
        const stepperNames = Object.keys(items)
        const activeIndex = this.getStepperNumber(id) - 2
        const previousIndex = stepperNames[activeIndex]

        if (!previousIndex) {
          return true
        }

        return items[previousIndex].done
      },
      isStepperEditable (id) {
        return this.MdSteppers.items[id].editable
      },
      setStepperAsDone (id) {
        this.MdSteppers.items[id].done = true
      },
      setPreviousStepperAsDone (newId) {
        const activeIndex = this.getStepperNumber(this.MdSteppers.activeStep)
        const newIndex = this.getStepperNumber(newId)

        if (newIndex > activeIndex) {
          this.setStepperAsDone(this.MdSteppers.activeStep)
        }
      },
      setActiveStep (id) {
        if (this.mdLinear && !this.isPreviousStepperDone(id)) {
          return false
        }

        if (id !== this.MdSteppers.activeStep && (this.isStepperEditable(id) || !this.isStepperDone(id))) {
          this.setPreviousStepperAsDone(id)
          this.MdSteppers.activeStep = id
          this.$emit('md-changed', id)
          this.$emit('update:mdActiveStep', id)
          this.MdSteppers.items[id].error = null
        }
      },
      setActiveButtonEl () {
        this.activeButtonEl = this.$el.querySelector('.md-stepper-header.md-button.md-active')
      },
      setActiveStepByIndex (index) {
        const { keys } = this.getItemsAndKeys()

        if (!this.hasActiveStep()) {
          this.MdSteppers.activeStep = keys[index]
        }
      },
      setupObservers () {
        const steppersContent = this.$el.querySelector('.md-steppers-wrapper')

        if ('ResizeObserver' in window) {
          this.resizeObserver = new window.ResizeObserver(this.calculateStepperPos)
          this.resizeObserver.observe(this.$el)
        } else {
          window.addEventListener('resize', this.calculateStepperPos)
        }

        if (steppersContent) {
          this.resizeObserver = MdObserveElement(this.$el.querySelector('.md-steppers-wrapper'), {
            childList: true,
            characterData: true,
            subtree: true
          }, this.calculateStepperPos)
        }
      },
      calculateStepperPos () {
        if (!this.mdVertical) {
          const stepperElement = this.$el.querySelector(`.md-stepper:nth-child(${this.activeStepIndex + 1})`)

          this.contentStyles = {
            height: `${stepperElement.offsetHeight}px`
          }
        }
      },
      onActiveStepIndex () {
        const { items, keys } = this.getItemsAndKeys()
        if (!this.hasActiveStep() && !this.activeStepIndex) {
          this.MdSteppers.activeStep = keys[0]
        } else {
          this.MdSteppers.activeStep = keys[this.activeStepIndex]

          for (let i = 0; i < this.activeStepIndex; i++) {
            this.setStepperAsDone(keys[i])
          }
        }
      }
    },
    created () {
      this.calculateStepperPos = MdThrottling(this.calculateStepperPos, 300)
      this.MdSteppers.activeStep = this.mdActiveStep
      this.MdSteppers.isLinear = this.mdLinear
      this.MdSteppers.isVertical = this.mdVertical
    },
    mounted () {
      this.$nextTick().then(() => {
        if (!this.mdSyncRoute) {
          this.setActiveStepByIndex(0)
        } else {
          this.onActiveStepIndex()
        }

        return this.$nextTick()
      }).then(() => {
        this.setActiveButtonEl()
        this.calculateStepperPos()

        window.setTimeout(() => {
          this.noTransition = false
          this.setupObservers()
        }, 100)
      })
    },
    beforeDestroy () {
      if (!('ResizeObserver' in window)) {
        window.removeEventListener('resize', this.calculateStepperPos)
      }
    },
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdElevation/mixins";
  @import "~components/MdLayout/mixins";

  $md-stepper-icon-size: 24px;

  .md-steppers {
    transition: .3s $md-transition-default-timing;
    transition-property: color, background-color;
    will-change: color, background-color;

    &.md-no-transition * {
      transition: none !important;
    }

    &.md-dynamic-height .md-steppers-wrapper {
      transition: height .3s $md-transition-default-timing;
      will-change: height;
    }

    &.md-horizontal.md-alternative {
      .md-stepper-header {
        height: 104px;

        &:first-of-type {
          .md-stepper-icon,
          .md-stepper-number {
            &:before {
              content: none;
            }
          }
        }

        &:last-of-type {
          .md-stepper-icon,
          .md-stepper-number {
            &:after {
              content: none;
            }
          }
        }

        .md-ripple {
          justify-content: center;
        }

        .md-button-content {
          padding-top: 16px;
          flex-direction: column;

          &:before,
          &:after {
            content: none;
          }
        }

        .md-stepper-text {
          height: 32px;
          justify-content: flex-start;
          text-align: center;
        }

        .md-stepper-icon,
        .md-stepper-number {
          margin: 0 8px 8px;
          position: relative;

          &:after,
          &:before {
            width: 9999%;
            height: 1px;
            position: absolute;
            top: 50%;
            z-index: 2;
            transition: background-color .3s $md-transition-default-timing;
            will-change: background-color;
            content: " ";
          }

          &:after {
            left: calc(100% + 8px);
          }

          &:before {
            right: 32px;
          }
        }
      }
    }

    &.md-vertical {
      .md-stepper-header {
        height: 56px;

        .md-ripple {
          padding: 0 24px 0 16px;
        }
      }

      .md-steppers-container {
        display: block;
      }

      .md-button-content {
        &:before,
        &:after {
          content: none;
        }
      }

      .md-stepper-icon,
      .md-stepper-number {
        margin-right: 12px;
      }

      .md-stepper {
        flex: none;
        padding: 0;
        position: relative;

        &:last-of-type:after {
          content: none;
        }

        &:after {
          width: 1px;
          position: absolute;
          top: 48px;
          bottom: -8px;
          left: 36px;
          z-index: 2;
          transition: background-color .3s $md-transition-default-timing;
          will-change: background-color;
          content: " ";
        }
      }
    }
  }

  .md-steppers-navigation {
    @include md-elevation(2);
    display: flex;

    .md-stepper-header {
      width: auto;
    }
  }

  .md-stepper-header {
    width: 100%;
    height: 72px;
    margin: 0;
    flex: 1;
    border-radius: 0;
    font-weight: 400;
    text-align: left;
    text-transform: none;

    &:first-of-type .md-button-content:before {
      content: none;
    }

    &:last-of-type .md-button-content:after {
      content: none;
    }

    &.md-active,
    &.md-error {
      font-weight: 500;
    }

    .md-ripple {
      padding: 0 16px;
      justify-content: flex-start;
    }

    .md-button-content {
      padding: 0 8px;
      display: flex;
      align-items: center;
      transition: color .3s $md-transition-default-timing;
      will-change: color;

      &:after,
      &:before {
        height: 1px;
        position: absolute;
        top: 50%;
        transition: background-color .3s $md-transition-default-timing;
        will-change: background-color;
        content: " ";
      }

      &:after {
        width: 9999%;
        left: 100%;
      }

      &:before {
        width: 16px;
        left: -16px;
      }

      svg {
        transition: .3s $md-transition-default-timing;
        transition-property: color, fill;
        will-change: color, fill;
      }
    }
  }

  .md-stepper-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 16px;
    white-space: nowrap;
  }

  .md-stepper-icon,
  .md-stepper-number {
    margin-right: 8px;
    transition: color .3s $md-transition-default-timing;
    will-change: color;
  }

  .md-stepper-number {
    width: $md-stepper-icon-size;
    height: $md-stepper-icon-size;
    border-radius: $md-stepper-icon-size;
    transition: .3s $md-transition-default-timing;
    transition-property: color, background-color;
    will-change: color, background-color;
    font-size: 12px;
    line-height: $md-stepper-icon-size;
    text-align: center;
  }

  .md-stepper-done {
    width: 20px;
    height: 20px;
    transform: translateY(-1px);
  }

  .md-stepper-editable {
    width: 14px;
    height: 14px;
    transform: translateY(-1px);
  }

  .md-stepper-error,
  .md-stepper-description {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }

  .md-stepper-description {
    opacity: .54;
  }

  .md-steppers-wrapper {
    overflow: hidden;
    transition: none;
    will-change: height;
  }

  .md-steppers-container {
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
    transform: translateZ(0);
    transition: transform .35s $md-transition-default-timing;
    will-change: transform;
  }

  .md-stepper {
    width: 100%;
    flex: 1 0 100%;
    padding: 16px 24px;

    @include md-layout-small {
      padding: 8px 16px;
    }
  }
</style>
