<template>
  <page-content page-title="Components - Chips">
    <docs-component>
      <div slot="description">
        <p>A chip may contain entities such as a photo, text, rules, an icon, or a contact.</p>
      </div>

      <div slot="api">
        <api-table name="md-chip">
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
                <md-table-cell>disabled</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Disable the chip and prevent his actions. Default: <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-deletable</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Enable delete button. Default: <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-editable</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Enable click on the chip's content. Default: <code>false</code></md-table-cell>
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
                <md-table-cell>delete</md-table-cell>
                <md-table-cell>None</md-table-cell>
                <md-table-cell>Triggered when delete button is clicked.</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>edit</md-table-cell>
                <md-table-cell>None</md-table-cell>
                <md-table-cell>Triggered when the chip's content is clicked.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table name="md-chips">
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
                <md-table-cell>v-model</md-table-cell>
                <md-table-cell><code>Array</code></md-table-cell>
                <md-table-cell>A required model object to bind the value.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>disabled</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Disable the chips and prevent his actions. Default: <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-input-id</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The chips input id.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-input-name</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The chips input name.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-input-placeholder</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The chips input placeholder.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-input-type</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The chips input type. Cannot be "file". Default: <code>text</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-static</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Display read only chips. Default: <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-max</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>The max number of chips to be added. This property works only for new chips. If the initial value in the v-model have more chips than the max value, all the chips will be rendered. Default: <code>Infinity</code></md-table-cell>
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
                <md-table-cell>The selcted chips Array</md-table-cell>
                <md-table-cell>Triggered when the chips is created or deleted.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Single Chips">
          <div slot="demo">
            <md-chip>Marcos Moura</md-chip>
            <md-chip md-deletable>Luiza Ivanenko</md-chip>
            <md-chip md-editable>Alban Mouton</md-chip>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-chip&gt;Marcos Moura&lt;/md-chip&gt;
              &lt;md-chip md-deletable&gt;Luiza Ivanenko&lt;/md-chip&gt;
              &lt;md-chip md-editable&gt;Alban Mouton&lt;/md-chip&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Static">
          <div slot="demo">
            <md-chips v-model="fruits" md-static>
              <template scope="chip">{{ chip.value }}</template>
            </md-chips>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-chips v-model=&quot;fruits&quot; md-static&gt;
                &lt;template scope=&quot;chip&quot;&gt;{{ '{{ chip.value }\}' }}&lt;/template&gt;
              &lt;/md-chips&gt;
            </code-block>

            <code-block lang="javascript">
              export default {
                data: () => ({
                  fruits: ['Orange', 'Apple', 'Pineapple']
                })
              };
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Editable">
          <div slot="demo">
            <md-chips v-model="contacts" md-input-placeholder="Add a contact">
              <template scope="chip">{{ chip.value }}</template>
            </md-chips>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-chips v-model=&quot;contacts&quot; md-input-placeholder=&quot;Add a contact&quot;&gt;
                &lt;template scope=&quot;chip&quot;&gt;{{ '{{ chip.value }\}' }}&lt;/template&gt;
              &lt;/md-chips&gt;
            </code-block>

            <code-block lang="javascript">
              export default {
                data: () => ({
                  contacts: ['Marcos Moura'],
                })
              };
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Limit">
          <div slot="demo">
            <md-chips v-model="cities" :md-max="5" md-input-placeholder="Cities...">
              <template scope="chip">
                <span>{{ chip.value }}</span>
                <small v-if="chip.value === 'Amsterdam'">(favorite)</small>
              </template>
            </md-chips>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-chips v-model=&quot;cities&quot; :md-max=&quot;5&quot; md-input-placeholder=&quot;Cities...&quot;&gt;
                &lt;template scope=&quot;chip&quot;&gt;
                  &lt;span&gt;{{ '{{ chip.value }\}' }}&lt;/span&gt;
                  &lt;small v-if=&quot;chip.value === &#039;Amsterdam&#039;&quot;&gt;(favorite)&lt;/small&gt;
                &lt;/template&gt;
              &lt;/md-chips&gt;
            </code-block>

            <code-block lang="javascript">
              export default {
                data: () => ({
                    cities: ['Amsterdam', 'London', 'Tokio']
                })
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
      fruits: ['Orange', 'Apple', 'Pineapple'],
      contacts: ['Marcos Moura'],
      cities: ['Amsterdam', 'London', 'Tokio']
    })
  };
</script>
