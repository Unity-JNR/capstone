import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'
import Swal from 'sweetalert2'
axios.defaults.withCredentials = true

const loginn = 'https://capstone-umec.onrender.com/login'
const web = 'https://capstone-umec.onrender.com/products'
const user_web = 'https://capstone-umec.onrender.com/users'
const register = 'https://capstone-umec.onrender.com/signup'
const carts = 'https://capstone-umec.onrender.com/cart'
const adduser = 'https://capstone-umec.onrender.com/signup'

export default createStore({
  state: {
    loginIn: false,
    products: [],
    product: [],
    user:[],
    admin:[],
    users:[],
    single:[],
    carts:[],
    oneuser:[],
  },
  getters: {
  },
  mutations: {
    setLogged(state,value){
      state.loginIn = value
    },
    setProducts(state,value){
      state.products = value
    },
    setProduct(state,value){
      state.product = value
    },
    setUser(state,value){
      state.user = value
    },
    setadmin(state,value){
      state.admin = value
    },
    setUsers(state,value){
      state.users = value
    },
    setSingle(state,value){
      state.single = value
    },
    setCarts(state,value){
      state.carts = value
    },
    oneuser(state,value){
      state.oneuser = value
    }
    
  },
  actions: {
   async login({commit},user){
      let {data} = await axios.post(loginn,user)
      console.log(data);
      if (data.token !== undefined) {
        $cookies.set('jwt',data.token)
        let [{userRole}]=data.user
        $cookies.set('userRole',userRole)
        let [user] =data.user
        $cookies.set('user',user)
        let [{UserID}] = data.user
        $cookies.set('userID',UserID)

        console.log($cookies);
        Swal.fire({
          title: "login?",
          text: "You have successfully logged in?",
          icon: "success",
          timer:"1500"
        });
      
        await router.push('/')
        // window.location.reload()
      } else 
      {
        Swal.fire({
          title: "login?",
          text: "incorrect password or username?",
          icon: "error",
          timer:"1500"
        });
        $cookies.remove('jwt')
        $cookies.remove('user')
        $cookies.remove('userRole')
        $cookies.remove('userID')
      }
        commit('setLogged')
      // await router.push('/')
      // window.location.reload()
    },
    async register({commit},user){
     let {data} = await axios.post(register,user)
     Swal.fire({
      title: "sign Up?",
      text: `${data.msg}`,
      icon: "success",
      timer:"1500"
    });
     console.log(data);



    },
    async getproducts({commit}){
      let {data} = await axios.get(web)
      console.log(data);
      commit('setProducts',data)
    },
    async getproduct({commit},id){
      let {data} = await axios.get(web +'/'+ id)
      console.log(data);
      commit('setProduct',data)
    },
    async logOut({commit}){
      let cookies=$cookies.keys()
      console.log(cookies)
      let {data} = await axios.delete('https://capstone-umec.onrender.com/logout');
      console.log(data);
      $cookies.remove('jwt')
      $cookies.remove('user')
      $cookies.remove('userRole')
      $cookies.remove('userID')
      await router.push('/')
      window.location.reload()
     //  let {data}=await axios.delete(baseUrl+'/logOut')
     //  alert(data.msg)
     },
     async getadmin({commit}){
      let {data} = await axios.get(web)
      console.log(data);
      commit('setadmin',data)
     },
     async addproducts({commit},product) {
       let {data} = await axios.post(web,product)
       console.log(data);
       window.location.reload()
      //  commit('setProducts',data)
     },
     async deleteproducts({commit},id) {
       let {data} = await axios.delete(web +'/'+ id)
       console.log(data);
       window.location.reload()
      //  commit('setProducts',data) 
     },
     async updateproduct({commit},update){
      let {data} = await axios.patch(web+'/'+ update.id,update)
      console.log(data);
      // window.location.reload()
    },
    async getUsers({commit}){
      let {data} = await axios.get(user_web)
      console.log(data);
      commit('setUsers',data)
    },
    async deleteUser({commit},UserID) {
    let {data} = await axios.delete(user_web +'/'+ UserID)
    console.log(data);
    window.location.reload()


    },
    async updateUser({commit},update){
      let {data} = await axios.patch(user_web+'/'+ update.id,update)
      console.log(data);
      window.location.reload()
    },
    async addtocart({commit},payload){
      let {data} = await axios.post(`${carts}/${payload.id}?user=${payload.userID}`)
      console.log(data);
      Swal.fire({
        title: "cart",
        text: "added to cart",
        icon: "success",
        timer:"1000"
      });
      // window.location.reload()
    },
     async getCart({commit},userID) {
      let {data} = await axios.get(carts+'/'+userID)
      console.log(data);
      commit('setCarts',data)
     },
     async getoneuser({commit},userID) {
      let {data} = await axios.get(user_web +'/'+ userID)
      console.log(data);
       commit('oneuser',data)
     },
     async deletefromcart({commit},order_id){
      let {data} = await axios.delete(carts + '/' + order_id )
      console.log(data);
      window.location.reload()
     }  ,
     async addusers({commit},user){
      let {data} = await axios.post(adduser,user)
      // alert(data.msg)
      console.log(data);

       window.location.reload();
 
 
 
     },
     async buy({commit},UserID) {
      let {data} = await axios.delete(carts + '/' + UserID)
      console.log(data);
      Swal.fire({
        title: 'Purchase',
        text: `Thank you for your purchase`,
        icon: "success",
        timer:"1000"

      
      
      })
      // commit('set',data)
      window.location.reload()
     }

  },
  modules: {
  }
})
