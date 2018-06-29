<template>
  <div class="pick-player teal">
    <h2 class="white-text">Choose Player</h2>
    <div class="card-list">
      <player-card :playerNumber="2"></player-card>
      <player-card :playerNumber="3"></player-card>
      <player-card :playerNumber="4"></player-card>
    </div>
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

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.pick-player {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.card-list {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @include respond(tab-port) {
    flex-flow: column nowrap;
  }
}
</style>
