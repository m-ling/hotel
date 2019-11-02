<template>
    <div class="b3">
      <div class="benner3">
      <h1 class="benner3-title">Are you a fan?</h1>
      <h2 class="benner3-tag">#mandarinoriental</h2>   
      <div class="row">
        <div class="ben-txt">
            <p>
                 <span class="iconfont icon-xiangji1-copy-copy"></span>
                 <i class="fa fa-instagram"></i> Discover our destinations through the eyes of our guests.  Share your experience with <span class="social">#ImAFan</span> and mention <span class="social">@mo_hotels</span> for a chance to be featured.</p>    
             <a target="_blank" class="gallery-link" href="https://www.mandarinoriental.com/im-a-fan?olapicForceRender&amp;clearcache" >View Guest</a>    
        </div>
           
      </div>
    </div>
    <swiper :options="swiperOption3" ref="mySwiper" id="swipt3">
    <!-- slides -->
    <swiper-slide v-for="(banner,a) of banners" :key='a' >
        <div  class="b3-item">
            <img :src="require(`@/assets/img/b3-${banner}`)"  style="width:95%;height:100%">
        </div>
        </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>

    </swiper>
    <p class="b3-t"><a href="#" class="b3-t">Powered by </a></p>
    </div>
</template>
<script>
export default {
    data(){
        return{
             banners:['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg'],
            swiperOption3: {
                speed:300,
                loop : true,
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
    }
}
</script>
<style scoped>
.b3{
    height: 500px;
    margin-bottom: 237px;
    margin-top: 127px;
}
#swipt3{
    clear:both;
    width: 86% !important;
    height: 62%;
}
 
#swipt3 .swiper-wrapper{
    width:0 !important;
}
#swipt3 .swiper-slide{
    width: 330px !important;
}
.b3-item{
    height: 100%;
}
.benner3{
    margin-left: 96px;
}
.benner3-title{
    font-family: "Didot LT W02 Italic",Didot,"Hoefler Text",Garamond,"Times New Roman",serif !important;
    font-style: italic !important;
    font-size: 24px;
    font-weight: 500;
}
.benner3-tag{
  font-size:53px;
  font-family: "Didot LT W02 Italic",Didot,"Hoefler Text",Garamond,"Times New Roman",serif !important;
  font-style:normal;
  font-weight: 500;
  margin: 0;
}
.ben-txt .icon{
    font-size:38px;
    float: left;
    
}
.social{
     color: #8e6919;
     font-weight: bold
}
.ben-txt{
    color: #312a29;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 300;
    line-height: 46px;
    font-size: 19px;
    width: 100%;
}
.ben-txt p{
    width: 63%;
    float: left;
    margin-top: -1px;
}
 .gallery-link{
    font-family: serif !important;
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 700;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    color: #8e6919 !important;
    float: right;
    margin-right: 111px;
}
.b3 .b3-t {
    margin-right: 22px;
    padding: 0;
    display: inline-block;
    font-family: "Didot LT W02 Italic",Didot,"Hoefler Text",Garamond,"Times New Roman",serif !important;
    font-size: 10px;
    text-align: right;
    float:right;
    color:#312a29 !important;
    margin: 17px 40px;
   
}
.b3 .b3-t a::after{
    width: auto;
    margin: 0 10px 0 3px;
    display: inline-block;
    font-family: 'olapic-icons';
    font-size: 16px;
    content: "olapic";
    vertical-align: middle;
    -webkit-font-smoothing: antialiased;
    background: transparent;
    background-size: contain;
    font-weight: bold;
}
</style>