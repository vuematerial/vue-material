<example src="./examples/AutocompleteStatic.vue" />
<example src="./examples/AutocompleteTrigger.vue" />
<example src="./examples/AutocompleteSearch.vue" />
<example src="./examples/AutocompleteBox.vue" />
<example src="./examples/AutocompleteTemplate.vue" />
<example src="./examples/AutocompleteAsync.vue" />

<template>
  <page-container centered :title="$t('pages.autocomplete.title')">
    <div class="page-container-section">
      <p>Input text can be used with autocomplete to help users who have limited literacy or who write in a foreign language. For example, autocomplete can suggest input as it’s typed (refreshing suggestions with each keystroke).</p>
      <p>Vue Material autocomplete is really simple, yet powerfull. With simple options you can create great suggestions with async feedbacks.</p>
      <p>Autocomplete works like <code>md-field</code>. This means that you can pass labels, validation messages, helper texts and even icons:</p>
    </div>

    <div class="page-container-section">
      <h2>Static Data</h2>

      <p>If you have a small amount of data or if it's static, you can pass the options to <code>md-autocomplete</code> in a simple and intuitive way:</p>
      <code-example title="Normal and Dense" :component="examples['autocomplete-static']" />
    </div>

    <div class="page-container-section">
      <h2>Trigger</h2>

      <p>By default the suggestions will appear along with a focus trigger. If you want something less intrusive, you can disable this behaviour by canceling the focus event. If this, the suggestions will appear right after a keystroke:</p>
      <code-example title="Focus vs Input" :component="examples['autocomplete-trigger']" />
    </div>

    <div class="page-container-section">
      <h2>Box Layout</h2>

      <p>Autocomplete have types two layouts: Default with floating labels and a boxed layout with inline labels. The box layout will apply a boxed layout with a small elevation, that also works really great as search bar inside a toolbar. Gorgeous:</p>
      <code-example title="Works with dense variant too!" :component="examples['autocomplete-box']" />
    </div>

    <div class="page-container-section">
      <h2>Custom Template</h2>

      <note-block alert>This section will assume that you have knowledge of <a href="https://vuejs.org/v2/guide/components.html#Scoped-Slots" target="_blank">Vue Scoped Slots</a>. This will allow you to customize the option list.</note-block>
      <p>Autocomplete also accepts a custom template, flexible to accept any HTML element and with an 'empty state' built in. You can also highlight the search term inside the matches, to give a feedback on why that item has been in the results. Awesome:</p>
      <code-example title="With highlight text" :component="examples['autocomplete-template']" />
      <note-block tip>Although the <code>md-highlight-text</code> component is most used with autocomplete, you can use it anywhere.</note-block>
    </div>

    <div class="page-container-section search-algorithms">
      <h2>Search Algorithms</h2>

      <p>Vue Material autocomplete comes with 2 ways of search: <a href="https://en.wikipedia.org/wiki/Approximate_string_matching" target="_blank">Fuzzy search</a> and search by whole term. The fuzzy search tries to match the results by approximation, finding patterns inside the available options. This will help with accidental type errors and improve the results. If you think that this may be confusing, you can disable this. Example:</p>
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-size-40">
          <p>
            <strong>Fuzzy search</strong> - search term: <code>pam</code>
          </p>
          <div>
            Matches:
            <ul>
              <li>
                <md-highlight-text md-term="pam">Pam Beesly</md-highlight-text>
              </li>

              <li>
                <md-highlight-text md-term="pam">Meredith Palmer</md-highlight-text>
              </li>
            </ul>
          </div>
        </div>

        <div class="md-layout-item md-size-40">
          <p>
            <strong>Normal Search</strong> - search term: <code>pam</code>
          </p>
          <div>
            Matches:
            <ul>
              <li>
                <md-highlight-text md-term="pam" :md-fuzzy-search="false">Pam Beesly</md-highlight-text>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <code-example title="Fuzzy or Normal" :component="examples['autocomplete-search']" />
    </div>

    <div class="page-container-section">
      <h2>Async Options</h2>

      <p>Sometimes the options are inside a database in a remote server. Instead of giving a static data, we can provide a <code>Promise</code> that will resolve with the data from a backend servide, for example. This is great to save Bandwidth on the initial load and to improve the performance. Look at this example:</p>
      <code-example title="Spinner Loading" :component="examples['autocomplete-async']" />

      <api-item title="API - md-autocomplete">
        <p>All the following options can be used on any autocomplete:</p>
        <api-table :headings="autocomplete.props.headings" :props="autocomplete.props.props" slot="props" />
        <api-table :headings="autocomplete.slots.headings" :props="autocomplete.slots.props" slot="scoped-slots" />
        <api-table :headings="autocomplete.events.headings" :props="autocomplete.events.props" slot="events" />
      </api-item>

      <api-item title="API - md-highlight-text">
        <p>The following options can be used with highlight text:</p>
        <api-table :headings="highlight.props.headings" :props="highlight.props.props" slot="props" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocAutocomplete',
    mixins: [examples],
    data: () => ({
      autocomplete: {
        slots: {
          headings: ['Name', 'Description', 'Values'],
          props: [
            {
              name: 'md-autocomplete-item',
              description: 'Creates a custom autocomplete result item',
              options: [
                {
                  name: 'item',
                  description: 'Will receive each item of the matched options.'
                },
                {
                  name: 'term',
                  description: 'The current input search term.'
                }
              ],
              usage: '<template slot="md-autocomplete-item" slot-scope="{ item, term }"> ... </template>'
            },
            {
              name: 'md-autocomplete-empty',
              description: 'Creates a empty state in case of zero matches',
              options: [
                {
                  name: 'term',
                  description: 'The current input search term.'
                }
              ],
              usage: '<template slot="md-autocomplete-empty" slot-scope="{ term }"> ... </template>'
            }
          ]
        },
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [
            {
              name: 'v-model',
              type: 'String|Number|Boolean|Array',
              description: 'The model variable to bind the autocomplete value',
              defaults: 'null'
            },
            {
              name: 'md-options',
              type: 'Array|Promise',
              description: 'The available options to be searched. If <code>Array</code>, the autocomplete will use a inner search engine. If <code>Promise</code>, you will need to implement the search by yourself (this is commonly made by a backend service).',
              defaults: '[]'
            },
            {
              name: 'md-input-name',
              type: 'String',
              description: 'The input name attribute',
              defaults: 'null'
            },
            {
              name: 'md-input-id',
              type: 'String',
              description: 'The input id attribute',
              defaults: 'a random string'
            },
            {
              name: 'md-input-max-length',
              type: 'Number',
              description: 'Enables a character count, based on the given value.',
              defaults: 'null'
            },
            {
              name: 'md-input-placeholder',
              type: 'Number',
              description: 'Sets a optional placeholder on autocomplete.',
              defaults: 'null'
            },
            {
              name: 'md-dense',
              type: 'Boolean',
              description: 'Enable the dense layout for options',
              defaults: 'false'
            },
            {
              name: 'md-layout',
              type: 'String',
              description: 'Sets the input layout. The floating variant is the default. See below the detailed description of each layout.',
              defaults: 'floating'
            },
            {
              offset: true,
              name: 'md-layout="floating"',
              type: 'String',
              description: 'Sets the input layout to floating. This is the default.',
              defaults: '-'
            },
            {
              offset: true,
              name: 'md-layout="box"',
              type: 'String',
              description: 'Sets the input layout to a boxed layout.',
              defaults: '-'
            },
            {
              name: 'md-open-on-focus',
              type: 'Boolean',
              description: 'Disable/enable the on focus event. If <code>false</code>, the options will show the results right after a keystroke.',
              defaults: 'true'
            },
            {
              name: 'md-fuzzy-search',
              type: 'Boolean',
              description: 'Disable/enable the fuzzy search algorithm. If <code>false</code>, the search will match the whole search term. This option do not take any effects if the <code>md-options</code> is a Promise',
              defaults: 'true'
            }
          ]
        },
        events: {
          headings: ['Name', 'Description', 'Value'],
          props: [
            {
              name: 'md-changed',
              description: 'Triggered when the user types on the input field',
              value: 'The search term'
            },
            {
              name: 'md-selected',
              description: 'Triggered when the user selects an option',
              value: 'The selected value'
            },
            {
              name: 'md-opened',
              description: 'Triggered when the options panel is opened',
              value: 'null'
            },
            {
              name: 'md-closed',
              description: 'Triggered when the options panel is closed',
              value: 'null'
            }
          ]
        }
      },
      highlight: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [
            {
              name: 'md-term',
              type: 'String',
              description: 'The search term to highlight',
              defaults: 'null'
            },
            {
              name: 'md-fuzzy-search',
              type: 'Boolean',
              description: 'Disable/enable the fuzzy highlight algorithm. If <code>false</code>, the highlight will match the whole search term.',
              defaults: 'true'
            }
          ]
        }
      }
    })
  }
</script>

<style lang="scss">
  .search-algorithms .md-highlight-text-match {
    color: #448aff;
  }
</style>
