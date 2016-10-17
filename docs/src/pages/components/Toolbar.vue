<template>
  <demo-page label="Components - Toolbar">
    <div slot="examples">
      <demo-example label="Default">
        <md-toolbar>
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title" style="flex: 1">Vue Material</h2>

          <md-button class="md-icon-button">
            <md-icon>favorite</md-icon>
          </md-button>
        </md-toolbar>
      </demo-example>

      <demo-example label="Dense">
        <md-toolbar class="md-dense">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title" style="flex: 1">Vue Material</h2>

          <md-button class="md-icon-button">
            <md-icon>favorite</md-icon>
          </md-button>
        </md-toolbar>
      </demo-example>

      <demo-example label="Medium">
        <md-toolbar class="md-medium">
          <div class="md-toolbar-container">
            <md-button class="md-icon-button">
              <md-icon>menu</md-icon>
            </md-button>

            <h2 class="md-title" style="flex: 1;">Vue Material</h2>

            <md-button class="md-icon-button">
              <md-icon>search</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>filter_list</md-icon>
            </md-button>
          </div>
        </md-toolbar>
      </demo-example>

      <demo-example label="Large">
        <md-toolbar class="md-large">
          <div class="md-toolbar-container">
            <md-button class="md-icon-button">
              <md-icon>menu</md-icon>
            </md-button>

            <span style="flex: 1;"></span>

            <md-button class="md-icon-button">
              <md-icon>search</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>filter_list</md-icon>
            </md-button>
          </div>

          <div class="md-toolbar-container">
            <h2 class="md-title">Vue Material</h2>
          </div>
        </md-toolbar>
      </demo-example>

      <demo-example label="Accent, Warn and Transparent Colors">
        <md-toolbar class="md-accent">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title" style="flex: 1">Vue Material</h2>

          <md-button class="md-icon-button">
            <md-icon>favorite</md-icon>
          </md-button>
        </md-toolbar>

        <md-toolbar class="md-warn">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title" style="flex: 1">Vue Material</h2>

          <md-button>Add</md-button>
          <md-button>Remove</md-button>
        </md-toolbar>

        <md-toolbar class="md-transparent">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title" style="flex: 1">Vue Material</h2>

          <md-button class="md-raised">Add</md-button>
          <md-button class="md-raised md-warn">Remove</md-button>
        </md-toolbar>
      </demo-example>

      <demo-example label="Themed">
        <md-toolbar v-md-theme="'green'">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title" style="flex: 1">Vue Material</h2>

          <md-button class="md-icon-button">
            <md-icon>favorite</md-icon>
          </md-button>
        </md-toolbar>

        <md-toolbar class="md-large" v-md-theme="'brown'">
          <div class="md-toolbar-container">
            <md-button class="md-icon-button">
              <md-icon>menu</md-icon>
            </md-button>

            <span style="flex: 1;"></span>

            <md-button class="md-icon-button">
              <md-icon>search</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>filter_list</md-icon>
            </md-button>
          </div>

          <div class="md-toolbar-container">
            <h2 class="md-title">Vue Material</h2>
          </div>
        </md-toolbar>

        <md-toolbar v-md-theme="'orange'">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title" style="flex: 1">Vue Material</h2>

          <md-button>Add</md-button>
          <md-button>Remove</md-button>
        </md-toolbar>

        <md-toolbar v-md-theme="'blue'">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title" style="flex: 1">Vue Material</h2>

          <md-button class="md-raised">Add</md-button>
          <md-button class="md-raised md-warn">Remove</md-button>
        </md-toolbar>
      </demo-example>

      <demo-example label="Complete Example" class="example">
        <md-toolbar class="md-large" v-md-theme="'green'">
          <div class="md-toolbar-container">
            <md-button class="md-icon-button">
              <md-icon>menu</md-icon>
            </md-button>

            <span style="flex: 1;"></span>

            <md-button class="md-icon-button">
              <md-icon>search</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>filter_list</md-icon>
            </md-button>
          </div>

          <div class="md-toolbar-container">
            <h2 class="md-title">Vue Material</h2>

            <md-button class="md-fab md-fab-bottom-right">
              <md-icon>add</md-icon>
            </md-button>
          </div>
        </md-toolbar>
      </demo-example>
    </div>

    <div slot="code">
      <demo-example label="Default">
        <code-block lang="xml">
&lt;md-toolbar&gt;
  &lt;md-button class=&quot;md-icon-button&quot;&gt;
    &lt;md-icon&gt;menu&lt;/md-icon&gt;
  &lt;/md-button&gt;

  &lt;h2 class=&quot;md-title&quot; style=&quot;flex: 1&quot;&gt;Vue Material&lt;/h2&gt;

  &lt;md-button class=&quot;md-icon-button&quot;&gt;
    &lt;md-icon&gt;favorite&lt;/md-icon&gt;
  &lt;/md-button&gt;
&lt;/md-toolbar&gt;
        </code-block>
      </demo-example>

      <demo-example label="Dense">
        <code-block lang="xml">
