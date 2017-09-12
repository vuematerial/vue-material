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
                <md-table-cell>On the horizontal display it will place the labels underneath the step icon. Default: <code>false</code></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-elevation</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Set the elevation of the container for each content and the horizontal header. Default: <code>1</code></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-vertical</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Will place the steps in a vertical position. Default: <code>false</code></md-table-cell>
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
                <md-table-cell>Triggered when the step number changes its value and onload.</md-table-cell>
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
                <md-table-cell>The text to be displayed in the back button. Default: <code>BACK</code>.</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-button-continue</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The text to be displayed in the coninue button. Default: <code>CONTINUE</code> (or <code>FINISH</code> if it is the last step)</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-continue</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Ability to define if the step is completed and allowed to continue. Default: <code>true</code></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-disabled</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Ability to disable the step. Default: <code>false</code></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-editable</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>If the step is allowed to go 'back' after it has been completed. Default: <code>false</code></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-error</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Ability to define if there are any errors in the step (like a validation error) Default: <code>false</code></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-icon</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Icon to use instead of the index number. Default: will use the step index</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-label</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The label of step header. Default: <code>undefined</code></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-message</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The sub message to be used underneigh the step header label. Default: <code>undefined</code></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-tooltip</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Add a tooltip on the tab header. Optional.</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-tooltip-delay</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Delay of the tab header tooltip. Default: <code>0</code></md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>md-tooltip-direction</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Direction of the tab header tooltip. Default: <code>bottom</code></md-table-cell>
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

        <example-box card-title="Validation step">
          <div class="stepper-demo" slot="demo">
            <md-stepper>
              <md-step :md-editable="true" md-label="Email" :md-error="!mailValid" :md-continue="mailValid" :md-message="invalidMessage" md-tooltip="Step 1">
                <p>Please enter your emailaddress</p>
                <md-input-container :class="{'md-input-invalid': !mailValid}">
                  <md-input type="email" v-model="mail" required/>
                  <label>Email</label>
                </md-input-container>
              </md-step>
              <md-step :md-disabled="!mailValid" md-tooltip="Step 2">
                <p>Yay {{mail}} is a valid emailadress</p>
              </md-step>
              <md-step :md-disabled="!mailValid" md-tooltip="Step 3">
                <p>This seems something important I need to fix just right before the last step.</p>
              </md-step>
            </md-stepper>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-stepper&gt;
                  &lt;md-step :md-editable=&quot;true&quot; md-label=&quot;Email&quot; :md-error=&quot;!mailValid&quot; :md-continue=&quot;mailValid&quot; :md-message=&quot;invalidMessage&quot;&gt;
                      &lt;p&gt;Please enter your emailaddress&lt;/p&gt;
                      &lt;md-input-container :class=&quot;{'md-input-invalid': !mailValid}&quot;&gt;
                          &lt;md-input type=&quot;email&quot; v-model=&quot;mail&quot; required/&gt;
                          &lt;label&gt;Email&lt;/label&gt;
                      &lt;/md-input-container&gt;
                  &lt;/md-step&gt;
                  &lt;md-step :md-disabled=&quot;!mailValid&quot;&gt;
                      &lt;p&gt;Yay &#123;&#123;mail&#125;&#125; is a valid emailadress&lt;/p&gt;
                  &lt;/md-step&gt;
                  &lt;md-step :md-disabled=&quot;!mailValid&quot;&gt;
                      &lt;p&gt;This seems something important I need to fix just right before the last step.&lt;/p&gt;
                  &lt;/md-step&gt;
              &lt;/md-stepper&gt;
            </code-block>
            <code-block lang="javascript">
              export default {
                data: () => ({
                  mail: '',
                  mailValid: false,
                  invalidMessage: 'Invalid mail'
                }),
                watch: {
                  mail() {
                    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                    this.mailValid = emailRegex.test(this.mail);
                    if (this.mailValid) {
                      this.invalidMessage = 'Valid mail';
                    } else {
                      this.invalidMessage = 'Invalid mail';
                    }
                  }
                }
              };
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
<script>
  export default {
    data: () => ({
      mail: '',
      mailValid: false,
      invalidMessage: 'Invalid mail'
    }),
    watch: {
      mail() {
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
        this.mailValid = emailRegex.test(this.mail);
        if (this.mailValid) {
          this.invalidMessage = 'Valid mail';
        } else {
          this.invalidMessage = 'Invalid mail';
        }
      }
    }
  };
</script>
