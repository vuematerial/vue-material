<template>
  <div>
    <md-menu md-size="big" md-direction="top-start" :md-active.sync="toggleCard">
      <md-button class="md-icon-button" md-menu-trigger>
        <md-icon>contacts</md-icon>
      </md-button>

      <md-menu-content>
        <div class="author-card">
          <md-avatar class="md-large">
            <img src="/assets/examples/avatar.jpg" alt="Marcos Moura">
          </md-avatar>

          <div class="author-card-info">
            <span>Marcos Moura</span>
            <div class="author-card-links">
              <a href="https://linkedin.com/in/marcosvmmoura" target="_blank" rel="noopener">Linkedin</a>
              <a href="https://github.com/marcosmoura" target="_blank" rel="noopener">GitHub</a>
            </div>
          </div>
        </div>
      </md-menu-content>
    </md-menu>

    <md-menu>
      <md-button class="md-icon-button" md-menu-trigger>
        <md-icon>phone</md-icon>
      </md-button>

      <md-menu-content>
        <md-menu-item>
          <md-icon>phone</md-icon>
          <span>My Item 1</span>
        </md-menu-item>

        <md-menu-item>
          <md-icon>phone</md-icon>
          <span>My Item 2</span>
        </md-menu-item>

        <md-menu-item>
          <md-icon>phone</md-icon>
          <span>My Item 3</span>
        </md-menu-item>
      </md-menu-content>
    </md-menu>

    <md-menu md-size="big" md-direction="bottom-end">
      <md-button class="md-icon-button" md-menu-trigger>
        <md-icon>near_me</md-icon>
      </md-button>

      <md-menu-content>
        <md-menu-item>
          <span>Find on map</span>
          <md-icon>near_me</md-icon>
        </md-menu-item>

        <md-menu-item>
          <span>Call</span>
          <md-icon>phone</md-icon>
        </md-menu-item>
      </md-menu-content>
    </md-menu>

    <md-button class="md-primary md-raised toggle" @click="toggle">Toggle Contact</md-button>
  </div>
</template>

<script>
  export default {
    name: 'MultipleContent',
    data: () => ({
      toggleCard: false
    }),
    methods: {
      toggle () {
        this.toggleCard = !this.toggleCard
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-menu,
  .toggle {
    margin: 24px;
  }

  .author-card {
    padding: 8px 16px;
    display: flex;
    align-items: center;

    .md-avatar {
      margin-right: 16px;
    }

    .author-card-info {
      display: flex;
      flex-flow: column;
      flex: 1;
    }

    span {
      font-size: 16px;
    }

    .author-card-links {
      display: flex;

      a + a {
        margin-left: 8px;
      }
    }
  }
</style>

