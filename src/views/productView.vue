<template>
    <navigation/>
    <div class="input-wrapper">
  <button class="icon">
    <svg
      width="25px"
      height="25px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="#fff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M22 22L20 20"
        stroke="#fff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  </button>
  <input type="text" name="text" class="input" placeholder="search.." />
</div>

<div v-if="$store.state.products.length !== 0">
    <div class="container">
    <div class="row">
        <div v-for="item in $store.state.products" :key="item.id" class="col-md-4">
            <div class="product-card">
                <div class="product-tumb">
                    <img :src="item.img" alt="">
                </div>
                <div class="product-details">
                    <span class="product-catagory">{{ item.category }}</span>
                    <h4><a href="">{{ item.prodName }}</a></h4>
                    <!-- <p>{{ item.description }}</p> -->
                    <div class="product-bottom-details">
                        <div class="product-price">R{{ item.amount }}</div>
                        <div class="product-links">
                            <router-link @click="getproduct(item.id)" :to="{ name: 'product', params: { id: item.id }} "><i class="fa fa-info"></i>info</router-link>
                            <a href=""><i class="fa fa-shopping-cart"></i>buy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<div v-else>
 <spinner/>
</div>

  
  </template>


<script>
import spinner from '@/components/spinner.vue';
import navigation from '@/components/navigation.vue';
export default {

    components: {
        spinner,
        navigation
    },
    data(){
        return{
            
        }
    },
    methods:{
        getproduct(id){
            this.$store.dispatch('getproduct',id);
        }
    },
    computed:{
        getproducts(){
            this.$store.dispatch('getproducts',)
        }
    },
    mounted(){
        this.getproducts
    }
    

}


</script>

<style  >

  body{
    background-color: #363636 !important;
  }
a
{
    text-decoration: none;
    color: #000!important;
    font-weight: 200!important;
}
.product-card {
    width: 380px;
    position: relative;
    box-shadow: 0 2px 7px #dfdfdf;
    margin: 50px auto;
    background: gray;
    border: 1px solid black !important;
}


.product-tumb {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    padding: 50px;
    background: #000;
    border: 1px solid white !important;
}

.product-tumb img {
    max-width: 100%;
    max-height: 100%;
}

.product-details {
    padding: 30px;
}

.product-catagory {
    display: block;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: #000;
    margin-bottom: 18px;
}

.product-details h4 a {
    font-weight: 500;
    display: block;
    margin-bottom: 18px;
    text-transform: uppercase;
    color: #363636;
    text-decoration: none;
    transition: 0.3s;
}

.product-details h4 a:hover {
    color: #fbb72c !important;
}

.product-details p {
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 18px;
    color: #000;
}

.product-bottom-details {
    overflow: hidden;
    border-top: 1px solid #eee;
    padding-top: 20px;
}

.product-bottom-details div {
    float: left;
    width: 50%;
}

.product-price {
    font-size: 18px;
    color: #000;
    font-weight: 600;
}

.product-price small {
    font-size: 80%;
    font-weight: 400;
    text-decoration: line-through;
    display: inline-block;
    margin-right: 5px;
}

.product-links {
    text-align: right;
}

.product-links a {
    display: inline-block;
    margin-left: 5px;
    color: #e1e1e1;
    transition: 0.3s;
    font-size: 17px;
}

.product-links a:hover {
    color: #fbb72c !important;
}

.input-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: relative;
 
}

.input {
  border-style: none;
  height: 50px;
  width: 50px;
  padding: 10px;
  outline: none;
  border-radius: 50%;
  transition: 0.5s ease-in-out;
  background-color: #000;
  /* box-shadow: 0px 0px 3px #1557c0; */
  padding-right: 40px;
  color: #fff !important;
}

.input::placeholder,
.input {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 17px;
}

.input::placeholder {
  color: #8f8f8f;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  outline: none;
  border-style: none;
  border-radius: 50%;
  pointer-events: painted;
  background-color: transparent;
  transition: 0.2s linear;
}

.icon:focus ~ .input,
.input:focus {
  box-shadow: none;
  width: 250px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom: 3px solid #ffffff;
  transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
}


</style>