<template>
  <demo-page label="Components - Button Toggle">
    <div slot="examples">
      <demo-example label="Multiple" size="2">
        <md-button-toggle class="md-button-group">
          <md-button class="md-icon-button md-toggle">
            <md-icon>format_bold</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>format_italic</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>strikethrough_s</md-icon>
          </md-button>

          <md-button class="md-icon-button md-toggle">
            <md-icon>title</md-icon>
          </md-button>
        </md-button-toggle>

        <md-button-toggle class="md-button-group md-primary">
          <md-button class="md-icon-button md-toggle">
            <md-icon>format_bold</md-icon>
          </md-button>

          <md-button class="md-icon-button md-toggle">
            <md-icon>format_italic</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>format_underline</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>title</md-icon>
          </md-button>
        </md-button-toggle>

        <md-button-toggle class="md-button-group md-accent">
          <md-button class="md-icon-button md-toggle">
            <md-icon>format_bold</md-icon>
          </md-button>

          <md-button class="md-icon-button md-toggle">
            <md-icon>format_italic</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>format_underline</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>title</md-icon>
          </md-button>
        </md-button-toggle>

        <md-button-toggle class="md-button-group md-warn">
          <md-button class="md-icon-button md-toggle">
            <md-icon>format_bold</md-icon>
          </md-button>

          <md-button class="md-icon-button md-toggle">
            <md-icon>format_italic</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>strikethrough_s</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>title</md-icon>
          </md-button>
        </md-button-toggle>

        <md-button-toggle class="md-button-group md-primary">
          <md-button class="md-icon-button md-toggle">
            <md-icon>format_bold</md-icon>
          </md-button>

          <md-button class="md-icon-button md-toggle" disabled>
            <md-icon>format_italic</md-icon>
          </md-button>

          <md-button class="md-icon-button" disabled>
            <md-icon>strikethrough_s</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>title</md-icon>
          </md-button>
        </md-button-toggle>

        <md-button-toggle class="md-button-group md-primary">
          <md-button class="md-toggle">Works</md-button>
          <md-button class="md-toggle">With</md-button>
          <md-button>Text</md-button>
          <md-button>Too</md-button>
        </md-button-toggle>
      </demo-example>

      <demo-example label="Single Selection" size="2">
        <md-button-toggle type="radio" class="md-button-group">
          <md-button class="md-icon-button">
            <md-icon>format_align_left</md-icon>
          </md-button>

          <md-button class="md-icon-button md-toggle">
            <md-icon>format_align_center</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>format_align_right</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>format_align_justify</md-icon>
          </md-button>
        </md-button-toggle>

        <md-button-toggle type="radio" class="md-button-group md-primary">
          <md-button class="md-icon-button">
            <md-icon>format_align_left</md-icon>
          </md-button>

          <md-button class="md-icon-button md-toggle">
            <md-icon>format_align_center</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>format_align_right</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>format_align_justify</md-icon>
          </md-button>
        </md-button-toggle>

        <md-button-toggle type="radio" class="md-button-group md-accent">
          <md-button class="md-icon-button">
            <md-icon>format_align_left</md-icon>
          </md-button>

          <md-button class="md-icon-button md-toggle">
            <md-icon>format_align_center</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>format_align_right</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>format_align_justify</md-icon>
          </md-button>
        </md-button-toggle>

        <md-button-toggle type="radio" class="md-button-group md-warn">
          <md-button class="md-icon-button">
            <md-icon>format_align_left</md-icon>
          </md-button>

          <md-button class="md-icon-button md-toggle">
            <md-icon>format_align_center</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>format_align_right</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>format_align_justify</md-icon>
          </md-button>
        </md-button-toggle>

        <md-button-toggle type="radio" class="md-button-group md-primary">
          <md-button class="md-icon-button md-toggle">
            <md-icon>format_align_left</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>format_align_center</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>format_align_right</md-icon>
          </md-button>

          <md-button class="md-icon-button" disabled>
            <md-icon>format_align_justify</md-icon>
          </md-button>
        </md-button-toggle>

        <md-button-toggle type="radio" class="md-button-group md-primary">
          <md-button>Works</md-button>
          <md-button class="md-toggle">With</md-button>
          <md-button>Text</md-button>
          <md-button>Too</md-button>
        </md-button-toggle>
      </demo-example>
    </div>

    <div slot="code">
      <h2>Code</h2>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>

<style lang="scss" scoped>
  .md-button-group + .md-button-group {
    margin-top: 16px;
  }
</style>
