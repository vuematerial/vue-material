<template>
  <md-content md-tag="section" md-theme="black" class="home-premium" id="premium">
    <div class="page-wrapper">

      <div class="md-layout md-gutter md-alignment-top-left">
        <div class="md-layout-item md-small-size-100">
          <md-card class="md-accent">


            <md-card-header>
              <md-card-header-text>
                <div class="md-title">
                  <md-icon class="md-size-1x">system_update_alt</md-icon>
                  Installation
                </div>
              </md-card-header-text>
            </md-card-header>

            <md-card-content>
              You can install Vue Material through NPM or Yarn:
              <code-example label="Shell" lang="shell">
                $ npm install vue-material --save
                $ yarn add vue-material
              </code-example>
              <p>It's optional, but to have the best experience possible, use Roboto and Google Icons from Google CDN:</p>
              <code-example label="HTML" lang="html">
                &lt;link rel=&quot;stylesheet&quot; href=&quot;//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons&quot;&gt;
              </code-example>
              <hr />
            </md-card-content>

            <md-card-actions md-alignment="space-between">
              <md-button class="md-primary" to="/getting-started">Read installation</md-button>
            </md-card-actions>
          </md-card>
        </div>

        <div class="md-layout-item md-small-size-100">
          <md-card class="md-accent">
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">
                  <md-icon class="md-size-1x">pan_tool</md-icon>
                  Usage
                </div>
              </md-card-header-text>
            </md-card-header>

            <md-card-content>
              To use Vue Material in your application, you can import only the components
              that you're really using.
              <code-example>
                import Vue from 'vue'
                import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
                import 'vue-material/dist/vue-material.min.css'
                import 'vue-material/dist/theme/default.css'

                Vue.use(MdButton)
                Vue.use(MdContent)
                Vue.use(MdTabs)
              </code-example>
            <hr />
            </md-card-content>

            <md-card-actions md-alignment="space-between">
              <md-button class="md-primary" to="/getting-started">Explore the docs</md-button>
            </md-card-actions>
          </md-card>
        </div>

        <div class="md-layout-item md-small-size-100">
          <md-card class="md-accent">


            <md-card-header>
              <md-card-header-text>
                <div class="md-title">
                  <md-icon class="md-size-1x">build</md-icon>
                  Premium themes
                </div>
              </md-card-header-text>
            </md-card-header>

            <md-card-content>
              Take Vue Material to the next level with premium themes from Creative Tim.
              <a href="/premium-themes">
                <img src="/assets/premium/premium-themes.png" class="themes" alt="Vue Material Dashboard PRO">
              </a>
              <hr />

            </md-card-content>


            <md-card-actions md-alignment="space-between">
              <md-button class="md-primary" to="/premium-themes">Browse Themes</md-button>
            </md-card-actions>
          </md-card>
        </div>
      </div>
    </div>
  </md-content>
</template>

<script>
  export default {
    name: 'HomePremium',
    methods: {
      openLink (link) {
        window.open(link, '_blank')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/components/MdLayout/mixins";

  @import "~vue-material/theme/engine";

  @include md-register-theme("premium", (
    primary: #448aff,
    accent: #fff
  ));

  @import "~vue-material/components/MdButton/theme";
  @import "~vue-material/components/MdCard/theme";
  @import "~vue-material/components/MdChips/theme";
  @import "~vue-material/components/MdContent/theme";

  .home-premium {
    width: calc(100% + 32px);

    .md-layout-item {
      @include md-layout-small {
        margin-top: 16px;
      }
    }

    .md-card-media {
      max-height: 250px;
    }

    .themes {
      margin-top: 30px;
    }
  }

  .md-card{
    background: #fff;
    .md-title,
    .md-icon,
    .md-card-content{
      color: #202020;
    }
  }

  .md-chip {
    height: 26px;
    font-size: 12px;
    line-height: 26px;

    /deep/ .md-ripple {
      padding: 0 10px !important;
    }
  }

  .md-card-header+.md-card-content{
    padding-bottom: 0;
  }

  .code-block{
    border-radius: 4px;
  }

  hr{
    margin-top: 25px;
    border-color: #e2e2e2;
    border-style: solid;
    border-width: 1px;
  }


  @media(min-width:961px) and (max-width: 1199px){
    .md-small-size-100{
      width: 33%;
      .md-card{
        height: 530px;
      }
    }

    >>>.code-block code{
      font-size: 12px;
    }

    hr{
      position: absolute;
      width: 100%;
      bottom: 10%;
      left: 0;
    }
    .md-card-actions{
      position: absolute;
      width: 100%;
      bottom: 1%;
    }

    .code-example{
      margin: 15px 0 !important;
    }
  }

  @media(min-width:1200px){
    .md-small-size-100{
      width: 33%;
    }
    .md-card{
      height: 560px !important;
      hr{
        position: absolute;
        width: 100%;
        bottom: 10%;
        left: 0;
      }
      .md-card-actions{
        position: absolute;
        width: 100%;
        bottom: 1%;
      }
    }
  }
</style>
