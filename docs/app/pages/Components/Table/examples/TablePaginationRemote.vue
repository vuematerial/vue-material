<template>
  <div>
    <md-table v-model="users.mdData" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Users</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell class="avatar" md-label="Avatar"><img :src="item.avatar"></md-table-cell>
        <md-table-cell md-label="Name">{{ item.first_name }}</md-table-cell>
        <md-table-cell md-label="Last name">{{ item.last_name }}</md-table-cell>
      </md-table-row>

      <md-table-pagination
        :md-page-size="rowsPerPage"
        :md-page-options="[3, 5, 10, 15]"
        :md-update="updatePagination"
        :md-data.sync="users" />
    </md-table>
  </div>
</template>

<script>

  export default {
    name: 'TablePaginationRemote',
    data: () => ({
      users: {
        mdCount: null,
        mdPage: null,
        mdData: []
      },
      rowsPerPage: 3,
    }),
    created () {
      this.updatePagination(1, this.rowsPerPage)
    },
    methods: {
      updatePagination (page, pageSize, sort, sortOrder) {
        console.log('pagination has updated', page, pageSize, sort, sortOrder)
        // Example of response - in case the service goes down.
        // {"page":1,"per_page":5,"total":12,"total_pages":3,"data":[{"id":1,"first_name":"George","last_name":"Bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"},{"id":2,"first_name":"Janet","last_name":"Weaver","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},{"id":3,"first_name":"Emma","last_name":"Wong","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"},{"id":4,"first_name":"Eve","last_name":"Holt","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"},{"id":5,"first_name":"Charles","last_name":"Morris","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"}]}
        this.$http.get(`https://reqres.in/api/users?page=${page}&per_page=${pageSize}`).then(({data: resp}) => {
          this.rowsPerPage = resp.per_page
          this.users = {
            mdCount: resp.total,
            mdPage: resp.page,
            mdData: resp.data
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
  .md-table + .md-table {
    margin-top: 16px
  }
  .avatar img {
    max-width: 30px;
  }
</style>
