<template>
  <div class="page-content">
    <md-whiteframe md-elevation="1" class="main-header">
      <md-toolbar>
        <md-button class="md-icon-button nav-trigger" @click="toggleSidenav">
          <md-icon>menu</md-icon>
        </md-button>

        <div class="md-title">{{ pageTitle }}</div>

        <div class="release-version" v-if="availableDocs.length > 1">
          <span>Version:</span>
          <md-select id="docs-select" v-model="currentDocs" @change="changeDocs">
            <md-option v-for="doc in availableDocs" :value="doc" v-once>{{ doc }}</md-option>
          </md-select>
        </div>

        <md-button href="https://github.com/marcosmoura/vue-material" target="_blank" rel="noopener" class="md-icon-button github">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#ffffff" d="M512 0C229.25 0 0 229.25 0 512c0 226.25 146.69 418.13 350.16 485.81 25.59 4.69 34.94-11.12 34.94-24.62 0-12.19-0.47-52.56-0.72-95.31C242 908.81 211.91 817.5 211.91 817.5c-23.31-59.12-56.84-74.87-56.84-74.87-46.53-31.75 3.53-31.12 3.53-31.12 51.41 3.56 78.47 52.75 78.47 52.75 45.69 78.25 119.88 55.63 149 42.5 4.65-33 17.9-55.62 32.5-68.37C304.91 725.44 185.34 681.5 185.34 485.31c0-55.94 19.97-101.56 52.66-137.41-5.22-13-22.84-65.09 5.06-135.56 0 0 42.94-13.75 140.81 52.5 40.81-11.41 84.59-17.03 128.13-17.22 43.5 0.19 87.31 5.88 128.19 17.28 97.69-66.31 140.69-52.5 140.69-52.5 28 70.53 10.38 122.56 5.13 135.5 32.81 35.84 52.63 81.47 52.63 137.41 0 196.69-119.75 240-233.81 252.69 18.44 15.88 34.75 47 34.75 94.75 0 68.44-0.69 123.63-0.69 140.5 0 13.63 9.31 29.56 35.25 24.56C877.44 930 1024 738.13 1024 512 1024 229.25 794.75 0 512 0z"></path></svg>
        </md-button>
      </md-toolbar>
    </md-whiteframe>

    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .page-content {
    min-height: 100%;
    max-height: 100%;
    flex: 1;
    display: flex;
    flex-flow: column
  }

  .main-header {
    position: relative;
    z-index: 2;

    .md-toolbar {
      color: #fff !important;
    }
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
        let normalizedPathname = location.pathname.replace(/\/|v/g, '');

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
