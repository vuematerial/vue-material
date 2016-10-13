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
          <md-input-container v-md-theme="'green'">
            <label>Themable - Input</label>
            <md-input></md-input>
          </md-input-container>

          <md-input-container v-md-theme="'brown'">
            <label>Themable - Textarea</label>
            <md-textarea></md-textarea>
          </md-input-container>
        </form>
      </demo-example>
    </div>

    <div slot="code">
      <h2>Code</h2>
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
