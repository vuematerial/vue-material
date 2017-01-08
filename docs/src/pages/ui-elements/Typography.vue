<template>
  <page-content page-title="UI Elements - Typography">
    <docs-component>
      <div slot="description">
        <h2 class="md-title">Styles</h2>
        <p>Too many type sizes and styles at once can wreck any layout. A typographic scale has a limited set of type sizes that work well together along with the layout grid.</p>
        <h2 class="md-title">Typeface</h2>
        <p>Roboto has been refined extensively to work across the wider set of supported platforms. It is slightly wider and rounder, giving it greater clarity and making it more optimistic.</p>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div class="demo" slot="demo">
            <span class="md-display-4">Display 4</span>
            <span class="md-display-3">Display 3</span>
            <span class="md-display-2">Display 2</span>
            <span class="md-display-1">Display 1</span>
            <span class="md-headline">Headline</span>
            <span class="md-title">Title</span>
            <span class="md-subheading">Subheading</span>
            <span class="md-body-2">Body 2</span>
            <span class="md-body-1">Body 1</span>
            <span class="md-caption">Caption</span>
            <a href="#/typography">Link</a>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;span class=&quot;md-display-4&quot;&gt;Display 4&lt;/span&gt;
              &lt;span class=&quot;md-display-3&quot;&gt;Display 3&lt;/span&gt;
              &lt;span class=&quot;md-display-2&quot;&gt;Display 2&lt;/span&gt;
              &lt;span class=&quot;md-display-1&quot;&gt;Display 1&lt;/span&gt;
              &lt;span class=&quot;md-headline&quot;&gt;Headline&lt;/span&gt;
              &lt;span class=&quot;md-title&quot;&gt;Title&lt;/span&gt;
              &lt;span class=&quot;md-subheading&quot;&gt;Subheading&lt;/span&gt;
              &lt;span class=&quot;md-body-2&quot;&gt;Body 2&lt;/span&gt;
              &lt;span class=&quot;md-body-1&quot;&gt;Body 1&lt;/span&gt;
              &lt;span class=&quot;md-caption&quot;&gt;Caption&lt;/span&gt;
              &lt;a href=&quot;#/typography&quot;&gt;Link&lt;/a&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="sass" scoped>
  .demo > * {
    margin: .5em 0;
    display: block;
  }
</style>
