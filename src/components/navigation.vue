<template>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/products">product</router-link> 
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/checkout">checkout</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" v-if="$cookies.get('userRole') == 'admin'" to="/admin">admin</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" v-if="$cookies.get('userRole') == 'admin'" to="/user">user</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/contact">contact</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" v-if="!$cookies.get('jwt')"  to="/login">login</router-link> 
      </li>
    </ul>
    </div>
  </div>
</nav>
<button class="Btnp" v-if="$cookies.get('jwt')" @click="logOut">

<div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

<div class="text">Logout</div>
</button>
</template>


<script>
    export default {
        computed: {
     logOut() {
     this.$store.dispatch('logOut');
      //  this.$router.push('/login');
     } 
   }  
    }
</script>

<style scoped>

</style>