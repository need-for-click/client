<template>
  <div>
    <div id="containers" class="container">

      <h1>Need For Click</h1>
      <div id="rowroom" class="row">
        <div class="col s1"></div>

        <a href="">
          <div id="createroom" class="col s5 center">
            <h1>Create Room</h1>
            <div class="overlay">
              <div class="text">
                <h2>Let's Go...</h2>
              </div>
            </div>
          </div>
        </a>

        <a href="">
          <div id="chooseroom" class="col s5 center">
            <h1>Choose Room</h1>
            <div class="overlay">
              <div class="text">
                <h2>Let's Go...</h2>
              </div>
            </div>
          </div>
        </a>

      </div>

    </div>
  </div>
</template>

<script>
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


#createroom {
  border: 2px solid beige;
  margin-right: 20px;
  /* background-color: rgb(149, 229, 243); */
  height: 300px;
  border-radius: 10px;
  position: relative;
}

#chooseroom {
  border: 2px solid beige;
  margin-right: 10px;
  /* background-color: rgb(149, 229, 243); */
  height: 300px;
  border-radius: 10px;
  position: relative;
}

a:hover {
  color: aqua;
}

/* ======== */
.overlay {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: #c4c2c0;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
  border-radius: 10px;
}

#createroom:hover .overlay {
  bottom: 0;
  height: 100%;
}

#chooseroom:hover .overlay {
  bottom: 0;
  height: 100%;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

a:visited {
  color: rgb(169, 170, 172);
}
</style>
