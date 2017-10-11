<template>
  <div>
    <md-checkbox v-model="array" value="1">Array</md-checkbox>
    <md-checkbox v-model="array" value="2">Array</md-checkbox>
    <md-checkbox v-model="boolean">Boolean</md-checkbox>
    <md-checkbox v-model="string" value="my-checkbox">String</md-checkbox>
    <md-checkbox v-model="novalue">No Value</md-checkbox>
    <md-checkbox v-model="disabled" disabled>Disabled</md-checkbox>

    <table>
      <tr>
        <th>Array</th>
        <th>Boolean</th>
        <th>String</th>
        <th>No Value</th>
      </tr>

      <tr>
        <td>{{ array }}</td>
        <td>{{ boolean }}</td>
        <td>{{ string }}</td>
        <td>{{ novalue }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'RegularCheckboxes',
    data: () => ({
      array: [],
      boolean: false,
      string: null,
      novalue: null,
      disabled: true
    })
  }
</script>

<style lang="scss" scoped>
  .md-checkbox {
    display: flex;
  }

  table {
    width: 100%;
    table-layout: fixed;

    th {
      text-align: left;
    }
  }
</style>
