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
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div slot="demo">
            <md-tabs>
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

                &lt;md-tab id=&quot;pictures&quot; md-label=&quot;Pictures&quot;&gt;
                  &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.&lt;/p&gt;
                &lt;/md-tab&gt;
              &lt;/md-tabs&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Fixed with only icons">
          <div slot="demo">
            <md-tabs md-fixed>
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
              &lt;md-tabs md-fixed&gt;
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

        <example-box card-title="Centered with Text and Icon">
          <div slot="demo">
            <md-tabs md-centered>
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

        <example-box card-title="Aligned to the right">
          <div slot="demo">
            <md-tabs md-right>
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
              &lt;md-tabs md-right&gt;
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

        <example-box card-title="Playground">
          <div slot="demo">
            <div class="playground">
              <md-subheader>Tabs Attributes</md-subheader>
              <md-checkbox id="fixed" v-model="playground.fixed">Fixed</md-checkbox>
              <md-checkbox id="centered" v-model="playground.centered">Centered</md-checkbox>
              <md-input-container>
                <label for="shadow">Shadow</label>
                <md-input type="number" id="shadow" v-model="playground.shadow" min="0" max="24"></md-input>
              </md-input-container>

              <md-subheader>Theme</md-subheader>
              <md-radio v-model="playground.theme" id="theme1" name="theme" md-value="default">Default</md-radio>
              <md-radio v-model="playground.theme" id="theme2" name="theme" md-value="green">Green</md-radio>
              <md-radio v-model="playground.theme" id="theme3" name="theme" md-value="cyan">Cyan</md-radio>
              <md-radio v-model="playground.theme" id="theme4" name="theme" md-value="brown">Brown</md-radio>

              <md-subheader>Colors</md-subheader>
              <md-radio v-model="playground.color" id="color1" name="color" md-value="0">Default</md-radio>
              <md-radio v-model="playground.color" id="color2" name="color" md-value="1">Accent</md-radio>
              <md-radio v-model="playground.color" id="color3" name="color" md-value="2">Warn</md-radio>
              <md-radio v-model="playground.color" id="color4" name="color" md-value="3">Transparent</md-radio>

              <md-subheader>Second Tab</md-subheader>
              <md-checkbox id="disabled" v-model="playground.tabs[1].disabled">Disabled</md-checkbox>
              <md-checkbox id="active" v-model="playground.tabs[1].active">Active</md-checkbox>
            </div>

            <md-tabs
              :class="{
                'md-accent': playground.color === '1',
                'md-warn': playground.color === '2',
                'md-transparent': playground.color === '3'
              }"
              :md-fixed="playground.fixed"
              :md-centered="playground.centered"
              :md-elevation="playground.shadow"
              v-md-theme="playground.theme">
              <md-tab v-for="(tab, index) in playground.tabs" :md-label="tab.label" :md-icon="tab.icon" :md-disabled="tab.disabled" :md-active="tab.active">
                <md-input-container>
                  <label :for="'label' + index">Label</label>
                  <md-input type="text" :id="'label' + index" v-model="tab.label"></md-input>
                </md-input-container>

                <md-input-container>
                  <label :for="'icon' + index">Icon</label>
                  <md-input type="text" :id="'icon' + index" v-model="tab.icon"></md-input>
                </md-input-container>
              </md-tab>
            </md-tabs>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;div class=&quot;playground&quot;&gt;
                &lt;md-subheader&gt;Tabs Attributes&lt;/md-subheader&gt;
                &lt;md-checkbox id=&quot;fixed&quot; v-model=&quot;playground.fixed&quot;&gt;Fixed&lt;/md-checkbox&gt;
                &lt;md-checkbox id=&quot;centered&quot; v-model=&quot;playground.centered&quot;&gt;Centered&lt;/md-checkbox&gt;
                &lt;md-input-container&gt;
                  &lt;label for=&quot;shadow&quot;&gt;Shadow&lt;/label&gt;
                  &lt;md-input type=&quot;number&quot; id=&quot;shadow&quot; v-model=&quot;playground.shadow&quot; min=&quot;0&quot; max=&quot;24&quot;&gt;&lt;/md-input&gt;
                &lt;/md-input-container&gt;

                &lt;md-subheader&gt;Theme&lt;/md-subheader&gt;
                &lt;md-radio v-model=&quot;playground.theme&quot; id=&quot;theme1&quot; name=&quot;theme&quot; md-value=&quot;default&quot;&gt;Default&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;playground.theme&quot; id=&quot;theme2&quot; name=&quot;theme&quot; md-value=&quot;green&quot;&gt;Green&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;playground.theme&quot; id=&quot;theme3&quot; name=&quot;theme&quot; md-value=&quot;cyan&quot;&gt;Cyan&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;playground.theme&quot; id=&quot;theme4&quot; name=&quot;theme&quot; md-value=&quot;brown&quot;&gt;Brown&lt;/md-radio&gt;

                &lt;md-subheader&gt;Colors&lt;/md-subheader&gt;
                &lt;md-radio v-model=&quot;playground.color&quot; id=&quot;color1&quot; name=&quot;color&quot; md-value=&quot;0&quot;&gt;Default&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;playground.color&quot; id=&quot;color2&quot; name=&quot;color&quot; md-value=&quot;1&quot;&gt;Accent&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;playground.color&quot; id=&quot;color3&quot; name=&quot;color&quot; md-value=&quot;2&quot;&gt;Warn&lt;/md-radio&gt;
                &lt;md-radio v-model=&quot;playground.color&quot; id=&quot;color4&quot; name=&quot;color&quot; md-value=&quot;3&quot;&gt;Transparent&lt;/md-radio&gt;

                &lt;md-subheader&gt;Second Tab&lt;/md-subheader&gt;
                &lt;md-checkbox id=&quot;disabled&quot; v-model=&quot;playground.tabs[1].disabled&quot;&gt;Disabled&lt;/md-checkbox&gt;
                &lt;md-checkbox id=&quot;active&quot; v-model=&quot;playground.tabs[1].active&quot;&gt;Active&lt;/md-checkbox&gt;
              &lt;/div&gt;

              &lt;md-tabs
                :class=&quot;{
                  &#039;md-accent&#039;: playground.color === &#039;1&#039;,
                  &#039;md-warn&#039;: playground.color === &#039;2&#039;,
                  &#039;md-transparent&#039;: playground.color === &#039;3&#039;
                }&quot;
                :md-fixed=&quot;playground.fixed&quot;
                :md-centered=&quot;playground.centered&quot;
                :md-elevation=&quot;playground.shadow&quot;
                v-md-theme=&quot;playground.theme&quot;&gt;
                &lt;md-tab v-for=&quot;(tab, index) in playground.tabs&quot; :md-label=&quot;tab.label&quot; :md-icon=&quot;tab.icon&quot; :md-disabled=&quot;tab.disabled&quot; :md-active=&quot;tab.active&quot;&gt;
                  &lt;md-input-container&gt;
                    &lt;label :for=&quot;&#039;label&#039; + index&quot;&gt;Label&lt;/label&gt;
                    &lt;md-input type=&quot;text&quot; :id=&quot;&#039;label&#039; + index&quot; v-model=&quot;tab.label&quot;&gt;&lt;/md-input&gt;
                  &lt;/md-input-container&gt;

                  &lt;md-input-container&gt;
                    &lt;label :for=&quot;&#039;icon&#039; + index&quot;&gt;Icon&lt;/label&gt;
                    &lt;md-input type=&quot;text&quot; :id=&quot;&#039;icon&#039; + index&quot; v-model=&quot;tab.icon&quot;&gt;&lt;/md-input&gt;
                  &lt;/md-input-container&gt;
                &lt;/md-tab&gt;
              &lt;/md-tabs&gt;
            </code-block>

            <code-block lang="javascript">
              export default {
                data() {
                  return {
                    playground: {
                      color: '3',
                      fixed: true,
                      centered: false,
                      shadow: 0,
                      theme: 'default',
                      tabs: [
                        {
                          label: 'Phone',
                          icon: 'phone',
                          active: false,
                          disabled: false
                        },
                        {
                          label: 'Favorites',
                          icon: 'favorite',
                          active: false,
                          disabled: false
                        },
                        {
                          label: 'Near me',
                          icon: 'near_me',
                          active: true,
                          disabled: false
                        }
                      ]
                    }
                  };
                }
              };
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="scss" scoped>
  .playground {
    padding: 0 16px 16px;

    .md-subheader {
      padding: 16px 0 0;
    }
  }

  div.examples .demo-example .demo-example-body {
    padding: 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        playground: {
          color: '3',
          fixed: true,
          centered: false,
          shadow: 0,
          theme: 'default',
          tabs: [
            {
              label: 'Phone',
              icon: 'phone',
              active: false,
              disabled: false
            },
            {
              label: 'Favorites',
              icon: 'favorite',
              active: false,
              disabled: false
            },
            {
              label: 'Near me',
              icon: 'near_me',
              active: true,
              disabled: false
            }
          ]
        }
      };
    }
  };
</script>
