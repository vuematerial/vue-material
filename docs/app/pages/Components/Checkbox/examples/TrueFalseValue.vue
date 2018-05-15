<template>
  <div>
    <div class="block">
        <div class="title">Without <code>:true-value</code> / <code>:false-value</code></div>
        <div class="input">
          <md-checkbox v-model="withoutSetValue">{{withoutSetValue|jsonStringify}}</md-checkbox>
        </div>
    </div>

    <md-divider />

    <div class="block">
        <div class="title">With <code>:true-value</code> / <code>:false-value</code></div>
        <div class="input">
          <md-checkbox v-model="withSetValue" true-value="true" false-value="false">{{withSetValue|jsonStringify}}</md-checkbox>
        </div>
    </div>

    <md-divider />

    <div class="block">
        <div class="title">Native checkbox with <code>:true-value</code> / <code>:false-value</code></div>
        <div class="input">
          <label><input type="checkbox" v-model="native" true-value="true" false-value="false" value="test" />{{native|jsonStringify}}</label>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrueFalseValue',
  data () {
    return {
      withoutSetValue: null,
      withSetValue: null,
      native: null
    }
  },

  filters: {
    jsonStringify (val) {
      return JSON.stringify(val)
    }
  }
}
</script>

<style lang="scss">
.block:not(:first-child) {
  margin-top: 32px;
}

.title {
  font: 1.2em;
}
</style>
