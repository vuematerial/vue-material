<example src="./examples/RegularCards.vue" />
<example src="./examples/ThemeColors.vue" />
<example src="./examples/Media.vue" />
<example src="./examples/MediaCover.vue" />
<example src="./examples/Layouts.vue" />
<example src="./examples/CardExpansion.vue" />

<template>
  <page-container centered :title="$t('pages.card.title')">
    <div class="page-container-section">
      <p>Cards may contain a photo, text, and a link about a single subject. They may display content containing elements of varying size, such as photos with captions of variable length.</p>
      <p>The card components are very granular. Every single part of a card is a component. You can combine them in any order that you want, following the same logic of the examples.</p>
    </div>

    <div class="page-container-section">
      <h2>Regular Cards</h2>

      <p>The simplest card structure has a header, content area and action buttons, defined by <code>md-card-header</code>, <code>md-card-content</code> and <code>md-card-actions</code>, respectively. The header may contain title and subtitle <code>div</code> or <code>span</code> with classes <code>.md-title</code> and <code>.md-subhead</code>. In the content area, you may use any kind of text elements and for the actions, use at most two <code>md-buttons</code>.</p>

      <p>If you want to elevate the card as the user hovers over it, add the <code>md-with-hover</code> property. You can also add a ripple effect in combination with the elevation behavior. For doing so, wrap the <code>md-card</code>'s content in a <code>md-ripple</code> tag.</p>

      <code-example title="Regular Cards" :component="examples['regular-cards']" />

      <h2>Cards with Images</h2>

      <p>To add visual appeal to your cards, you can add images inside the <code>md-header</code> tag with a <code>md-card-media</code> wraping an <code>img</code> tag. It's possible to increase the image size to medium or big with the properties <code>md-medium</code> and <code>md-big</code>.</p>

      <p>Although not necessary with text-only headers, when using a <code>md-card-media</code>, the title and subtitle should be wrapped around a <code>md-card-header-text</code> tag.</p>

      <p>For a text-free card with action icon buttons on the side, wrap the card content inside a <code>md-card-media-actions</code> component.</p>

      <code-example title="Media cover" :component="examples['media']" />

      <p>If you want the image to fill the whole card area, wrap the card content inside a <code>md-card-media-cover</code> component. Its basic structure comprises the following components:</p>

      <ul>
        <li><code>md-card-media</code>, where you specify the imagine with an <code>img</code> tag. The image's aspect ratio can be specified with <code>md-card-media</code>'s <code>md-ratio</code> property;</li>

        <li><code>md-card-area</code>, where header (<code>md-header</code>) and actions (<code>md-card-actions</code>) are specified.</li>
      </ul>

      <p></p>
      If there isn't sufficient contrast between background image and title, the latter won't be perfectly legible. To overcome that, apply a solid or gradient background to the text by using the <code>md-card-media-cover</code>'s properties <code>md-solid</code> or <code>md-text-scrim</code>, respectively.

      <code-example title="Card background with Aspect Ratio" :component="examples['media-cover']" />
      
      <h2>Themes</h2>

      <p>Your cards will stand out if you change their base color... And you can do it by applying themes! Just add a <code>.primary</code> or <code>accent</code> class on them. This will use the current theme. You can specify a custom one with the <code>md-theme</code> property.</p>
      <code-example title="Theme Colors" :component="examples['theme-colors']" />

      <h2>Expansion Control</h2>
      <p>To avoid too much information inside a card, or keep its height from exceeding the maximum height, hide supplementary information inside a expansible area.</p>

      <p>It can be done with the <code>md-card-expand</code> component, that has a <code>md-card-action</code> with a <code>md-card-expand-trigger</code> that toggles a <code>md-card-expand-content</code>.</p>

      <code-example title="Expansion Control" :component="examples['card-expansion']" />

      <h2>Different Layouts</h2>
      That's pretty much it. You can now combine these and other components in many distinct ways. Here are some examples:

      <code-example title="Different Layouts" :component="examples['layouts']" />

      <api-item title="API - md-card">
        <p>The following properties can be applied:</p>

        <api-table :headings="api.mdCard.props.headings" :props="api.mdCard.props.props" slot="props" />
      </api-item>

      <api-item title="API - md-card-actions">
        <p>The following properties can be applied:</p>

        <api-table :headings="api.mdCardActions.props.headings" :props="api.mdCardActions.props.props" slot="props" />
      </api-item>

      <api-item title="API - md-card-area">
        <p>The following properties can be applied:</p>

        <api-table :headings="api.mdCardArea.props.headings" :props="api.mdCardArea.props.props" slot="props" />
      </api-item>

      <api-item title="API - md-card-media">
        <p>The following properties can be applied:</p>

        <api-table :headings="api.mdCardMedia.props.headings" :props="api.mdCardMedia.props.props" slot="props" />
      </api-item>

      <api-item title="API - md-card-media-cover">
        <p>The following properties can be applied:</p>

        <api-table :headings="api.mdCardMediaCover.props.headings" :props="api.mdCardMediaCover.props.props" slot="props" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
import examples from 'docs-mixins/docsExample'

export default {
  name: 'Card',
  mixins: [examples],
  data: () => ({
    api: {
      mdCard: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [
            {
              name: 'md-with-hover',
              type: 'Boolean',
              description: 'Enable full hover elevation in card.',
              defaults: 'false'
            },
            {
              name: 'md-theme',
              type: 'String',
              description: 'Speficy a custom theme for the card. Works only if a theme class like <code>primary</code> or <code>accent</code> is applied to the card.',
              defaults: '-'
            }
          ]
        }
      },
      mdCardActions: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [
            {
              name: 'md-alignment',
              type: 'String',
              description: 'Alignment of action buttons.',
              defaults: 'right'
            }
          ]
        }
      },
      mdCardArea: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [
            {
              name: 'md-inset',
              type: 'Boolean',
              description: 'Apply a inset border.',
              defaults: 'false'
            }
          ]
        }
      },
      mdCardMedia: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [
            {
              name: 'md-ratio',
              type: 'String',
              description: 'Resize or clip the image automatically based on the following options: 1:1 or 1/1, 4:3 or 4/3 and 16:9 or 16/9.',
              defaults: 'null'
            },
            {
              name: 'md-medium',
              type: 'Boolean',
              description: 'Applies medium size to the media. Works only inside md-card-header.',
              defaults: 'false'
            },
            {
              name: 'md-big',
              type: 'Boolean',
              description: 'Applies big size to the media. Works only inside md-card-header.',
              defaults: 'false'
            }
          ]
        }
      },
      mdCardMediaCover: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [
            {
              name: 'md-text-scrim',
              type: 'Boolean',
              description: 'Apply a gradient background based on the image. This option increases the legibility of the text, applying background colors by extracting the amount of lightness on the image. If the image is dark the background of the text will be lighter. If it\'s not dark then the background will be darker. This will be calculated automatically.',
              defaults: 'false'
            },
            {
              name: 'md-solid',
              type: 'Boolean',
              description: 'Applies a solid background with the same calculation logic of the md-text-scrim.',
              defaults: 'false'
            }
          ]
        }
      }
    }
  })
}
</script>
