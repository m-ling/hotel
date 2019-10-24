<template>
  <div>
    <flat-pickr v-model="date" placeholder="退房"></flat-pickr>
  </div>
</template>
 
<script>

  
  export default {    
    data () {
      return {
        date: null,       
      }
    },
    // components: {
    //   flatPickr
    // }
  }
</script> 