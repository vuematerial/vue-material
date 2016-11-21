<template>
  <single-page class="single-page-home" label="Changelog">
    <single-page-banner label="Changelog"></single-page-banner>

    <section>
      <h2 class="md-headline">v0.3.3 - Bugfixes</h2>
      <h3 class="md-title">Fixes:</h3>
      <ul>
        <li>Fix regression on inputs getting wrong value after manual update <strong><a href="https://github.com/marcosmoura/vue-material/issues/101" target="_blank" rel="noopener">#101</a> <strong><a href="https://github.com/marcosmoura/vue-material/issues/100" target="_blank" rel="noopener">#100</a> <strong><a href="https://github.com/marcosmoura/vue-material/issues/96" target="_blank" rel="noopener">#96</a></li>
      </ul>
    </section>

    <section>
      <h2 class="md-headline">v0.3.2 - Bugfixes</h2>
      <h3 class="md-title">Fixes:</h3>
      <ul>
        <li>Fix babel export default module.exports <strong><a href="https://github.com/marcosmoura/vue-material/issues/92" target="_blank" rel="noopener">#92</a></strong></li>
        <li>Fix tooltips jumping when screen resize <strong><a href="https://github.com/marcosmoura/vue-material/issues/85" target="_blank" rel="noopener">#85</a></strong></li>
        <li>Fix table not getting instance <strong><a href="https://github.com/marcosmoura/vue-material/issues/91" target="_blank" rel="noopener">#91</a></strong> <strong><a href="https://github.com/marcosmoura/vue-material/issues/88" target="_blank" rel="noopener">#88</a></strong></li>
        <li>Fix regression on password review <strong><a href="https://github.com/marcosmoura/vue-material/issues/95" target="_blank" rel="noopener">#95</a></strong></li>
        <li>Fix input getting wrong value after manual update <strong><a href="https://github.com/marcosmoura/vue-material/issues/100" target="_blank" rel="noopener">#100</a></strong> <strong><a href="https://github.com/marcosmoura/vue-material/issues/96" target="_blank" rel="noopener">#96</a></strong></li>
        <li>Use the internal value of md-input to set the value of the container <strong><a href="https://github.com/marcosmoura/vue-material/pull/97" target="_blank" rel="noopener">#97</a> (Thanks to <a href="https://github.com/Cabbaggio" target="_blank" rel="noopener">@Cabbaggio</a>)</strong></li>
        <li>Add material.debug.js to dist folder <strong><a href="https://github.com/marcosmoura/vue-material/pull/90" target="_blank" rel="noopener">#90</a> (Thanks to <a href="https://github.com/pauloramires" target="_blank" rel="noopener">@pauloramires</a>)</strong></li>
      </ul>
    </section>

    <section>
      <h2 class="md-headline">v0.3.1 - Bugfixes</h2>
      <h3 class="md-title">Fixes:</h3>
      <ul>
        <li>md-select not being reactive <strong><a href="https://github.com/marcosmoura/vue-material/issues/74" target="_blank" rel="noopener">#74</a></strong></li>
        <li>Fix components not being updated inside v-once <strong><a href="https://github.com/marcosmoura/vue-material/issues/69" target="_blank" rel="noopener">#69</a> <a href="https://github.com/marcosmoura/vue-material/issues/70" target="_blank" rel="noopener">#70</a></strong></li>
        <li>Fix input number not accepting numbers <strong><a href="https://github.com/marcosmoura/vue-material/issues/67" target="_blank" rel="noopener">#67</a> <a href="https://github.com/marcosmoura/vue-material/issues/70" target="_blank" rel="noopener">#70</a></strong></li>
        <li>Fix md-input-container crashing when the select value is null <strong><a href="https://github.com/marcosmoura/vue-material/issues/64" target="_blank" rel="noopener">#64</a></strong></li>
      </ul>
    </section>

    <section>
      <h2 class="md-headline">v0.3.0 - Huge Release</h2>
      <h3 class="md-title">New Components:</h3>
      <ul>
        <li>Data Table</li>
        <li>Menu</li>
        <li>Select with multiple selection</li>
      </ul>

      <h3 class="md-title">Fixes:</h3>
      <ul>
        <li>md-input not reactive when initial value empty <strong><a href="https://github.com/marcosmoura/vue-material/issues/40" target="_blank" rel="noopener">#40</a></strong></li>
        <li>md-textarea with maxlength not writable <strong><a href="https://github.com/marcosmoura/vue-material/issues/43" target="_blank" rel="noopener"></a>#43</strong></li>
        <li>Do not style scrollbars by default <strong><a href="https://github.com/marcosmoura/vue-material/issues/46" target="_blank" rel="noopener">#46</a></strong></li>
        <li>SELECT component: display issue in IE11 <strong><a href="https://github.com/marcosmoura/vue-material/issues/34" target="_blank" rel="noopener">#34</a></strong></li>
        <li>Select component popup shows behind other components <strong><a href="https://github.com/marcosmoura/vue-material/issues/26" target="_blank" rel="noopener">#26</a></strong></li>
        <li>md-select text vs value <strong><a href="https://github.com/marcosmoura/vue-material/issues/24" target="_blank" rel="noopener"></a>#24</strong></li>
        <li>md-button ignores type prop <strong><a href="https://github.com/marcosmoura/vue-material/issues/41" target="_blank" rel="noopener">#41</a> (Thanks to <a href="https://github.com/pauloramires" target="_blank" rel="noopener">@pauloramires</a>)</strong></li>
        <li>md-select displaying selected text (rather than value) <strong><a href="https://github.com/marcosmoura/vue-material/issues/36" target="_blank" rel="noopener">#36</a></strong></li>
        <li>Added 'type' props to switch button <strong><a href="https://github.com/marcosmoura/vue-material/pull/27" target="_blank" rel="noopener">#27</a> (Thanks to <a href="https://github.com/guillaumerxl" target="_blank" rel="noopener">@guillaumerxl</a>)</strong></li>
        <li>Add babel-cli as dev dependency <strong><a href="https://github.com/marcosmoura/vue-material/pull/28" target="_blank" rel="noopener">#28</a> (Thanks to <a href="https://github.com/lucassouza1" target="_blank" rel="noopener">@lucassouza1</a>)</strong></li>
        <li>Remove dotted outline around button in firefox <strong><a href="https://github.com/marcosmoura/vue-material/pull/52" target="_blank" rel="noopener">#52</a> (Thanks to <a href="https://github.com/yeknava" target="_blank" rel="noopener">@yeknava</a>)</strong></li>
      </ul>
    </section>

    <section>
      <h2 class="md-headline">v0.2.0 - New components</h2>
      <h3 class="md-title">New Components:</h3>
      <ul>
        <li>Cards</li>
      </ul>

      <h3 class="md-title">Fixes:</h3>
      <ul>
        <li>Add Roboto font and google icons to the docs <strong><a href="https://github.com/marcosmoura/vue-material/commit/421ce7bb21a1489c8f98ee12d0d525eec6b0ee12" target="_blank" rel="noopener">421ce7b</a></strong></li>
        <li>Explains better how to install and configure vue-material <strong><a href="https://github.com/marcosmoura/vue-material/commit/cc43985fc1d30403a7c95bfeb2dc38bbcc1acb9e" target="_blank" rel="noopener">cc43985</a></strong></li>
        <li>Emit change &amp; input events from mdTextarea <strong><a href="https://github.com/marcosmoura/vue-material/commit/b474af9fd8d5f4563914e5aae47d14b7c8c62fb2" target="_blank" rel="noopener">b474af9</a></strong> (Thanks to <a href="https://github.com/jvanbrug" target="_blank" rel="noopener">@jvanbrug</a>)</li>
      </ul>
    </section>

    <section>
      <h2 class="md-headline">v0.1.2 - Bugfixes</h2>
      <h3 class="md-title">Fixes:</h3>
      <ul>
        <li>Fixed tooltips on Firefox</li>
        <li>Misaligned icons inside buttons on Firefox</li>
        <li>Documentation fixes</li>
      </ul>
    </section>

    <section>
      <h2 class="md-headline">v0.1.1 - Bugfixes</h2>
      <h3 class="md-title">Changes:</h3>
      <ul>
        <li>Bugfixes</li>
        <li>Firefox support</li>
        <li>Initial documentation</li>
      </ul>
    </section>

    <section>
      <h2 class="md-headline">v0.1.0 - Initial Release</h2>
      <h3 class="md-title">New Components:</h3>
      <ul>
        <li>Avatar</li>
        <li>Bottom Bar</li>
        <li>Button</li>
        <li>Button Toggle</li>
        <li>Checkbox</li>
        <li>Divider</li>
        <li>Icon</li>
        <li>Input</li>
        <li>List</li>
        <li>Radio</li>
        <li>Select</li>
        <li>Sidenav</li>
        <li>Subheader</li>
        <li>Switch</li>
        <li>Tabs</li>
        <li>Toolbar</li>
        <li>Tooltip</li>
        <li>Whiteframe</li>
      </ul>

      <h3 class="md-title">UI Elements:</h3>
      <ul>
        <li>Themes</li>
        <li>Typography</li>
        <li>Fluid Media</li>
        <li>Custom Scrollbar</li>
        <li>Selection Styles</li>
      </ul>
    </section>
  </single-page>
</template>

<style lang="scss" scoped>
  section + section {
    margin-top: 56px;
  }
</style>
