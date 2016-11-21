<template>
  <demo-page label="Components - Input">
    <div slot="examples">
      <demo-example label="Regular fields" size="4">
        <form novalidate @submit.stop.prevent="submit">
          <md-input-container>
            <label>Initial value</label>
            <md-input v-model="initialValue"></md-input>
          </md-input-container>

          <md-input-container>
            <label>With label</label>
            <md-input placeholder="My nice placeholder"></md-input>
          </md-input-container>

          <md-input-container md-inline>
            <label>Inline field</label>
            <md-input></md-input>
          </md-input-container>

          <md-input-container>
            <label>Number</label>
            <md-input type="number"></md-input>
          </md-input-container>

          <md-input-container>
            <label>Textarea</label>
            <md-textarea></md-textarea>
          </md-input-container>

          <md-input-container>
            <label>Disabled</label>
            <md-input disabled></md-input>
          </md-input-container>
        </form>
      </demo-example>

      <demo-example label="Password" size="4">
        <form novalidate @submit.stop.prevent="submit">
          <md-input-container>
            <label>Regular Password</label>
            <md-input type="password"></md-input>
          </md-input-container>

          <md-input-container md-has-password>
            <label>Password Reveal</label>
            <md-input type="password"></md-input>
          </md-input-container>
        </form>
      </demo-example>

      <demo-example label="Required and Errors" size="4">
        <form novalidate @submit.stop.prevent="submit">
          <md-input-container>
            <label>Required</label>
            <md-input required></md-input>
          </md-input-container>

          <md-input-container class="md-input-invalid">
            <label>Error</label>
            <md-input required></md-input>
          </md-input-container>

          <md-input-container class="md-input-invalid">
            <label>Error with message</label>
            <md-input required></md-input>

            <span class="md-error">Validation message</span>
          </md-input-container>

          <md-input-container class="md-input-invalid">
            <label>Textarea with error</label>
            <md-textarea></md-textarea>

            <span class="md-error">Textarea validation message</span>
          </md-input-container>
        </form>
      </demo-example>

      <demo-example label="Character counter" size="4">
        <form novalidate @submit.stop.prevent="submit">
          <md-input-container>
            <label>Textarea</label>
            <md-textarea maxlength="70"></md-textarea>
          </md-input-container>

          <md-input-container>
            <label>Input</label>
            <md-input maxlength="20"></md-input>
          </md-input-container>
        </form>
      </demo-example>

      <demo-example label="Themed" size="4">
        <form novalidate @submit.stop.prevent="submit">
          <div v-md-theme="'green'">
            <md-input-container>
              <label>Green - Input</label>
              <md-input></md-input>
            </md-input-container>
          </div>

          <div v-md-theme="'cyan'">
            <md-input-container>
              <label>Cyan - Textarea</label>
              <md-textarea></md-textarea>
            </md-input-container>
          </div>
        </form>
      </demo-example>
    </div>

    <div slot="code">
      <demo-example label="Regular fields">
        <code-block lang="xml">
&lt;form novalidate @submit.stop.prevent=&quot;submit&quot;&gt;
  &lt;md-input-container&gt;
    &lt;label&gt;Initial value&lt;/label&gt;
    &lt;md-input v-model=&quot;initialValue&quot;&gt;&lt;/md-input&gt;
  &lt;/md-input-container&gt;

  &lt;md-input-container&gt;
    &lt;label&gt;With label&lt;/label&gt;
    &lt;md-input placeholder=&quot;My nice placeholder&quot;&gt;&lt;/md-input&gt;
  &lt;/md-input-container&gt;

  &lt;md-input-container md-inline&gt;
    &lt;label&gt;Inline field&lt;/label&gt;
    &lt;md-input&gt;&lt;/md-input&gt;
  &lt;/md-input-container&gt;

  &lt;md-input-container&gt;
    &lt;label&gt;Number&lt;/label&gt;
    &lt;md-input type=&quot;number&quot;&gt;&lt;/md-input&gt;
  &lt;/md-input-container&gt;

  &lt;md-input-container&gt;
    &lt;label&gt;Textarea&lt;/label&gt;
    &lt;md-textarea&gt;&lt;/md-textarea&gt;
  &lt;/md-input-container&gt;

  &lt;md-input-container&gt;
    &lt;label&gt;Disabled&lt;/label&gt;
    &lt;md-input disabled&gt;&lt;/md-input&gt;
  &lt;/md-input-container&gt;
