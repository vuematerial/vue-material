<template>
  <div>
    <md-table md-async-url="https://reqres.in/api/users" md-async-results-key="data" :md-async-params="{page: 3}" md-card md-fixed-header>
      <md-table-toolbar>
        <h1 class="md-title">People</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="First Name">{{ item.first_name }}</md-table-cell>
        <md-table-cell md-label="Last Name">{{ item.last_name }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'TableAsync'
}
</script>
