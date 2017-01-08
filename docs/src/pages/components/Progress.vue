<template>
  <page-content page-title="Components - Progress">
    <docs-component>
      <div slot="description">
        <p>A linear progress indicator should always fill from 0% to 100% and never decrease in value. It should be represented by bars on the edge of a header or sheet that appear and disappear.</p>
        <p>The following classes can be applied to change the color palette:</p>
        <ul class="md-body-2">
          <li><code>md-accent</code></li>
          <li><code>md-warn</code></li>
        </ul>
      </div>

      <div slot="api">
        <api-table name="md-progress">
          <md-table slot="properties">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Type</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>md-indeterminate</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Enable the indeterminate state. Default <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-progress</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Define the current progress of the progress. Default <code>0</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Determinate">
          <div class="progress-demo" slot="demo">
            <div class="progress-area">
              <md-progress :md-progress="progress" v-if="transition"></md-progress>
              <md-progress class="md-accent" :md-progress="progress" v-if="transition"></md-progress>
              <md-progress class="md-warn" :md-progress="progress" v-if="transition"></md-progress>
            </div>

            <md-button class="md-primary md-raised" @click.native="restartProgress">Restart</md-button>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-progress :md-progress=&quot;progress&quot;&gt;&lt;/md-progress&gt;
              &lt;md-progress class=&quot;md-accent&quot; :md-progress=&quot;progress&quot;&gt;&lt;/md-progress&gt;
              &lt;md-progress class=&quot;md-warn&quot; :md-progress=&quot;progress&quot;&gt;&lt;/md-progress&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Indeterminate">
          <div class="progress-demo" slot="demo">
            <div class="progress-area">
              <md-progress md-indeterminate v-if="transition"></md-progress>
              <md-progress class="md-accent" md-indeterminate v-if="transition"></md-progress>
              <md-progress class="md-warn" md-indeterminate v-if="transition"></md-progress>
            </div>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-progress md-indeterminate&gt;&lt;/md-progress&gt;
              &lt;md-progress class=&quot;md-accent&quot; md-indeterminate&gt;&lt;/md-progress&gt;
              &lt;md-progress class=&quot;md-warn&quot; md-indeterminate&gt;&lt;/md-progress&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Themes">
          <div class="progress-demo" slot="demo">
            <div class="progress-area">
              <md-progress md-theme="orange" md-indeterminate v-if="transition"></md-progress>
              <md-progress md-theme="green" :md-progress="progress" v-if="transition"></md-progress>
              <md-progress md-theme="purple" md-indeterminate v-if="transition"></md-progress>
            </div>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-progress md-theme=&quot;orange&quot; md-indeterminate&gt;&lt;/md-progress&gt;
              &lt;md-progress md-theme=&quot;green&quot; :md-progress=&quot;progress&quot;&gt;&lt;/md-progress&gt;
              &lt;md-progress md-theme=&quot;purple&quot; md-indeterminate&gt;&lt;/md-progress&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="sass" scoped>
  .progress-area {
    height: 44px;

    + .md-button {
      margin: 16px 0 0;
    }
  }

  .md-progress {
    margin-bottom: 16px;
  }
</style>

<script>
  export default {
    data: () => ({
      progress: 0,
      progressInterval: null,
      transition: true
    }),
    methods: {
      startProgress() {
        this.progressInterval = window.setInterval(() => {
          this.progress += 3;

          if (this.progress > 100) {
            window.clearInterval(this.progressInterval);
          }
        }, 100);
      },
      restartProgress() {
        this.progress = 0;
        this.transition = false;

        window.clearInterval(this.progressInterval);
        window.setTimeout(() => {
          this.transition = true;
          this.startProgress();
        }, 600);
      }
    },
    mounted() {
      this.startProgress();
    }
  };
</script>
