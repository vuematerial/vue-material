<example src="./examples/Example.vue" />
<example src="./examples/WithLabel.vue" />
<example src="./examples/Editable.vue" />

<template>
  <page-container centered :title="$t('pages.slider.title')">
    <div class="page-container-section">
      <p>Sliders let users select from a range of values by moving the slider thumb. </p>
    </div>

    <div class="page-container-section">
      <h2>Slider</h2>

      <code-example title="Slider" :component="examples['example']" />
      <code-example title="Slider with label" :component="examples['with-label']" />

      <code-example title="Slider with editable field" :component="examples['editable']" />
      <api-item title="API - md-slider">
        <p>The following options can be applied to all sliders:</p>

        <api-table :headings="props.headings" :props="props.props" slot="props" />

        <note-block tip>All other <code>&lt;input type=&quot;range&quot;&gt;</code> attributes, such as <strong>name</strong> and <strong>required</strong>, can be used on <code>md-slider</code>.</note-block>
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocSlider',
    mixins: [examples],
    data: () => ({
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [
          {
            name: 'v-model',
            type: 'Number',
            description: 'The model variable to bind the selection value. If no value is assigned, then it will use default value.',
            defaults: '0'
          },
          {
            name: 'md-editable',
            type: 'Boolean',
            description: 'Enables field for editable value of slider.',
            defaults: 'false'
          },
          {
            name: 'min',
            type: 'Number',
            description: 'Minimal value for slider.',
            defaults: ''
          },
          {
            name: 'max',
            type: 'Number',
            description: 'Maximal value for slider.',
            defaults: '100'
          },
          {
            name: 'step',
            type: 'Number, String',
            description: 'Step value for slider.',
            defaults: '1'
          }
        ]
      }
    })
  }
</script>