&lt;/form&gt;
        </code-block>

        <code-block lang="javascript">
export default {
  data() {
    return {
      initialValue: 'My initial value'
    };
  }
};
        </code-block>
      </demo-example>

      <demo-example label="Password">
        <code-block lang="xml">
&lt;form novalidate @submit.stop.prevent=&quot;submit&quot;&gt;
  &lt;md-input-container&gt;
    &lt;label&gt;Regular Password&lt;/label&gt;
    &lt;md-input type=&quot;password&quot;&gt;&lt;/md-input&gt;
  &lt;/md-input-container&gt;

  &lt;md-input-container md-has-password&gt;
    &lt;label&gt;Password Reveal&lt;/label&gt;
    &lt;md-input type=&quot;password&quot;&gt;&lt;/md-input&gt;
  &lt;/md-input-container&gt;
&lt;/form&gt;
        </code-block>
      </demo-example>

      <demo-example label="Required and Errors">
        <code-block lang="xml">
&lt;form novalidate @submit.stop.prevent=&quot;submit&quot;&gt;
  &lt;md-input-container&gt;
    &lt;label&gt;Required&lt;/label&gt;
    &lt;md-input required&gt;&lt;/md-input&gt;
  &lt;/md-input-container&gt;

  &lt;md-input-container class=&quot;md-input-invalid&quot;&gt;
    &lt;label&gt;Error&lt;/label&gt;
    &lt;md-input required&gt;&lt;/md-input&gt;
  &lt;/md-input-container&gt;

  &lt;md-input-container class=&quot;md-input-invalid&quot;&gt;
    &lt;label&gt;Error with message&lt;/label&gt;
    &lt;md-input required&gt;&lt;/md-input&gt;

    &lt;span class=&quot;md-error&quot;&gt;Validation message&lt;/span&gt;
  &lt;/md-input-container&gt;

  &lt;md-input-container class=&quot;md-input-invalid&quot;&gt;
    &lt;label&gt;Textarea with error&lt;/label&gt;
    &lt;md-textarea&gt;&lt;/md-textarea&gt;

    &lt;span class=&quot;md-error&quot;&gt;Textarea validation message&lt;/span&gt;
  &lt;/md-input-container&gt;
&lt;/form&gt;
        </code-block>
      </demo-example>

      <demo-example label="Character counter">
        <code-block lang="xml">
&lt;form novalidate @submit.stop.prevent=&quot;submit&quot;&gt;
  &lt;md-input-container&gt;
    &lt;label&gt;Textarea&lt;/label&gt;
    &lt;md-textarea maxlength=&quot;70&quot;&gt;&lt;/md-textarea&gt;
  &lt;/md-input-container&gt;

  &lt;md-input-container&gt;
    &lt;label&gt;Input&lt;/label&gt;
    &lt;md-input maxlength=&quot;20&quot;&gt;&lt;/md-input&gt;
  &lt;/md-input-container&gt;
&lt;/form&gt;
        </code-block>
      </demo-example>

      <demo-example label="Themed" size="4">
        <code-block lang="xml">
&lt;form novalidate @submit.stop.prevent=&quot;submit&quot;&gt;
  &lt;md-input-container v-md-theme=&quot;&#039;green&#039;&quot;&gt;
    &lt;label&gt;Themable - Input&lt;/label&gt;
    &lt;md-input&gt;&lt;/md-input&gt;
  &lt;/md-input-container&gt;

  &lt;md-input-container v-md-theme=&quot;&#039;brown&#039;&quot;&gt;
    &lt;label&gt;Themable - Textarea&lt;/label&gt;
    &lt;md-textarea&gt;&lt;/md-textarea&gt;
  &lt;/md-input-container&gt;
&lt;/form&gt;
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
        initialValue: 'My initial value'
      };
    }
  };
</script>
