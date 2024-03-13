<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">product</router-link> |
    <router-link to="/checkout">checkout</router-link> |
    <router-link to="/admin">admin</router-link> |
    <router-link v-if="!$cookies.get('jwt')"  to="/login">login</router-link> 
    <!-- <router-link v-if="$cookies.get('jwt')" @click="logOut">LogOut</router-link> -->
    

    
  </nav>
  <button v-if="$cookies.get('jwt')" @click="logOut">LogOut</button>
  <router-view/>

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
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center !important;
  color: white !important;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white !important;
}

nav a.router-link-exact-active {
  color: #fbb72c !important;
}
</style>
