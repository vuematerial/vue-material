<template>
  <demo-page label="Components - Button">
    <div slot="examples">
      <demo-example label="Flat">
        <md-button @click="disablePrimaryButton">Default</md-button>
        <md-button class="md-primary" :disabled="buttonDisabled">Primary</md-button>
        <md-button class="md-accent">Accent</md-button>
        <md-button class="md-warn">Warn</md-button>
        <md-button class="md-primary" :disabled="!buttonDisabled">Disabled</md-button>
        <md-button class="md-dense">Dense</md-button>
      </demo-example>

      <demo-example label="Raised">
        <md-button class="md-raised" @click="disablePrimaryButton">Default</md-button>
        <md-button class="md-raised md-primary" :disabled="buttonDisabled">Primary</md-button>
        <md-button class="md-raised md-accent">Accent</md-button>
        <md-button class="md-raised md-warn">Warn</md-button>
        <md-button class="md-raised md-primary" :disabled="!buttonDisabled">Disabled</md-button>
        <md-button class="md-raised md-dense">Dense</md-button>
      </demo-example>

      <demo-example label="Themed">
        <md-button class="md-raised md-primary" @click="disablePrimaryButton" v-md-theme="'indigo'">Indigo</md-button>
        <md-button class="md-raised md-primary" :disabled="buttonDisabled" v-md-theme="'teal'">Teal</md-button>
        <md-button class="md-raised md-primary" v-md-theme="'green'">Green</md-button>
        <md-button class="md-raised md-primary" v-md-theme="'white'">White</md-button>
        <md-button class="md-raised md-primary" :disabled="!buttonDisabled" v-md-theme="'brown'">Brown</md-button>
        <md-button class="md-raised md-primary md-dense" v-md-theme="'orange'">Orange</md-button>
      </demo-example>

      <demo-example label="Links">
        <md-button href="#/components/button" class="md-raised" @click="disablePrimaryButton">Default</md-button>
        <md-button href="#/components/button" class="md-raised md-primary" :disabled="buttonDisabled">Primary</md-button>
        <md-button href="#/components/button" class="md-raised md-accent">Accent</md-button>
        <md-button href="#/components/button" class="md-raised md-warn">Warn</md-button>
        <md-button href="#/components/button" class="md-raised md-primary" :disabled="!buttonDisabled">Disabled</md-button>
        <md-button href="#/components/button" class="md-raised md-dense">Dense</md-button>
      </demo-example>

      <demo-example label="Icons - Flat">
        <md-button class="md-icon-button" @click="disablePrimaryButton">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-primary" :disabled="buttonDisabled">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-accent">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-warn">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button" :disabled="!buttonDisabled">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-dense">
          <md-icon>add</md-icon>
        </md-button>
      </demo-example>

      <demo-example label="Icons - Raised">
        <md-button class="md-icon-button md-raised" @click="disablePrimaryButton">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-raised md-primary" :disabled="buttonDisabled">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-raised md-accent">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-raised md-warn">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-raised" :disabled="!buttonDisabled">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-raised md-dense">
          <md-icon>add</md-icon>
        </md-button>
      </demo-example>

      <demo-example label="Floating Action Button" height="360">
        <md-button class="md-fab md-fab-bottom-right">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-fab md-fab-bottom-left md-mini">
          <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-fab">
          <md-icon>edit</md-icon>
        </md-button>

        <md-button class="md-fab md-mini">
          <md-icon>edit</md-icon>
        </md-button>

        <md-button class="md-fab md-primary">
          <md-icon>email</md-icon>
        </md-button>

        <md-button class="md-fab md-primary md-mini">
          <md-icon>email</md-icon>
        </md-button>

        <md-button class="md-fab md-warn">
          <md-icon>save</md-icon>
        </md-button>

        <md-button class="md-fab md-warn md-mini">
          <md-icon>save</md-icon>
        </md-button>

        <md-button class="md-fab md-clean">
          <md-icon>chat</md-icon>
        </md-button>

        <md-button class="md-fab md-clean md-mini">
          <md-icon>chat</md-icon>
        </md-button>

        <md-button class="md-fab" disabled>
          <md-icon>message</md-icon>
        </md-button>

        <md-button class="md-fab md-mini" disabled>
          <md-icon>message</md-icon>
        </md-button>
      </demo-example>
    </div>

    <div slot="code">
      <demo-example label="Flat">
        <code-block lang="html">
