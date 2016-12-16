<template>
  <page-content page-title="Components - Tabs">
    <docs-component>
      <div slot="description">
        <p>Tabs enable content organization at a high level, such as switching between views, data sets, or functional aspects of an app.</p>
        <p>The following classes can be applied to change the color palette:</p>
        <ul class="md-body-2">
          <li><code>md-accent</code></li>
          <li><code>md-warn</code></li>
          <li><code>md-transparent</code></li>
        </ul>
      </div>

      <div slot="api">
        <api-table name="md-tabs">
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
                <md-table-cell>md-fixed</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Make the tabs navigation fixed and elastic filling the whole space. Default <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-centered</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Align the tabs navigation to the center. Default <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-right</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Align the tabs navigation to the right. Default <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-dynamic-height</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Make the tab content to be resized based on the contents. Default <code>true</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-elevation</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Add a shadow on the navigation with an whiteframe. Default <code>0</code></md-table-cell>
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
                <md-table-cell>change</md-table-cell>
                <md-table-cell>Receive the tab index</md-table-cell>
                <md-table-cell>Triggered when a tab is activated.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table name="md-tab">
          <p>You should wrap the <code>&lt;md-tab&gt;</code> in a <code>&lt;md-tabs&gt;</code> as a direct parent.</p>
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
                <md-table-cell>id</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Unique id to each tab</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-label</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The tab text</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-icon</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Icon name on the <a href="https://material.io/icons/" target="_blank" rel="noopener">Material Icons</a> docs.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-active</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Activate the tab. Default <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-disabled</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Disable the tab and prevent his actions. Default <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-tooltip</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Add a tooltip on the tab header. Optional.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-tooltip-delay</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Delay of the tab header tooltip. Default: <code>0</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-tooltip-direction</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Direction of the tab header tooltip. Default: <code>bottom</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div slot="demo">
            <md-tabs :md-dynamic-height="false">
              <md-tab id="movies" md-label="Movies">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
              </md-tab>

              <md-tab id="music" md-label="Music">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
              </md-tab>

              <md-tab id="books" md-label="Books">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
              </md-tab>

              <md-tab id="pictures" md-label="Pictures" md-tooltip="This is the pictures tab!">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
              </md-tab>
            </md-tabs>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-tabs&gt;
                &lt;md-tab id=&quot;movies&quot; md-label=&quot;Movies&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.&lt;/p&gt;
                &lt;/md-tab&gt;

                &lt;md-tab id=&quot;music&quot; md-label=&quot;Music&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.&lt;/p&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.&lt;/p&gt;
                &lt;/md-tab&gt;

                &lt;md-tab id=&quot;books&quot; md-label=&quot;Books&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.&lt;/p&gt;
                &lt;/md-tab&gt;

                &lt;md-tab id=&quot;pictures&quot; md-label=&quot;Pictures&quot; md-tooltip=&quot;This is the pictures tab!&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.&lt;/p&gt;
                &lt;/md-tab&gt;
              &lt;/md-tabs&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Fixed">
          <div slot="demo">
            <md-tabs :md-dynamic-height="false" md-fixed class="md-accent">
              <md-tab id="movies" md-label="Movies">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
              </md-tab>

              <md-tab id="music" md-label="Music">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
              </md-tab>

              <md-tab id="books" md-label="Books">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
              </md-tab>

              <md-tab id="pictures" md-label="Pictures">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
              </md-tab>
            </md-tabs>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-tabs md-fixed&gt;
                &lt;md-tab id=&quot;movies&quot; md-label=&quot;Movies&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.&lt;/p&gt;
                &lt;/md-tab&gt;

                &lt;md-tab id=&quot;music&quot; md-label=&quot;Music&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.&lt;/p&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.&lt;/p&gt;
                &lt;/md-tab&gt;

                &lt;md-tab id=&quot;books&quot; md-label=&quot;Books&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.&lt;/p&gt;
                &lt;/md-tab&gt;

                &lt;md-tab id=&quot;pictures&quot; md-label=&quot;Pictures&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.&lt;/p&gt;
                &lt;/md-tab&gt;
              &lt;/md-tabs&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Centered with Text and Icon">
          <div slot="demo">
            <md-tabs :md-dynamic-height="false" md-centered class="md-warn">
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
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-tabs md-centered&gt;
                &lt;md-tab md-label=&quot;Movies&quot; md-icon=&quot;ondemand_video&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.&lt;/p&gt;
                &lt;/md-tab&gt;

                &lt;md-tab md-label=&quot;Music&quot; md-icon=&quot;music_note&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.&lt;/p&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.&lt;/p&gt;
                &lt;/md-tab&gt;

                &lt;md-tab md-label=&quot;Books&quot; md-icon=&quot;books&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.&lt;/p&gt;
                &lt;/md-tab&gt;

                &lt;md-tab md-label=&quot;Pictures&quot; md-icon=&quot;photo&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.&lt;/p&gt;
                &lt;/md-tab&gt;
              &lt;/md-tabs&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Aligned to the right with only icons">
          <div slot="demo">
            <md-tabs :md-dynamic-height="false" md-right class="md-transparent">
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
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-tabs md-right&gt;
                &lt;md-tab md-icon=&quot;phone&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.&lt;/p&gt;
                &lt;/md-tab&gt;

                &lt;md-tab md-icon=&quot;favorite&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.&lt;/p&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.&lt;/p&gt;
                &lt;/md-tab&gt;

                &lt;md-tab md-icon=&quot;near_me&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.&lt;/p&gt;
                &lt;/md-tab&gt;
              &lt;/md-tabs&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>
