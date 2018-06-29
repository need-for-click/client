<template>

  <div class="home teal">
    <div class="home__container">
      <div class="input-box card">
        <div class="input-box__image card-image">
          <!-- <img src="@/assets/speedometer.jpeg"> -->
          <span class="card-title">
            <h4>
              <i class="small material-icons">home</i>    Create Room</h4>
          </span>
        </div>
        <div class="card-content">
          <form>
            <div class="field title">
              <label for="input-box__label roomname">Room Name</label>
              <input class="input-box__input" type="text" name="roomname" v-model="roomname">
            </div>

            <div class="field center-align">
              <a @click="createNewRoomVuex" class="input-box__btn waves-effect waves-light btn-large">
                <i class="material-icons right"></i>Create</a>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'createnewroom',
  data () {
    return {
      roomname: ''
    }
  },
  methods:{
    ...mapActions([
      'createNewRoom'
    ]),
    createNewRoomVuex () {
      localStorage.setItem('roomname', this.roomname)
      localStorage.setItem('player', 'player1')
      this.createNewRoom(this.roomname)
      this.$router.push({name:'tracks'})
    }
  }
}
</script>

<style lang="scss">
.input-box {
  max-height: 80%;
  max-width: 80%;

  &__image {
    img {
      filter: blur(1.5px) brightness(80%);
    }
  }

  &__btn {
    width: 100%;
  }

  &__input {
    font-size: 20px !important;
  }


}
</style>
