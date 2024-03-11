<template>
  <!-- <div class="app"> -->
    <div class="home">
      <video autoplay loop muted> 
        <source src="https://i.imgur.com/xul0o2M.mp4" type="video/mp4">
      </video>
    </div>
    <!-- Your other content goes here -->
    <h1>Vintage Vibes</h1>
   
  <!-- </div> -->
  
</template>

<script>
export default {
   

}
</script>

<style scoped>
body {
  margin: 0;
  /* overflow: hidden; */
}



.home {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;

}

h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1; /* Adjust the z-index to bring the h1 to the front */
  color: white;
  font-size: 50px;
  /* text-align: center; */
  font-weight: 500;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-family: 'Courier New', Courier, monospace;


}
</style>