&lt;md-button&gt;Default&lt;/md-button&gt;
&lt;md-button class=&quot;md-primary&quot;&gt;Primary&lt;/md-button&gt;
&lt;md-button class=&quot;md-accent&quot;&gt;Accent&lt;/md-button&gt;
&lt;md-button class=&quot;md-warn&quot;&gt;Warn&lt;/md-button&gt;
&lt;md-button class=&quot;md-primary&quot; disabled&gt;Disabled&lt;/md-button&gt;
&lt;md-button class=&quot;md-dense&quot;&gt;Dense&lt;/md-button&gt;
        </code-block>
      </demo-example>

      <demo-example label="Raised">
        <code-block lang="xml">
&lt;md-button class=&quot;md-raised&quot;&gt;Default&lt;/md-button&gt;
&lt;md-button class=&quot;md-raised md-primary&quot;&gt;Primary&lt;/md-button&gt;
&lt;md-button class=&quot;md-raised md-accent&quot;&gt;Accent&lt;/md-button&gt;
&lt;md-button class=&quot;md-raised md-warn&quot;&gt;Warn&lt;/md-button&gt;
&lt;md-button class=&quot;md-raised md-primary&quot; disabled&gt;Disabled&lt;/md-button&gt;
&lt;md-button class=&quot;md-raised md-dense&quot;&gt;Dense&lt;/md-button&gt;
        </code-block>
      </demo-example>

      <demo-example label="Themed">
        <code-block lang="xml">
&lt;md-button class=&quot;md-raised md-primary&quot; v-md-theme=&quot;&#039;indigo&#039;&quot;&gt;Indigo&lt;/md-button&gt;
&lt;md-button class=&quot;md-raised md-primary&quot; v-md-theme=&quot;&#039;teal&#039;&quot;&gt;Teal&lt;/md-button&gt;
&lt;md-button class=&quot;md-raised md-primary&quot; v-md-theme=&quot;&#039;green&#039;&quot;&gt;Green&lt;/md-button&gt;
&lt;md-button class=&quot;md-raised md-primary&quot; v-md-theme=&quot;&#039;white&#039;&quot;&gt;White&lt;/md-button&gt;
&lt;md-button class=&quot;md-raised md-primary&quot; disabled v-md-theme=&quot;&#039;brown&#039;&quot;&gt;Brown&lt;/md-button&gt;
&lt;md-button class=&quot;md-raised md-primary md-dense&quot; v-md-theme=&quot;&#039;orange&#039;&quot;&gt;Orange&lt;/md-button&gt;
        </code-block>
      </demo-example>

      <demo-example label="Links">
        <code-block lang="xml">
&lt;md-button href=&quot;#/components/button&quot; class=&quot;md-raised&quot;&gt;Default&lt;/md-button&gt;
&lt;md-button href=&quot;#/components/button&quot; class=&quot;md-raised md-primary&quot;&gt;Primary&lt;/md-button&gt;
&lt;md-button href=&quot;#/components/button&quot; class=&quot;md-raised md-accent&quot;&gt;Accent&lt;/md-button&gt;
&lt;md-button href=&quot;#/components/button&quot; class=&quot;md-raised md-warn&quot;&gt;Warn&lt;/md-button&gt;
&lt;md-button href=&quot;#/components/button&quot; class=&quot;md-raised md-primary&quot; disabled&gt;Disabled&lt;/md-button&gt;
&lt;md-button href=&quot;#/components/button&quot; class=&quot;md-raised md-dense&quot;&gt;Dense&lt;/md-button&gt;
        </code-block>
      </demo-example>

      <demo-example label="Icons - Flat">
          <code-block lang="xml">
&lt;md-button class=&quot;md-icon-button&quot;&gt;
  &lt;md-icon&gt;add&lt;/md-icon&gt;
&lt;/md-button&gt;

&lt;md-button class=&quot;md-icon-button md-primary&quot;&gt;
  &lt;md-icon&gt;add&lt;/md-icon&gt;
&lt;/md-button&gt;

&lt;md-button class=&quot;md-icon-button md-accent&quot;&gt;
  &lt;md-icon&gt;add&lt;/md-icon&gt;
&lt;/md-button&gt;

