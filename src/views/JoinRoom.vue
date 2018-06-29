<template>
  <div class="join-room">
    <join-room-list></join-room-list>
  </div>
</template>

<script>
import JoinRoomList from '@/components/JoinRoom/JoinRoomList.vue'

export default {
  name: 'JoinRoom',
  components: {
    JoinRoomList
  }
}
</script>

<style lang="scss">
.join-room {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
