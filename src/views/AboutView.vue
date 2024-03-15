<template>
  <navigation/>
  <div class="about-container">
    <div class="about">
      <!-- Welcome Section -->
  <section class="container mt-4">
      <div class="jumbotron">
          <h1 class="display-4 heading" >Welcome to Vintage Vibes</h1>
          <p class="lead">Your premier online destination for timeless automotive elegance.</p>
          <p class="para">At Vintage Vibes, we specialize in curating a unique collection of iconic vintage cars for enthusiasts and collectors alike.</p>
      </div>
  </section>
  
  <!-- Key Features Section -->
  <section class="container mt-4">
      <div id="exquisite-selection">
          <h2 class="heading">1. Exquisite Selection</h2>
          <p class="para">Explore our carefully chosen range of classic cars, from sleek sports models to majestic classics.</p>
      </div>
  
      <div id="transparency">
          <h2 class="heading">2. Transparency</h2>
          <p class="para">Enjoy a transparent purchasing process with comprehensive documentation on each vehicle's history and maintenance.</p>
      </div>
  
      <div id="passionate-team">
          <h2 class="heading">3. Passionate Team</h2>
          <p class="para">Our dedicated team of automotive enthusiasts is here to assist you at every step, sharing your love for classic cars.</p>
      </div>
  
      <div id="secure-transactions">
          <h2 class="heading">4. Secure Transactions</h2>
          <p class="para">We prioritize your peace of mind, ensuring secure transactions for a trustworthy buying experience.</p>
      </div>
  
      <div id="worldwide-shipping">
          <h2 class="heading">5. Worldwide Shipping</h2>
          <p class="para">Whether you're nearby or across the globe, Vintage Vibes can arrange safe and efficient shipping for your dream car.</p>
      </div>
  </section>
    </div>
<div id="move">
    <img src="https://cdn-images.imagevenue.com/a9/b4/55/ME17RPDN_o.jpg" alt="" id="img" class=" img-fluid ">
</div>
  </div>
</template>

<script>
import navigation from '@/components/navigation.vue'
export default {
  components : {
navigation 
  }
}
</script>



<style>
 body {
    background-color: #363636 !important;
  }

   
  .about-container {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: auto;
  }
  .about {
    max-width: 800px;
    margin: auto;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 15px; /* Added border-radius for a rounded appearance */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #move {
    margin-left: 20px;
  }
 

  .heading {
    color: teal;
  }

  #img{
    max-width: 100% !important;
    margin: auto;
    padding: 20px;
    border-radius: 15px; /* Added border-radius for a rounded appearance */
    animation: anime 2s ease-in-out infinite;
    /* transform: translateY(-50px) !important; */
    margin-top: 50%;


  }

  @keyframes anime {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
  

</style>