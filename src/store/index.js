import { createStore } from 'vuex'
import axios from 'axios'
axios.defaults.withCredentials = true

const loginn = 'https://capstone-umec.onrender.com/login'
const web = 'https://capstone-umec.onrender.com/products'

export default createStore({
  state: {
    loginIn: false,
    products: []
  },
  getters: {
  },
  mutations: {
    setLogged(state,value){
      state.loginIn = value
    },
    setProducts(state,value){
      state.products = value
    }
  },
  actions: {
   async login({commit},user){
      let {data} = await axios.post(loginn,user)
      console.log(data);
      $cookies.set('jwt',data.token)
      console.log($cookies);
      alert(data.msg)
      commit('setLogged',true)
    },
    async getproducts({commit}){
      let {data} = await axios.get(web)
      console.log(data);
      commit('setProducts',data)
    }
  },
  modules: {
  }
})
