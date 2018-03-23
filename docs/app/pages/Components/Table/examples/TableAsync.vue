<template>
  <div>
    <md-table v-model="data" md-card md-fixed-header>
      <md-table-toolbar>
        <h1 class="md-title">People</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Gender">{{ item.gender }}</md-table-cell>
        <md-table-cell md-label="Title">{{ item.title }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
function get() {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          name: 'Shawna Dubbin',
          email: 'sdubbin0@geocities.com',
          gender: 'Male',
          title: 'Assistant Media Planner'
        },
        {
          name: 'Odette Demageard',
          email: 'odemageard1@spotify.com',
          gender: 'Female',
          title: 'Account Coordinator'
        },
        {
          name: 'Lonnie Izkovitz',
          email: 'lizkovitz3@youtu.be',
          gender: 'Female',
          title: 'Operator'
        },
        {
          name: 'Thatcher Stave',
          email: 'tstave4@reference.com',
          gender: 'Male',
          title: 'Software Test Engineer III'
        },
        {
          name: 'Clarinda Marieton',
          email: 'cmarietonh@theatlantic.com',
          gender: 'Female',
          title: 'Paralegal'
        }
      ])
    }, 5000)
  })
}

export default {
  name: 'TableAsync',
  data() {
    return {
      data: get()
    }
  }
}
</script>
