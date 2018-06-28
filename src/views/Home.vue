<template>
  <div class="home">
    <!-- <img src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- ======== di hapus ========= -->
    <CreateRoom/>
        <!-- ======== di hapus ========= -->

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
    // <!-- ======== di hapus ========= -->

import CreateRoom from '@/components/CreateRoom.vue'
    // <!-- ======== di hapus ========= -->



export default {
  name: 'home',
  components: {
    // HelloWorld,
//========== di hapus =============
    CreateRoom
    //========== di hapus =============

  }
}
</script>
