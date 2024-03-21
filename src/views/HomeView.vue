<template>
  <navigation/>
  <userpf class=" float-end "/>
  <!-- <div class="app"> -->
    <div class="home">
      <video autoplay loop muted> 
        <source src="https://i.imgur.com/xul0o2M.mp4" type="video/mp4">
      </video>
    </div>

  
    <!-- Your other content goes here -->
    <h1>Vintage Vibes</h1>
    <button class="btnHome">
      <router-link to="/products" class="a">explore</router-link>
    </button>
   
  <!-- </div> -->
  <footers class="fixed-bottom"/>
  
</template>

<script>
import navigation from '@/components/navigation.vue'
import footers   from '@/components/footers.vue'
export default {
   components: {
     navigation,
     footers
 
   }

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

.btnHome {
  position: absolute;  
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1; /* Adjust the z-index to bring the h1 to the front */
  color: white;
  /* font-size: 50px; */
  /* text-align: center; */
  font-weight: 500;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-family: 'Courier New', Courier, monospace;
  background-color: rgba(255, 255, 255, 0.999);
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
}
.a {
  text-decoration: none;
  color:  black;
  font-size: 20px;
  font-weight: 500;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-family: 'Courier New', Courier, monospace;
}
</style>
