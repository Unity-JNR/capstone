<template>
    <navigation/>
    <div  v-if="$store.state.users.length !== 0">
        <div class="table-responsive"> 
            <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
   Add
   </button>
   
   <!-- Modal -->
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div class="modal-dialog">
       <div class="modal-content">
         <div class="modal-header">
           <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
           <input id="input" type="text" placeholder="Name" v-model="userName">
           <input id="input" type="email"placeholder="userMail" v-model="userMail">
           <input id="input" type="text" placeholder="userRole" v-model="userRole">
           <input id="input" type="text" placeholder="userPass" v-model="userPass">
         </div>
         <div class="modal-footer">
           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
           <button type="button" class="btn btn-primary" @click="addusers()">Save changes</button>
         </div>
       </div>
     </div>
   </div>
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
    </div>

    <div  v-else>
       <spinner/>
    </div>
           
  <footers class="fixed-bottom"/>
</template>
<script>
import spinner from '@/components/spinner.vue'
import navigation from '@/components/navigation.vue'
import footers   from '@/components/footers.vue'
import Swal from 'sweetalert2'

export default {
    components: {
      spinner,
      navigation,
      footers
    },
    data() {
        return{
            userName: "",
            userMail: "",
            userRole: "",
            userPass:""
        }
    },
    methods: {    
 
        getUsers(){
          this.$store.dispatch('getUsers')
        },
        deleteUser(userID){
            Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    this.$store.dispatch('deleteUser',userID)
    setTimeout(() => {
                        
                        window.location.reload();
                    }, 1500);
  }
});
          
        },
        updateUser(UserID){
            let edit = {
              id: UserID,
              userName: this.userName,
              userMail: this.userMail,
              userRole: this.userRole,
              userPass: this.userPass
        
            }
            Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
    }).then((result) => {
        if (result.isConfirmed) {
            this.$store.dispatch('updateUser',edit)  
                .then(() => {
                    Swal.fire("Saved!", "", "success");
                    setTimeout(() => {
                        
                        window.location.reload();
                    }, 1500);
                })
                .catch((error) => {
                    Swal.fire("Error!", error.message, "error");
                });
        } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
            setTimeout(() => {
                        
                        window.location.reload();
                    }, 1500);
        }
    });
        },
        addusers(){
            this.$store.dispatch('addusers',this.$data)
            Swal.fire({
  position: "middle",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
           
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