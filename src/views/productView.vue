<template>
  <div>
    <div v-for="item in $store.state.products" :key="item.id">
    	<div class="product-card">
		<div class="product-tumb">
			<img :src="item.img" alt="">
		</div>
		<div class="product-details">
			<span class="product-catagory">{{item.category}}</span>
			<h4><a href="">{{ item.prodName }}</a></h4>
			<p>{{item.description}}</p>
			<div class="product-bottom-details">
				<div class="product-price"> R{{ item.amount }}</div>
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>
     
    </div>

  </div>
  </template>


<script>

export default {
    data(){
        return{
            
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

<style scoped>

 
a
{
    text-decoration: none;
    color: #000!important;
    font-weight: 800!important;
}
.product-card {
    width: 380px;
    position: relative;
    box-shadow: 0 2px 7px #dfdfdf;
    margin: 50px auto;
    background: gray;
}


.product-tumb {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    padding: 50px;
    background: #000;
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
    color: #fbb72c;
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
    color: #fbb72c;
}

</style>