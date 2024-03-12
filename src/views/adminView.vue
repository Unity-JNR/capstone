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
                                    <td>{{ item.description }}</td>
                                    <td>{{ item.category }}</td>
                                    <td><img :src="item.img" alt="Product Image" id="image" class=" img-fluid"></td>
                                    <td>
                                                                                <!-- Button trigger modal -->
                                        <button type="button" class="btn btn-dark" data-bs-toggle="modal" :data-bs-target="'#exampleModal'+item.id">
                                        edit
                                        </button>

                                        <!-- Modal -->
                                        <div class="modal fade" :id="'exampleModal'+item.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <input id="input" type="text" placeholder="productname" v-model="prodName">
                                                <input id="input" type="number" placeholder="quantity" v-model="quantity">
                                                <input id="input" type="number" placeholder="amount" v-model="amount">
                                                <input id="input" type="text" placeholder="decripstion" v-model="description">
                                                <input id="input" type="text" placeholder="category" v-model="category">
                                                <input id="input" type="text" placeholder="img" v-model="img">
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary" @click="updateproduct(item.id)">Save changes</button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>

                                    </td>
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
        },

        updateproduct(id){
            let edit = {
              id: id,
              prodName: this.prodName,
              quantity: this.quantity,
              amount: this.amount,
              description: this.description,
              category: this.category,
              img: this.img
            }
            this.$store.dispatch('updateproduct',edit)  
        }

    },
    mounted(){
        this.getadmin();
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