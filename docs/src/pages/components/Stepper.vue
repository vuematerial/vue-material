<template>
  <page-content page-title="Components - Stepper">
    <docs-component>
      <div slot="description">
        <p>Step indicators are visual indications of an activity progression.</p>
      </div>

      <div slot="api">
        <api-table name="md-stepper">
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
                <md-table-cell>md-alternate-labels</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>On the horizontal display it will place the labels underneigh the step icon. Default: false</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-elevation</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Sets the elevation of the container for each content and the horizontal header. Default: 1</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-vertical</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Will place the steps in a vertical position. Default: false</md-table-cell>
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
                <md-table-cell>Receive the step as <code>Number</code></md-table-cell>
                <md-table-cell>Triggered when the step number changes it's value and onload.</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>completed</md-table-cell>
                <md-table-cell>None</md-table-cell>
                <md-table-cell>Triggered when clicking on the finish button at the last step.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
        
        <api-table name="md-step">
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
                <md-table-cell>md-button-back</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The text to be displayed in the back button. Default: 'BACK'.</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-button-continue</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The text to be displayed in the coninue button. Default: 'CONTINUE' or 'FINISH' (if is the last step)</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-continue</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Ability to define if the step is completed and allowed to continue. Default: true</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-disabled</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Ability to disable the step. Default: false</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-editable</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>If the step is allowed to go 'back' after it has been completed. Default: false</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-icon</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Icon to use instead of the index number. Default: will use the step index</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-label</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The label of step header. Default: undefined</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-message</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The sub message to be used underneigh the step header label. Default: undefined</md-table-cell>
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
        <example-box card-title="Default steps">
          <div class="stepper-demo" slot="demo">
            <md-stepper>
              <md-step>
                <p>This seems something basic I need to do first before the next step.</p>
              </md-step>
              <md-step>
                <p>This seems something I need to focus on just after the first step.</p>
              </md-step>
              <md-step>
                <p>This seems something important I need to fix just right before the last step.</p>
              </md-step>
            </md-stepper>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-stepper&gt;
                &lt;md-step&gt;
                  &lt;p&gt;This seems something basic I need to do first before the next step.&lt;/p&gt;
                &lt;/md-step&gt;
                &lt;md-step&gt;
                  &lt;p&gt;This seems something I need to focus on just after the first step.&lt;/p&gt;
                &lt;/md-step&gt;
                &lt;md-step&gt;
                  &lt;p&gt;This seems something important I need to fix just right before the last step.&lt;/p&gt;
                &lt;/md-step&gt;
              &lt;/md-stepper&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Labels">
          <div class="stepper-demo" slot="demo">
            <md-stepper>
              <md-step md-label="Dunder Miflin">
                <p>This seems something basic I need to do first before the next step.</p>
              </md-step>
              <md-step md-label="Scraton" md-message="Pennsylvania">
                <p>This seems something I need to focus on just after the first step.</p>
              </md-step>
            </md-stepper>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-stepper&gt;
                &lt;md-step md-label="Dunder Miflin"&gt;
                  &lt;p&gt;This seems something basic I need to do first before the next step.&lt;/p&gt;
                &lt;/md-step&gt;
                &lt;md-step md-label="Scraton" md-message="Pennsylvania"&gt;
                  &lt;p&gt;This seems something I need to focus on just after the first step.&lt;/p&gt;
                &lt;/md-step&gt;
              &lt;/md-stepper&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Alternate Labels">
          <div class="stepper-demo" slot="demo">
            <md-stepper md-alternate-labels>
              <md-step md-label="Dunder Miflin">
                <p>This seems something basic I need to do first before the next step.</p>
              </md-step>
              <md-step md-label="Scraton" md-message="Pennsylvania">
                <p>This seems something I need to focus on just after the first step.</p>
              </md-step>
            </md-stepper>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-stepper md-alternate-labels&gt;
                &lt;md-step md-label="Dunder Miflin"&gt;
                  &lt;p&gt;This seems something basic I need to do first before the next step.&lt;/p&gt;
                &lt;/md-step&gt;
                &lt;md-step md-label="Scraton" md-message="Pennsylvania"&gt;
                  &lt;p&gt;This seems something I need to focus on just after the first step.&lt;/p&gt;
                &lt;/md-step&gt;
              &lt;/md-stepper&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Vertical steps">
          <div class="stepper-demo" slot="demo">
            <md-stepper md-vertical>
              <md-step>
                <p>This seems something basic I need to do first before the next step.</p>
              </md-step>
              <md-step>
                <p>This seems something I need to focus on just after the first step.</p>
              </md-step>
              <md-step>
                <p>This seems something important I need to fix just right before the last step.</p>
              </md-step>
            </md-stepper>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-stepper md-vertical&gt;
                &lt;md-step&gt;
                  &lt;p&gt;This seems something basic I need to do first before the next step.&lt;/p&gt;
                &lt;/md-step&gt;
                &lt;md-step&gt;
                  &lt;p&gt;This seems something I need to focus on just after the first step.&lt;/p&gt;
                &lt;/md-step&gt;
                &lt;md-step&gt;
                  &lt;p&gt;This seems something important I need to fix just right before the last step.&lt;/p&gt;
                &lt;/md-step&gt;
              &lt;/md-stepper&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Vertical with Labels">
          <div class="stepper-demo" slot="demo">
            <md-stepper md-vertical>
              <md-step md-label="Dunder Miflin">
                <p>This seems something basic I need to do first before the next step.</p>
              </md-step>
              <md-step md-label="Scraton" md-message="Pennsylvania">
                <p>This seems something I need to focus on just after the first step.</p>
              </md-step>
            </md-stepper>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-stepper md-vertical&gt;
                &lt;md-step md-label="Dunder Miflin"&gt;
                  &lt;p&gt;This seems something basic I need to do first before the next step.&lt;/p&gt;
                &lt;/md-step&gt;
                &lt;md-step md-label="Scraton" md-message="Pennsylvania"&gt;
                  &lt;p&gt;This seems something I need to focus on just after the first step.&lt;/p&gt;
                &lt;/md-step&gt;
              &lt;/md-stepper&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>