&lt;md-toolbar class=&quot;md-dense&quot;&gt;
  &lt;md-button class=&quot;md-icon-button&quot;&gt;
    &lt;md-icon&gt;menu&lt;/md-icon&gt;
  &lt;/md-button&gt;

  &lt;h2 class=&quot;md-title&quot; style=&quot;flex: 1&quot;&gt;Vue Material&lt;/h2&gt;

  &lt;md-button class=&quot;md-icon-button&quot;&gt;
    &lt;md-icon&gt;favorite&lt;/md-icon&gt;
  &lt;/md-button&gt;
&lt;/md-toolbar&gt;
        </code-block>
      </demo-example>

      <demo-example label="Medium">
        <code-block lang="xml">
&lt;md-toolbar class=&quot;md-medium&quot;&gt;
  &lt;div class=&quot;md-toolbar-container&quot;&gt;
    &lt;md-button class=&quot;md-icon-button&quot;&gt;
      &lt;md-icon&gt;menu&lt;/md-icon&gt;
    &lt;/md-button&gt;

    &lt;h2 class=&quot;md-title&quot; style=&quot;flex: 1;&quot;&gt;Vue Material&lt;/h2&gt;

    &lt;md-button class=&quot;md-icon-button&quot;&gt;
      &lt;md-icon&gt;search&lt;/md-icon&gt;
    &lt;/md-button&gt;

    &lt;md-button class=&quot;md-icon-button&quot;&gt;
      &lt;md-icon&gt;filter_list&lt;/md-icon&gt;
    &lt;/md-button&gt;
  &lt;/div&gt;
&lt;/md-toolbar&gt;
        </code-block>
      </demo-example>

      <demo-example label="Large">
        <code-block lang="xml">
&lt;md-toolbar class=&quot;md-large&quot;&gt;
  &lt;div class=&quot;md-toolbar-container&quot;&gt;
    &lt;md-button class=&quot;md-icon-button&quot;&gt;
      &lt;md-icon&gt;menu&lt;/md-icon&gt;
    &lt;/md-button&gt;

    &lt;span style=&quot;flex: 1;&quot;&gt;&lt;/span&gt;

    &lt;md-button class=&quot;md-icon-button&quot;&gt;
      &lt;md-icon&gt;search&lt;/md-icon&gt;
    &lt;/md-button&gt;

    &lt;md-button class=&quot;md-icon-button&quot;&gt;
      &lt;md-icon&gt;filter_list&lt;/md-icon&gt;
    &lt;/md-button&gt;
  &lt;/div&gt;

  &lt;div class=&quot;md-toolbar-container&quot;&gt;
    &lt;h2 class=&quot;md-title&quot;&gt;Vue Material&lt;/h2&gt;
  &lt;/div&gt;
&lt;/md-toolbar&gt;
        </code-block>
      </demo-example>

      <demo-example label="Accent, Warn and Transparent Colors">
        <code-block lang="xml">
&lt;md-toolbar class=&quot;md-accent&quot;&gt;
  &lt;md-button class=&quot;md-icon-button&quot;&gt;
    &lt;md-icon&gt;menu&lt;/md-icon&gt;
  &lt;/md-button&gt;

  &lt;h2 class=&quot;md-title&quot; style=&quot;flex: 1&quot;&gt;Vue Material&lt;/h2&gt;

  &lt;md-button class=&quot;md-icon-button&quot;&gt;
    &lt;md-icon&gt;favorite&lt;/md-icon&gt;
  &lt;/md-button&gt;
&lt;/md-toolbar&gt;
        </code-block>

        <code-block lang="xml">
&lt;md-toolbar class=&quot;md-warn&quot;&gt;
  &lt;md-button class=&quot;md-icon-button&quot;&gt;
    &lt;md-icon&gt;menu&lt;/md-icon&gt;
  &lt;/md-button&gt;

  &lt;h2 class=&quot;md-title&quot; style=&quot;flex: 1&quot;&gt;Vue Material&lt;/h2&gt;

  &lt;md-button&gt;Add&lt;/md-button&gt;
  &lt;md-button&gt;Remove&lt;/md-button&gt;
&lt;/md-toolbar&gt;
        </code-block>

        <code-block lang="xml">
&lt;md-toolbar class=&quot;md-transparent&quot;&gt;
  &lt;md-button class=&quot;md-icon-button&quot;&gt;
    &lt;md-icon&gt;menu&lt;/md-icon&gt;
  &lt;/md-button&gt;

  &lt;h2 class=&quot;md-title&quot; style=&quot;flex: 1&quot;&gt;Vue Material&lt;/h2&gt;

  &lt;md-button class=&quot;md-raised&quot;&gt;Add&lt;/md-button&gt;
  &lt;md-button class=&quot;md-raised md-warn&quot;&gt;Remove&lt;/md-button&gt;
&lt;/md-toolbar&gt;
        </code-block>
      </demo-example>

      <demo-example label="Themed">
        <code-block lang="xml">
