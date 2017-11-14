<template>
  <div>
    <div class="phone-viewport">
      <md-bottom-bar class="md-accent" md-type="shift" @md-changed="checkNewPosts">
        <md-bottom-bar-item md-label="Home" md-icon="home"></md-bottom-bar-item>
        <md-bottom-bar-item md-label="Pages" md-icon="pages"></md-bottom-bar-item>

        <md-bottom-bar-item id="item-posts" @click="clearNewPosts">
          <md-icon class="md-bottom-bar-icon" md-src="/assets/icon-whatshot.svg"></md-icon>
          <span class="md-bottom-bar-label">Posts</span>
          <i class="badge" v-if="newPosts">{{ newPosts }}</i>
        </md-bottom-bar-item>

        <md-bottom-bar-item md-label="Favorites" md-icon="favorite"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BarCustomTemplate',
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
      checkNewPosts (activeItem) {
        if (activeItem !== 'item-posts' && !this.checkInterval) {
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
  @import "~vue-material/theme/engine";

  .phone-viewport {
    width: 322px;
    height: 200px;
    display: inline-flex;
    align-items: flex-end;
    overflow: hidden;
    border: 1px solid rgba(#000, .26);
    background: rgba(#000, .06);
  }

  .badge {
    width: 19px;
    height: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 6px;
    right: 6px;
    background: #fff;
    border-radius: 100%;
    color: #000;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -.05em;
    font-family: 'Roboto Mono', monospace;
  }
</style>
