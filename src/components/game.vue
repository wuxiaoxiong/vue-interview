<template>
  <div>
    <div>Next Player: {{nextPlayer}}</div>
    <board></board>
  </div>
</template>

<script>
  import board from './board'

  export default {
    name: 'game',
    data() {
      return {
        nextPlayer: 'X',
      }
    },
    components: {
      board,
    }
  }
</script>

<style scoped>

</style>
