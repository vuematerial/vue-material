<template>
  <demo-page>
    <div slot="examples" class="examples">
      <demo-example label="Default - Grey Theme" size="3" body-theme="grey">
        <md-tabs>
          <md-tab id="movies" md-label="Movies">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
          </md-tab>

          <md-tab id="music" md-label="Music">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
          </md-tab>

          <md-tab id="books" md-label="Books">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
          </md-tab>

          <md-tab id="pictures" md-label="Pictures">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
          </md-tab>
        </md-tabs>
      </demo-example>

      <demo-example label="Fixed - Accent Color" size="3">
        <md-tabs md-fixed class="md-accent">
          <md-tab md-label="Movies">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
          </md-tab>

          <md-tab md-label="Music">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
          </md-tab>

          <md-tab md-label="Books">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
          </md-tab>

          <md-tab md-label="Pictures">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
          </md-tab>
        </md-tabs>
      </demo-example>

      <demo-example label="With icons and text - Teal Theme" size="3" body-theme="teal">
        <md-tabs md-fixed>
          <md-tab md-label="Movies" md-icon="ondemand_video">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
          </md-tab>

          <md-tab md-label="Music" md-icon="music_note">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
          </md-tab>

          <md-tab md-label="Books" md-icon="books">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
          </md-tab>

          <md-tab md-label="Pictures" md-icon="photo">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
          </md-tab>
        </md-tabs>
      </demo-example>

      <demo-example label="Centered with only icon - Transparent Color" size="3">
        <md-tabs md-centered class="md-transparent">
          <md-tab md-icon="phone">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
          </md-tab>

          <md-tab md-icon="favorite">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
          </md-tab>

          <md-tab md-icon="near_me">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
          </md-tab>
        </md-tabs>
      </demo-example>

      <demo-example label="Fixed with only icon - Default Theme" size="3">
        <md-tabs md-fixed>
          <md-tab md-icon="phone">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
          </md-tab>

          <md-tab md-icon="favorite">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
          </md-tab>

          <md-tab md-icon="near_me">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
          </md-tab>
        </md-tabs>
      </demo-example>

      <demo-example label="Playground" size="3">
        <div class="playground">
          <md-subheader>Tabs Attributes</md-subheader>
          <md-checkbox id="fixed" v-model="playground.fixed">Fixed</md-checkbox>
          <md-checkbox id="centered" v-model="playground.centered">Centered</md-checkbox>
          <md-input-container>
            <label for="shadow">Shadow</label>
            <md-input type="number" id="shadow" v-model="playground.shadow" min="0" max="24"></md-input>
          </md-input-container>

          <md-subheader>Theme</md-subheader>
          <md-radio v-model="playground.theme" id="theme1" name="theme" md-value="default">Default</md-radio>
          <md-radio v-model="playground.theme" id="theme2" name="theme" md-value="green">Green</md-radio>
          <md-radio v-model="playground.theme" id="theme3" name="theme" md-value="indigo">Indigo</md-radio>
          <md-radio v-model="playground.theme" id="theme4" name="theme" md-value="brown">Brown</md-radio>

          <md-subheader>Colors</md-subheader>
          <md-radio v-model="playground.color" id="color1" name="color" md-value="0">Default</md-radio>
          <md-radio v-model="playground.color" id="color2" name="color" md-value="1">Accent</md-radio>
          <md-radio v-model="playground.color" id="color3" name="color" md-value="2">Warn</md-radio>
          <md-radio v-model="playground.color" id="color4" name="color" md-value="3">Transparent</md-radio>

          <md-subheader>Second Tab</md-subheader>
          <md-checkbox id="disabled" v-model="playground.tabs[1].disabled">Disabled</md-checkbox>
          <md-checkbox id="active" v-model="playground.tabs[1].active">Active</md-checkbox>
        </div>

        <md-tabs
          :class="{
            'md-accent': playground.color === '1',
            'md-warn': playground.color === '2',
            'md-transparent': playground.color === '3'
          }"
          :md-fixed="playground.fixed"
          :md-centered="playground.centered"
          :md-elevation="playground.shadow"
          v-md-theme="playground.theme">
          <md-tab v-for="(tab, index) in playground.tabs" :md-label="tab.label" :md-icon="tab.icon" :md-disabled="tab.disabled" :md-active="tab.active">
            <md-input-container>
              <label :for="'label' + index">Label</label>
              <md-input type="text" :id="'label' + index" v-model="tab.label"></md-input>
            </md-input-container>

            <md-input-container>
              <label :for="'icon' + index">Icon</label>
              <md-input type="text" :id="'icon' + index" v-model="tab.icon"></md-input>
            </md-input-container>
          </md-tab>
        </md-tabs>
      </demo-example>
    </div>

    <div slot="code">
      <h2>Code</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt debitis magni dolorem praesentium labore velit repudiandae nostrum culpa quod assumenda. Dolores ipsum, explicabo quasi eius architecto esse ratione natus iure.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt debitis magni dolorem praesentium labore velit repudiandae nostrum culpa quod assumenda. Dolores ipsum, explicabo quasi eius architecto esse ratione natus iure.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt debitis magni dolorem praesentium labore velit repudiandae nostrum culpa quod assumenda. Dolores ipsum, explicabo quasi eius architecto esse ratione natus iure.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt debitis magni dolorem praesentium labore velit repudiandae nostrum culpa quod assumenda. Dolores ipsum, explicabo quasi eius architecto esse ratione natus iure.</p>
    </div>

    <div slot="api">
      <p>
      To use Tabs you must wrap all <code>&lt;md-tab&gt;</code> in a <code>&lt;md-tabs&gt;</code> as a direct parent.
      The <code>&lt;md-tabs&gt;</code> can accept some parameters to modify his styles, like <code>md-fixed</code> and <code>md-centered</code> for example.
      Each single tab accept a <code>md-label</code> and/or <code>md-icon</code>. You can set the active tab by setting a parameter <code>md-active</code>.
      </p>
    </div>
  </demo-page>
</template>

<style lang="scss">
  .playground {
    padding: 0 16px 16px;

    .md-subheader {
      padding: 16px 0 0;
    }
  }

  div.examples .demo-example .demo-example-body {
    padding: 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        playground: {
          color: '3',
          fixed: true,
          centered: false,
          shadow: 0,
          theme: 'default',
          tabs: [
            {
              label: 'Phone',
              icon: 'phone',
              active: false,
              disabled: false
            },
            {
              label: 'Favorites',
              icon: 'favorite',
              active: false,
              disabled: false
            },
            {
              label: 'Near me',
              icon: 'near_me',
              active: true,
              disabled: false
            }
          ]
        },
        firstTabName: 'Movies'
      };
    },
    mounted() {
      this.$root.pageTitle = 'Tabs';
    }
  };
</script>
