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
                                    <td><button class="btnes" @click="deleteproduct(item.prodID)">delete</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
</template>
<script>
export default {
     methods:{
        async getadmin() {
            await this.$store.dispatch('getadmin');
        },
        async addproduct(){
            await this.$store.dispatch('addproduct');
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