<template>
  <page-content page-title="Components - Spinner">
    <docs-component>
      <div slot="description">
        <p>Progress and activity indicators are visual indications of an app loading content.</p>
        <p>The following classes can be applied to change the color palette:</p>
        <ul class="md-body-2">
          <li><code>md-accent</code></li>
          <li><code>md-warn</code></li>
        </ul>
      </div>

      <div slot="api">
        <api-table name="md-spinner">
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
                <md-table-cell>md-size</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>The spinner size. Default <code>50</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-stroke</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>The line width. Default <code>3.5</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-indeterminate</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Enable the indeterminate state. Default <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-progress</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Define the current progress of the spinner. Default <code>0</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Determinate">
          <div class="spinner-demo" slot="demo">
            <md-button class="md-primary md-raised" @click.native="restartProgress">Restart</md-button>
            <md-spinner :md-progress="progress" v-if="transition"></md-spinner>
            <md-spinner :md-progress="progress" v-if="transition" class="md-accent"></md-spinner>
            <md-spinner :md-progress="progress" v-if="transition" class="md-warn"></md-spinner>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-spinner :md-progress=&quot;progress&quot;&gt;&lt;/md-spinner&gt;
              &lt;md-spinner :md-progress=&quot;progress&quot; class=&quot;md-accent&quot;&gt;&lt;/md-spinner&gt;
              &lt;md-spinner :md-progress=&quot;progress&quot; class=&quot;md-warn&quot;&gt;&lt;/md-spinner&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Indeterminate">
          <div class="spinner-demo" slot="demo">
            <md-spinner md-indeterminate></md-spinner>
            <md-spinner md-indeterminate class="md-accent"></md-spinner>
            <md-spinner md-indeterminate class="md-warn"></md-spinner>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-spinner md-indeterminate&gt;&lt;/md-spinner&gt;
              &lt;md-spinner md-indeterminate class=&quot;md-accent&quot;&gt;&lt;/md-spinner&gt;
              &lt;md-spinner md-indeterminate class=&quot;md-warn&quot;&gt;&lt;/md-spinner&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Sizes">
          <div class="spinner-demo" slot="demo">
            <md-spinner :md-size="20" md-indeterminate class="md-accent"></md-spinner>
            <md-spinner :md-size="60" md-indeterminate class="md-warn"></md-spinner>
            <md-spinner :md-size="150" md-indeterminate></md-spinner>

            <md-spinner :md-size="20" :md-stroke="2.5" md-indeterminate class="md-accent"></md-spinner>
            <md-spinner :md-size="60" :md-stroke="1.5" md-indeterminate class="md-warn"></md-spinner>
            <md-spinner :md-size="150" :md-stroke="1" md-indeterminate></md-spinner>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-spinner :md-size=&quot;20&quot; md-indeterminate class=&quot;md-accent&quot;&gt;&lt;/md-spinner&gt;
              &lt;md-spinner :md-size=&quot;60&quot; md-indeterminate class=&quot;md-warn&quot;&gt;&lt;/md-spinner&gt;
              &lt;md-spinner :md-size=&quot;150&quot; md-indeterminate&gt;&lt;/md-spinner&gt;

              &lt;md-spinner :md-size=&quot;20&quot; :md-stroke=&quot;2&quot; md-indeterminate class=&quot;md-accent&quot;&gt;&lt;/md-spinner&gt;
              &lt;md-spinner :md-size=&quot;60&quot; :md-stroke=&quot;1.5&quot; md-indeterminate class=&quot;md-warn&quot;&gt;&lt;/md-spinner&gt;
              &lt;md-spinner :md-size=&quot;150&quot; :md-stroke=&quot;1&quot; md-indeterminate&gt;&lt;/md-spinner&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Complete Example">
          <div slot="demo">
            <md-theme class="complete-example" md-name="orange">
              <md-button class="md-fab" @click.native="restartProgress" :class="{ 'md-primary': done }">
                <md-icon v-if="!done">cloud_upload</md-icon>
                <md-icon v-if="done">done</md-icon>
              </md-button>

              <md-spinner :md-size="74" :md-stroke="2.2" :md-progress="progress" v-if="transition && progress < 115"></md-spinner>
            </md-theme>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-theme class=&quot;complete-example&quot; md-name=&quot;orange&quot;&gt;
                &lt;md-button class=&quot;md-fab&quot; @click.native=&quot;restartProgress&quot; :class=&quot;{ &#039;md-primary&#039;: done }&quot;&gt;
                  &lt;md-icon v-if=&quot;!done&quot;&gt;cloud_upload&lt;/md-icon&gt;
                  &lt;md-icon v-if=&quot;done&quot;&gt;done&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-spinner :md-size=&quot;74&quot; :md-stroke=&quot;2.2&quot; :md-progress=&quot;progress&quot; v-if=&quot;transition &amp;&amp; progress &lt; 115&quot;&gt;&lt;/md-spinner&gt;
              &lt;/md-theme&gt;
            </code-block>

            <code-block lang="sass">
              .complete-example {
                width: 56px;
                height: 56px;
                position: relative;

                .md-fab {
                  margin: 0;
                }

                .md-spinner {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                }
              }
            </code-block>

            <code-block lang="javascript">
              export default {
                data: () => ({
                  progress: 0,
                  progressInterval: null,
                  done: false,
                  transition: true
                }),
                methods: {
                  startProgress() {
                    this.progressInterval = window.setInterval(() => {
                      this.progress += 3;

                      if (this.progress > 115) {
                        this.done = true;
                        window.clearInterval(this.progressInterval);
                        window.setTimeout(() => {
                          this.done = false;
                        }, 3000);
                      }
                    }, 100);
                  },
                  restartProgress() {
                    this.progress = 0;
                    this.transition = false;
                    this.done = false;

                    window.clearInterval(this.progressInterval);
                    window.setTimeout(() => {
                      this.transition = true;
                      this.startProgress();
                    }, 600);
                  }
                }
              };
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="sass" scoped>
  .spinner-demo {
    min-height: 55px;
  }

  .complete-example {
    width: 56px;
    height: 56px;
    position: relative;

    .md-fab {
      margin: 0;
    }

    .md-spinner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>

<script>
  export default {
    data: () => ({
      progress: 0,
      progressInterval: null,
      done: false,
      transition: true
    }),
    methods: {
      startProgress() {
        this.progressInterval = window.setInterval(() => {
          this.progress += 3;

          if (this.progress > 115) {
            this.done = true;
            window.clearInterval(this.progressInterval);
            window.setTimeout(() => {
              this.done = false;
            }, 3000);
          }
        }, 100);
      },
      restartProgress() {
        this.progress = 0;
        this.transition = false;
        this.done = false;

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
