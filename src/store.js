import Vue from 'vue'
import Vuex from 'vuex'
import { timeout } from 'q';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logSta:false,
    islogin:true,//登录状态
    /*弹出框*/
    thePrompt:"请先登录呦~~",
    the:"测试",
    icon:'#icon-daku',//图标
    isPrompt:false,//弹出框状态
  },
  getters:{
     theLog(){
       
     }
  },
  mutations: {
       changeLogSta(state){//改变登录状态
        state.logSta=!state.logSta;
       },
       changeLog(state){//改变登录窗口弹出状态
       state.islogin=!state.islogin;
       },
       //-----提示框------------------------
       showPrompt(state,ProNum){         
        state.isPrompt=true;
          setTimeout(()=>{
           state.isPrompt=false;
          },1300);
          switch (ProNum) {
            case 0: 
            state.icon='#icon-daku';
            state.thePrompt='格式错误，再检查看看';//哭
             break;
            case 1: 
            state.icon='#icon-biaoqing';  
            state.thePrompt='亲爱的会员，欢迎您';//笑
            break;
            case 2:
            state.icon='#icon-puka-huangguan'//猫
            state.thePrompt='请先登录呦~';
            break;
            case 3:
            state.icon='#icon-cat'//心
            state.thePrompt='初次见面，赶快登录吧~';
            break;
            case 4:
            state.icon='#icon-Artboard'
            state.thePrompt='请先登录呦~';
            break;//皇冠
           }
       },
       selicon(state,iconNum){
          
       },
       changeProText(state,ProNum){
        
       }
      //--end--------------------------------------
  },
  actions: {

  }
})
