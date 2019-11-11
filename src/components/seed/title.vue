<template>
  <div id="#a-title">
    <div class="t-img">
      <img src="@/assets/img/sTit1.jpg" alt="" style="width:100%;h">
       <p>北京</p>
      <date-card></date-card>
    </div>
    
  </div>
</template>
<script>
import dateCard from './date-card.vue'

export default {
  data(){
    return{

    }
  },
  components:{
    dateCard
  }
}
</script>
<style scoped>
.t-img{
  width: 100%;
  position: relative;
}
.t-img p{
    position: absolute;
    color: #fff;
    font-family: "Didot LT W02 Bold",Didot,"Hoefler Text",Garamond,"Times New Roman",serif;
    font-size: 51px;
    top: 294px;
    line-height: 1.6;
    text-rendering: optimizeLegibility;
    left: 262px;
    font-style: italic;
    text-transform: uppercase;
    text-shadow: 1px 4px 20px #242021;
}
.t-img p::before{
    left: 28px;
    position: absolute;
    height: 800px;
    width: 1px;
    top: 82px;
    background: #fff;
    content: "";
}
.t-img::after{
    left: 290px;
    position: absolute;
    height: 100px;
    width: 1px;
    z-index: 2;
    bottom: -97px;
    background: #c1b8b8;
    content: "";
}

</style>