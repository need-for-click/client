import Vue from 'vue'
import Vuex from 'vuex'
import { db } from './firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {

  },
  actions: {
    createNewRoom ({ commit }, roomname) {
      db.ref('/Rooms/' + roomname).child('player1').set({
        nickname: localStorage.getItem('nickname'),
        carPosition: 0
      })
        .then(Response => {
          db.ref('/Players/Player1').set({
            nickname: localStorage.getItem('nickname'),
            status: false
          })
        })
    },
    pickPlayer ({ commit }, playerNumber) {
      localStorage.setItem('player', 'player' + playerNumber)
      db.ref('/Players/Player' + playerNumber).set({
        nickname: localStorage.getItem('nickname'),
        status: false
      })
        .then(Response => {
          db.ref('/Rooms/' + localStorage.getItem('roomname') + '/player' + playerNumber).set({
            nickname: localStorage.getItem('nickname'),
            carPosition: 0
          })
        })
    }
  }
})
