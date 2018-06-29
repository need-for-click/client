<template>
  <div class="track-list">
    <div class="track">
      <div class="track__line">&nbsp;</div>
      <div class="track__lane">
        <div class="track__lane-start track__lane-point">
          <span class="track__lane-text">Start</span>
          </div>
        <div class="track__lane-finish track__lane-point">
          <span class="track__lane-text">Finish</span>
        </div>
      </div>
      <div class="track__line">&nbsp;</div>
      <div class="track__car" :style="`left: ${positionCar[0].player1.carPosition}%;`">
        <img class="track__car-item" src="@/assets/player-1.svg" alt="car">
      </div>
    </div>
    <div class="track">
      <div class="track__line">&nbsp;</div>
      <div class="track__lane">
        <div class="track__lane-start track__lane-point">
          <span class="track__lane-text">Start</span>
          </div>
        <div class="track__lane-finish track__lane-point">
          <span class="track__lane-text">Finish</span>
        </div>
      </div>
      <div class="track__line">&nbsp;</div>
      <div class="track__car" :style="`left: ${positionCar[0].player2.carPosition}%;`">
        <img class="track__car-item" src="@/assets/player-2.svg" alt="car">
      </div>
    </div>
    <div class="track">
      <div class="track__line">&nbsp;</div>
      <div class="track__lane">
        <div class="track__lane-start track__lane-point">
          <span class="track__lane-text">Start</span>
          </div>
        <div class="track__lane-finish track__lane-point">
          <span class="track__lane-text">Finish</span>
        </div>
      </div>
      <div class="track__line">&nbsp;</div>
      <div class="track__car" :style="`left: ${positionCar[0].player3.carPosition}%;`">
        <img class="track__car-item" src="@/assets/player-3.svg" alt="car">
      </div>
    </div>
    <div class="track">
      <div class="track__line">&nbsp;</div>
      <div class="track__lane">
        <div class="track__lane-start track__lane-point">
          <span class="track__lane-text">Start</span>
          </div>
        <div class="track__lane-finish track__lane-point">
          <span class="track__lane-text">Finish</span>
        </div>
      </div>
      <div class="track__line">&nbsp;</div>
      <div class="track__car" :style="`left: ${positionCar[0].player4.carPosition}%;`">
        <img class="track__car-item" src="@/assets/player-4.svg" alt="car">
      </div>
    </div>
    <button @click="accelerate" class="tracks__button btn-large">Accelerate</button>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
import alertify from 'alertifyjs'
import {db} from '@/firebase.js'
export default {
  name: 'Track',
  data () {
    return {
      carPosition: 0,
      position: 0
    }
  },
  firebase: {
    positionCar: db.ref('/Rooms/')
  },
  methods: {
    accelerate () {
      this.carPosition += 2
      db.ref('/Rooms/' + localStorage.getItem('roomname') + '/' + localStorage.getItem('player')).update ({
        carPosition: this.carPosition
      })
      .then(response => {
        console.log(this.positionCar[0].player1.carPosition)
      })
    },
  },
  updated() {
    console.log('asal')
    if (this.positionCar[0].player1.carPosition == 84 || this.positionCar[0].player2.carPosition == 84 || this.positionCar[0].player3.carPosition == 84 || this.positionCar[0].player4.carPosition == 84) {
      alertify
        .alert(`The game has done` , function(){
          alertify.message('The game is done');
        });
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.track-list {
  height: 100%;
  width: 100%;
}

.track {
  width: 90%;
  height: 20vh;
  background-color: #fff;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  border-right: 2px solid #212121;
  border-left: 2px solid #212121;
  border-radius: 5px;
  position: relative;

  * {
    box-sizing: inherit;
  }

  &__car {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all .2s;

    &-item {
      width:  8rem;

      @include respond(tab-land) {
        width: 7rem;
      }

      @include respond(tab-port) {
        width: 6rem;
      }

      @include respond(phone) {
        width: 5rem;
      }
    }
  }

  &__line {
    width: 100%;
    max-height: 10rem;
    border-top: 2px solid #212121;
    border-bottom: 2px solid #212121;
    background: repeating-linear-gradient(
      90deg,
      #f5f5f5,
      #f5f5f5 30px,
      #f44336 30px,
      #f44336 60px
    );
  }

  &__lane {
    height: 10rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    overflow: hidden;

    &-text {
      font-size: 100%;
      transform: rotate(90deg);
    }

    &-point {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: .5rem;

      width:  8rem;

      @include respond(tab-land) {
        width: 7rem;
      }

      @include respond(tab-port) {
        width: 6rem;
      }

      @include respond(phone) {
        width: 5rem;
      }
    }

    &-start {
      border-right: 2px solid black;
    }

    &-finish {
      border-left: 2px solid black;
    }
  }
}
</style>
