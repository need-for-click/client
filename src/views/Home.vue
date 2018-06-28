<template>
  <div class="home teal">
    <div class="home__container">
      <home-input-box></home-input-box>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeInputBox from '@/components/Home/HomeInputBox.vue'

export default {
  name: 'home',
  components: {
    HomeInputBox
  }
}
</script>

<style lang="scss">
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
