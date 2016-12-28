<template>
  <page-content page-title="Components - Image Loader">
    <docs-component>
      <div slot="description">
        <p>Illustrations and photographs may load and transition in three phases by staggering opacity, exposure, and saturation levels.</p>
      </div>

      <div slot="api">
        <api-table name="md-image">
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
                <md-table-cell>md-src</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The image source. Accepts any image file extension.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div slot="demo">
            <md-button class="md-primary md-raised" @click="loadImage">Load Image</md-button>
            <md-button class="md-primary md-raised" @click="clearImage">Clear Image</md-button>

            <div>
              <md-image :md-src="src"></md-image>
            </div>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-button class=&quot;md-primary md-raised&quot; @click=&quot;loadImage&quot;&gt;Load Image&lt;/md-button&gt;
              &lt;md-button class=&quot;md-primary md-raised&quot; @click=&quot;clearImage&quot;&gt;Clear Image&lt;/md-button&gt;

              &lt;div&gt;
                &lt;md-image :md-src=&quot;src&quot;&gt;&lt;/md-image&gt;
              &lt;/div&gt;
            </code-block>

            <code-block lang="xml">
              export default {
                data: () => ({
                  src: null
                }),
                methods: {
                  loadImage() {
                    let options = [
                      'assets/joker-1.jpg',
                      'assets/joker-2.jpg',
                      'assets/joker-3.jpg',
                      'assets/card-image-1.jpg',
                      'assets/card-image-2.jpg'
                    ];

                    this.src = options[Math.floor(Math.random() * 5)];
                  },
                  clearImage() {
                    this.src = null;
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

<script>
  export default {
    data: () => ({
      src: null
    }),
    methods: {
      loadImage() {
        let options = [
          'assets/joker-1.jpg',
          'assets/joker-2.jpg',
          'assets/joker-3.jpg',
          'assets/card-image-1.jpg',
          'assets/card-image-2.jpg'
        ];

        this.src = options[Math.floor(Math.random() * 5)];
      },
      clearImage() {
        this.src = null;
      }
    }
  };
</script>
