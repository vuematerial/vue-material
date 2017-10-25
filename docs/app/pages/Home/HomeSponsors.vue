<template>
  <section class="home-sponsors">
    <h2 class="home-sponsors-title md-display-1">Sponsors &amp; Backers</h2>

    <div class="home-sponsors-description">
      <p>Vue Material do not run under the umbrella of any company or something like that. Is an independent project created by <a href="https://www.github.com/marcosmoura" target="_blank">Marcos Moura</a> on spare time that became one of the most used UI Libraries for Vue.js. The development is active and we are working hard to release great things for you.</p>
      <p>If you think that this project helped you or your company in some way, you can consider become a backer/sponsor on Patreon:</p>
      <a href="https://www.patreon.com/bePatron?u=4832202" target="_blank" class="home-sponsors-patreon">
        <img src="/assets/sponsors/patreon.png">
      </a>
    </div>

    <div class="home-sponsors-backers">
      <h3 class="md-title">Sponsors</h3>

      <div class="home-sponsor-list md-layout-row">
        <a class="home-sponsor" href="">
          <md-ripple>
            <img src="/assets/sponsors/yatima.png">
          </md-ripple>
        </a>

        <a class="home-sponsor" href="https://www.browserstack.com/accounts/subscriptions" target="_blank">
          <md-ripple>
            <img src="/assets/sponsors/browserstack.png">
          </md-ripple>
        </a>
      </div>

      <h4 class="md-subheading">Backers</h4>

      <ul>
        <li>Ivo Benner</li>
        <li>Nathanael Björkgård</li>
        <li>Anthony Villena</li>
        <li>William Chong</li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HomeSponsors'
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/components/MdLayout/mixins";

  .home-sponsors {
    max-width: 1344px;
    margin: 0 auto;
    padding: 56px 16px;
  }

  .home-sponsors-title {
    margin-bottom: 56px;
    color: rgba(#fff, .87);
  }

  .home-sponsors-patreon {
    max-width: 180px;
    display: inline-block;
  }

  .home-sponsors-backers {
    margin-top: 36px;
  }

  .home-sponsor {
    + .home-sponsor {
      margin-left: 16px;
    }

    .md-ripple {
      padding: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border-radius: 2px;
    }

    img {
      max-width: 256px;
      max-height: 96px;
    }
  }

  .home-sponsor-list {
    margin-bottom: 36px;
  }
</style>
