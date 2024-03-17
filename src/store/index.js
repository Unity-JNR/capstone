import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'
axios.defaults.withCredentials = true

const loginn = 'https://capstone-umec.onrender.com/login'
const web = 'https://capstone-umec.onrender.com/products'
const user_web = 'https://capstone-umec.onrender.com/users'
const register = 'https://capstone-umec.onrender.com/signup'
const carts = 'https://capstone-umec.onrender.com/cart'

export default createStore({
  state: {
    loginIn: false,
    products: [],
    product: [],
    user:[],
    admin:[],
    users:[],
    single:[]
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
        alert(data.msg)
      
        await router.push('/')
        // window.location.reload()
      } else 
      {
        alert(data.msg)
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
      window.location.reload()
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
      window.location.reload()
    },

  },
  modules: {
  }
})
