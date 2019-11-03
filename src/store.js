import Vue from 'vue'
import Vuex from 'vuex'
import { timeout } from 'q';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin:true,//登录状态
    /*弹出框*/
    thePrompt:"请先登录呦~~",
    icon:'#icon-daku',//图标
    isPrompt:false,//弹出框状态
  },
  getters:{
     theLog(){
       
     }
  },
  mutations: {
       changeLog(state){
       state.islogin=!state.islogin;
       },
       //-----提示框------------------------
       showPrompt(state){
        state.isPrompt=true;
          setTimeout(()=>{
           state.isPrompt=false;
          },1300)
       },
       selicon(state,iconNum){
           switch (iconNum) {
            case 0: state.icon='#icon-daku';  break;//哭
            case 1: state.icon='#icon-biaoqing';  break;//笑
            case 2:
                state.icon='#icon-Artboard'//猫
                break;
            case 3:
                state.icon='#icon-cat'//心
                break;
            case 4:
                state.icon='#icon-crown'//皇冠
                break;
           }
       }
      //--end--------------------------------------
  },
  actions: {

  }
})
