<template>
  <div>
     <div class="nav-box" :style='`height:${h1}px;transition:${ts1}s ${ts2}s; `'>
       <ul class="nav-list" :style='`line-height:${l_h1}px`'>
         <li><img src="@/assets/img/data_image_svg+xml,… (1).svg" alt=""></li>
         <li><a href="">首页</a></li>
         <li>||</li>
         <li class="iconfont icon-sousuo"></li>
         <li><a href=""> 酒店介绍</a></li>
         <li><a href=""> 优惠</a></li>
         <li><a href=""> 餐饮美食</a></li>
         <li><a href=""> 健康</a></li>
       </ul>
       <ul class="nav-list2" :style='`line-height:${l_h2}px;width:${l_w1}%;`'>
         <li><a href=""> 礼品卡</a></li>
         <li><a href=""> Fans of M.O. </a></li>
         <li class="iconfont icon-user"></li>
       </ul>
       <div class="nav-botton" :style='`transform: translateX(${X}%);`' >
         <a href="">查看房价</a>
       </div>
     </div>

 

  </div>
</template>
<script>
export default {
  data(){
    return{
        h1:90,ts1:0,ts2:0,l_h1:50,l_h2:50,l_w1:34,X:99
    }
  },mounted(){
    window.onscroll=()=>{
      var scrollH=document.body.scrollTop||document.documentElement.scrollTop;
      if(scrollH>=10){
         this.h1=62;
         this.l_h1=24;
         this.l_h2=34;
         this.X=0;
         this.l_w1=36;
         this.ts1=.1;
      }else{
         this.h1=90;
         this.l_h1=50;
         this.l_h2=50;
         this.X=99;
         this.l_w1=34;
         this.ts1=.4;
      }
     }
  },
  methods:{
  
  },
  created(){
  }
}
</script>
<style scoped>
.nav-box{
  width: 100%;
  background-image: linear-gradient(to bottom,#ffffff,#ebeaea);
  border-bottom: 2px solid #e2e0de;
  color: #575656 !important;
  font-family: "Didot LT W02 Roman",Didot,"Hoefler Text",Garamond,"Times New Roman",serif !important;
  font-size: 1.375rem;
  position:fixed;
  display:flex;
  z-index:2;
  min-width: 1200px;
  
}
.nav-list{
    display: block;
    width: 62%;
    height: 80px;
    padding: 0px;
    transition:.7s ; 
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
     font-family: "Trade Gothic LT W04 Bd CnNo-20","ArialNarrow","Arial-Narrow","Arial Narrow",Arial,sans-serif;
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
    transition: .7s ; 
    height: 50px;
    line-height: 60px;
}
.nav-botton{
    height: 100%;
    width:13%;
    background: #b17b06;
    text-align: center;
    line-height: 71px;
    overflow: hidden;
    transition:.7s .1s; 
    
}

</style>