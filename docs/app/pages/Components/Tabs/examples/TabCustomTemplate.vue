<template>
  <div>
    <md-tabs @md-changed="checkNewPosts">
      <template slot="md-tab" slot-scope="{ tab }">
        {{ tab.label }} <i class="badge" v-if="tab.data.badge">{{ tab.data.badge }}</i>
      </template>

      <md-tab id="tab-home" md-label="Home"></md-tab>
      <md-tab id="tab-pages" md-label="Pages"></md-tab>
      <md-tab id="tab-posts" md-label="Posts" :md-template-data="{ badge: newPosts }" @click="clearNewPosts"></md-tab>
      <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
    </md-tabs>
  </div>
</template>

<script>
  export default {
    name: 'TabCustomTemplate',
    data: () => ({
      newPosts: 0,
      checkInterval: null
    }),
    methods: {
      clearCheckPosts () {
        window.clearInterval(this.checkInterval)
        this.checkInterval = null
      },
      clearNewPosts () {
        this.clearCheckPosts()
        this.newPosts = 0
      },
      checkNewPosts (activeTab) {
        if (activeTab !== 'tab-posts' && !this.checkInterval) {
          this.checkInterval = window.setInterval(() => {
            if (this.newPosts === 99) {
              this.newPosts = '99+'
              this.clearCheckPosts()
            } else {
              this.newPosts++
            }
          }, 1000)
        }
      }
    },
    mounted () {
      this.checkNewPosts()
    }
  }
</script>

<style lang="scss" scoped>
  .badge {
    width: 19px;
    height: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 2px;
    right: 2px;
    background: red;
    border-radius: 100%;
    color: #fff;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -.05em;
    font-family: 'Roboto Mono', monospace;
  }
</style>
