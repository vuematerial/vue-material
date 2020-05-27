<template>
  <div>
    <md-chips class="md-primary" v-model="emails" md-placeholder="Enter a email" :md-auto-insert="true">
      <label>Recipients</label>
    </md-chips>
  </div>
</template>

<script>
export default {
  name: 'AutoInsert',
  data: () => ({
    emails: [
      'John.Smith@example.com',
    ]
  })
}
</script>
