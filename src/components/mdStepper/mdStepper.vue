<template>
  <div class="md-stepper" :class="[themeClass, stepsClasses]">
    <md-whiteframe md-tag="nav" class="md-steps-navigation" v-if="!mdVertical" :md-elevation="mdElevation" :class="navigationClasses" ref="stepNavigation">
      <md-step-header-container :md-vertical="mdVertical" ref="stepHeader">
        <md-step-header
          v-for="(step, index) in stepList"
          :key="step.id"
          :step="step"
          :md-alternate-labels="mdAlternateLabels"
          @click.native="setActiveStep(step)">
        </md-step-header>
      </md-step-header-container>
    </md-whiteframe>

    <md-whiteframe :md-elevation="mdElevation">
      <div class="md-steps-container" v-if="!mdVertical" ref="stepContent" :style="{ height: contentHeight }">
        <div class="md-steps-wrapper" :style="{ transform: `translate3D(-${contentWidth}, 0, 0)` }">
          <slot></slot>
        </div>
      </div>

      <div class="md-steps-vertical-container" v-if="mdVertical" ref="stepContent">
        <slot></slot>
      </div>
    </md-whiteframe>

  </div>
</template>

<style lang="scss" src="./mdStepper.scss">
</style>

<script>
  import theme from '../../core/components/mdTheme/mixin';
  import throttle from '../../core/utils/throttle';

  export default {
    name: 'md-stepper',
    props: {
      mdAlternateLabels: {
        type: Boolean,
        default: false
      },
      mdElevation: {
        type: [String, Number],
        default: 1
      },
      mdVertical: {
        type: Boolean,
        default: false
      }
    },
    mixins: [theme],
    data: () => ({
      stepList: {},
      activeStep: null,
      activeStepNumber: 0,
      contentHeight: '0px',
      contentWidth: '0px'
    }),
    computed: {
      navigationClasses() {
        return {
          'md-alternate-labels': this.mdAlternateLabels
        };
      },
      stepsClasses() {
        return {
          'md-steps-vertical': this.mdVertical
        };
      }
    },
    methods: {
      getNextStep(id) {
        var currentIndex = this.getStepIndex(id);

        if (currentIndex === this.stepList.length) {
          return undefined;
        }

        var nextStepId = Object.keys(this.stepList)[currentIndex + 1];
        var nextStep = this.stepList[nextStepId];

        return nextStep;
      },
      getPreviousStep(id) {
        var currentIndex = this.getStepIndex(id);

        if (currentIndex === 0) {
          return undefined;
        }

        var previousStepId = Object.keys(this.stepList)[currentIndex - 1];
        var previousStep = this.stepList[previousStepId];

        return previousStep;
      },
      getStepsCount() {
        const idList = Object.keys(this.stepList);

        return idList.length;
      },
      getStepIndex(id) {
        const idList = Object.keys(this.stepList);

        return idList.indexOf(id);
      },
      registerStep(stepData) {
        this.$set(this.stepList, stepData.id, stepData);
      },
      moveNextStep() {
        if (this.activeStepNumber < this.getStepsCount() - 1) {
          var nextStep = this.getNextStep(this.activeStep);

          this.setActiveStep(nextStep);
        } else {
          this.$emit('completed');
        }
      },
      movePreviousStep() {
        if (this.activeStepNumber > 0 && this.activeStepNumber < this.getStepsCount()) {
          var prevStep = this.getPreviousStep(this.activeStep);

          this.setActiveStep(prevStep);
        }
      },
      setActiveStep(stepData) {
        if (this.activeStepNumber > this.getStepIndex(stepData.id) && !stepData.editable) {
          return;
        }

        this.activeStep = stepData.id;
        this.activeStepNumber = this.getStepIndex(this.activeStep);
        this.calculatePosition();
        this.$emit('change', this.activeStepNumber);
      },
      unregisterStep(stepData) {
        this.$delete(this.stepList, stepData.id);
      },
      updateStep(stepData) {
        this.registerStep(stepData);

        if (stepData.active) {
          if (!stepData.disabled) {
            this.setActiveStep(stepData);
          } else if (Object.keys(this.stepList).length) {
            let stepIds = Object.keys(this.stepList);
            let targetIndex = stepIds.indexOf(stepData.id) + 1;
            let target = stepIds[targetIndex];

            if (target) {
              this.setActiveStep(this.stepList[target]);
            } else {
              this.setActiveStep(this.stepList[0]);
            }
          }
        }
      },
      observeElementChanges() {
        this.parentObserver = new MutationObserver(throttle(this.calculateOnWatch, 50));
        this.parentObserver.observe(this.$refs.stepContent, {
          childList: true,
          attributes: true,
          subtree: true
        });
      },
      calculateStepsWidthAndPosition() {
        if (!this.mdVertical) {
          const width = this.$el.offsetWidth;
          let index = 0;

          this.contentWidth = width * this.activeStepNumber + 'px';

          for (const stepId in this.stepList) {
            const step = this.stepList[stepId];

            step.ref.width = width + 'px';
            step.ref.left = width * index + 'px';
            index++;
          }
        } else {
          this.contentWidth = 'initial';
        }
      },
      calculateContentHeight() {
        this.$nextTick(() => {
          if (!this.mdVertical && Object.keys(this.stepList).length) {
            let height = this.stepList[this.activeStep].ref.$el.offsetHeight;

            this.contentHeight = height + 'px';
          } else {
            this.contentHeight = 'initial';
          }
        });
      },
      calculatePosition() {
        window.requestAnimationFrame(() => {
          if (this._destroyed) {
            return;
          }
  
          this.calculateStepsWidthAndPosition();
          this.calculateContentHeight();
        });
      },
      debounceTransition() {
        window.clearTimeout(this.transitionControl);
        this.transitionControl = window.setTimeout(() => {
          this.calculatePosition();
          this.transitionOff = false;
        }, 200);
      },
      calculateOnWatch() {
        this.calculatePosition();
        this.debounceTransition();
      },
      calculateOnResize() {
        this.transitionOff = true;
        this.calculateOnWatch();
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.observeElementChanges();
        window.addEventListener('resize', this.calculateOnResize);

        if (Object.keys(this.stepList).length && !this.activeStep) {
          let firstStep = Object.keys(this.stepList)[0];

          this.setActiveStep(this.stepList[firstStep]);
        }
      });
    },
    beforeDestroy() {
      if (this.parentObserver) {
        this.parentObserver.disconnect();
      }

      window.removeEventListener('resize', this.calculateOnResize);

      this._destroyed = true;
    }
  };
</script>
