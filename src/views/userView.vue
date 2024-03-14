<template>
    <div class="table-responsive"> 
        <table class="table table-bordered table-hover table-dark">
            <thead>
                <tr>
                    <!-- <th>ID</th> -->
                    <th>userName</th>
                    <th>userMail</th>    
                    <th>userRole</th>    
                    <th>delete</th>
                    <th>edit</th>
                    
                </tr>
            </thead>
            <tbody v-for="item in $store.state.users" :key="item.UserID">
                <tr>
                    <!-- <td>{{item.userID}}</td> -->
                    <td>{{item.userName}}</td>
                    <td>{{item.userMail}}</td>
                    <td>{{item.userRole}}</td>
                    <td><button class="btn btn-dark" @click="deleteUser(item.UserID)">Delete</button></td>  
                    <td>
                                                                   <!-- Button trigger modal -->
                                       <button type="button" class="btn btn-dark" data-bs-toggle="modal" :data-bs-target="'#exampleModal'+item.UserID">
                                        edit
                                        </button>

                                        <!-- Modal -->
                                        <div class="modal fade" :id="'exampleModal'+item.UserID" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <input id="input" type="text" placeholder="name" v-model="userName">
                                                <input id="input" type="text" placeholder="mail" v-model="userMail">
                                                <input id="input" type="text" placeholder="userRole" v-model="userRole">
                                                
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary" @click="updateUser(item.UserID)">Save changes</button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>

                    </td>  
                    
          
                </tr>
            </tbody>
        </table>
    </div>         

           
  
</template>
<script>

export default {
    components: {
      
    },
    data() {
        return{
            userName: "",
            userMail: "",
            userRole: "",
        }
    },
    methods: {    
 
        getUsers(){
          this.$store.dispatch('getUsers')
        },
        deleteUser(userID){
            this.$store.dispatch('deleteUser',userID)
        },
        updateUser(UserID){
            let edit = {
              id: UserID,
              userName: this.userName,
              userMail: this.userMail,
              userRole: this.userRole
        
            }
            this.$store.dispatch('updateUser',edit)  
        }
    },
    mounted() {
        this.getUsers()
    },
   
      

    
}
</script>
<style >
body{
    background-color: gray;
}
 #btn{
        margin-top: 20px !important;
        margin-bottom: 20px !important;
        width: 100px !important;
        height: 25px !important;
        border-radius: 10px !important;
        border: 1px solid black !important;
        background-color: white !important;
        color: black !important;
        font-size: 15px !important;
        font-weight: bold !important;
        cursor: pointer !important;
    }
    #input {
  font-size: 20px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 5px 0;
  background-color: transparent;
  outline: none;
  color: black;

}
#input::placeholder{
    color: gray ;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>