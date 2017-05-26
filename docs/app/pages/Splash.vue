<template>
  <div class="splash-page">
    <header class="splash-header">
      <div class="splash-illustration">
        <div class="sheet">
          <md-ripple />
        </div>

        <div class="sheet">
          <md-ripple />
        </div>

        <div class="sheet">
          <md-ripple />
        </div>

        <div class="sheet">
          <md-ripple />
        </div>

        <div class="sheet">
          <md-ripple />
        </div>
      </div>

      <div class="splash-call">
        <h1 class="splash-name">Vue Material</h1>

        <p>Build beautiful apps with Material Design and Vue.js</p>

        <div class="splash-actions">
          <md-button class="md-button-spaced md-primary md-raised">Getting Started</md-button>
          <md-button class="md-button-spaced md-primary md-raised" @click.native="$router.push('/components')">Components</md-button>
        </div>
      </div>
    </header>

    <div class="splash-features">
      <div class="splash-feature">
        <h2>Material Design</h2>
        <p>Simple, lightweight and built exactly according to the Google Material Design specs.</p>
      </div>

      <div class="splash-feature">
        <h2>Compatible</h2>
        <p>Build well-designed apps that can fit on every screen with support to all modern Web Browsers.</p>
      </div>

      <div class="splash-feature">
        <h2>Full-featured</h2>
        <p>Complete with dynamic themes, components on demand and all with an ease-to-use API.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/components/MdElevation/index";

  .splash-page {
    height: 100vh;
    width: 100%;
    max-width: 1280px;
    margin: auto;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 15px;
    letter-spacing: normal;
    line-height: 1.7em;
  }

  .splash-header {
    margin-bottom: 64px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .splash-call {
    flex: 0 0 50%;
    font-size: 18px;
    line-height: 1.6em;
  }

  .splash-name {
    margin: 0;
    font-size: 56px;
    font-weight: 500;
    line-height: 1em;

    img {
      width: 128px;
      margin-bottom: 40px;
    }
  }

  .splash-actions {
    margin-top: 24px;
    display: flex;

    .md-button {
      margin-left: 0;
    }
  }

  .splash-illustration {
    width: 360px;
    height: 240px;
    margin-right: 40px;
    position: relative;
    @include md-elevation(8);

    .sheet {
      position: absolute;
      transition: $md-transition-stand .1s;
      will-change: transform, box-shadow, width, height;

      &:before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 6;
        background: rgba(#000, .12);
        opacity: 0;
        transition: $md-transition-stand;
        content: " ";
      }

      &:active:before {
        opacity: 1;
      }

      &:nth-child(1) {
        width: 100%;
        height: 100%;
        left: 0;
        z-index: 5;
        background: #448AFF;
        color: #1565C0;
        animation: slidein1 $md-transition-enter 1.2s forwards;
      }

      &:nth-child(2) {
        width: 50%;
        height: 100%;
        right: 0;
        z-index: 4;
        background: #B2FF59;
        color: #558B2F;
        animation: slidein2 $md-transition-enter 1.4s forwards;
      }

      &:nth-child(3) {
        width: 50%;
        height: 50%;
        bottom: 0;
        left: 50%;
        z-index: 3;
        background: #FF5252;
        color: #C62828;
        animation: slidein3 $md-transition-enter 1.6s forwards;
      }

      &:nth-child(4) {
        width: 25%;
        height: 50%;
        top: 50%;
        right: 0;
        z-index: 2;
        background: #7C4DFF;
        color: #4527A0;
        animation: slidein4 $md-transition-enter 1.8s forwards;
      }

      &:nth-child(5) {
        width: 25%;
        height: 25%;
        bottom: 0;
        left: 75%;
        background: #FAFAFA;
        color: #424242;
        z-index: 1;
      }
    }

    @keyframes slidein1 {
      0% {
        width: 100%;
      }

      100% {
        width: 50%;
      }
    }

    @keyframes slidein2 {
      0% {
        height: 100%;
      }

      100% {
        height: 50%;
      }
    }

    @keyframes slidein3 {
      0% {
        width: 50%;
      }

      100% {
        width: 25%;
      }
    }

    @keyframes slidein4 {
      0% {
        height: 50%;
      }

      100% {
        height: 25%;
      }
    }

    @keyframes slidein5 {
      0% {
        width: 25%;
      }

      100% {
        width: 12.5%;
      }
    }
  }

  .splash-features {
    display: flex;
  }

  .splash-feature {
    flex: 1;

    + .splash-feature {
      margin-left: 40px;
    }
  }
</style>

<script>
  export default {
    name: 'Splash'
  }
</script>
