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
    createNewRoom ({commit}, roomname) {
      db.ref('/Rooms/' + roomname).child('player1').set({
        nickname: localStorage.getItem('nickname')
      })
    }
  }
})
