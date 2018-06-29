<template>
  <div class="create-or-join">
    <button @click="goToCreateRoomPage" class="button button--amber">Create<br>Room</button>
    <button @click="goToRoomListPage" class="button button--light-blue">Join<br>Room</button>
  </div>
</template>

<script>
export default {
  name: 'createorjoin',
  data () {

  },
  methods: {
    goToCreateRoomPage () {
      this.$router.push({name: 'createroom'})
    },
    goToRoomListPage () {
      this.$router.push({name: 'roomlist'})
    }
    // ...mapActions({
      
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/assets/scss/main.scss';

.create-or-join {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(
    to right bottom,
    rgba(#4db6ac, 0.6),
    rgba(#00796b, 0.6)),
  url('./../assets/nfs.jpg');
  background-size: cover;
  background-position: center;

  @include respond(tab-port) {
    flex-flow: column nowrap;
  }
}

.button {
  text-transform: uppercase;
  text-decoration: none;
  width: 30rem;
  height: 45vh;
  padding: 1.5rem 4rem;
  display: inline-block;
  border-radius: 20px;
  transition: all .2s;
  position: relative;
  font-size: 5rem;

  @include respond(tab-land) {
    width: 25rem;
    font-size: 4rem;
  }

  @include respond(tab-port) {
    width: 20rem;
    font-size: 3rem;
  }

  //Change for the <button> element
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(#000,.2);

    &::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
    }
  }

  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 .5rem 1rem rgba(#000,.2);
  }

  &--amber {
    background-color: #ffca28;
    color: #fff;

    &::after {
        background-color: #ffca28;
    }
  }

  &--light-blue {
    background-color: #4fc3f7;
    color: #000;

    &::after {
        background-color: #4fc3f7;
    }
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
  }
}
</style>
