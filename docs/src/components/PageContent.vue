<template>
  <div class="page-content">
    <md-whiteframe md-tag="md-toolbar" md-elevation="1" class="main-header">
      <md-button class="md-icon-button nav-trigger" @click="toggleSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <div class="md-title">{{ pageTitle }}</div>

      <div class="release-version" v-if="availableDocs.length > 1">
        <span>Version:</span>
        <md-select id="docs-select" v-model="currentDocs" @change="changeDocs">
          <md-option v-for="doc in availableDocs" :value="doc">{{ doc }}</md-option>
        </md-select>
      </div>

      <md-button href="https://github.com/marcosmoura/vue-material" target="_blank" rel="noopener" class="md-icon-button github">
        <md-icon md-src="assets/icon-github.svg"></md-icon>
      </md-button>
    </md-whiteframe>

    <slot></slot>
  </div>
</template>

<style lang="sass" scoped>
  .page-content {
    min-height: 100%;
    max-height: 100%;
    flex: 1;
    display: flex;
    flex-flow: column
  }

  .main-header {
    z-index: 2;
    color: #fff !important;
  }

  .nav-trigger {
    @media (min-width: 1281px) {
      display: none;
    }
  }

  .md-title {
    flex: 1;

    @media (min-width: 1281px) {
      margin-left: 8px;
    }
  }

  .md-toolbar {
    .md-select {
      &:after {
        color: rgba(#fff, .87);
      }
    }
  }

  .release-version {
    display: flex;
    align-items: center;
    font-size: 15px;

    .md-select {
      width: auto;
      min-width: auto;
      margin: 0 8px;
    }
  }

  .github {
    @media (max-width: 480px) {
      display: none;
    }
  }
</style>

<script>
  export default {
    props: {
      pageTitle: String
    },
    data: () => ({
      latest: null,
      currentDocs: null,
      availableDocs: []
    }),
    methods: {
      changeDocs() {
        const location = window.location;

        if (this.currentDocs === this.latest) {
          window.location.href = location.origin + '/' + location.hash;
        } else {
          window.location.href = location.origin + '/releases/v' + this.currentDocs + '/' + location.hash;
        }
      },
      toggleSidenav() {
        this.$root.toggleSidenav();
      },
      getVersions(callback) {
        const request = new XMLHttpRequest();

        request.open('GET', '/versions.json', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.onload = function() {
          callback(JSON.parse(this.response));
        };
        request.send();
      },
      setVersion(versions) {
        versions.sort((a, b) => a < b);

        this.latest = versions[0];
        this.currentDocs = versions[0];
        this.availableDocs = versions;
      },
      setCurrentByLocation() {
        let normalizedPathname = location.pathname.replace(/\/|releases\/v/g, '');

        if (normalizedPathname && this.availableDocs.indexOf(normalizedPathname) >= 0) {
          this.currentDocs = normalizedPathname;
        }
      }
    },
    mounted() {
      this.getVersions((response) => {
        this.setVersion(response);
        this.setCurrentByLocation();
      });

      document.title = this.pageTitle + ' - Vue Material';
    }
  };
</script>
