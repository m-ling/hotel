<template>
   <div class="data-put">
             <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-rili"></use>
          </svg>
          <!-- <Flatpickr :options="fpOptions" v-model="dateStr" placeholder="退房" /> -->
            <flat-pickr v-model="date" :placeholder="ph" ></flat-pickr>
         </div>
</template>
<script>
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

.flatpickr-input {
  margin-left: 20px;
  border:0 !important;
  outline:none;
}
</style>