
<template>
   <div class="data-put">
          <span class="iconfont icon-rili"></span>
            <flat-pickr v-model="date" :placeholder="ph" ></flat-pickr>
         </div>
</template>
<script>
//******* 日期选择组件*/

export default {
  props:{
    ph:{default:""} 
  },
  data () {
  return {
     date: new Date(),   
  }
},
watch:{
  date(){
    console.log(this.date);
  }
}
,
created(){
 if(this.ph){
   console.log(this.data)
   this.date=null;
 }
  
   }
}
</script>
<style scoped>
 .data-put { 
  height: 53px;
  margin-left:20px; 
  border-bottom:2px solid #aaa; 
}

.data-put .flatpickr-input {
  margin-left: 20px;
  width: 67%;
  border:0 !important;
  outline:none;
}
</style>