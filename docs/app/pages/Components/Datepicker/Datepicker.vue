<example src="./examples/BasicDatepicker.vue" />
<example src="./examples/LabeledDatepicker.vue" />
<example src="./examples/CancelOpenDatepicker.vue" />
<example src="./examples/CloseOnSelectDatepicker.vue" />
<example src="./examples/DisabledDatesDatepicker.vue" />

<template>
  <page-container centered :title="$t('pages.datepicker.title')">
    <div class="page-container-section">
      <p>Datepickers use a dialog window and provide a simple way to select a single value from a pre-determined set. The component can have disabled dates and it's really easy to use.</p>
    </div>

    <div class="page-container-section">
      <h2>Datepicker</h2>

      <code-example title="Basic Example" :component="examples['basic-datepicker']" />

      <code-example title="Labeled Example" :component="examples['labeled-datepicker']" />
    </div>

    <div class="page-container-section">
      <h2>Cancel open on focus</h2>
      <p>By default Datepicker component open on focus on it's input. This will make the input useless and the user will not be able to type de date manually. You can disable this behavior:</p>
      <code-example title="With initial date selected" :component="examples['cancel-open-datepicker']" />
    </div>

    <div class="page-container-section">
      <h2>Immediately selection</h2>
      <p>Datepicker dialog could be closed instantly after a date is selected. Date will be selected immediately without any confirm:</p>
      <code-example title="Close dialog on select" :component="examples['close-on-select-datepicker']" />
    </div>

    <div class="page-container-section">
      <h2>Disabled dates</h2>
      <p>Sometimes you may need to disable certain dates from being selected. Let's suppose that you only want to let user to select work days:</p>
      <code-example title="No weekends available" :component="examples['disabled-dates-datepicker']" />

      <api-item title="API - md-datepicker">
        <p>All the following options can be applied to the md-datepicker component:</p>

        <api-table :headings="props.headings" :props="props.props" slot="props" />
        <api-table :headings="events.headings" :props="events.props" slot="events" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocDatepicker',
    mixins: [examples],
    data: () => ({
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [
          {
            name: 'v-model',
            type: 'Date',
            description: 'The model variable to bind the selected date',
            defaults: 'null'
          },
          {
            name: 'md-disabled-dates',
            type: 'Array|Function',
            description: 'The optional disabled dates. Can be either Array or Function. <br>- If <code>Array</code>, the Datepicker will disable all days inside. <br>- If <code>Function</code>, the Datepicker will pass the current day as a parameter of this function. If the return false, then the date will be disabled.',
            defaults: 'null'
          },
          {
            name: 'md-open-on-focus',
            type: 'Boolean',
            description: 'Disable the on focus event. Will open only if the user clicks on the icon.',
            defaults: 'true'
          },
          {
            name: 'md-immediately',
            type: 'Boolean',
            description: 'Select the date without confirm and close the dialog immediately.',
            defaults: 'false'
          },
          {
            name: 'md-override-native',
            type: 'Boolean',
            description: 'Override native browser pickers by changing type of input to text.',
            defaults: 'true'
          }
        ]
      },
      events: {
        headings: ['Name', 'Description', 'Value'],
        props: [
          {
            name: 'md-opened',
            description: 'Triggered when a datepicker dialog opens',
            value: 'null'
          },
          {
            name: 'md-closed',
            description: 'Triggered when a datepicker dialog closes',
            value: 'null'
          },
        ]
      }
    })
  }
</script>
