<example src="./examples/BasicDatepicker.vue"/>
<example src="./examples/DisabledDatesDatepicker.vue"/>
<example src="./examples/InputAndMenuDatepicker.vue"/>

<template>
  <page-container centered :title="$t('pages.datepicker.title')">
    <div class="page-container-section">
      <p>Datepicker provide a calendar to pick a date from. The component can switch between landscape and vertical mode
        based on css breakpoints.</p>
    </div>
    <div class="page-container-section">
      <h2>Datepicker</h2>
      <code-example title="Basic Example" :component="examples['basic-datepicker']"/>
    </div>
    <div class="page-container-section">
      <h2>Disabled dates</h2>
      <p>Sometimes you may need to disable certain dates from being selected. Let's suppose that you want to let the
        user select only week days:</p>
      <code-example title="No weekends available" :component="examples['disabled-dates-datepicker']"/>
    </div>

    <div class="page-container-section">
      <h2>Datepicker with input and menu</h2>
      <p>Inline datepickers intergrate well with <code>md-menu</code>. Just add <code>.md-datepicker-popup</code> class.</p>
      <code-example title="Datepicker inside menu" :component="examples['input-and-menu-datepicker']"/>
    </div>

    <div class="page-container-section">
      <api-item title="API - md-datepicker-inline">
        <p>All the following options can be applied to the md-datepicker-inline component:</p>

        <api-table :headings="props.headings" :props="props.props" slot="props"/>
        <api-table :headings="events.headings" :props="events.props" slot="events"/>
        <api-table :headings="classes.headings" :props="classes.props" slot="classes"/>
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocDatepickerInline',
    mixins: [examples],
    data: () => ({
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [
          {
            name: 'md-date',
            type: 'Date',
            description: 'Selected date',
            defaults: 'null'
          },
          {
            name: 'md-current-date',
            type: 'Date',
            description: 'Default date to show in datepicker',
            defaults: 'null'
          },
          {
            name: 'md-disabled-dates',
            type: 'Array|Function',
            description: 'The optional disabled dates. Can be either Array or Function. <br>- If <code>Array</code>, the Datepicker will disable all days inside. <br>- If <code>Function</code>, the Datepicker will pass the current day as a parameter of this function. If the return false, then the date will be disabled.',
            defaults: 'null'
          },
        ]
      },
      events: {
        headings: ['Name', 'Description', 'Value'],
        props: [
          {
            name: 'md-click:day',
            description: 'Triggered when day clicked',
            value: 'null'
          },
        ]
      },
      classes: {
        headings: ['Name', 'Description'],
        props: [
          {
            name: 'md-<code>[breakpoint]</code>-vertical',
            description: 'Activates vertical mode for a particular breakpoint',
          },
          {
            name: 'md-<code>[breakpoint]</code>-landscape',
            description: 'Activates landscape mode for a particular breakpoint',
          },
        ]
      }
    })
  }
</script>
