<template>
  <div class="md-step" :id="stepId" :style="styles">
    <md-step-header
      v-if="vertical"
      :step="getStepData()">
    </md-step-header>
    <div class="md-step-content" v-if="!vertical || (vertical && isCurrentStep)">
      <slot></slot>
      <div class="md-step-actions" v-if="!vertical || (vertical && isCurrentStep)">
        <md-button class="md-raised md-primary" @click="moveNextStep" :disabled="!mdContinue">{{ continueText }}</md-button>
        <md-button @click="movePreviousStep" :disabled="!canGoBack">{{ mdButtonBack }}</md-button>
      </div>
    </div>
  </div>
</template>

<script>
  import uniqueId from '../../core/utils/uniqueId';
  import getClosestVueParent from '../../core/utils/getClosestVueParent';

  export default {
    name: 'md-step',
    props: {
      id: [String, Number],
      mdActive: Boolean,
      mdButtonBack: {
        type: String,
        default: 'BACK'
      },
      mdButtonContinue: {
        type: String,
        default: 'CONTINUE'
      },
      mdContinue: {
        type: Boolean,
        default: true
      },
      mdDisabled: Boolean,
      mdError: Boolean,
      mdEditable: {
        type: Boolean,
        default: true
      },
      mdIcon: String,
      mdLabel: [String, Number],
      mdMessage: [String],
      mdTooltip: String,
      mdTooltipDelay: {
        type: String,
        default: '0'
      },
      mdTooltipDirection: {
        type: String,
        default: 'bottom'
      }
    },
    data() {
      return {
        index: 0,
        left: '0px',
        mounted: false,
        parentStepper: undefined,
        stepId: this.id || 'step-' + uniqueId(),
        vertical: false,
        width: '0px'
      };
    },
    watch: {
      mdActive() {
        this.updateStepData();
      },
      mdContinue() {
        this.updateStepData();
      },
      mdEditable() {
        this.updateStepData();
      },
      mdDisabled() {
        this.updateStepData();
      },
      mdError() {
        this.updateStepData();
      },
      mdIcon() {
        this.updateStepData();
      },
      mdLabel() {
        this.updateStepData();
      },
      mdMessage() {
        this.updateStepData();
      },
      mdTooltip() {
        this.updateStepData();
      },
      mdTooltipDelay() {
        this.updateStepData();
      },
      mdTooltipDirection() {
        this.updateStepData();
      }
    },
    computed: {
      canGoBack() {
        if (this.index === 0) {
          return false;
        }

        if (!this.parentStepper) {
          return false;
        }

        var previousStep = this.parentStepper.getPreviousStep(this.stepId);

        if (previousStep !== undefined && !previousStep.editable) {
          return false;
        }

        return true;
      },
      continueText() {
        if (!this.parentStepper) {
          return this.mdButtonContinue;
        }

        if (this.index + 1 === this.parentStepper.getStepsCount() && this.mdButtonContinue === 'CONTINUE') {
          return 'FINISH';
        }

        return this.mdButtonContinue;
      },
      isCurrentStep() {
        return this.index === this.parentStepper.activeStepNumber;
      },
      styles() {
        if (this.vertical) {
          return {};
        }

        return {
          width: this.width,
          left: this.left
        };
      }
    },
    methods: {
      getStepData() {
        return {
          id: this.stepId,
          label: this.mdLabel,
          message: this.mdMessage,
          icon: this.mdIcon,
          active: this.mdActive,
          continue: this.mdContinue,
          editable: this.mdEditable,
          disabled: this.mdDisabled,
          error: this.mdError,
          toolTip: this.mdTooltip,
          tooltipDelay: this.mdTooltipDelay,
          tooltipDirection: this.mdTooltipDirection,
          ref: this
        };
      },
      moveNextStep() {
        this.parentStepper.moveNextStep();
      },
      movePreviousStep() {
        this.parentStepper.movePreviousStep();
      },
      setActiveStep() {
        this.parentStepper.setActiveStep(this.getStepData());
      },
      updateStepData() {
        this.parentStepper.updateStep(this.getStepData());
      }
    },
    mounted() {
      let stepData = this.getStepData();

      this.parentStepper = getClosestVueParent(this.$parent, 'md-stepper');

      if (!this.parentStepper) {
        throw new Error('You must wrap the md-step in a md-stepper');
      }

      this.mounted = true;
      this.parentStepper.updateStep(stepData);

      if (this.mdActive) {
        this.parentStepper.setActiveStep(stepData);
      }

      this.vertical = this.parentStepper.mdVertical;

      this.index = this.parentStepper.getStepIndex(this.stepId);
    },
    beforeDestroy() {
      this.parentStepper.unregisterStep(this.getStepData());
    }
  };
</script>
