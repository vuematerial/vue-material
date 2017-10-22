<example src="./examples/BasicSelect.vue" />
<example src="./examples/DenseSelect.vue" />
<example src="./examples/OptgroupDisabled.vue" />
<example src="./examples/MultipleSelect.vue" />
<example src="./examples/DisabledSelect.vue" />

<template>
  <page-container centered :title="$t('pages.select.title')">
    <div class="page-container-section">
      <p>Lorem ipsum</p>
    </div>

    <div class="page-container-section">
      <h2>Select</h2>

      <code-example title="Basic Selects" :component="examples['basic-select']" />
      <code-example title="Disabled" :component="examples['disabled-select']" />
      <code-example title="Groups and disabled options" :component="examples['optgroup-disabled']" />
      <code-example title="Multiple" :component="examples['multiple-select']" />
      <code-example title="Dense" :component="examples['dense-select']" />

      <api-item title="API - md-select">
        <p>This component do not have any extra option.</p>
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'Select',
    mixins: [examples]
  }
</script>
