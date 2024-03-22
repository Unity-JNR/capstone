<template>
  <navigation/> 
      


<div class="table-responsive" >
   <!-- Button trigger modal -->

                   <table class="table table-bordered table-hover table-dark" >
                       <thead>
                           <tr>
                               <th>prodName</th>
                               <th>quantity</th>
                               <th>amount</th>
                               <th>Category</th>
                               <th>img</th>
                               
                           </tr>
                       </thead>
                       <tbody>
                           <tr  v-for="item in $store.state.carts" :key="item.id">
                               <td>{{ item.prodName }}</td>
                               <td>{{ item.quantity }}</td>
                               <td>R{{ item.totalAmount }}</td>
                               <td>{{ item.category }}</td>
                               <td><img :src="item.img" alt="Product Image" id="image" class=" img-fluid"></td>
                               <td><button class="btnes" @click="deletefromcart(item.order_id)">decrease</button></td>
                          
                           </tr>
                       </tbody>
                   </table>

                   <div>
                     <button @click="buy($cookies.get('userID'))">buy</button>
                   </div>

                   <div>
                     <p>R{{ totalAmount }}</p>
                   </div>
               </div>

            
 
                

 
<footers class="fixed-bottom"/>
</template>

<script>
import navigation from '@/components/navigation.vue'
import footers   from '@/components/footers.vue'
export default {
  components: {
    navigation,
    footers
  },
  methods: {
    deletefromcart(order_id) {
      this.$store.dispatch('deletefromcart', order_id)
    },
    buy(){
      console.log(typeof  +$cookies.get('userID') );
      this.$store.dispatch('buy', +$cookies.get('userID'));
  
      

    },
 

  },
  computed: {
    getCart() {
      this.$store.dispatch('getCart', $cookies.get('userID'))
    },
    totalAmount() {
      let carts = this.$store.state.carts;
      let total = 0;
      for (let i = 0; i < carts.length; i++) {
        // Assuming totalAmount is a string, convert it to a number
        let amount = parseFloat(carts[i].totalAmount);

        // Alternatively, you can use the unary plus operator
        // let amount = +carts[i].totalAmount;

        // If totalAmount is NaN after conversion, set it to 0
        if (isNaN(amount)) {
          amount = 0;
        }

        total += amount;
      }
      return total;
    }
  },
  mounted() {
    this.getCart
  }
}
</script>

<style>
  body{
    background-color: #363636 !important;
  }
      #image{
        width: 100%;
        object-fit:contain;
        height: 175px
    } 
    td{
        vertical-align: middle
        ;
    }
 
</style>