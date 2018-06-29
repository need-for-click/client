<template>
  <div class="pick-player teal">
    <player-card :playerNumber="2"></player-card>
    <player-card :playerNumber="3"></player-card>
    <player-card :playerNumber="4"></player-card>
  </div>
</template>

<script>
import PlayerCard from '@/components/PlayerCard'
export default {
  name: 'PickPlayer',
  components: {
    PlayerCard
  },

}
</script>

<style lang="scss">
.pick-player {
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.player-card {
  max-height: 30%;
  max-width: 30%;
}
</style>
