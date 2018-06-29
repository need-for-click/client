<template>
  <div class="player-card card">
    <div class="player-card__image card-image">
      <img src="../assets/player-2.svg">
      <span class="card-title"><h4>Player {{ player }}</h4></span>
    </div>
    <div class="card-content">
      <button class="btn">Choose</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerCard',
  props: {
    player: Number
  }
}
</script>
