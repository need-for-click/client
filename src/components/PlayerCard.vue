<template>
  <div class="card">
      <div class="card-image">
        <img src="@/assets/player-2.svg">
        <span class="card-title"><h4>Player {{ playerNumber }}</h4></span>
      </div>
      <div class="card-content">
        <div><button @click="choosePlayer" class="btn-large btn-fullwidth light-blue darken-2">Choose</button></div>
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

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.btn-fullwidth {
  width: 100%;
}

.card {
  padding: 1rem;

  &-title {
    opacity: 0;
    transition: all .4s;
  }

  &:hover &-title {
    opacity: 1;
  }
}
</style>

