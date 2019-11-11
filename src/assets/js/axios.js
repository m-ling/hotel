import Axios from 'axios'

var funs={
    // 登录
    getLog(callback,hname,hpwd){
      Axios.get('/login',{params:{hname,hpwd}})
      .then(callback)
      .catch(err=>{
        console.log(err);
      })
    },

    //注册



}
export default funs;