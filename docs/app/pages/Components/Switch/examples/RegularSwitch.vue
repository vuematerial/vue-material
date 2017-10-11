<template>
  <div>
    <md-switch v-model="array" value="1">Array</md-switch>
    <md-switch v-model="array" value="2">Array</md-switch>
    <md-switch v-model="boolean">Boolean</md-switch>
    <md-switch v-model="string" value="my-switch">String</md-switch>
    <md-switch v-model="novalue">No Value</md-switch>
    <md-switch v-model="disabled" disabled>Disabled</md-switch>

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
    name: 'RegularSwitch',
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
  .md-switch {
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
