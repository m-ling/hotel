<template>
  <div>
     <div class="nav-box" :style='`height:${h1}px;transition:${ts1}s ${ts2}s; `'>
       <ul class="nav-list" :style='`line-height:${l_h1}px`'>
         <li><img src="@/assets/img/data_image_svg+xml,… (1).svg" alt=""></li>
         <li><a href="">首页</a></li>
         <li>||</li>
         <li class="iconfont icon-sousuo"></li>
         <li class="Header-down"  @mouseleave="lestDown">
           <a href="" @mouseenter="getDown"> 酒店介绍</a>
           <p v-if="dd" class="iconfont icon-cebianlan-kongxin"></p>
           </li>
         <li><a href=""> 优惠</a></li>
         <li><a href=""> 餐饮美食</a></li>
         <li><a href="">健康</a></li>
       </ul>
       <ul class="nav-list2" :style='`line-height:${l_h2}px;width:${l_w1}%;`'>
         <li><a href=""> 礼品卡</a></li>
         <li><a href="javascript:;" @click="needLog"> Fans of M.O. </a></li>
         <li class="iconfont icon-user"></li>
       </ul>
       <div class="nav-botton" :style='`transform: translateX(${X}%);`' >
         <a href="javascript:;" @click="judgeLog">查看房价</a>
       </div>
        </div>
       <div v-if="dd" class="nav-down" @mouseenter="getDown" @mouseleave="lestDown" :style="`top:${Top}px`">
         <ul>
           <li>上海</li>
           <li>|</li>
           <li>北京</li>
           <li>|</li>
           <li>三亚</li>
           <li>|</li>
           <li>巴黎</li>
           <li>|</li>
           <li>东京</li>
         </ul>
       </div>
    

 

  </div>
</template>
<script>
import {mapMutations} from 'vuex'

export default {
  data(){
    return{
        h1:90,ts1:0,ts2:0,l_h1:50,l_h2:50,l_w1:40,X:99,Top:91,dd:false
    }
  },mounted(){
    window.onscroll=()=>{
      // var scrollH=document.body.scrollTop||document.documentElement.scrollTop;
      var scrollH=window.pageYOffset
      if(scrollH>=10){
         this.h1=62;
         this.l_h1=24;
         this.l_h2=34;
         this.X=0;
         this.Top=63;
         this.ts1=.1;
      }else{
         this.h1=90;
         this.l_h1=50;
         this.l_h2=50;
         this.X=99;
         this.ts1=.4;
         this.Top=91;
      }
     }
  },
  // computed:{
  // ...mapMutations(['changeLog'])
  // },

  methods:{
    ...mapMutations(['changeLog','showPrompt','selicon']),
    needLog(){
      this.changeLog();
    },
    judgeLog(){
      // this.changeLog();
      // this.selicon(4);
      // this.showPrompt();
       this.$router.push('/about/12')
    },
    getDown(){
      this.dd=true;
    },
    lestDown(){
      this.dd=false;
    }

  
  },
  created(){
  }
}
</script>
<style scoped>
.nav-box{
  width: 100%;
  border-bottom: 1px solid #c0c0c0;
  color: #575656 !important;
  font-family: "Didot LT W02 Roman",Didot,"Hoefler Text",Garamond,"Times New Roman",serif !important;
  font-size: 21px;
  position:fixed;
  display:flex;
  z-index:2;
  min-width: 1200px;
  background:#fff;
  box-shadow: 0 0 20px 10px rgba(172, 172, 172, 0.63);
  
}
.nav-list{
    display: block;
    width: 55%;
    height: 80px;
    padding: 0px;
    -webkit-transition: .7s;
    transition: .7s;
    display: flex;
    flex-flow: nowrap;
}
.nav-list img{
  width:53px;
  
}
.nav-list li,.nav-list2 li {
  float: left;
  margin-left:20px; 
}

.nav-list li:nth-child(3),.nav-list li:nth-child(4){
margin-top:-3px;
font-size: 20px;
}
.nav-list li:nth-child(1){
margin-top:4px;
margin-right: 4px;
}
.nav-box a:hover{
  color:#b17b06 !important;
}
.nav-list2 li:nth-child(2){
     font-family: eng_1;
    text-transform: uppercase;
    font-size: .875rem;
    letter-spacing: .05rem;
    font-weight: bolder;
}
.nav-list2 li:first-child{
    margin-left: 44%;
  font-family: "Trade Gothic LT W04 Bd CnNo-20","ArialNarrow","Arial-Narrow","Arial Narrow",Arial,sans-serif;
  text-transform: uppercase;
  font-size: .875rem;
}
.nav-list2{
    display: block;
    -webkit-transition: .7s;
    transition: .7s;
    height: 50px;
    line-height: 60px;
    display: flex;
    flex-flow: nowrap;
}
.nav-botton{
    height: 100%;
    width:13%;
    background:#b02909;
    text-align: center;
    line-height: 71px;
    overflow: hidden;
    transition:.7s .1s; 
}
.nav-botton:hover{
      background: #891e04;
}
.nav-botton a{
  color:#fff !important;
}
.nav-botton a:hover{
  color:#fff !important;
}
.nav-down{
    background: #e0d3b5;
    height: 49px;
    position: fixed;
    width: 76%;
    top: 65px;
    left: 98px;
    -webkit-transition: .5s;
    transition: .5s;
    border-radius: 9px;
    z-index: 3;
    font-size: 16px;
}
.nav-down ul{
  display: flex;
  flex-wrap: nowrap;
}
.nav-down ul li{
  margin-left: 27px; 
  cursor: pointer;
}
.HeaderShow{
  display:block;
}
.icon-cebianlan-kongxin{
    position: absolute;
    font-size: 31px;
    top: 21px;
    left: 252px;
    color: #b17b06;
}
.nav-down ul li:nth-child(n):hover{
   color:#a57203;
}
</style>