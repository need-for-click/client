<template>
  <div class="room-list card teal lighten-2">
    <div class="room-list__title card-title center-align"><h4>Room List</h4></div>
    <div class="card-content">
      <div class="collection">
        <a
          v-for="room of listroom "
          :key="room['.key']"
          class="collection-item" @click="pickRoom(room['.key'])">
        <span
          class="new badge"
          data-badge-caption="players">
        somthing player
        </span>{{ room['.key'] }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase.js'
export default {
  name: 'listroom',
  firebase: {
    listroom: db.ref('/Rooms/')
  },
  data () {
    return {

    }
  },
  methods: {
    pickRoom(roomname){
      localStorage.setItem('roomname',roomname)
      this.$router.push({name:'chooseplayer'})
    }
  }
}
</script>

<style lang="scss">
.room-list {
  min-width: 80%;
  height: 80%;
  padding: 20px;

  &__title {
    color: #fff;
  }

  .card-content {
    max-height: 80%;
    overflow-y: scroll;
    border: 1px solid #fff;
  }
}
</style>
