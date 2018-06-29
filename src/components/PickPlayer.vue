<template>
  <div class="pick-player teal">
    <player-card :player="2"></player-card>
    <player-card :player="3"></player-card>
    <player-card :player="4"></player-card>
  </div>
</template>

<script>
import PlayerCard from '@/components/PlayerCard'

export default {
  name: 'PickPlayer',
  components: {
    PlayerCard
  }
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
