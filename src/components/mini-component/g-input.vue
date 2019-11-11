<template>
  <div id="g-inp">
    <label for="in">
      <p class="inp-p">{{title}}</p>
     <div class="inpBlock">
        <input type="text" name="" id="in"
         :placeholder="inform"
         v-model="inpVal" 
         @blur="mm"
         :data-name="name"
         ref="sonInp">
     </div>
    </label>
     <p :style="{color:col}">{{warn}}</p>
  </div>
</template>
<script>
/**登录注册专用表单组件 */

export default {
  props:["title",'inform','name','Warn','col','pwd'],

  data(){
    return{
      inpVal:'',
      warn:'',
      val3:'',
      RegSta:true,
      LogSta:true,
    }
  },
  methods:{
    mm(){
      var name=this.$refs.sonInp.dataset.name;
       this.$emit('getput',this.inpVal,name,this.LogSta) ;
       this.$emit('getReg',this.inpVal,name,this.RegSta) ;
      
       
      
     }
  },
  mounted(){
// this.$emit('getput',12);
  },
  watch:{
    inpVal(){
     this.warn=this.Warn;
     var val=this.inpVal;
     var warn=this.warn;
     var i=parseInt(this.name);
       if(!val){
        this.warn='不能为空呦~'
        this.RegSta=false;
        this.LogSta=false;
       }else{
         switch (i) {
           case 0: //用户名   
           if(/^[a-z0-9]{4,8}$/.test(val)){
           this.warn="";
           this.RegSta=true;
           }else{this.RegSta=false;}
           break;
           case 1: //邮箱
           if(/^(\w)+@((\.\w{2,3}){1,2})$/.test(val)){
           this.warn="";
           this.RegSta=true;
           }else{this.RegSta=false;}
           break;
           case 2: //手机号
          if(/^[a-z0-9]{11}$/.test(val)){
           this.warn="";
           this.RegSta=true;
           }else{this.RegSta=false;}
           break;
            case 3:  //密码
           if(/^[a-z0-9]{4,10}$/.test(val)){
           this.warn="";
           this.RegSta=true;
           }else{this.RegSta=false;}
           break;
            case 4:  //确认密码
           if(val==this.pwd[3]){
           this.warn="";
           this.RegSta=true;
           }else{
              this.warn="两次密码必须一致";
             this.RegSta=false;}
           break;
         }}
    },
    
  }
}
</script>
<style scoped>
#g-inp{
  width: 50%;

}
.inpBlock{
    height: 45px;
    width: 343px;
    background: #fbfaf8;
    text-align: center;
    line-height: 45px;
    border: 1px solid #cabfbf;
    border-radius: 2px;
    position: relative;


}
.inpBlock #in{
 height: 90%;
 width: 90%;
 outline: 0;
 border: 0;
}
.inpBlock::before{
    content: '';
    display: block;
    width: 0;
    height: 0;
    border: inset 7px;
    border-color: transparent #98711a transparent transparent;
    border-right-style: solid;
    border-left-width: 0;
    position: absolute;
    top: -2px;
    left: 1px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    z-index: 1;
}
.inp-p{
    margin-top: 10px !important;
    margin-bottom: 5px !important;
}
#g-inp p:last-child{
  font-size: 13px;
  margin:10px;
}
</style>