&lt;md-toolbar v-md-theme=&quot;&#039;green&#039;&quot;&gt;
  &lt;md-button class=&quot;md-icon-button&quot;&gt;
    &lt;md-icon&gt;menu&lt;/md-icon&gt;
  &lt;/md-button&gt;

  &lt;h2 class=&quot;md-title&quot; style=&quot;flex: 1&quot;&gt;Vue Material&lt;/h2&gt;

  &lt;md-button class=&quot;md-icon-button&quot;&gt;
    &lt;md-icon&gt;favorite&lt;/md-icon&gt;
  &lt;/md-button&gt;
&lt;/md-toolbar&gt;
        </code-block>

        <code-block lang="xml">
&lt;md-toolbar class=&quot;md-large&quot; v-md-theme=&quot;&#039;brown&#039;&quot;&gt;
  &lt;div class=&quot;md-toolbar-container&quot;&gt;
    &lt;md-button class=&quot;md-icon-button&quot;&gt;
      &lt;md-icon&gt;menu&lt;/md-icon&gt;
    &lt;/md-button&gt;

    &lt;span style=&quot;flex: 1;&quot;&gt;&lt;/span&gt;

    &lt;md-button class=&quot;md-icon-button&quot;&gt;
      &lt;md-icon&gt;search&lt;/md-icon&gt;
    &lt;/md-button&gt;

    &lt;md-button class=&quot;md-icon-button&quot;&gt;
      &lt;md-icon&gt;filter_list&lt;/md-icon&gt;
    &lt;/md-button&gt;
  &lt;/div&gt;

  &lt;div class=&quot;md-toolbar-container&quot;&gt;
    &lt;h2 class=&quot;md-title&quot;&gt;Vue Material&lt;/h2&gt;
  &lt;/div&gt;
&lt;/md-toolbar&gt;
        </code-block>

        <code-block lang="xml">
&lt;md-toolbar v-md-theme=&quot;&#039;orange&#039;&quot;&gt;
  &lt;md-button class=&quot;md-icon-button&quot;&gt;
    &lt;md-icon&gt;menu&lt;/md-icon&gt;
  &lt;/md-button&gt;

  &lt;h2 class=&quot;md-title&quot; style=&quot;flex: 1&quot;&gt;Vue Material&lt;/h2&gt;

  &lt;md-button&gt;Add&lt;/md-button&gt;
  &lt;md-button&gt;Remove&lt;/md-button&gt;
&lt;/md-toolbar&gt;
        </code-block>

        <code-block lang="xml">
&lt;md-toolbar v-md-theme=&quot;&#039;blue&#039;&quot;&gt;
  &lt;md-button class=&quot;md-icon-button&quot;&gt;
    &lt;md-icon&gt;menu&lt;/md-icon&gt;
  &lt;/md-button&gt;

  &lt;h2 class=&quot;md-title&quot; style=&quot;flex: 1&quot;&gt;Vue Material&lt;/h2&gt;

  &lt;md-button class=&quot;md-raised&quot;&gt;Add&lt;/md-button&gt;
  &lt;md-button class=&quot;md-raised md-warn&quot;&gt;Remove&lt;/md-button&gt;
&lt;/md-toolbar&gt;
        </code-block>
      </demo-example>

      <demo-example label="Complete Example" class="example">
        <code-block lang="xml">
&lt;div class=&quot;example&quot;&gt;
  &lt;md-toolbar class=&quot;md-large&quot; v-md-theme=&quot;&#039;green&#039;&quot;&gt;
    &lt;div class=&quot;md-toolbar-container&quot;&gt;
      &lt;md-button class=&quot;md-icon-button&quot;&gt;
        &lt;md-icon&gt;menu&lt;/md-icon&gt;
      &lt;/md-button&gt;

      &lt;span style=&quot;flex: 1;&quot;&gt;&lt;/span&gt;

      &lt;md-button class=&quot;md-icon-button&quot;&gt;
        &lt;md-icon&gt;search&lt;/md-icon&gt;
      &lt;/md-button&gt;

      &lt;md-button class=&quot;md-icon-button&quot;&gt;
        &lt;md-icon&gt;filter_list&lt;/md-icon&gt;
      &lt;/md-button&gt;
    &lt;/div&gt;

    &lt;div class=&quot;md-toolbar-container&quot;&gt;
      &lt;h2 class=&quot;md-title&quot;&gt;Vue Material&lt;/h2&gt;

      &lt;md-button class=&quot;md-fab md-fab-bottom-right&quot;&gt;
        &lt;md-icon&gt;add&lt;/md-icon&gt;
      &lt;/md-button&gt;
    &lt;/div&gt;
  &lt;/md-toolbar&gt;
&lt;/div&gt;
        </code-block>

        <code-block lang="scss">
.example {
  .md-button.md-fab {
    margin: 0;
    right: 56px;
    bottom: -26px;
  }

  .md-toolbar {
    margin-bottom: 50px;
  }
}
        </code-block>
      </demo-example>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>

<style lang="scss" scoped>
  .md-toolbar + .md-toolbar {
    margin-top: 16px;
  }

  .example {
    .md-button.md-fab {
      margin: 0;
      right: 56px;
      bottom: -26px;
    }

    .md-toolbar {
      margin-bottom: 50px;
    }
  }
</style>
