<!-- The ref attr used to find the swiper instance -->
<template>
<div id="benner2" >
  <!-- 背景图片 -->
    <div class="benner-bimg"
    :style="istrue==0? {background:`url(${require('@/assets/img/x-7.png')}) `}
    :(istrue==1?  {background:`url(${require('@/assets/img/x-6.png')})`}
    :{background:`url(${require('@/assets/img/x-8.png')})`})"></div>
    <div class='ff'>
      <div class="title"><p>得天独厚的地理位置</p><p>目的地</p></div>
  <ul >
    <!-- 选项卡 -->
    <li  v-for="(value,i) of title" :key='i'  :class="{active:istrue==i}" @click="act(i)">{{value}}</li> 
  </ul>
  <!-- 选择显示文本 -->
     <p v-if='istrue==0'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从印度洋到太平洋，亚洲流露出独有的东方灵性和热情。泰国的寺庙和佛像，日本绽放的樱花，这里的景色绝不会让您失望。在繁华的都市中，传统的生活方式与现代理念互相融合。</p>
     <p v-else-if='istrue==1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;谈到世界级的美食、娱乐、购物和服务，北美地区当仁不让。体验纽约的盛世繁华，波士顿的历史和政治气息和华盛顿特区的新英格兰风情。如果您喜欢海滩和温暖气候，不妨前往迈阿密或卡努安岛度过美好假期。游览圣地亚哥，欣赏高耸入云的安第斯山脉风光，探索智利葡萄酒之乡。</p>
     <p v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欧洲国家共同组成了一张紧凑的拼贴画，每个国家都有独具魅力的城市。伦敦、米兰和巴黎是时尚和设计的温床；布拉格、巴塞罗那和马德里则因其丰富的艺术底蕴令人沉迷。若要体验高山探险，请前往日内瓦或慕尼黑，或驻足中东和北美，体验我们令人放松的度假村。</p>
  <!-- 轮播图 -->
  <swiper :options="swiperOption2" ref="mySwiper" id="swipt2" data-ma="测试">
    <!-- slides -->
    <swiper-slide v-for="(banner,a) of banners" :key='a' >
      <div  class="boo">
         <img :src="require(`@/assets/img/b2-y${istrue}-${banner}`)" alt="" class="swi_ter" style="width:95%;">
         <div>{{istrue|findSite(a)}}</div>
      </div>
     </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>

  </swiper>
 
  </div>
  </div>
</template>

<script>
  export default {
    name: 'carrousel',
    filters:{
      findSite(val,a){//条件过滤，得到相应的地名
         var location={
            0:['三亚','上海','东京','北京','台北','吉隆坡','广州','新加坡'],
            1:['华盛顿','卡努安岛','圣地亚哥','波士顿','纽约','迈阿密','圣保罗','卡塔赫纳'],
            2:['伦敦','博德鲁姆','多哈','巴塞罗那','布拉格','慕尼黑','科莫湖','米兰']}
         var get_loc=location[val];
         return  get_loc[a];
      }
    }
    ,
    data() {
      return {
        istrue:0,//选项卡下标
        title:['亚太地区','美洲','欧洲、中东和非洲'],
        banners:['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg'],
        // 轮播图
        swiperOption2: {
          speed:300,
          autoplay:true,
          slidesPerView : 3,
          freeMode: true,
          pagination: {
              el: '.swiper-pagination',
              clickable: true
          }, navigation: {// 如果需要前进后退按钮
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
        }
      }
    },
    methods:{
       act(i){
         this.istrue=i;
       }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
    
    },

    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
       this.swiper.on('reachEnd', ()=>{

         var i=this.istrue;     
         if(i==2){
           this.swiper.slideTo(0, 1, false);
           return this.istrue=0;
         }else{
           i++;
           this.swiper.slideTo(0, 1, false);
           this.istrue=i;
          
         }
        
  })
     }
  }
</script>
<style >
#swipt2{
  height: 792px;
}
#swipt2 .swiper-pagination-bullet-active{
  background:#dbb684 !important;
  width:20px !important;
  border-radius: 38% !important;
}
#benner2 li{
    float: left;
    color: #696868;
    padding-bottom: 5px;
    font-size: 18px;
    margin: 58px 20px;
    transition:.3s;
    cursor:pointer;
}
#benner2 li:hover{
   color:#696868;
   font-size:20px;
}
#swipt2{
  height: 430px;
  padding:50px 20px; 
  clear: both;
}
#benner2 ul .active{
   color:#696868;
   font-size:20px;
   border-bottom:3px solid burlywood;
}
#benner2 ul{
  margin-left: 50px;
}
.bnn_block{
 position: absolute;
 top:10px;
}
#benner2 .benner-bimg{
    width: 100%;
   height:800px;
   transition: 1s;
   background-repeat:no-repeat; 
   background-size: 101% 102% !important;
}
.ff{
  position: relative;
  bottom: 704px;
}
#benner2 p{
    margin: 60px 110px;
    clear: both;
    width: 607px;
    color: #675b5a;
    line-height: 1.6;
    margin-bottom: 1rem;
    text-rendering: optimizeLegibility;
    font-size: 17px;
    font-family: "Open Sans",sans-serif;
}

.swi_ter{
  transition:.5s;
  margin: auto;
  display: block;
  box-shadow:10px 10px 20px #000;
  
}
.swi_ter:hover{
  width:100% !important;
  border-bottom:5px solid burlywood;
}
.boo{
  width:100%; height:361px;
}
.title p:first-child{
  font-size: 1.5rem !important;
  font-family: "Didot LT W02 Roman",Didot,"Hoefler Text",Garamond,"Times New Roman",serif !important;
  margin: -6px 110px !important;

}
.title p:nth-child(2){
  font-size:3.125rem !important;
  font-family: "Didot LT W02 Roman",Didot,"Hoefler Text",Garamond,"Times New Roman",serif !important;
   margin-top:20px !important;
}
</style>
