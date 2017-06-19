<template>
  <div class="example-box">
    <md-card class="example-box-card">
      <md-toolbar md-theme="white" class="md-dense">
        <h3 class="md-title">{{ cardTitle }}</h3>
      </md-toolbar>

      <md-card-area>
        <md-tabs md-right :md-dynamic-height="false" class="md-transparent example-tabs">
          <md-tab class="example-content" md-label="Demo" md-active>
            <slot name="demo"></slot>
          </md-tab>

          <md-tab class="code-content" md-label="Code">
            <slot name="code"></slot>
          </md-tab>
        </md-tabs>
      </md-card-area>

      <!-- <button type="button" class="md-codepen" @click.native="editOnCodepen">
        <img src="assets/codepen.png" alt="Edit on Codepen">
        <md-tooltip md-direction="left">Edit on codepen</md-tooltip>
      </button> -->
    </md-card>

    <!-- <form action="http://codepen.io/pen/define" method="POST" target="_blank" v-if="codeBlocks.length" ref="form">
      <input type="hidden" name="data" :value="codeString">
    </form>

    <pre ref="initialJs">
Vue.use(VueMaterial)

Vue.material.theme.register('default', {
  primary: 'blue',
  accent: 'pink'
})

var App = new Vue({
  el: '#app'
})
    </pre>

    <pre ref="initialHtml">
&lt;div id=&quot;app&quot;&gt;
  ### TEMPLATE ###
&lt;/div&gt;
    </pre> -->
  </div>
</template>

<style lang="scss">
  .example-box .code-content {
    .code-block {
      margin: -16px;

      + .code-block {
        margin-top: 40px;
      }
    }
  }

  .md-tooltip.md-codepen-tooltip {
    margin-left: -4px;
  }
</style>

<style lang="scss" scoped>
  .example-box {
    margin-bottom: 16px;
  }

  .md-title {
    position: relative;
    z-index: 3;
  }

  .example-tabs {
    margin-top: -48px;

    @media (max-width: 480px) {
      margin-top: -1px;
      background-color: #fff;
    }
  }

  .example-box-card {
    position: relative;
    overflow: hidden;

    &:hover .md-codepen {
      opacity: .54;
      transform: translate3D(0, 0, 0);
      transition: .4s cubic-bezier(.25, .8, .25, 1);
    }
  }

  .md-codepen {
    margin: 0;
    padding: 4px;
    cursor: pointer;
    position: absolute;
    right: 4px;
    bottom: 4px;
    border: none;
    background: none;
    opacity: .26;
    transform: translate3D(120%, 0, 0);
    transition: .3s cubic-bezier(.55, 0, .55, .2);

    img {
      width: 32px;
    }
  }

  pre {
    display: none;
  }
</style>

<script>
  export default {
    props: {
      cardTitle: String
    },
    data: () => ({
      codeBlocks: [],
      codeString: ''
    }),
    methods: {
      editOnCodepen() {
        let data = {
          title: 'Vue Material - ' + this.cardTitle,
          private: false,
          head: '<meta name="viewport" content="width=device-width">',
          html_pre_processor: 'none',
          js_pre_processor: 'none',
          js: this.$refs.initialJs.innerHTML,
          css_pre_processor: 'scss',
          css_starter: 'neither',
          css_prefix_free: false,
          css_external: [
            'http://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic',
            'http://fonts.googleapis.com/icon?family=Material+Icons',
            'https://cdn.rawgit.com/marcosmoura/vue-material/master/dist/vue-material.css'
          ].join(';'),
          js_external: [
            'https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.3/vue.min.js',
            'https://cdn.rawgit.com/marcosmoura/vue-material/master/dist/vue-material.js'
          ].join(';')
        };

        this.codeBlocks.forEach((block) => {
          if (block.lang === 'xml') {
            let initialHtml = this.$refs.initialHtml.innerHTML;

            data.html = initialHtml.replace('### TEMPLATE ###', block.code);
          } else if (block.lang === 'javascript') {
            data.js = data.js += block.code;
          } else {
            data.css = block.code;
          }
        });

        this.codeString = JSON.stringify(data).replace(/"/g, '&quot;').replace(/'/g, '&apos;');

        this.$nextTick(() => {
          console.log(this.$refs.initialJs);
          this.$refs.form.submit();
        });
      }
    }
  };
</script>
