<template>
  <div class="tracks light-green">
    <v-track></v-track>
  </div>
</template>

<script>
import Track from '@/components/Tracks/Track.vue'

export default {
  name: 'Tracks',
  components: {
    'v-track': Track
  },
  data () {
  },
  methods: {

  }
}
</script>

<style lang="scss">
.tracks {
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  &__button {
    margin-top: 3vh;
  }
}
</style>
