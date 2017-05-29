<template>
  <div class="splash-illustration" v-once>
    <logo-vue-material />
  </div>
</template>

<style lang="scss" scoped>
  .splash-illustration {
    width: 360px;
    height: 240px;
    margin-right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .logo-vue-material {
    width: 100%;
  }
</style>

<script>

  export default {
    name: 'SplashIllustation'
  }
</script>
