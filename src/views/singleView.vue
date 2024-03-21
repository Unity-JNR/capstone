<template>
    <navigation/>
      <div class="container">
    <div class="row">
        <div v-for="item in $store.state.product" :key="item.id" >
            <div class="product-card">
                <div class="product-tumb">
                    <img :src="item.img" alt="">
                </div>
                <div class="product-details">
                    <span class="product-catagory">{{ item.category }}</span>
                    <h4><a href="">{{ item.prodName }}</a></h4>
                    <p>{{ item.description }}</p>
                    <div class="product-bottom-details">
                        <div class="product-price">R{{ item.amount }}</div>
                        <div class="product-links">
                            <!-- <router-link @click="getproduct(item.id)" :to="{ name: 'product', params: { id: item.id }} "><i class="fa fa-info"></i>info</router-link> -->
                            <a href=""><i class="fa fa-shopping-cart"></i>buy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<footers/>
</template>
<script>
  import navigation from '@/components/navigation.vue'
  import footers   from '@/components/footers.vue'
export default {
    components: {
        navigation,
        footers
    },
    data() {
        return {
            
        }
    },
    computed: {
      getproduct() {
        this.$store.dispatch("getproduct", this.$route.params.id);
      },
    },
    mounted() {
      this.getproduct; // Corrected the function invocation
    }
}
</script>
<style scoped> 
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

</style>