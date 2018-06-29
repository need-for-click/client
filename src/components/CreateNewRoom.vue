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
              <label for="input-box__label nickname">Room Name</label>
              <input class="input-box__input" type="text" name="nickname" v-model="nickname">
            </div>

            <div class="field center-align">
              <a @click="addPlayer" class="input-box__btn waves-effect waves-light btn-large">
                <i class="material-icons right"></i>Create</a>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
// import {mapState} from 'vuex'
// import {db} from '@/firebase.js'
// export default {
//   name: 'HomeInputBox',
//   data () {
//     return {
//       nickname: ''
//     }
//   },
//   methods: {
//     addPlayer () {
//       let regUser = db.ref('users')
//       let obj = {
//         nickname: this.nickname
//       }
//       localStorage.setItem('nickname', this.nickname)
//       regUser.push(obj)
//         .then(snapshot => {
//           console.log(`Player ${this.nickname} Berhasil masuk`)
//         })
//         .catch(err => {
//           console.log(err)
//         })
//       console.log('masuk')
//     }
//   }
// }
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
