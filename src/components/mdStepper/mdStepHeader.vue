<template>
  <div class="md-step-header" :class="getHeaderClasses">
    <div class="md-step-icons">
        <md-icon v-if="icon" class="md-step-icon">{{ icon }}</md-icon>
        <div v-if="!icon" class="md-step-number"><span>{{ stepNumber }}</span></div>
    </div>
    <div class="md-step-titles">
        <div class="md-step-title">{{ step.label }}</div>
        <small v-if="step.message">{{ step.message }}</small>
    </div>
    <md-tooltip v-if="step.toolTip" :md-direction="step.tooltipDirection" :md-delay="step.tooltipDelay">{{ step.toolTip }}</md-tooltip>
  </div>
</template>

<script>
    import getClosestVueParent from '../../core/utils/getClosestVueParent';

    export default {
      props: {
        step: Object,
        mdAlternateLabels: Boolean
      },
      data() {
        return {
          index: Number,
          parentStepper: {}
        };
      },
      computed: {
        isCompleted() {
          return this.index < this.parentStepper.activeStepNumber;
        },
        getHeaderClasses() {
          return {
            'md-active': this.parentStepper.activeStep === this.step.id,
            'md-alternate-labels': this.mdAlternateLabels,
            'md-disabled': this.step.disabled,
            'md-has-sub-message': this.step.message,
            'md-primary': this.isCompleted
          };
        },
        icon() {
          if (!this.step.disabled && this.step.editable && this.isCompleted) {
            return 'mode_edit';
          }

          if (!this.step.disabled && this.isCompleted) {
            return 'check';
          }

          return this.step.icon;
        },
        stepNumber() {
          return this.index + 1;
        }
      },
      mounted() {
        this.$nextTick(() => {
          this.parentStepper = getClosestVueParent(this.$parent, 'md-stepper');

          if (!this.parentStepper) {
            this.$destroy();

            throw new Error('You should wrap the md-step-header in a md-stepper');
          }

          this.index = this.parentStepper.getStepIndex(this.step.id);
        });
      }
};
</script>
