<template>
  <div>
    <div id="host">
      <img :src="`${require('@/assets/img/host1.jpg')}`" alt="" style="width:100%">
     
      <div class="data-sel "  >
        <div class="data-text ">
           <img src="@/assets/img/logo-brand-vertical.svg" alt="">
          <p class="display-h1 ">尽享更加愉悦的住宿体验</p>
          <div class="data-content" style="padding-bottom: 3px;">
            <a href="/login" itemprop="url">加入 Fans of M.O.</a>
          </div>
        </div>
        <div class="data-data" >
          <select class="select">
            <option value="">选择目的地</option>
            <option value="sh">上海</option>
            <option value="bj">北京</option>
            <option value="xg">香港</option>
            <option value="sy">三亚</option>
          </select>
          <span>从</span>
          <min-date></min-date>
          <span>到</span>
          <min-date :ph="'退房'"></min-date>
          <p>+添加优惠代码</p>
          <div class="data-button">查看房价</div>
        </div>
       
      </div>
    </div>
  
  </div>
</template>
<script>
import minDate from '@/components/main/minDate.vue'

export default {
  data () {
  return {
  }
},
components:{
  minDate
}
,
watch:{
    dateStr(){
      console.log(this.dateStr);
  }
}}
</script>
<style  scoped>
 #host{
   width:100%;
   min-width: 1150px;
   height:600px;
 }
 #host .data-sel{
    height: 66.5px;
    width: 80%;
    background: #fff;
    position: absolute;
    bottom: 217px;
    left: 50%;
    margin-left: -40%;
    line-height: 66px;
 }
 .data-text{
   display:flex;
   justify-content: space-around;
   position: relative;;
   top:-245px;
   
 }
 .data-text p{
    padding-top: 66px;
    padding-left: -56px;
    font-size: 3.3125rem;
    color: #fff;
    font-family: "Didot LT W02 Bold",Didot,"Hoefler Text",Garamond,"Times New Roman",serif;
    font-style: italic;
    text-transform: uppercase;
    text-shadow: 1px 4px 20px #242021;
}
 .data-text a{ 
     padding-bottom: 13px;
    color: #fff;
    font-family: 'Trade Gothic LT W04 Bd CnNo-20','ArialNarrow','Arial-Narrow','Arial Narrow',Arial,sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1rem;
    text-shadow: 1px 4px 20px #242021;
    border-bottom: 3px solid #fff;
   
 }
 .data-text a::before{
    content: '';
    position: absolute;
    top: 126px;
    height: 3px;
    width: 124.59px;
    background: white;
 }
 .data-content{
    padding-top: 117px;
 }

.data-data{
  width: 100%;
  height: 100%;
  display:flex;
  justify-content:space-around;
  position:absolute;
  top:0px;left:20px;
  
}
.data-data .select{
    height: 36px;
    margin-top: 20px;
    margin-right: 20px;
    width: 162px;
    border: 0;
    border-bottom: 2px solid #888;
}
.data-button{
    height: 45px;
    text-align: center;
    line-height: 45px;
    width: 15%;
    color: #fff;
    margin: 11px 34px 20px 13px;
    font-family: "Didot LT W02 Roman",Didot,"Hoefler Text",Garamond,"Times New Roman",serif;
    font-size: 22px;
    background: #b02909;

}
.data-button:hover{
   background:#891e04;
}
.data-data p:hover{
  color:#74382e;
}
.data-data p{
  color:#b02909;;
  margin-top: 4px;
  font-size: .8125rem;
  font-family: 'Trade Gothic LT W04 Bd CnNo-20','ArialNarrow','Arial-Narrow','Arial Narrow',Arial,sans-serif;
  text-transform: uppercase;
}
</style>