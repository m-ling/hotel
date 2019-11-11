
<template>
  <div id="bigBenner">
    <swiper :options="swiperOption" ref="mySwiperS2">
    <!-- slides -->
    <swiper-slide v-for="ber of bers" :key="ber.name">
      <div class="beBox">
        <div class="bennerTxt">
          <img :src="ber.url" alt="">
          <div class="line-box">
            <div class="subtitle">
               <h2>蓝色海滩别墅</h2>
               <p>我想要一栋能够欣赏天堂湾全景并且带私人泳池的三卧室别墅。</p>
               <p>这栋豪华别墅俯瞰着爱琴海，拥有三间连带浴室的卧室。独立起居室内摆设着各种座椅，可通往带独立私人泳池的露台。</p>
            </div>
            <div class="be-btn">
              <div class="detail" :style="{background:colDe}"
               @mouseover="colDe='#c35e11';"   @mouseout="colDe=''"
              >查看详情</div>
              <div class="price" :style="{background:colPr}"
               @mouseover="colPr='#c35e11';"   @mouseout="colPr=''"
              >查看房价</div>
            </div>
          </div>
        </div>
        
      </div>
    </swiper-slide>
  </swiper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bers:[{name:0,url:'https://photos.mandarinoriental.com/is/image/MandarinOriental/taipei-room-deluxe-twin-dusk?wid=1400&hei=1160&fmt=jpeg&qlt=75,0&op_sharpen=0&resMode=sharp2&op_usm=1,1,5,0&iccEmbed=0&printRes=72&fit=crop'},
        {name:1,url:'https://photos.mandarinoriental.com/is/image/MandarinOriental/taipei-room-deluxe-twin-dusk?wid=1400&hei=1160&fmt=jpeg&qlt=75,0&op_sharpen=0&resMode=sharp2&op_usm=1,1,5,0&iccEmbed=0&printRes=72&fit=crop'},
        {name:2,url:'https://photos.mandarinoriental.com/is/image/MandarinOriental/taipei-room-deluxe-twin-dusk?wid=1400&hei=1160&fmt=jpeg&qlt=75,0&op_sharpen=0&resMode=sharp2&op_usm=1,1,5,0&iccEmbed=0&printRes=72&fit=crop'},
        ],

        swiperOption: {
          slidesPerView: 'auto',
           spaceBetween: 20,
	        centeredSlides: true,
	        loop: true,
          pagination: {
              el: '.swiper-pagination',
              clickable: true,
              },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiperS2.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
     // this.swiper.slideTo(3, 1000, false)
    }
  }
</script>
<style  scoped>

#bigBenner .beBox{
  width: 100%;
  height: 50%;
  /* background:brown; */
}
#bigBenner .swiper-container {
      width: 100%;
      height: 100%;
    }
#bigBenner .swiper-slide-active .bennerTxt,.swiper-slide-duplicate-active .bennerTxt{
    opacity: 1;
	}
#bigBenner .bennerTxt{
 width: 100%;
  height: 500px;
  opacity: .3;
  transition: 1s;
}
#bigBenner .swiper-slide{
  width: 76% !important;
}
.bennerTxt img{
  width: 50%;
  height: auto;
}
.bennerTxt{
  display: flex;
  align-items:center;
}
.line-box{
  width: 50%;
  height: 90%;
  border:1px solid #d8d8d8;
  position: relative;
  left: -45px;
}
.subtitle{
    width: 45%;
    position: absolute;
    top: 12%;
    right: 15%;
}
.subtitle p{
  text-align: center;
  
}
.subtitle h2{
  text-indent: 50px;
  font-weight: normal;
}
.subtitle p:nth-child(2){
    letter-spacing: 1px;
    line-height: 165%;
    font-weight: 300;
    font-size: 16px;
}
.subtitle p:nth-child(3){
    letter-spacing: 2px;
    line-height: 165%;
    font-weight: 100;
    font-size: 14px;

}
.line-box .detail,.line-box .price{
    width: 100%;
    height: 50px;
    margin-right: 27px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #c1b8b8;
    cursor:pointer;

}
.be-btn{
    display: flex;
    width: 60%;
    bottom: 6%;
    right: 9%;
    position: absolute;
}
</style>

