<template>
     <div class="table-responsive">
                        <table class="table table-bordered table-hover table-dark">
                            <thead>
                                <tr>
                                    <th>prodName</th>
                                    <th>quantity</th>
                                    <th>amount</th>
                                    <th>description</th>
                                    <th>Category</th>
                                    <th>img</th>
                                    <th>edit</th>
                                    <th>delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in $store.state.admin" :key="item.id">
                                    <td>{{ item.prodName }}</td>
                                    <td>{{ item.quantity }}</td>
                                    <td>R{{ item.amount }}</td>
                                    <td>R{{ item.description }}</td>
                                    <td>{{ item.category }}</td>
                                    <td><img :src="item.img" alt="Product Image" id="image" class=" img-fluid"></td>
                                    <td><button class="btnes" @click="updateproduct(item.prodID)">edit</button></td>
                                    <td><button class="btnes" @click="deleteproducts(item.id)">delete</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
        <input id="input" type="text" placeholder="productname" v-model="prodName">
        <input id="input" type="number" placeholder="quantity" v-model="quantity">
        <input id="input" type="number" placeholder="amount" v-model="amount">
        <input id="input" type="text" placeholder="decripstion" v-model="description">
        <input id="input" type="text" placeholder="category" v-model="category">
        <input id="input" type="text" placeholder="img" v-model="img">
        <button @click="addproducts()" id="btn">add</button>

</template>
<script>
export default {
    data(){
        return{
            prodName:'',
            quantity:'',
            amount:'',
            description:'',
            category:'',
            img:''
        }
    },
     methods:{
        async getadmin() {
            await this.$store.dispatch('getadmin');
        },
        async addproducts(){
             this.$store.dispatch('addproducts',this.$data);
        },
        deleteproducts(id) {
 
 this.$store.dispatch('deleteproducts', id)
        }
    },
    mounted(){
        this.getadmin();
    }
}
</script>
<style>
      #image{
        width: 100%;
        object-fit:contain;
        height: 175px
    } 
</style>