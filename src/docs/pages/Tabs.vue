<template>
  <div class="page-content">
    <md-tabs class="page-tabs">
      <md-tab md-label="Examples">
        <md-whiteframe class="cell-phone">
          <md-toolbar v-md-theme="'grey'">
            <h2 class="md-title">Default</h2>
          </md-toolbar>

          <section>
            <md-tabs>
              <md-tab md-label="Movies">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
              </md-tab>

              <md-tab md-label="Music">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
              </md-tab>

              <md-tab md-label="Books">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
              </md-tab>

              <md-tab md-label="Pictures">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
              </md-tab>
            </md-tabs>
          </section>
        </md-whiteframe>

        <md-whiteframe class="cell-phone">
          <md-toolbar v-md-theme="'grey'">
            <h2 class="md-title">Fixed</h2>
          </md-toolbar>

          <section>
            <md-tabs md-fixed class="md-accent">
              <md-tab md-label="Movies">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
              </md-tab>

              <md-tab md-label="Music">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
              </md-tab>

              <md-tab md-label="Books">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
              </md-tab>

              <md-tab md-label="Pictures">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
              </md-tab>
            </md-tabs>
          </section>
        </md-whiteframe>

        <md-whiteframe class="cell-phone">
          <md-toolbar v-md-theme="'grey'">
            <h2 class="md-title">With icons and text</h2>
          </md-toolbar>

          <section v-md-theme="'teal'">
            <md-tabs md-fixed>
              <md-tab md-label="Movies" md-icon="ondemand_video">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
              </md-tab>

              <md-tab md-label="Music" md-icon="music_note">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
              </md-tab>

              <md-tab md-label="Books" md-icon="books">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
              </md-tab>

              <md-tab md-label="Pictures" md-icon="photo">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
              </md-tab>
            </md-tabs>
          </section>
        </md-whiteframe>

        <md-whiteframe class="cell-phone">
          <md-toolbar v-md-theme="'grey'">
            <h2 class="md-title">Centered with only icon</h2>
          </md-toolbar>

          <section v-md-theme="'green'">
            <md-tabs md-centered>
              <md-tab md-icon="phone">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
              </md-tab>

              <md-tab md-icon="favorite">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
              </md-tab>

              <md-tab md-icon="near_me">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
              </md-tab>
            </md-tabs>
          </section>
        </md-whiteframe>
      </md-tab>

      <md-tab md-label="Code">
        <h2>Code</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, at ullam. Est expedita doloremque facilis quae, debitis corporis blanditiis impedit laborum vero sit in magnam nobis, velit quia, asperiores minima.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, at ullam. Est expedita doloremque facilis quae, debitis corporis blanditiis impedit laborum vero sit in magnam nobis, velit quia, asperiores minima.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, at ullam. Est expedita doloremque facilis quae, debitis corporis blanditiis impedit laborum vero sit in magnam nobis, velit quia, asperiores minima.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, at ullam. Est expedita doloremque facilis quae, debitis corporis blanditiis impedit laborum vero sit in magnam nobis, velit quia, asperiores minima.</p>
      </md-tab>

      <md-tab md-label="API">
        <h2>API</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, at ullam. Est expedita doloremque facilis quae, debitis corporis blanditiis impedit laborum vero sit in magnam nobis, velit quia, asperiores minima.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, at ullam. Est expedita doloremque facilis quae, debitis corporis blanditiis impedit laborum vero sit in magnam nobis, velit quia, asperiores minima.</p>
      </md-tab>
    </md-tabs>

    <!-- <md-whiteframe md-elevation="2">
      <md-toolbar class="md-dense">
        <md-button>Examples</md-button>
        <md-button>Code</md-button>
        <md-button>API</md-button>
      </md-toolbar>
    </md-whiteframe>

    <div class="main-content">
      <md-whiteframe class="cell-phone">
        <md-toolbar v-md-theme="'grey'">
          <h2 class="md-title">Default</h2>
        </md-toolbar>

        <section>
          <md-tabs>
            <md-tab md-label="Movies">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
            </md-tab>

            <md-tab md-label="Music">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
            </md-tab>

            <md-tab md-label="Books">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
            </md-tab>

            <md-tab md-label="Pictures">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
            </md-tab>
          </md-tabs>
        </section>
      </md-whiteframe>

      <md-whiteframe class="cell-phone">
        <md-toolbar v-md-theme="'grey'">
          <h2 class="md-title">Fixed</h2>
        </md-toolbar>

        <section>
          <md-tabs md-fixed class="md-accent">
            <md-tab md-label="Movies">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
            </md-tab>

            <md-tab md-label="Music">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
            </md-tab>

            <md-tab md-label="Books">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
            </md-tab>

            <md-tab md-label="Pictures">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
            </md-tab>
          </md-tabs>
        </section>
      </md-whiteframe>

      <md-whiteframe class="cell-phone">
        <md-toolbar v-md-theme="'grey'">
          <h2 class="md-title">With icons and text</h2>
        </md-toolbar>

        <section>
          <md-tabs md-fixed v-md-theme="'teal'">
            <md-tab md-label="Movies" md-icon="ondemand_video">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
            </md-tab>

            <md-tab md-label="Music" md-icon="music_note">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
            </md-tab>

            <md-tab md-label="Books" md-icon="books">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
            </md-tab>

            <md-tab md-label="Pictures" md-icon="photo">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
            </md-tab>
          </md-tabs>
        </section>
      </md-whiteframe>

      <md-whiteframe class="cell-phone">
        <md-toolbar v-md-theme="'grey'">
          <h2 class="md-title">Centered with only icon</h2>
        </md-toolbar>

        <section>
          <md-tabs md-centered v-md-theme="'green'">
            <md-tab md-icon="phone">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
            </md-tab>

            <md-tab md-icon="favorite">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
            </md-tab>

            <md-tab md-icon="near_me">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
            </md-tab>
          </md-tabs>
        </section>
      </md-whiteframe>
    </div> -->
  </div>
</template>

<style lang="scss">
  .page-tabs {
    flex: 1;

    > .md-tabs-navigation {
      padding-left: 52px;
    }

    > .md-tabs-content {
      overflow-y: auto;
    }

    .cell-phone {
      width: 100%;
      height: 732px;
      max-width: 412px;
      margin-right: 16px;
      display: inline-block;
      position: relative;
      overflow: hidden;
      border: none;
      background-color: #fafafa;
    }

    .md-whiteframe-1dp {
      margin-bottom: 16px;
    }
  }
</style>

<script>
  export default {
    mounted() {
      this.$root.pageTitle = 'Tabs';
    }
  };
</script>
