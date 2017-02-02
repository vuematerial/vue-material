<template>
  <page-content page-title="Components - Dialog">
    <docs-component>
      <div slot="description">
        <p>Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.</p>
        <p>The dialog component works with any plain html content. You can have tabs, all form components and more.</p>
        <p>Alternativelly you can use three presets to build Alerts, Confirms and Prompt dialogs.</p>
        <p>The preset component is created on top of <code>&lt;md-dialog&gt;</code>. You should provide the content or the HTML content at least.</p>
        <p>All the pressets can use the same options and events from the <code>&lt;md-dialog&gt;</code> component.</p>
      </div>

      <div slot="api">
        <api-table name="md-dialog">
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
                <md-table-cell>md-click-outside-to-close</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Enable or disable click outside to close. Default: <code>true</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-esc-to-close</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Enable or disable close on esc key. Default: <code>true</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-backdrop</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Create an opaque backdrop behind the dialog. Default: <code>true</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-open-from</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The query selector of the element that is used to determine from which the Dialog will open.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-close-to</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The query selector of the element that is used to determine from which the Dialog will close.</md-table-cell>
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
                <md-table-cell>open</md-table-cell>
                <md-table-cell>Receive the state of the dialog: <code>ok</code>| <code>cancel</code> <br>Works only for Confirm and Prompt</md-table-cell>
                <md-table-cell>Triggered when the dialog open.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>close</md-table-cell>
                <md-table-cell>Receive the state of the dialog: <code>ok</code>| <code>cancel</code> <br>Works only for Confirm and Prompt</md-table-cell>
                <md-table-cell>Triggered when the dialog closes.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>

          <md-table slot="methods">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>open</md-table-cell>
                <md-table-cell>Open the dialog.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>close</md-table-cell>
                <md-table-cell>Close the dialog.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table name="md-dialog-title">
          <p>Can display a title on the top of the Dialog.</p>
          <p>No options available</p>
        </api-table>

        <api-table name="md-dialog-content">
          <p>Used to display rich content inside the Dialog.</p>
          <p>No options available</p>
        </api-table>

        <api-table name="md-dialog-actions">
          <p>Hold the actions of a dialog and align them on the right. Here you can add <code>&lt;md-button&gt;</code> with or without icons.</p>
          <p>No options available</p>
        </api-table>

        <api-table name="md-dialog-alert">
          <div slot="properties">
            <md-table>
              <md-table-header>
                <md-table-row>
                  <md-table-head>Name</md-table-head>
                  <md-table-head>Type</md-table-head>
                  <md-table-head>Description</md-table-head>
                </md-table-row>
              </md-table-header>

              <md-table-body>
                <md-table-row>
                  <md-table-cell>md-title</md-table-cell>
                  <md-table-cell><code>String</code></md-table-cell>
                  <md-table-cell>Sets the alert title. Optional.</md-table-cell>
                </md-table-row>

                <md-table-row>
                  <md-table-cell>md-content</md-table-cell>
                  <md-table-cell><code>String</code></md-table-cell>
                  <md-table-cell>Sets the alert content.</md-table-cell>
                </md-table-row>

                <md-table-row>
                  <md-table-cell>md-content-html</md-table-cell>
                  <md-table-cell><code>String</code></md-table-cell>
                  <md-table-cell>Sets the alert content with a custom html.</md-table-cell>
                </md-table-row>

                <md-table-row>
                  <md-table-cell>md-ok-text</md-table-cell>
                  <md-table-cell><code>String</code></md-table-cell>
                  <md-table-cell>Sets the alert "Okay" button text.</md-table-cell>
                </md-table-row>
              </md-table-body>
            </md-table>
          </div>
        </api-table>

        <api-table name="md-dialog-confirm">
          <div slot="properties">
            <md-table>
              <md-table-header>
                <md-table-row>
                  <md-table-head>Name</md-table-head>
                  <md-table-head>Type</md-table-head>
                  <md-table-head>Description</md-table-head>
                </md-table-row>
              </md-table-header>

              <md-table-body>
                <md-table-row>
                  <md-table-cell>md-title</md-table-cell>
                  <md-table-cell><code>String</code></md-table-cell>
                  <md-table-cell>Sets the confirm title. Optional.</md-table-cell>
                </md-table-row>

                <md-table-row>
                  <md-table-cell>md-content</md-table-cell>
                  <md-table-cell><code>String</code></md-table-cell>
                  <md-table-cell>Sets the confirm content.</md-table-cell>
                </md-table-row>

                <md-table-row>
                  <md-table-cell>md-content-html</md-table-cell>
                  <md-table-cell><code>String</code></md-table-cell>
                  <md-table-cell>Sets the confirm content with a custom html.</md-table-cell>
                </md-table-row>

                <md-table-row>
                  <md-table-cell>md-ok-text</md-table-cell>
                  <md-table-cell><code>String</code></md-table-cell>
                  <md-table-cell>Sets the confirm "Okay" button text.</md-table-cell>
                </md-table-row>

                <md-table-row>
                  <md-table-cell>md-cancel-text</md-table-cell>
                  <md-table-cell><code>String</code></md-table-cell>
                  <md-table-cell>Sets the confirm "Cancel" button text.</md-table-cell>
                </md-table-row>
              </md-table-body>
            </md-table>
          </div>
        </api-table>

        <api-table name="md-dialog-prompt">
          <div slot="properties">
            <md-table>
              <md-table-header>
                <md-table-row>
                  <md-table-head>Name</md-table-head>
                  <md-table-head>Type</md-table-head>
                  <md-table-head>Description</md-table-head>
                </md-table-row>
              </md-table-header>

              <md-table-body>
                <md-table-row>
                  <md-table-cell>md-title</md-table-cell>
                  <md-table-cell><code>String</code></md-table-cell>
                  <md-table-cell>Sets the prompt title. Optional.</md-table-cell>
                </md-table-row>

                <md-table-row>
                  <md-table-cell>md-content</md-table-cell>
                  <md-table-cell><code>String</code></md-table-cell>
                  <md-table-cell>Sets the prompt content.</md-table-cell>
                </md-table-row>

                <md-table-row>
                  <md-table-cell>md-content-html</md-table-cell>
                  <md-table-cell><code>String</code></md-table-cell>
                  <md-table-cell>Sets the prompt content with a custom html.</md-table-cell>
                </md-table-row>

                <md-table-row>
                  <md-table-cell>md-ok-text</md-table-cell>
                  <md-table-cell><code>String</code></md-table-cell>
                  <md-table-cell>Sets the prompt "Okay" button text.</md-table-cell>
                </md-table-row>

                <md-table-row>
                  <md-table-cell>md-cancel-text</md-table-cell>
                  <md-table-cell><code>String</code></md-table-cell>
                  <md-table-cell>Sets the prompt "Cancel" button text.</md-table-cell>
                </md-table-row>

                <md-table-row>
                  <md-table-cell>v-model</md-table-cell>
                  <md-table-cell><code>String</code></md-table-cell>
                  <md-table-cell>A required model object to be bind when the value is confirmed.</md-table-cell>
                </md-table-row>

                <md-table-row>
                  <md-table-cell>md-input-id</md-table-cell>
                  <md-table-cell><code>String</code></md-table-cell>
                  <md-table-cell>Set the ID of the field inside the prompt dialog.</md-table-cell>
                </md-table-row>

                <md-table-row>
                  <md-table-cell>md-input-name</md-table-cell>
                  <md-table-cell><code>String</code></md-table-cell>
                  <md-table-cell>Set the name of the field inside the prompt dialog.</md-table-cell>
                </md-table-row>

                <md-table-row>
                  <md-table-cell>md-input-maxlength</md-table-cell>
                  <md-table-cell><code>String</code></md-table-cell>
                  <md-table-cell>Set the optional maxlength of the field inside the prompt dialog with the text count.</md-table-cell>
                </md-table-row>

                <md-table-row>
                  <md-table-cell>md-input-placeholder</md-table-cell>
                  <md-table-cell><code>String</code></md-table-cell>
                  <md-table-cell>Set the optional placeholder of the field inside the prompt dialog.</md-table-cell>
                </md-table-row>
              </md-table-body>
            </md-table>
          </div>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Custom">
          <div class="dialog-fab" slot="demo">
            <md-dialog md-open-from="#custom" md-close-to="#custom" ref="dialog1">
              <md-dialog-title>Lorem ipsum dolor sit amet</md-dialog-title>

              <md-dialog-content>Nemo, nobis necessitatibus ut illo, ducimus ex.</md-dialog-content>

              <md-dialog-actions>
                <md-button class="md-primary" @click="closeDialog('dialog1')">Cancel</md-button>
                <md-button class="md-primary" @click="closeDialog('dialog1')">Ok</md-button>
              </md-dialog-actions>
            </md-dialog>

            <md-dialog md-open-from="#fab" md-close-to="#fab" ref="dialog2">
              <md-dialog-title>Create new note</md-dialog-title>

              <md-dialog-content>
                <form>
                  <md-input-container>
                    <label>Note</label>
                    <md-textarea></md-textarea>
                  </md-input-container>
                </form>
              </md-dialog-content>

              <md-dialog-actions>
                <md-button class="md-primary" @click="closeDialog('dialog2')">Cancel</md-button>
                <md-button class="md-primary" @click="closeDialog('dialog2')">Create</md-button>
              </md-dialog-actions>
            </md-dialog>

            <md-button class="md-primary md-raised" id="custom" @click="openDialog('dialog1')">Custom</md-button>
            <md-button class="md-fab md-fab-bottom-right" id="fab" @click="openDialog('dialog2')">
              <md-icon>add</md-icon>
            </md-button>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-dialog md-open-from=&quot;#custom&quot; md-close-to=&quot;#custom&quot; ref=&quot;dialog1&quot;&gt;
                &lt;md-dialog-title&gt;Lorem ipsum dolor sit amet&lt;/md-dialog-title&gt;

                &lt;md-dialog-content&gt;Nemo, nobis necessitatibus ut illo, ducimus ex.&lt;/md-dialog-content&gt;

                &lt;md-dialog-actions&gt;
                  &lt;md-button class=&quot;md-primary&quot; @click=&quot;closeDialog(&apos;dialog1&apos;)&quot;&gt;Cancel&lt;/md-button&gt;
                  &lt;md-button class=&quot;md-primary&quot; @click=&quot;closeDialog(&apos;dialog1&apos;)&quot;&gt;Ok&lt;/md-button&gt;
                &lt;/md-dialog-actions&gt;
              &lt;/md-dialog&gt;

              &lt;md-dialog md-open-from=&quot;#fab&quot; md-close-to=&quot;#fab&quot; ref=&quot;dialog2&quot;&gt;
                &lt;md-dialog-title&gt;Create new note&lt;/md-dialog-title&gt;

                &lt;md-dialog-content&gt;
                  &lt;form&gt;
                    &lt;md-input-container&gt;
                      &lt;label&gt;Note&lt;/label&gt;
                      &lt;md-textarea&gt;&lt;/md-textarea&gt;
                    &lt;/md-input-container&gt;
                  &lt;/form&gt;
                &lt;/md-dialog-content&gt;

                &lt;md-dialog-actions&gt;
                  &lt;md-button class=&quot;md-primary&quot; @click=&quot;closeDialog(&apos;dialog2&apos;)&quot;&gt;Cancel&lt;/md-button&gt;
                  &lt;md-button class=&quot;md-primary&quot; @click=&quot;closeDialog(&apos;dialog2&apos;)&quot;&gt;Create&lt;/md-button&gt;
                &lt;/md-dialog-actions&gt;
              &lt;/md-dialog&gt;

              &lt;md-button class=&quot;md-primary md-raised&quot; id=&quot;custom&quot; @click=&quot;openDialog(&apos;dialog1&apos;)&quot;&gt;Custom&lt;/md-button&gt;
              &lt;md-button class=&quot;md-fab md-fab-bottom-right&quot; id=&quot;fab&quot; @click=&quot;openDialog(&apos;dialog2&apos;)&quot;&gt;
                &lt;md-icon&gt;add&lt;/md-icon&gt;
              &lt;/md-button&gt;
            </code-block>

            <code-block lang="javascript">
              export default {
                methods: {
                  openDialog(ref) {
                    this.$refs[ref].open();
                  },
                  closeDialog(ref) {
                    this.$refs[ref].close();
                  },
                  onOpen() {
                    console.log(&apos;Opened&apos;);
                  },
                  onClose(type) {
                    console.log(&apos;Closed&apos;, type);
                  }
                }
              };
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Alerts">
          <div slot="demo">
            <md-dialog-alert
              :md-content="alert.content"
              :md-ok-text="alert.ok"
              @open="onOpen"
              @close="onClose"
              ref="dialog3">
            </md-dialog-alert>

            <md-dialog-alert
              :md-title="alert2.title"
              :md-content-html="alert2.contentHtml"
              @open="onOpen"
              @close="onClose"
              ref="dialog4">
            </md-dialog-alert>

            <md-button class="md-primary md-raised" @click="openDialog('dialog3')">Alert</md-button>
            <md-button class="md-primary md-raised" @click="openDialog('dialog4')">Alert with HTML</md-button>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-dialog-alert
                :md-content=&quot;alert.content&quot;
                :md-ok-text=&quot;alert.ok&quot;
                @open=&quot;onOpen&quot;
                @close=&quot;onClose&quot;
                ref=&quot;dialog3&quot;&gt;
              &lt;/md-dialog-alert&gt;

              &lt;md-dialog-alert
                :md-title=&quot;alert2.title&quot;
                :md-content-html=&quot;alert2.contentHtml&quot;
                @open=&quot;onOpen&quot;
                @close=&quot;onClose&quot;
                ref=&quot;dialog4&quot;&gt;
              &lt;/md-dialog-alert&gt;

              &lt;md-button class=&quot;md-primary md-raised&quot; @click=&quot;openDialog(&apos;dialog3&apos;)&quot;&gt;Alert&lt;/md-button&gt;
              &lt;md-button class=&quot;md-primary md-raised&quot; @click=&quot;openDialog(&apos;dialog4&apos;)&quot;&gt;Alert with HTML&lt;/md-button&gt;
            </code-block>

            <code-block lang="javascript">
              export default {
                data: () =&gt; ({
                  alert: {
                    content: &apos;Your post has been deleted!&apos;,
                    ok: &apos;Cool!&apos;
                  },
                  alert2: {
                    title: &apos;Post created!&apos;,
                    contentHtml: &apos;Your post &lt;strong&gt;Material Design is awesome&lt;/strong&gt; has been created.&apos;
                  }
                }),
                methods: {
                  openDialog(ref) {
                    this.$refs[ref].open();
                  },
                  closeDialog(ref) {
                    this.$refs[ref].close();
                  },
                  onOpen() {
                    console.log(&apos;Opened&apos;);
                  },
                  onClose(type) {
                    console.log(&apos;Closed&apos;, type);
                  }
                }
              };
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Confirm">
          <div slot="demo">
            <md-dialog-confirm
              :md-title="confirm.title"
              :md-content-html="confirm.contentHtml"
              :md-ok-text="confirm.ok"
              :md-cancel-text="confirm.cancel"
              @open="onOpen"
              @close="onClose"
              ref="dialog5">
            </md-dialog-confirm>

            <md-button class="md-primary md-raised" @click="openDialog('dialog5')">Confirm</md-button>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-dialog-confirm
                :md-title=&quot;confirm.title&quot;
                :md-content-html=&quot;confirm.contentHtml&quot;
                :md-ok-text=&quot;confirm.ok&quot;
                :md-cancel-text=&quot;confirm.cancel&quot;
                @open=&quot;onOpen&quot;
                @close=&quot;onClose&quot;
                ref=&quot;dialog5&quot;&gt;
              &lt;/md-dialog-confirm&gt;

              &lt;md-button class=&quot;md-primary md-raised&quot; @click=&quot;openDialog(&apos;dialog5&apos;)&quot;&gt;Confirm&lt;/md-button&gt;
            </code-block>

            <code-block lang="javascript">
              export default {
                data: () =&gt; ({
                  confirm: {
                    title: &apos;Use Google\&apos;s location service?&apos;,
                    contentHtml: &apos;Let Google help apps determine location. &lt;br&gt; This means sending &lt;strong&gt;anonymous&lt;/strong&gt; location data to Google, even when no apps are running.&apos;,
                    ok: &apos;Agree&apos;,
                    cancel: &apos;Disagree&apos;
                  }
                }),
                methods: {
                  openDialog(ref) {
                    this.$refs[ref].open();
                  },
                  closeDialog(ref) {
                    this.$refs[ref].close();
                  },
                  onOpen() {
                    console.log(&apos;Opened&apos;);
                  },
                  onClose(type) {
                    console.log(&apos;Closed&apos;, type);
                  }
                }
              };
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Prompt">
          <div slot="demo">
            <md-dialog-prompt
              :md-title="prompt.title"
              :md-ok-text="prompt.ok"
              :md-cancel-text="prompt.cancel"
              :md-input-id="prompt.id"
              :md-input-name="prompt.name"
              :md-input-maxlength="prompt.maxlength"
              :md-input-placeholder="prompt.placeholder"
              v-model="prompt.value"
              @open="onOpen"
              @close="onClose"
              ref="dialog6">
            </md-dialog-prompt>

            <md-button class="md-primary md-raised" @click="openDialog('dialog6')">Prompt</md-button>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-dialog-prompt
                :md-title=&quot;prompt.title&quot;
                :md-ok-text=&quot;prompt.ok&quot;
                :md-cancel-text=&quot;prompt.cancel&quot;
                @open=&quot;onOpen&quot;
                @close=&quot;onClose&quot;
                ref=&quot;dialog6&quot;&gt;
              &lt;/md-dialog-prompt&gt;

              &lt;md-button class=&quot;md-primary md-raised&quot; @click=&quot;openDialog(&apos;dialog6&apos;)&quot;&gt;Prompt&lt;/md-button&gt;
            </code-block>

            <code-block lang="javascript">
              export default {
                data: () =&gt; ({
                  prompt: {
                    title: &apos;What\&apos;s your name?&apos;,
                    ok: &apos;Done&apos;,
                    cancel: &apos;Cancel&apos;,
                    id: &apos;name&apos;,
                    name: &apos;name&apos;,
                    placeholder: &apos;Type your name...&apos;,
                    maxlength: 30,
                    value: &apos;&apos;
                  }
                }),
                methods: {
                  openDialog(ref) {
                    this.$refs[ref].open();
                  },
                  closeDialog(ref) {
                    this.$refs[ref].close();
                  },
                  onOpen() {
                    console.log(&apos;Opened&apos;);
                  },
                  onClose(type) {
                    console.log(&apos;Closed&apos;, type);
                  }
                }
              };
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="sass" scoped>
  .dialog-fab {
    height: 200px;
  }
</style>

<script>
  export default {
    data: () => ({
      alert: {
        content: 'Your post has been deleted!',
        ok: 'Cool!'
      },
      alert2: {
        title: 'Post created!',
        contentHtml: 'Your post <strong>Material Design is awesome</strong> has been created.'
      },
      confirm: {
        title: 'Use Google\'s location service?',
        contentHtml: 'Let Google help apps determine location. <br> This means sending <strong>anonymous</strong> location data to Google, even when no apps are running.',
        ok: 'Agree',
        cancel: 'Disagree'
      },
      prompt: {
        title: 'What\'s your name?',
        ok: 'Done',
        cancel: 'Cancel',
        id: 'name',
        name: 'name',
        placeholder: 'Type your name...',
        maxlength: 30,
        value: ''
      }
    }),
    methods: {
      openDialog(ref) {
        this.$refs[ref].open();
      },
      closeDialog(ref) {
        this.$refs[ref].close();
      },
      onOpen() {
        console.log('Opened');
      },
      onClose(type) {
        console.log('Closed', type);
      }
    }
  };
</script>
