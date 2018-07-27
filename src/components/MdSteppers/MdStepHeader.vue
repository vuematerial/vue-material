<template>
  <md-button class="md-stepper-header" :class="classes" :disabled="shouldDisable" v-bind="data.props" v-on="data.events" @click.native="!MdSteppers.syncRoute && MdSteppers.setActiveStep(index)">
    <md-warning-icon class="md-stepper-icon" v-if="data.error" />

    <div class="md-stepper-number" v-else>
      <md-edit-icon class="md-stepper-editable" v-if="data.done && data.editable" />
      <md-check-icon class="md-stepper-done" v-else-if="data.done" />
      <template v-else>{{ MdSteppers.getStepperNumber(index) }}</template>
    </div>

    <div class="md-stepper-text">
      <span class="md-stepper-label">{{ data.label }}</span>
      <span class="md-stepper-error" v-if="data.error">{{ data.error }}</span>
      <span class="md-stepper-description" v-else-if="data.description">{{ data.description }}</span>
    </div>
  </md-button>
</template>

<script>
  import MdWarningIcon from 'core/icons/MdWarningIcon'
  import MdCheckIcon from 'core/icons/MdCheckIcon'
  import MdEditIcon from 'core/icons/MdEditIcon'

  export default {
    name: 'MdStepperHeader',
    components: {
      MdWarningIcon,
      MdCheckIcon,
      MdEditIcon
    },
    props: {
      index: {
        type: String,
        required: true
      }
    },
    inject: ['MdSteppers'],
    computed: {
      data () {
        return this.MdSteppers.items[this.index]
      },
      shouldDisable () {
        const { data, index, MdSteppers }  = this

        if (data.done && !data.editable) {
          return true
        }

        return MdSteppers.isLinear && !MdSteppers.isPreviousStepperDone(index)
      },
      classes () {
        return {
          'md-active': !this.MdSteppers.syncRoute && this.index === this.MdSteppers.activeStep,
          'md-error': this.data.error,
          'md-done': this.data.done
        }
      }
    }
  }
</script>
