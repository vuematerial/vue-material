<template>
  <page-content page-title="Components - Onboarding">
    <docs-component>
      <div slot="description">
        <p>The onboarding offers a first and fast look for your page, with custom controls, automatized steps and swipe effects. Can be also used as a custom carousel.</p>
        <p>Can be themed used the following:</p>
        <ul class="md-body-4">
          <li><code>md-primary</code></li>
          <li><code>md-warn</code></li>
          <li><code>md-accent</code></li>
          <li><code>md-transparent</code></li>
        </ul>
      </div>

      <div slot="api">
        <api-table name="md-onboarding">
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
                <md-table-cell>md-auto</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Enable auto-slider. <br>Default: <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-infinite</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Enable infinite loop. <br>Default: <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-duration</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Set duration for <code>md-auto</code> in milliseconds. <br>Default: <code>5000</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-controls</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Enable prev/next controls. <br>Default: <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-swipeable</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Enable the swipe functionality. <br>Default: <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-swipe-distance</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Set the swipe distance needed to open/close the sidenav. <br>Default: <code>100</code></md-table-cell>
              </md-table-row>
            </md-table-body>

          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Basic, automatic, infinite, uncontrolled, swipeable">
          <div slot="demo">
            <md-boards :md-auto="true" :md-infinite="true" :md-duration="5000" :md-swipeable="true">
              <md-board id="slide1">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
              </md-board>

              <md-board id="slide2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
              </md-board>

              <md-board id="slide3">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
              </md-board>
            </md-boards>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-boards :md-auto=&quot;true&quot; :md-infinite=&quot;true&quot; :md-duration=&quot;5000&quot; :md-swipeable=&quot;true&quot;&gt;
                &lt;md-board id=&quot;slide1&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.&lt;/p&gt;
                &lt;/md-board&gt;

                &lt;md-board id=&quot;slide2&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.&lt;/p&gt;
                &lt;/md-board&gt;

                &lt;md-board id=&quot;slide3&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.&lt;/p&gt;
                &lt;/md-board&gt;
              &lt;/md-boards&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Themed, finite, controlled">
          <div slot="demo">
            <md-boards class="md-transparent" :md-controls="true" style="background-color: black">
              <md-board id="slide1" style="color: white">
                <p>Transparent themed, for background-imaged slides. Background color black added for demonstration purposes.</p>
              </md-board>

              <md-board id="slide2" style="color: white">
                <p>Transparent themed, for background-imaged slides. Background color black added for demonstration purposes.</p>
              </md-board>

              <md-board id="slide3" style="color: white">
                <p>Transparent themed, for background-imaged slides. Background color black added for demonstration purposes.</p>
              </md-board>
            </md-boards>

            <md-boards class="md-primary" :md-controls="true">
              <md-board id="slide1">
                <p>Primary themed</p>
              </md-board>

              <md-board id="slide2">
                <p>Primary themed</p>
              </md-board>
            </md-boards>

            <md-boards class="md-accent" :md-controls="true">
              <md-board id="slide1">
                <p>Accent themed</p>
              </md-board>

              <md-board id="slide2">
                <p>Accent themed</p>
              </md-board>

              <md-board id="slide3">
                <p>Accent themed</p>
              </md-board>
            </md-boards>

            <md-boards class="md-warn" :md-controls="true">
              <md-board id="slide1">
                <p>Warn themed</p>
              </md-board>

              <md-board id="slide2">
                <p>Warn themed</p>
              </md-board>

              <md-board id="slide3">
                <p>Warn themed</p>
              </md-board>

              <md-board id="slide4">
                <p>Warn themed</p>
              </md-board>
            </md-boards>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-boards class=&quot;md-transparent&quot; :md-controls=&quot;true&quot;&gt;
                &lt;md-board id=&quot;slide1&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.&lt;/p&gt;
                &lt;/md-board&gt;
              &lt;/md-boards&gt;

              &lt;md-boards class=&quot;md-primary&quot; :md-controls=&quot;true&quot;&gt;
                &lt;md-board id=&quot;slide1&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.&lt;/p&gt;
                &lt;/md-board&gt;
              &lt;/md-boards&gt;

              &lt;md-boards class=&quot;md-accent&quot; :md-controls=&quot;true&quot;&gt;
                &lt;md-board id=&quot;slide1&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.&lt;/p&gt;
                &lt;/md-board&gt;
              &lt;/md-boards&gt;

              &lt;md-boards class=&quot;md-warn&quot; :md-controls=&quot;true&quot;&gt;
                &lt;md-board id=&quot;slide1&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.&lt;/p&gt;
                &lt;/md-board&gt;
              &lt;/md-boards&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>
