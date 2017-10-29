<example src="./examples/StepperHorizontal.vue" />
<example src="./examples/StepperAlternative.vue" />
<example src="./examples/StepperLinear.vue" />
<example src="./examples/StepperNonEditable.vue" />
<example src="./examples/StepperVertical.vue" />

<template>
  <page-container centered :title="$t('pages.steppers.title')">
    <div class="page-container-section">
      <p>Lorem ipsum</p>
    </div>

    <div class="page-container-section">
      <h2>Steppers</h2>

      <code-example title="Horizontal" :component="examples['stepper-horizontal']" />
      <code-example title="Alternative Layout" :component="examples['stepper-alternative']" />
      <code-example title="Linear with error handler" :component="examples['stepper-linear']" />
      <code-example title="Disable Edit" :component="examples['stepper-non-editable']" />
      <code-example title="Vertical" :component="examples['stepper-vertical']" />

      <api-item title="API - md-steppers">
        <p>This component does not have any extra option.</p>
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'Steppers',
    mixins: [examples]
  }
</script>
