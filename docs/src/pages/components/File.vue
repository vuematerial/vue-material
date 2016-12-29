<template>
  <page-content page-title="Components - File">
    <docs-component>
      <div slot="description">
        <p>The file picker aim to select files like images, videos and other formats. They can have multiselection and use the devide file system to pick the file.</p>
      </div>

      <div slot="api">
        <api-table name="md-file">
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
                <md-table-cell>v-model</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>A required model object to bind the value.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>id</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Sets the input id.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>name</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Sets the input name.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>disabled</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Disable the input and prevent his actions. Default <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>required</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Apply the required rule to style the label with an "*". Default <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>accept</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Filter files that can be selected by mimetype pattern.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>multiple</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Enable multiple selection.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Single File">
          <div slot="demo">
            <md-input-container>
              <label>Single</label>
              <md-file v-model="single"></md-file>
            </md-input-container>

            <md-input-container>
              <md-file v-model="placeholder" placeholder="A nice input placeholder"></md-file>
            </md-input-container>

            <md-input-container>
              <md-file placeholder="Disabled" disabled></md-file>
            </md-input-container>

            <md-input-container>
              <label>Initial Value</label>
              <md-file v-model="initialValue"></md-file>
            </md-input-container>

            <md-input-container>
              <label>Multiple</label>
              <md-file v-model="multiple" multiple></md-file>
            </md-input-container>

            <md-input-container>
              <label>Only Images</label>
              <md-file v-model="onlyImages" accept="image/*"></md-file>
            </md-input-container>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-input-container&gt;
                &lt;label&gt;Single&lt;/label&gt;
                &lt;md-file v-model=&quot;single&quot;&gt;&lt;/md-file&gt;
              &lt;/md-input-container&gt;

              &lt;md-input-container&gt;
                &lt;md-file v-model=&quot;placeholder&quot; placeholder=&quot;A nice input placeholder&quot;&gt;&lt;/md-file&gt;
              &lt;/md-input-container&gt;

              &lt;md-input-container&gt;
                &lt;md-file placeholder=&quot;Disabled&quot; disabled&gt;&lt;/md-file&gt;
              &lt;/md-input-container&gt;

              &lt;md-input-container&gt;
                &lt;label&gt;Initial Value&lt;/label&gt;
                &lt;md-file v-model=&quot;initialValue&quot;&gt;&lt;/md-file&gt;
              &lt;/md-input-container&gt;

              &lt;md-input-container&gt;
                &lt;label&gt;Multiple&lt;/label&gt;
                &lt;md-file v-model=&quot;multiple&quot; multiple&gt;&lt;/md-file&gt;
              &lt;/md-input-container&gt;

              &lt;md-input-container&gt;
                &lt;label&gt;Only Images&lt;/label&gt;
                &lt;md-file v-model=&quot;onlyImages&quot; accept=&quot;image/*&quot;&gt;&lt;/md-file&gt;
              &lt;/md-input-container&gt;
            </code-block>

            <code-block lang="javascript">
              export default {
                data: () => ({
                  single: null,
                  placeholder: null,
                  initialValue: 'my-profile-picture.jpg',
                  multiple: null,
                  onlyImages: null
                })
              };
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
      single: null,
      placeholder: null,
      initialValue: 'my-profile-picture.jpg',
      multiple: null,
      onlyImages: null
    })
  };
</script>
