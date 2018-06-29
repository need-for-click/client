<template>
  <div class="input-box card">
    <div class="input-box__image card-image">
        <img src="@/assets/speedometer.jpeg">
        <span class="card-title"><h4><i class="small material-icons">flag</i>Need For Click</h4></span>
    </div>
    <div class="card-content">
      <form>
        <div class="field title">
          <label for="input-box__label nickname">Nickname: </label>
          <input class="input-box__input" type="text" name="nickname" v-model="nickname">
        </div>

        <div class="field center-align">
          <a @click="pushNickName" class="input-box__btn waves-effect waves-light btn-large"><i class="material-icons right">arrow_forward</i>NEXT</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeinputbox',
  data () {
    return {
      nickname: ''
    }
  },
  methods: {
    pushNickName () {
      localStorage.setItem('nickname', this.nickname)
    }
  },
  created () {

  }
}
</script>

<style lang="scss">
.input-box {
  max-height: 80%;
  max-width: 80%;

  &__image {
    img {
      filter: blur(1.5px) brightness(80%);
    }
  }

  &__btn {
    width: 100%;
  }

  &__input {
    font-size: 20px !important;
  }
}
</style>
