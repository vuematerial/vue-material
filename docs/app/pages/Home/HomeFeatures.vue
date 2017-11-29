<template>
  <section class="home-features md-layout md-gutter md-layout-wrap">
    <div class="home-feature md-layout-item md-small-size-100">
      <home-icon-square />
      <h2 class="md-title">{{ $t('pages.home.material') }}</h2>
      <p>{{ $t('pages.home.materialContent') }}</p>
    </div>

    <div class="home-feature md-layout-item md-small-size-100">
      <home-icon-devices />
      <h2 class="md-title">{{ $t('pages.home.compatible') }}</h2>
      <p>{{ $t('pages.home.compatibleContent') }}</p>
    </div>

    <div class="home-feature md-layout-item md-small-size-100">
      <home-icon-circle />
      <h2 class="md-title">{{ $t('pages.home.featured') }}</h2>
      <p>{{ $t('pages.home.featuredContent') }}</p>
    </div>
  </section>
</template>

<script>
  import HomeIconSquare from './icons/HomeIconSquare'
  import HomeIconCircle from './icons/HomeIconCircle'
  import HomeIconDevices from './icons/HomeIconDevices'

  export default {
    name: 'HomeFeatures',
    components: {
      HomeIconSquare,
      HomeIconCircle,
      HomeIconDevices
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/components/MdLayout/mixins";

  .home-features {
    margin-top: 120px;
    padding-bottom: 60px;
    flex: none;

    @include md-layout-xsmall {
      margin-top: 60px;
    }
  }

  .home-feature {
    margin-bottom: 16px;

    @include md-layout-xsmall {
      text-align: center;
    }

    h2 {
      font-size: 22px;
      font-weight: 500;
    }
  }
</style>
