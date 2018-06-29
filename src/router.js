import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Tracks from './views/Tracks.vue'
import MainMenu from './views/MainMenu.vue'
import CreateRoom from './views/CreateRoom.vue'
import ChoosePlayer from './views/ChoosePlayer.vue'
import RoomList from './views/RoomList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/tracks/',
      name: 'tracks',
      component: Tracks
    },
    {
      path: '/mainmenu/',
      name: 'mainmenu',
      component: MainMenu
    },
    {
      path: '/createroom/',
      name: 'createroom',
      component: CreateRoom
    },
    {
      path: '/chooseplayer/',
      name: 'chooseplayer',
      component: ChoosePlayer
    },
    {
      path: '/roomlist/',
      name: 'roomlist',
      component: RoomList
    }
  ]
})
