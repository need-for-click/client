<template>
  <div class="room-list card teal lighten-2">
    <div class="room-list__title card-title center-align"><h4>Room List</h4></div>
    <div class="card-content">
      <div class="collection">
        <a
          v-for="(room, index) in rooms"
          href="#!"
          :key="index"
          class="collection-item">
        <span
          class="new badge"
          data-badge-caption="players">
        {{ room.players }}
        </span>{{ room.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JoinRoomList',
  data () {
    return {
      rooms: [
        {
          name: 'Rockfort',
          players: 4
        },
        {
          name: 'Suzuka',
          players: 2
        },
        {
          name: 'Mugello',
          players: 3
        },
        {
          name: 'Silverstone',
          players: 1
        },
        {
          name: 'Laguna Seca',
          players: 3
        },
        {
          name: 'Tyrestone',
          players: 2
        }
      ]
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
