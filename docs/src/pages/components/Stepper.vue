<template>
  <page-content page-title="Components - Stepper">
    <docs-component>
      <div slot="description">
        <p>Step indicators are visual indications of an activity progression.</p>
        <p>The following classes can be applied to change the color palette of the step:</p>
        <ul class="md-body-2">
          <li><code>md-primary</code></li>
          <li><code>md-accent</code></li>
          <li><code>md-warn</code></li>
          <li><code>md-disabled</code></li>
        </ul>
      </div>

      <div slot="api">
        <api-table name="md-step-header">
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
                <md-table-cell>md-icon</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Icon name on the <a href="https://material.io/icons/">Material Icons</a> docs.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
          <md-table slot="classes">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>
            <md-table-body>
              <md-table-row>
                <md-table-cell>md-disabled</md-table-cell>
                <md-table-cell>Disabled class.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Themed steps">
          <div class="stepper-demo" slot="demo">
            <md-stepper>
              <md-step>
                <md-step-header class="md-primary" md-icon="star_border">Primary step</md-step-header>
                <md-step-content>
                  <p>This seems something basic I need to do first before the next step.</p>
                  <md-button class="md-raised md-primary">OK</md-button>
                  <md-button class="md-raised">CANCEL</md-button>
                </md-step-content>
              </md-step>
              <md-step>
                <md-step-header class="md-accent" md-icon="star_half">Accent step</md-step-header>
                <md-step-content>
                  <p>This seems something I need to focus on just after the first step.</p>
                </md-step-content>
              </md-step>
              <md-step>
                <md-step-header class="md-warn" md-icon="star">Warn step</md-step-header>
                <md-step-content>
                  <p>This seems something important I need to fix just right before the last step.</p>
                </md-step-content>
              </md-step>
              <md-step>
                <md-step-header class="md-primary md-disabled" md-icon="done_all">Disabled step</md-step-header>
              </md-step>
            </md-stepper>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-stepper&gt;
                &lt;md-step&gt;
                  &lt;md-step-header class=&quot;md-primary&quot; md-icon=&quot;star_border&quot;&gt;Primary step&lt;/md-step-header&gt;
                  &lt;md-step-content&gt;
                    &lt;p&gt;This seems something important I need to do first before the next step.&lt;/p&gt;
                    &lt;md-button class=&quot;md-raised md-primary&quot;&gt;Ok&lt;/md-button&gt;
                    &lt;md-button class=&quot;md-raised&quot;&gt;Cancel&lt;/md-button&gt;
                  &lt;/md-step-content&gt;
                &lt;/md-step&gt;
                &lt;md-step&gt;
                  &lt;md-step-header class=&quot;md-accent&quot; md-icon=&quot;star_half&quot;&gt;Primary step&lt;/md-step-header&gt;
                  &lt;md-step-content&gt;
                    &lt;p&gt;This seems something important I need to do just after the first step.&lt;/p&gt;
                  &lt;/md-step-content&gt;
                &lt;/md-step&gt;
                &lt;md-step&gt;
                  &lt;md-step-header class=&quot;md-warn&quot; md-icon=&quot;star&quot;&gt;Primary step&lt;/md-step-header&gt;
                  &lt;md-step-content&gt;
                    &lt;p&gt;This seems something important I need to do just right before the last step.&lt;/p&gt;
                  &lt;/md-step-content&gt;
                &lt;/md-step&gt;
                &lt;md-step&gt;
                  &lt;md-step-header class=&quot;md-primary md-disabled&quot; md-icon=&quot;done_all&quot;&gt;Disabled step&lt;/md-step-header&gt;
                &lt;/md-step&gt;
              &lt;/md-stepper&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="sass" scoped>
  
</style>

<script>
  export default {
  };
</script>
