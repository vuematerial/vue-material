<template>
  <page-container centered :title="$t('pages.about.title')">
    <section class="page-container-section">
      <h2 class="md-headline">Vue Material</h2>
      <strong>Material Design for Vue.js</strong>
      <p>Vue Material is simple, lightweight and built exactly according to the Google Material Design specs.</p>
      <p>Build well-designed apps that can fit on every screen with support to all modern Web Browsers with dynamic themes, components on demand and all with an ease-to-use API.</p>
    </section>

    <section class="page-container-section">
      <h2 class="md-title">Author</h2>
      <div class="author-card">
        <md-avatar class="md-large">
          <img src="assets/examples/avatar.jpg" alt="Marcos Moura">
        </md-avatar>

        <div class="author-card-info">
          <span>Marcos Moura</span>
          <div class="author-card-links">
            <a href="https://github.com/marcosmoura" target="_blank" rel="noopener">GitHub</a>
            <a href="https://linkedin.com/in/marcosvmmoura" target="_blank" rel="noopener">Linkedin</a>
          </div>
        </div>
      </div>
    </section>

    <section class="page-container-section">
      <h2 class="md-title">How did Vue Material started?</h2>
      <p>Once upon a time I was working in a company, in projects for Google, using only Google's technologies. As a Front End Engineer I had to use Angular or Polymer as a solution back there. And we needed to build everything with Material Design. They chose to work with Angular and Angular Material only because it was more mature than Polymer at the time. It was not my choice and I felt that it wasn't good for me! But looking on the bright side, it gave me a really good experience with Material Design guidelines.</p>
      <p>I work with Vue since the 1.0 version and I love it. Vue Material started as a small and simple idea that I had in a boring saturday afternoon, to solve my own needs for a simple, fast and reliable solution with Material Design for Vue, because I couldn't find a good solution. So I started to develop my own library, to fix problems that I had on Angular Material's days and focusing on making things easier and practical to use.</p>
      <p>This project started as a side project and became the library as it is today, one of the most used UI Libraries for Vue.js!</p>
    </section>

    <section class="page-container-section">
      <h2 class="md-title">Want to pay me a coffee?</h2>

      <p>I don't drink coffee, but I can easily turn this into a strong and bold IPA beer... Or a burger... Or a Redbull! If you think that this project helped you or your company in any way, you can consider become a backer/sponsor on Patreon.</p>
      <a href="https://www.patreon.com/bePatron?u=4832202" target="_blank" class="about-patreon">
        <img src="/assets/sponsors/patreon.png">
      </a>
    </section>

    <section class="page-container-section">
      <h2 class="md-title">Want to contribute with the Project?</h2>

      <p>Well. All kind of help are welcome. If you want to contribute with the project, just send me a message and I will tell what you can do. We have a <a href="https://discord.gg/vuematerial">Discord Server</a> to share ideas and to keep all the comunication in one place.</p>
    </section>

    <section class="page-container-section">
      <h2 class="md-title">Need extra help?</h2>

      <p>I'm always online on our <a href="https://discord.gg/vuematerial">Discord server</a>. If you need anything, fell free to ask me directly there. :)</p>
    </section>

    <section class="page-container-section">
      <h2 class="md-title">What is the Browser Support?</h2>

      <p>Vue Material supports the latest version of all Browsers</p>
    </section>

    <section class="page-container-section">
      <h2 class="md-title">What about the license?</h2>
      <p><a href="https://github.com/vuematerial/vue-material/blob/dev/LICENSE" target="_blank">MIT</a>. Always. Forever!</p>
    </section>

    <section class="page-container-section">
      <h2 class="md-title">Credits and Thanks</h2>
      <ul>
        <li><a href="https://github.com/elviskang" target="_blank">elviskang</a> for donating the npm package name!</li>
        <li><a href="https://github.com/brunocastro" target="_blank">Bruno Castro</a> for the awesome Vue Material Logo. <logo-vue-material animated /></li>
      </ul>
    </section>
  </page-container>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style lang="scss" scoped>
  .author-card {
    display: inline-flex;
    align-items: center;

    .md-avatar {
      margin-right: 16px;
    }

    .author-card-info {
      display: flex;
      flex-flow: column;
      flex: 1;
    }

    span {
      font-size: 16px;
    }

    .author-card-links {
      display: flex;
      flex-direction: column;
    }
  }

  .logo-vue-material {
    width: 24px;
    display: inline-block;
    vertical-align: middle;
  }

  .about-patreon {
    max-width: 180px;
    display: inline-block;
  }
</style>
