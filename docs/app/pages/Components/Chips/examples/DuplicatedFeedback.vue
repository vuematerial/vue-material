<template>
  <div>
    <md-chips class="md-primary" v-model="chips" md-placeholder="Add genre...">
      <div class="md-helper-text">Default</div>
    </md-chips>
    <md-chips class="md-primary shake-on-error" v-model="chips" md-placeholder="Add genre...">
      <div class="md-helper-text">Shake duplicated chip on insertion</div>
    </md-chips>
    <md-chips class="md-primary pulse-on-error" v-model="chips" md-placeholder="Add genre..." md-check-duplicated>
      <div class="md-helper-text">Always pulse duplicated chip</div>
    </md-chips>
  </div>
</template>

<script>
export default {
  name: 'DuplicatedFeedback',
  data: () => ({
    chips: [
      'Pop',
      'Rock',
      'Jazz',
      'Metal'
    ]
  })
}
</script>

<style lang="scss" scoped>
.shake-on-error /deep/ .md-duplicated {
  animation-name: shake;
  animation-duration: 0.5s;
}

@keyframes shake {
  0% { transform: translate(15px); }
  20% { transform: translate(-15px); }
  40% { transform: translate(7px); }
  60% { transform: translate(-7px); }
  80% { transform: translate(3px); }
  100% { transform: translate(0px); }
}
</style>

<style lang="css" scoped>
.pulse-on-error >>> .md-duplicated {
  animation-name: pulse;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out
}

@keyframes pulse {
  0% { transform: scale(1.1, 1.1); }
  100% { transform: scale(0.9, 0.9); }
}
</style>

