<template >
<navigation/>
  <div class="c">
    <div class="cards" v-for="item in $store.state.oneuser" :key="item.UserID">
   <div class="profile-pic">
    <img src="https://i.ibb.co/SPrN7Q9/default-avatar.png" alt="default-avatar"  class="img-fluid pfp">
   </div>
   <div class="bottom" >
     <div class="content">
       <span class="name">
        Name: {{ item.userName }}</span>
       <span class="about-me"
         >
         email: {{ item.userMail }} 
       </span>
       <span class="about-me">
        Role: {{ item.userRole }}
       </span>
     </div>
     <div class="bottom-bottom">
       <button class="button" @click="deleteUserAndLogOut(item.UserID)">Delete Account</button>
     </div>
     
   </div>
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
                                                    <input id="input" type="text" placeholder="userPass" v-model="userPass">
                                                    
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary" @click="updateUser(item.UserID)">Save changes</button>
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
  import Swal from 'sweetalert2'
export default {
components: {
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
      updateUser(UserID){
            let edit = {
              id: UserID,
              userName: this.userName,
              userMail: this.userMail,
              userRole: this.userRole,
              userPass:this.userPass
        
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
                    Swal.fire("Error!", error.msg, "error");
                });
        } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
            setTimeout(() => {
                        
                        window.location.reload();
                    }, 1500);
        }
    });
        },
        deleteUserAndLogOut(userID) {
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
    this.deleteUser(userID);

// Call logOut function
this.logOut();
    setTimeout(() => {
                        
                        window.location.reload();
                    }, 1500);
  }
});
          
        },
    deleteUser(userID) {
        this.$store.dispatch('deleteUser', userID);
    },
    logOut() {
        this.$store.dispatch('logOut');
        this.$router.push('/');
    }

    },
  computed: {
    getoneuser(){
      this.$store.dispatch('getoneuser' ,$cookies.get('userID'))
    }
  },
  mounted() {
    this.getoneuser
  }
    
}
</script>
<style>
body {
    background-color: #363636 !important;
  }
  .c{
    justify-content: center;
    align-content: center;
    display: flex;
     height: 80vh;


  }
 
   .cards {
  width: 280px;
  height: 280px;
  background: white;
  border-radius: 32px;
  padding: 3px;
  position: relative;
  box-shadow: #604b4a30 0px 70px 30px -50px;
  transition: all 0.5s ease-in-out;
}


.cards .profile-pic {
  position: absolute;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  top: 3px;
  left: 3px;
  border-radius: 29px;
  z-index: 1;
  border: 0px solid #fbb9b6;
  overflow: hidden;
  transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;
}

.cards .profile-pic img {
  -o-object-fit: cover;
  object-fit: cover;
  width: 75%;
  height: 75%;
  -o-object-position: 0px 0px;
  object-position: 0px 0px;
  transition: all 0.5s ease-in-out 0s;
}

.cards .profile-pic svg {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: 0px 0px;
  object-position: 0px 0px;
  transform-origin: 45% 20%;
  transition: all 0.5s ease-in-out 0s;
}

.cards .bottom {
  position: absolute;
  bottom: 3px;
  left: 3px;
  right: 3px;
  background: #6c6c6c;
  top: 80%;
  border-radius: 29px;
  z-index: 2;
  box-shadow: rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px inset;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}

.cards .bottom .content {
  position: absolute;
  bottom: 0;
  left: 1.5rem;
  right: 1.5rem;
  height: 160px;
}

.cards .bottom .content .name {
  display: block;
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
}

.cards .bottom .content .about-me {
  display: block;
  font-size: 0.9rem;
  color: white;
  margin-top: 1rem;
}

.cards .bottom .bottom-bottom {
  position: absolute;
  bottom: 1rem;
  left: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cards .bottom .bottom-bottom .social-links-container {
  display: flex;
  gap: 1rem;
}

.cards .bottom .bottom-bottom .social-links-container svg {
  height: 20px;
  fill: white;
  filter: drop-shadow(0 5px 5px rgba(165, 132, 130, 0.1333333333));
}

.cards .bottom .bottom-bottom .social-links-container svg:hover {
  fill: #f55d56;
  transform: scale(1.2);
}

.cards .bottom .bottom-bottom .button {
  background: white;
  color: #7f7979;
  border: none;
  border-radius: 20px;
  font-size: 0.6rem;
  padding: 0.4rem 0.6rem;
  box-shadow: rgba(165, 132, 130, 0.1333333333) 0px 5px 5px 0px;
}

.cards .bottom .bottom-bottom .button:hover {
  background: #f55d56;
  color: white;
}

.cards:hover {
  border-top-left-radius: 55px;
}

.cards:hover .bottom {
  top: 20%;
  border-radius: 80px 29px 29px 29px;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
}

.cards:hover .profile-pic {
  width: 100px;
  height: 100px;
  aspect-ratio: 1;
  top: 10px;
  left: 10px;
  border-radius: 50%;
  z-index: 3;
  border: 7px solid #717171;
  box-shadow: rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px;
  transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
}

.cards:hover .profile-pic:hover {
  transform: scale(1.3);
  border-radius: 0px;
}

.cards:hover .profile-pic img {
  transform: scale(2.5);
  -o-object-position: 0px 25px;
  object-position: 0px 25px;
  transition: all 0.5s ease-in-out 0.5s;
}

.cards:hover .profile-pic svg {
  transform: scale(2.5);
  transition: all 0.5s ease-in-out 0.5s;
}
 
</style>