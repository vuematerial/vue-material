<template>
  <md-content md-tag="section" md-theme="default" class="home-repositories">
    <h2 class="home-repositories-title md-display-2">Ecosystem</h2>

    <div class="home-repo-list md-layout-column">
      <div class="home-repo md-layout-row md-layout-column-xsmall" v-for="(item, index) in 2" :key="index" :class="{ reverse: (index + 1) % 2 === 0 }">
        <div class="home-repo-content md-layout-column md-flex-55 md-flex-xsmall-100 md-align-start-start">
          <h3 class="home-repo-title md-headline">Official Boilerplate</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam qui enim harum excepturi nemo itaque quidem dolore unde asperiores, recusandae reiciendis perferendis laboriosam cum obcaecati quos assumenda libero labore! Expedita.</p>
          <md-button class="md-primary md-raised">View project</md-button>
        </div>

        <img class="md-flex-45 md-flex-xsmall-100" src="https://placeimg.com/656/300/tech/grayscale">
      </div>
    </div>
  </md-content>
</template>

<script>
  export default {
    name: 'HomeRepositories'
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/components/MdLayout/mixins";

  .home-repositories {
    width: calc(100% + 32px);
    padding: 56px 16px;
    margin: 0 -16px -16px;
  }

  .home-repo-list,
  .home-repositories-title {
    max-width: 1312px;
    margin: 0 auto;
  }

  .home-repositories-title {
    margin-bottom: 24px;
    color: rgba(#000, .87);
  }

  .home-repo {
    margin-top: 48px;

    @include md-layout-xsmall {
      flex-direction: column-reverse;
    }

    &.reverse {
      flex-direction: row-reverse;

      @include md-layout-xsmall {
        flex-direction: column-reverse;
      }

      .home-repo-content {
        padding-right: 0;
        padding-left: 48px;

        @include md-layout-xsmall {
          padding: 0;
        }
      }
    }
  }

  .home-repo-content {
    padding-right: 48px;

    @include md-layout-xsmall {
      padding: 0;
    }
  }

  .home-repo-title {
    margin-top: 16px;
  }

  .md-button {
    margin: 24px 0 0;
  }
</style>