&lt;md-button class=&quot;md-icon-button md-warn&quot;&gt;
  &lt;md-icon&gt;add&lt;/md-icon&gt;
&lt;/md-button&gt;

&lt;md-button class=&quot;md-icon-button&quot; disabled&gt;
  &lt;md-icon&gt;add&lt;/md-icon&gt;
&lt;/md-button&gt;

&lt;md-button class=&quot;md-icon-button md-dense&quot;&gt;
  &lt;md-icon&gt;add&lt;/md-icon&gt;
&lt;/md-button&gt;
        </code-block>
      </demo-example>

      <demo-example label="Icons - Raised">
        <code-block lang="xml">
&lt;md-button class=&quot;md-icon-button md-raised&quot;&gt;
  &lt;md-icon&gt;add&lt;/md-icon&gt;
&lt;/md-button&gt;

&lt;md-button class=&quot;md-icon-button md-raised md-primary&quot;&gt;
  &lt;md-icon&gt;add&lt;/md-icon&gt;
&lt;/md-button&gt;

&lt;md-button class=&quot;md-icon-button md-raised md-accent&quot;&gt;
  &lt;md-icon&gt;add&lt;/md-icon&gt;
&lt;/md-button&gt;

&lt;md-button class=&quot;md-icon-button md-raised md-warn&quot;&gt;
  &lt;md-icon&gt;add&lt;/md-icon&gt;
&lt;/md-button&gt;

&lt;md-button class=&quot;md-icon-button md-raised&quot; disabled&gt;
  &lt;md-icon&gt;add&lt;/md-icon&gt;
&lt;/md-button&gt;

&lt;md-button class=&quot;md-icon-button md-raised md-dense&quot;&gt;
  &lt;md-icon&gt;add&lt;/md-icon&gt;
&lt;/md-button&gt;
        </code-block>
      </demo-example>

      <demo-example label="Floating Action Button">
        <code-block lang="xml">
&lt;md-button class=&quot;md-fab md-fab-bottom-right&quot;&gt;
  &lt;md-icon&gt;add&lt;/md-icon&gt;
&lt;/md-button&gt;

&lt;md-button class=&quot;md-fab md-fab-bottom-left md-mini&quot;&gt;
  &lt;md-icon&gt;add&lt;/md-icon&gt;
&lt;/md-button&gt;

&lt;md-button class=&quot;md-fab&quot;&gt;
  &lt;md-icon&gt;edit&lt;/md-icon&gt;
&lt;/md-button&gt;

&lt;md-button class=&quot;md-fab md-mini&quot;&gt;
  &lt;md-icon&gt;edit&lt;/md-icon&gt;
&lt;/md-button&gt;

&lt;md-button class=&quot;md-fab md-primary&quot;&gt;
  &lt;md-icon&gt;email&lt;/md-icon&gt;
&lt;/md-button&gt;

&lt;md-button class=&quot;md-fab md-primary md-mini&quot;&gt;
  &lt;md-icon&gt;email&lt;/md-icon&gt;
&lt;/md-button&gt;

&lt;md-button class=&quot;md-fab md-warn&quot;&gt;
  &lt;md-icon&gt;save&lt;/md-icon&gt;
&lt;/md-button&gt;

&lt;md-button class=&quot;md-fab md-warn md-mini&quot;&gt;
  &lt;md-icon&gt;save&lt;/md-icon&gt;
&lt;/md-button&gt;

&lt;md-button class=&quot;md-fab md-clean&quot;&gt;
  &lt;md-icon&gt;chat&lt;/md-icon&gt;
&lt;/md-button&gt;

&lt;md-button class=&quot;md-fab md-clean md-mini&quot;&gt;
  &lt;md-icon&gt;chat&lt;/md-icon&gt;
&lt;/md-button&gt;

&lt;md-button class=&quot;md-fab&quot; disabled&gt;
  &lt;md-icon&gt;message&lt;/md-icon&gt;
&lt;/md-button&gt;

&lt;md-button class=&quot;md-fab md-mini&quot; disabled&gt;
  &lt;md-icon&gt;message&lt;/md-icon&gt;
&lt;/md-button&gt;
        </code-block>
      </demo-example>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>

<script>
  export default {
    data() {
      return {
        buttonDisabled: false
      };
    },
    methods: {
      disablePrimaryButton() {
        this.buttonDisabled = !this.buttonDisabled;
      }
    }
  };
</script>
