<template>
  <div class="tracks light-green">
    <v-track :carPosition="position"></v-track>
    <button @click="accelerate" class="tracks__button btn-large">Accelerate</button>
  </div>
</template>

<script>
import Track from '@/components/Tracks//Track.vue'

export default {
  name: 'Tracks',
  components: {
    'v-track': Track
  },
  data () {
    return {
      position: 0
    }
  },
  methods: {
    accelerate () {
      this.position += 2
    }
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
