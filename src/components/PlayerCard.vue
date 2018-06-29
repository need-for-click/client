<template>
  <div class="player-card card">
    <div class="player-card__image card-image">
      <img src="../assets/player-2.svg">
      <span class="card-title"><h4>Player {{ playerNumber }}</h4></span>
    </div>
    <div class="card-content">
      <button class="btn" @click="choosePlayer">Choose</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'PlayerCard',
  props: {
    playerNumber: Number
  },
  methods: {
    choosePlayer (){
      console.log(this.playerNumber)
      this.pickPlayer(this.playerNumber.toString())
      this.$router.push({name:'tracks'})
    },
    ...mapActions([
      'pickPlayer'
    ])
  }
}
</script>
