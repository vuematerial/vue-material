<template>
  <div>
    <md-field>
      <label>Initial Value</label>
      <md-input v-model="initial" />
    </md-field>

    <md-field>
      <label>Initial Value (Read Only)</label>
      <md-input v-model="initial" readonly />
    </md-field>

    <md-field>
      <label>Type here!</label>
      <md-input />
      <span class="md-helper-text">Helper text</span>
    </md-field>

    <md-field>
      <label>With label</label>
      <md-input placeholder="A nice placeholder" />
    </md-field>

    <md-field md-inline>
      <label>Inline</label>
      <md-input />
    </md-field>

    <md-field>
      <label>Number</label>
      <md-input type="number" />
    </md-field>

    <md-field>
      <label>Textarea</label>
      <md-textarea />
    </md-field>

    <md-field>
      <label>Textarea with Autogrow</label>
      <md-textarea md-autogrow />
    </md-field>

    <md-field>
      <label>Disabled</label>
      <md-input disabled />
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'TextFields',
    data: () => ({
      initial: 'Initial Value'
    })
  }
</script>
