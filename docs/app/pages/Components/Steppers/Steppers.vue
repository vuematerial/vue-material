<example src="./examples/StepperHorizontal.vue" />
<example src="./examples/StepperAlternative.vue" />
<example src="./examples/StepperLinear.vue" />
<example src="./examples/StepperNonEditable.vue" />
<example src="./examples/StepperVertical.vue" />
<example src="./examples/StepperRoute.vue" />

<template>
  <page-container centered :title="$t('pages.steppers.title')">
    <div class="page-container-section">
      <p>Steppers display progress through a sequence of logical and numbered steps. They may also be used for navigation and have two main types: Horizontal or Vertical. The horizontal type can have an alternative layout.</p>
      <p>Individual steps are editable and optional by default, but you can change that.</p>
    </div>

    <div class="page-container-section">
      <h2>Horizontal Steppers</h2>

      <p>Horizontal steppers are ideal when the contents of one step depend on an earlier step. You should avoid using long step names in horizontal steppers.</p>
      <p>This is the default type of steppers. They are not recommended for mobile:</p>
      <code-example title="Default layout" :component="examples['stepper-horizontal']" />

      <p>They can also have a alternative layout to give greater emphasis to the steps titles:</p>
      <code-example title="Alternative Layout" :component="examples['stepper-alternative']" />
    </div>

    <div class="page-container-section">
      <h2>Vertical Steppers</h2>

      <p>Vertical steppers are great deal for mobile devices or to be inserted on small areas of your application, like a dialog or a card.</p>
      <code-example title="Ideal for Mobile" :component="examples['stepper-vertical']" />
    </div>

    <div class="page-container-section">
      <h2>Linear Steppers</h2>

      <p>By default steps are optional and this means that you can advance to the last step without pass through the other ones. But sometimes we're guiding an user through a linear flow and all steps matter or are connected together. Linear steppers require users to complete one step in order to move on to the next:</p>
      <code-example title="With error handler" :component="examples['stepper-linear']" />
    </div>

    <div class="page-container-section">
      <h2>Non Editable Steps</h2>

      <p>By default steps are also editable. But you can disable this by manually setting on each step that could be non-editable. This makes sense when users cannot edit a step later or when step editing poses a distraction risk to form completion:</p>
      <code-example title="Disable Edit" :component="examples['stepper-non-editable']" />
    </div>

    <div class="page-container-section">
      <h2>Vue Router Integration</h2>

      <p>Vue Material Steppers have a deep integratio with Vue Router. This means that you can have a route per step. This allows you to navigate between steps through the browser history, store the current stepper after a refresh and lots of great scenarios that you can explore! Take a look at the page URL changing when clicking on each steps:</p>
      <note-block tip>Try to refresh the page to see that Steppers will detect the active step based on the current URL. Just awesome!</note-block>
      <code-example title="Sync with route" :component="examples['stepper-route']" />

      <api-item title="API - md-steppers">
        <p>The following options can be applied to any steppers:</p>

        <api-table :headings="steppers.props.headings" :props="steppers.props.props" slot="props" />
        <api-table :headings="steppers.events.headings" :props="steppers.events.props" slot="events" />
      </api-item>

      <api-item title="API - md-step">
        <p>The following options can be used on any step. All <a href="https://router.vuejs.org/en/api/router-link.html" target="_blank">options</a> of <code>router-link</code> can be simply used here:</p>
        <api-table :headings="step.props.headings" :props="step.props.props" slot="props" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocSteppers',
    mixins: [examples],
    data: () => ({
      steppers: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [
            {
              name: 'md-active-step',
              type: 'String',
              description: 'The id of the step to be set as the current one. Useful to programatically change the active step.. Should be used with the <code>.sync</code> modifier.',
              defaults: 'false'
            },
            {
              name: 'md-sync-route',
              type: 'Boolean',
              description: 'Watches the current route if there is a Vue Router instance running on the page. This will automatically change the active stepper based on the current URL.',
              defaults: 'false'
            },
            {
              name: 'md-alternative',
              type: 'Boolean',
              description: 'Change the steppers into a alternative layout',
              defaults: 'false'
            },
            {
              name: 'md-vertical',
              type: 'Boolean',
              description: 'Change the steppers into a vertical orientation. For mobile.',
              defaults: 'false'
            },
            {
              name: 'md-linear',
              type: 'Boolean',
              description: 'Set steppers to work in a linear flow.',
              defaults: 'false'
            },
            {
              name: 'md-dynamic-height',
              type: 'Boolean',
              description: 'Calculate the stepper height automatically and add an awesome height transition between them.',
              defaults: 'false'
            }
          ]
        },
        events: {
          headings: ['Name', 'Description', 'Value'],
          props: [
            {
              name: 'md-changed',
              description: 'Triggered when the active stepper changes',
              value: 'Step ID'
            }
          ]
        }
      },
      step: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [
            {
              name: 'id',
              type: 'String',
              description: 'The step id. Used when changing the active step dynamically',
              defaults: 'a random string'
            },
            {
              name: 'href',
              type: 'String',
              description: 'The step href link. Useful when you don\'t have Vue Router on your app, but you still want to sync the active step with the current URL.',
              defaults: 'null'
            },
            {
              name: 'md-label',
              type: 'String',
              description: 'The step label',
              defaults: 'null'
            },
            {
              name: 'md-description',
              type: 'String',
              description: 'The step description. When a step is optional, use this prop to tell the user that.',
              defaults: 'null'
            },
            {
              name: 'md-error',
              type: 'String',
              description: 'The error message. When set, the stepper will automatically raise an error. To clear the error, set this variable as null.',
              defaults: 'null'
            },
            {
              name: 'md-done',
              type: 'Boolean',
              description: 'Set this prop to true to tell that a particular step is finished.',
              defaults: 'false'
            },
            {
              name: 'md-editable',
              type: 'Boolean',
              description: 'Make a step editable or non editable.',
              defaults: 'true'
            }
          ]
        }
      }
    })
  }
</script>
