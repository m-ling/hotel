<template>
  <div class="more">
    <div class="more-top">
      <img src="@/assets/img/more4.1.svg" alt="">
      <p>您豪华旅行的<span>理想之选</span></p>
    </div>
   <div class="more-imgs">
    <div class="more-lump1">
      <card-img :local="`${require('@/assets/img/more4.2.jpg')}`" 
      ></card-img>
      <p>时装周的内幕指南</p>
      <p>编辑、造型师、买手、名人……时尚达人都拥有前往世界上最时髦城市的完全通行证。以下是他们每一季都要前往的秘密地址</p>
      <p>了解一下</p>
    </div>
    <div class="more-lump2">
      <card-img :local="`${require('@/assets/img/more4.3.jpg')}`"
      ></card-img>
      <p>如何欢庆啤酒节</p>
      <p>从食物和饮料到可以尽情享受所有庆祝活动的地方，这是一份关于全球盛大节日的内幕指南</p>
      <p>了解一下</p>
    </div>
  </div>
  </div>
</template>
<script>
import cardImg from '@/components/main/cardImg.vue';

export default {
  data(){
    return{

    }
  },
  components:{
      cardImg
  }
  
}
</script>
<style scoped>
.more .more-imgs{
    margin: 55px auto;
    width: 83%;
}
.more img{
  height: 260px;
  width: 237px;
  float: left;
}
.more-top p{
  color:#000;
  font-size:20px;
  line-height: 305px;
}
.more span{
  color:brown;
}
.more-top{
    height: 195px;
    width: 93%;
    overflow: hidden;
    margin: 0 auto;
}
.more-lump1{
  width: 50%;
  float: right;
}
.more-lump2{
  width: 50%;
}
.cardImg {
    width: 91%;
}
.more-imgs>div p:nth-child(2){
    font-family: "Didot LT W02 Roman",Didot,"Hoefler Text",Garamond,"Times New Roman",serif;
    font-style: normal;
    font-size: 25px;
}
.more-imgs>div p:nth-child(3){
    font-family: "Open Sans",sans-serif;
    color: #312a29;
    font-weight: 300;
    padding-right: 30px;
    font-size: 14px;
}
.more-imgs>div p:last-child {
    color: #b02909;
    font-family: "Trade Gothic LT W04 Bd CnNo-20","ArialNarrow","Arial-Narrow","Arial Narrow",Arial,sans-serif;
    font-size: 1.1rem;
    font-weight: 400;
}
</style>