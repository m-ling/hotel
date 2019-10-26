<template>
  <div class="card">
   <div class="card-outline">
       <h1>特色优惠</h1>
       <h2>您是否已经心动了？</h2>
       <div class="push-interior">
         <p>奖赏自己一顿惊喜优惠套餐。没有什么时候比现在更适合入住文华东方酒店了。</p>
         <a class="see-all" href="/zh/luxury-hotels/offers">查看所有优惠</a>
       </div>
    <div class="card-pith">
      <card-img class="card-pith1" 
      :local="`${require('@/assets/img/yh-2.png')}`" 
      :isbtn="true" :text="'立即预定'" :t="'美食诱惑'" :tt="'额外住宿一晚、水疗中心签账额和早餐。'" ></card-img>
      <card-img :local="`${require('@/assets/img/yh-1.jpg')}`"
       :isbtn="true" :text="'立即预定'" :t="'住宿及早餐'" :tt="'住宿包含每日全套早餐。'"></card-img>
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
.card{
  min-width: 1184px;
}
.card-outline{
     margin: 0 auto;
    width: 84%;
    height: 364px;
    border: 1px solid#dad1c3;
    padding: 57px;
}
.card-outline h1{
     font-size: 1.5rem !important;
    margin: 0 0 .75rem;
    font-family: "Didot LT W02 Italic",Didot,"Hoefler Text",Garamond,"Times New Roman",serif;
    font-size: 1.125rem;
    font-weight: lighter;
    color: #6d4811;
    font-style: italic;
}
.card-outline h2{
    width: 301px;
    font-family: "Didot LT W02 Roman",Didot,"Hoefler Text",Garamond,"Times New Roman",serif;
    font-size: 60px;
    font-weight: normal;
    margin: 22px 0px;
}
.push-interior p{
    width: 300px;
    font-size: 15px;
    color: #7d7c7c;
    margin-bottom: 48px;
}
.push-interior a{
    font-size: 23px;
    font-weight: lighter;
    color: #b88313;
}
.card-pith1 {
  float:right;
}
.card-pith{
    width: 63%;
    position: absolute;
    top: 80px;
    right: 31px;
}
</style>