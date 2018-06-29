<template>
  <div class="main-menu">
    <CreateOrJoin />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CreateOrJoin from '@/components/CreateOrJoin.vue'

export default {
  name: 'MainMenu',
  components: {
    CreateOrJoin
  }
}
</script>

<style lang="scss">
.main-menu {
  height: 100vh;
}
</style>

