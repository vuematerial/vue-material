<template>
  <div>
    <md-checkbox v-model="array" value="1">Array Checkbox</md-checkbox>
    <md-checkbox v-model="array" value="2">Array Checkbox</md-checkbox>
    <md-checkbox v-model="boolean" :value="false">Boolean Checkbox</md-checkbox>
    <md-checkbox v-model="string" value="my-checkbox">String Checkbox</md-checkbox>
    <md-checkbox v-model="novalue">No Value Checkbox</md-checkbox>

    <table>
      <tr>
        <th>Array Checkbox</th>
        <th>Boolean Checkbox</th>
        <th>String Checkbox</th>
        <th>No Value Checkbox</th>
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
      novalue: null
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

