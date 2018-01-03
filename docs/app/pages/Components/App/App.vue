<example src="./examples/Normal.vue" />
<example src="./examples/Waterfall.vue" />
<example src="./examples/Reveal.vue" />
<example src="./examples/Flexible.vue" />
<example src="./examples/LastRowFixed.vue" />
<example src="./examples/Overlap.vue" />

<template>
  <page-container centered :title="$t('pages.app.title')">
    <div class="page-container-section">
      <i18n path="pages.app.intro.desc1" tag="p" />
      <i18n path="pages.app.intro.desc2" tag="p">
        <code>md-app</code>
      </i18n>
      <i18n path="pages.app.intro.desc3" tag="p" />
      <i18n path="pages.app.intro.desc4" tag="p">
        <code>md-app</code>
        <code>md-app-toolbar</code>
        <code>md-app-drawer</code>
        <code>md-app-content</code>
        <code>md-toolbar</code>
        <code>md-drawer</code>
        <code>md-content</code>
      </i18n>
    </div>

    <div class="page-container-section">
      <h2>{{ $t('pages.app.regular.title') }}</h2>

      <p>{{ $t('pages.app.regular.desc1') }}</p>
      <i18n tag="note-block" tip path="pages.app.regular.desc2">
        <code>md-app</code>
      </i18n>
      <code-example :title="$t('pages.app.regular.default')" :component="examples['normal']" />
    </div>

    <div class="page-container-section">
      <h2>{{ $t('pages.app.fixed.title') }}</h2>

      <p>{{ $t('pages.app.fixed.desc') }}</p>
      <code-example :title="$t('pages.app.fixed.fixedWaterfall')" :component="examples['waterfall']" />
    </div>

    <div class="page-container-section">
      <h2>{{ $t('pages.app.reveal.title') }}</h2>

      <p>{{ $t('pages.app.reveal.desc') }}</p>
      <code-example :title="$t('pages.app.reveal.reveal')" :component="examples['reveal']" />
    </div>

    <div class="page-container-section">
      <h2>{{ $t('pages.app.flexible.title') }}</h2>

      <p>{{ $t('pages.app.flexible.desc') }}</p>
      <code-example :title="$t('pages.app.flexible.flexible')" :component="examples['flexible']" />
    </div>

    <div class="page-container-section">
      <h2>{{ $t('pages.app.lastRow.title') }}</h2>

      <p>{{ $t('pages.app.lastRow.desc') }}</p>
      <code-example :title="$t('pages.app.lastRow.fixed')" :component="examples['last-row-fixed']" />
    </div>

    <div class="page-container-section">
      <h2>{{ $t('pages.app.overlap.title') }}</h2>

      <p>{{ $t('pages.app.overlap.desc') }}</p>
      <code-example :title="$t('pages.app.overlap.content')" :component="examples['overlap']" />
    </div>

    <div class="page-container-section">
      <api-item title="API - md-app">
        <p>{{ $t('pages.app.apiApp.desc') }}</p>
        <ul>
          <li><code>md-app-toolbar</code>: {{ $t('pages.app.apiApp.toolbar') }}</li>
          <li><code>md-app-drawer</code>: {{ $t('pages.app.apiApp.drawer') }}</li>
          <li><code>md-app-content</code>: {{ $t('pages.app.apiApp.content') }}</li>
        </ul>

        <note-block alert>{{ $t('pages.app.apiApp.alert') }}</note-block>

        <p>{{ $t('pages.app.apiApp.propsDesc') }}:</p>

        <api-table :headings="api.props.headings" :props="api.props.props" slot="props" />
      </api-item>
    </div>

    <div class="page-container-section">
      <api-item title="API - md-app-toolbar">
        <i18n path="pages.app.apiToolbar.desc" tag="p">
          <code>md-toolbar</code>
          <router-link to="/components/toolbar">{{ $t('pages.app.apiToolbar.page') }}</router-link>
        </i18n>
      </api-item>
    </div>

    <div class="page-container-section">
      <api-item title="API - md-app-drawer">
        <i18n path="pages.app.apiDrawer.desc" tag="p">
          <code>md-drawer</code>
          <router-link to="/components/drawer">{{ $t('pages.app.apiDrawer.page') }}</router-link>
        </i18n>
      </api-item>
    </div>

    <div class="page-container-section">
      <api-item title="API - md-app-content">
        <i18n path="pages.app.apiContent.desc" tag="p">
          <code>md-content</code>
          <router-link to="/components/content">{{ $t('pages.app.apiContent.page') }}</router-link>
        </i18n>
      </api-item>
    </div>
  </page-container>
</template>

<script>
import examples from 'docs-mixins/docsExample'

export default {
  name: 'DocApp',
  mixins: [examples],
  data () {
    return {
      api: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [
            {
              name: 'md-mode',
              type: 'String',
              description: this.$t('pages.app.props.mdMode'),
              defaults: 'null'
            },
            {
              offset: true,
              name: 'md-mode="fixed"',
              type: 'String',
              description: this.$t('pages.app.props.mdModeFixed'),
              defaults: '-'
            },
            {
              offset: true,
              name: 'md-mode="fixed-last"',
              type: 'String',
              description: this.$t('pages.app.props.mdModeFixedLast'),
              defaults: '-'
            },
            {
              offset: true,
              name: 'md-mode="reveal"',
              type: 'String',
              description: this.$t('pages.app.props.mdModeReveal'),
              defaults: '-'
            },
            {
              offset: true,
              name: 'md-mode="flexible"',
              type: 'String',
              description: this.$t('pages.app.props.mdModeFlexible'),
              defaults: '-'
            },
            {
              offset: true,
              name: 'md-mode="overlap"',
              type: 'String',
              description: this.$t('pages.app.props.mdModeOverlap'),
              defaults: '-'
            },
            {
              name: 'md-waterfall',
              type: 'Boolean',
              description: this.$t('pages.app.props.mdWaterfall'),
              defaults: 'false'
            },
            {
              name: 'md-scrollbar',
              type: 'Boolean',
              description: this.$t('pages.app.props.mdScrollbar'),
              defaults: 'true'
            }
          ]
        }
      }
    }
  }
}
</script>
