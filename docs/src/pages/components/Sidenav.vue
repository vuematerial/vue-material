<template>
  <page-content page-title="Components - Sidenav">
    <docs-component>
      <div slot="description">
        <p>The sidenav spans the height of the screen, with everything behind it visible but darkened by a backdrop.</p>
      </div>

      <div slot="api">
        <api-table name="md-sidenav">
          <md-table slot="classes">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>md-left</md-table-cell>
                <md-table-cell>Display the sidenav on the left of parent</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-right</md-table-cell>
                <md-table-cell>Display the sidenav on the right of parent</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-fixed</md-table-cell>
                <md-table-cell>Apply position fixed</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>

          <md-table slot="events">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Value</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>open</md-table-cell>
                <md-table-cell>None</md-table-cell>
                <md-table-cell>Triggered when the sidenav starts to open.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>close</md-table-cell>
                <md-table-cell>None</md-table-cell>
                <md-table-cell>Triggered when the sidenav starts to close.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>

          <md-table slot="methods">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>open</md-table-cell>
                <md-table-cell>Open the sidenav.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>close</md-table-cell>
                <md-table-cell>Close the sidenav.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>toggle</md-table-cell>
                <md-table-cell>Toggle the sidenav.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div slot="demo">
            <div class="phone-viewport">
              <md-toolbar>
                <md-button class="md-icon-button" @click="toggleLeftSidenav">
                  <md-icon>menu</md-icon>
                </md-button>

                <h2 class="md-title">My App</h2>
              </md-toolbar>

              <div>
                <md-button class="md-raised md-accent" @click="toggleRightSidenav">Toggle right</md-button>
                <p>Open console to see the events</p>
              </div>

              <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
                <md-toolbar class="md-large">
                  <div class="md-toolbar-container">
                    <h3 class="md-title">Sidenav content</h3>
                  </div>
                </md-toolbar>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
              </md-sidenav>

              <md-sidenav class="md-right" ref="rightSidenav" @open="open('Right')" @close="close('Right')">
                <md-toolbar>
                  <div class="md-toolbar-container">
                    <h3 class="md-title">Sidenav content</h3>
                  </div>
                </md-toolbar>

                <md-button class="md-raised md-accent" @click="closeRightSidenav">Close</md-button>
              </md-sidenav>
            </div>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;div class=&quot;phone-viewport&quot;&gt;
                &lt;md-toolbar&gt;
                  &lt;md-button class=&quot;md-icon-button&quot; @click=&quot;toggleLeftSidenav&quot;&gt;
                    &lt;md-icon&gt;menu&lt;/md-icon&gt;
                  &lt;/md-button&gt;

                  &lt;h2 class=&quot;md-title&quot;&gt;My App&lt;/h2&gt;
                &lt;/md-toolbar&gt;

                &lt;div&gt;
                  &lt;md-button class=&quot;md-raised md-accent&quot; @click=&quot;toggleRightSidenav&quot;&gt;Toggle right&lt;/md-button&gt;
                  &lt;p&gt;Open console to see the events&lt;/p&gt;
                &lt;/div&gt;

                &lt;md-sidenav class=&quot;md-left&quot; ref=&quot;leftSidenav&quot; @open=&quot;open(&#039;Left&#039;)&quot; @close=&quot;close(&#039;Left&#039;)&quot;&gt;
                  &lt;md-toolbar class=&quot;md-large&quot;&gt;
                    &lt;div class=&quot;md-toolbar-container&quot;&gt;
                      &lt;h3 class=&quot;md-title&quot;&gt;Sidenav content&lt;/h3&gt;
                    &lt;/div&gt;
                  &lt;/md-toolbar&gt;

                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!&lt;/p&gt;
                &lt;/md-sidenav&gt;

                &lt;md-sidenav class=&quot;md-right&quot; ref=&quot;rightSidenav&quot; @open=&quot;open(&#039;Right&#039;)&quot; @close=&quot;close(&#039;Right&#039;)&quot;&gt;
                  &lt;md-toolbar&gt;
                    &lt;div class=&quot;md-toolbar-container&quot;&gt;
                      &lt;h3 class=&quot;md-title&quot;&gt;Sidenav content&lt;/h3&gt;
                    &lt;/div&gt;
                  &lt;/md-toolbar&gt;

                  &lt;md-button class=&quot;md-raised md-accent&quot; @click=&quot;closeRightSidenav&quot;&gt;Close&lt;/md-button&gt;
                &lt;/md-sidenav&gt;
              &lt;/div&gt;
            </code-block>

            <code-block lang="javascript">
              export default {
                methods: {
                  toggleLeftSidenav() {
                    this.$refs.leftSidenav.toggle();
                  },
                  toggleRightSidenav() {
                    this.$refs.rightSidenav.toggle();
                  },
                  closeRightSidenav() {
                    this.$refs.rightSidenav.close();
                  },
                  open(ref) {
                    console.log('Opened: ' + ref);
                  },
                  close(ref) {
                    console.log('Closed: ' + ref);
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
  .phone-viewport p {
    padding: 8px 16px;
  }
</style>

<script>
  export default {
    methods: {
      toggleLeftSidenav() {
        this.$refs.leftSidenav.toggle();
      },
      toggleRightSidenav() {
        this.$refs.rightSidenav.toggle();
      },
      closeRightSidenav() {
        this.$refs.rightSidenav.close();
      },
      open(ref) {
        console.log('Opened: ' + ref);
      },
      close(ref) {
        console.log('Closed: ' + ref);
      }
    }
  };
</script>
