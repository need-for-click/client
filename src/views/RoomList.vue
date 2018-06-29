<template>
  <div class="join-room">
    <ListRoom/>
  </div>
</template>

<script>
import ListRoom from '@/components/RoomList/ListRoom.vue'

export default {
  name: 'roomlist',
  components: {
    ListRoom
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
