import { createStore } from 'vuex'
import axios from 'axios'
axios.defaults.withCredentials = true

const loginn = 'http://localhost:8086/login'

export default createStore({
  state: {
    loginIn: false
  },
  getters: {
  },
  mutations: {
    setLogged(state,value){
      state.loginIn = value
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
    }
  },
  modules: {
  }
})
