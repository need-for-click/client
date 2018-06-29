<template>
  <div class="hello">
    <div>
      <h1>your nickname</h1>
    <input type="text" v-model="nickname" placeholder="username" >
    <!-- <input type="text" v-model="player" placeholder="player" > -->
    <button @click="addPlayer">submit</button>
    </div>
    <div>
      <h1>create room</h1>
    <input type="text" v-model="roomname" placeholder="roomname" >
    <button @click="addRoom" >Submit</button>
    </div>
    <button @click="checkRoom" > check room </button>
  <br>
  <br>
  <br>

    <div>
      <button @click="playerDua" >player2</button>
      <button @click="playerTiga" >player3</button>
      <button @click="playerEmpat" >player4</button>
    </div>
    <br>
    <br>
  <div>
    <ul>
      <li v-for="(room, index) in rooms" :key="index"> <button @click="chooseRoom(room.key)" > {{room.roomname}} </button>  </li>
    </ul>
  </div>
  </div>
</template>

<script>
import {db} from '../firebase.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      nickname: '',
      player: '',
      roomname: '',
      rooms: []
    }
  },
  methods: {
    addPlayer () {
      let regUser = db.ref('users')
      let obj = {
        nickname: this.nickname
      }
      localStorage.setItem('nickname',this.nickname)
      regUser.push(obj)
        .then(snapshot => {
          console.log('user added to database')
        })
        .catch(err => {
          console.log(err)
        })
      console.log(obj)
    },
    addRoom () {
      let roomPlay = db.ref('rooms/' + this.roomname)
      let obj = {
        nickname: localStorage.getItem('nickname'),
        player: 'player 1'
      }
      roomPlay.set(obj)
        .then(snapshot => {
          console.log('room added and player joined')
        })
        .catch(err => {
          console.log(err)
        })
    },
    chooseRoom (value) {
      localStorage.setItem('roomname', value)
      console.log(value)
    },
    checkRoom () {
      let rooms = db.ref('rooms')
      let self = this
      let temp = []
      rooms.on('value', function (snapshot) {
        snapshot.forEach(snap => {
          // console.log('ini key', snap.key)
          // console.log('ini value',snap.val())
          // if (temp.indexOf(snap.val().player)===-1) {
            console.log(snap.key)
           temp.push(snap.key) 
          
        })
      })
      this.rooms = temp
    },
    playerDua () {
      let roomPlay = db.ref('rooms/' +  localStorage.getItem('roomname'))
      let obj = {
        nickname: localStorage.getItem('nickname'),
        player: 'player 2'
      }
      roomPlay.set(obj)
        .then(snapshot => {
          console.log('player 2 masuk ke room')
        })
      console.log('player2')
    },
    playerTiga () {
      let roomPlay = db.ref('rooms/' + 'player 3')
      let obj = {
        nickname: localStorage.getItem('nickname'),
        roomname: 'player 3'
      }
      roomPlay.set(obj)
        .then(snapshot => {
          console.log('player 3 masuk ke room')
        })
      console.log('player3')
    },
    playerEmpat () {
      let roomPlay = db.ref('rooms/' + 'player 4')
      let obj = {
        nickname: localStorage.getItem('nickname'),
        roomname: 'player 4'
      }
      roomPlay.set(obj)
        .then(snapshot => {
          console.log('player 4 masuk ke room')
        })
      console.log('player4')
    },
    created () {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
