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
export default {
  props:["title",'inform','name','Warn','col'],
  RegSta:true,
  LogSta:true,
  data(){
    return{
      inpVal:'',
      warn:'',
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
       if(!val){
        this.warn='不能为空呦~'
        this.RegSta=false;
        this.LogSta=false;
       }else{
          var i=parseInt(this.name);
         console.log(typeof i)
         switch (i) {
           case 0:    
           if(/^[a-z0-9]{4,8}$/.test(val)){
           this.warn="";
           this.RegSta=true;
           }else{this.RegSta=false;}
           break;
           case 1:    
           if(/^[a-z0-9]{11}$/.test(val)){
           this.warn="";
           this.RegSta=true;
           }else{this.RegSta=false;}
           break;
           case 2:    
          if(/^[a-z0-9]{4,8}$/.test(val)){
           this.warn="";
           this.RegSta=true;
           }else{this.RegSta=false;}
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