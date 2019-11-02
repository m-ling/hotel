import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     islogin:false,
  },
  getters:{
    theLog(state){
      return state.islogin
    }
  },
  mutations: {
    changeLog(state){
      state.islogin=!state.islogin;
    }
  },
  actions: {

  }
})
