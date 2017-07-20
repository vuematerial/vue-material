<example src="./examples/Normal.vue" />
<example src="./examples/Waterfall.vue" />
<example src="./examples/Reveal.vue" />
<example src="./examples/Flexible.vue" />
<example src="./examples/LastRowFixed.vue" />
<example src="./examples/Overlap.vue" />

<template>
  <page-container centered :title="$t('pages.app.title')">
    <div class="page-container-section">
      <p>These following patterns applies the elevations at which content should scroll, how to size flexible space, and when to anchor specific elements.</p>
      <p>When building applications there is some repeated behaviours regarding the structure of the app. Responsive drawers, flexible toolbars, scrolling... Either scenario could repeat across all complex applications. This documentation website, for example, needs some of them, and maybe you'll need them too. To solve those problems the <code>md-app</code> was created.</p>
      <p>It has all behaviour to build complex application shells, that will be simple, responsive and integrate seamlessly with the drawers, toolbars and content.</p>
      <p>The <code>md-app</code> component comes with support with <code>md-app-toolbar</code>, <code>md-app-drawer</code> and <code>md-app-content</code>, witch is the alias for <code>md-toolbar</code>, <code>md-drawer</code> and <code>md-content</code> respectively. Look at the examples:</p>
    </div>

    <div class="page-container-section">
      <h2>Normal Toolbars</h2>

      <p>When you need a toolbar, a responsive drawer and a content to be displayed following the Material Guidelines. This is the default behaviour.</p>
      <code-example title="Default" :component="examples['normal']" />
    </div>

    <div class="page-container-section">
      <h2>Fixed Toolbars</h2>

      <p>Sometimes you may need a fixed toolbar, to make all options always available. You can also combine this with the "waterfall" effect.</p>
      <code-example title="Fixed + Waterfall" :component="examples['waterfall']" />
    </div>

    <div class="page-container-section">
      <h2>Reveal after scroll</h2>

      <p>When you have a large amount of content to be displayed, and you want to focus on the reading part, you can hide the toolbar temporarily and reveal it after the scroll.</p>
      <code-example title="Reveal" :component="examples['reveal']" />
    </div>

    <div class="page-container-section">
      <h2>Flexible height and text size</h2>

      <p>Maybe the focus of your page is the title, following by the content. The page that shows details of a single contact is a great example of this scenario. So you can use flexible behaviour to give higher piority to your content after scroll.</p>
      <code-example title="Flexible" :component="examples['flexible']" />
    </div>

    <div class="page-container-section">
      <h2>The last toolbar row fixed</h2>

      <p>When your page have some primary navigation buttons, such as tabs and others, you may want them to be always available. You can make the second row of your toolbar always visible, hiding the first one when it's not needed. As an example, the WhatsApp main page have this behaviour.</p>
      <code-example title="Navigation fixed" :component="examples['last-row-fixed']" />
    </div>

    <div class="page-container-section">
      <h2>Flexible space with overlapping content</h2>

      <p>If you want to give focus on the content cards you may want to use the overlap. It's just a awesome effect though!</p>
      <code-example title="Overlapping content" :component="examples['overlap']" />
    </div>

    <div class="page-container-section">
      <api-item title="API - md-app">
        <p>The following properties can be applied:</p>

        <api-table :headings="api.props.headings" :props="api.props.props" slot="props" />
      </api-item>
    </div>

    <div class="page-container-section">
      <api-item title="API - md-app-toolbar">
        <p>As this is only an alias, refer to the <router-link to="/components/toolbar">md-toolbar page</router-link> to see all the available options.</p>
      </api-item>
    </div>

    <div class="page-container-section">
      <api-item title="API - md-app-drawer">
        <p>As this is only an alias, refer to the <router-link to="/components/drawer">md-drawer page</router-link> to see all the available options.</p>
      </api-item>
    </div>

    <div class="page-container-section">
      <api-item title="API - md-app-content">
        <p>As this is only an alias, refer to the <router-link to="/components/content">md-content page</router-link> to see all the available options.</p>
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'App',
    mixins: [examples],
    data: () => ({
      api: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [
            {
              name: 'md-mode',
              type: 'String',
              description: 'Set the toolbar mode. See above the detailed description of each mode.',
              defaults: 'null'
            },
            {
              name: 'md-mode="fixed"',
              type: 'String',
              description: 'Make the toolbar fixed without any scrolling effect',
              defaults: 'null'
            },
            {
              name: 'md-mode="fixed-last"',
              type: 'String',
              description: 'Keep the second row of the toolbar fixed and always visible. This NEEDS two md-toolbar-row inside the Toolbar.',
              defaults: 'null'
            },
            {
              name: 'md-mode="reveal"',
              type: 'String',
              description: 'Hide the toolbar temporarily and show it after the scroll. This is a good approach for mobile.',
              defaults: 'null'
            },
            {
              name: 'md-mode="flexible"',
              type: 'String',
              description: 'Make the height and the title size flexible to give the content a higher priority',
              defaults: 'null'
            },
            {
              name: 'md-mode="overlap"',
              type: 'String',
              description: 'Enable the overlapping content',
              defaults: 'null'
            },
            {
              name: 'md-waterfall',
              type: 'Boolean',
              description: 'Enable the waterfall effect, that can be combined with any md-mode',
              defaults: 'false'
            },
            {
              name: 'md-scrollbar',
              type: 'Boolean',
              description: 'Enable the md-scrollbar class to the scrollable content. Read more about the Scrollbar documentation.',
              defaults: 'true'
            }
          ]
        }
      }
    })
  }
</script>
