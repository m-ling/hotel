<template>
 <div id="seed">
    <div class="seed-benner">
    <swiper :options="swiperOption" ref="mySwiperS1">
    <!-- slides -->
    <swiper-slide v-for="img of imgs" :key="img.name"><img :src="img.url" alt=""></swiper-slide>
  </swiper>
  <div class="iconfont icon-left-copy" :style="{background:bgDownL}"
   @mouseover="bgDownL='#c35e11';"   @mouseout="bgDownL=''" @click="swiper.slideNext();"></div>
  <div class="iconfont icon-left" :style="{background:bgDownR}"
   @mouseover="bgDownR='#c35e11';" @mouseout="bgDownR='';" @click="swiper.slidePrev();"></div>
  </div>
     <div class="seed-txt">
     <p>让自己沉醉于</p>
     <h1>北京</h1>
     <table style="color:#be5c11;" border="0" cellspacing="1" cellpadding="0" >
       <tr>
         <td><span class="iconfont icon-icon-test">北京市東城區王府井大街269號，郵編：100006</span></td>
         <td><span class="iconfont icon-dianhua">+86 (10) 8509 8888</span></td>
       </tr>
       <tr>
         <td><span class="iconfont icon-time">3:35 下午 CST</span></td>
         <td><span class="iconfont icon-tianqi">11/18 °C</span></td>
       </tr>
       <tr>
         <td><span class="iconfont icon-youxiang">mowfj-reservations@mohg.com</span></td>
         <td><span class="iconfont icon-xiazai">酒店電子小冊子</span></td>
       </tr>
     </table>
     <p>
       我們的時尚酒店俯瞰著紫禁城等地標，提供北京最大的客房和套房。酒店融合了現代美學和中式古典裝潢，設有兩間餐廳和一間酒吧，而且所有餐廳和酒吧均可直接通往寬敞的天台花園陽台。王府井文華東方酒店設有高級水療中心（提供特色養生計劃）、健身中心，以及配備玻璃天花的 25 米室內標準游泳池，將為北京居民和遊客提供理想的私密度假勝地。
     </p>

   </div>
 </div>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        bgDownL:'',
        bgDownR:'',
        imgs:[{name:1,url:'https://photos.mandarinoriental.com/is/image/MandarinOriental/wangfujing-hotel-exterior-01?wid=720&hei=1080&fmt=jpeg&qlt=75,0&op_sharpen=0&resMode=sharp2&op_usm=0.8,0.8,5,0&iccEmbed=0&printRes=72&fit=crop'},
        {name:2,url:'https://photos.mandarinoriental.com/is/image/MandarinOriental/wangfujing-hotel-exterior-01?wid=720&hei=1080&fmt=jpeg&qlt=75,0&op_sharpen=0&resMode=sharp2&op_usm=0.8,0.8,5,0&iccEmbed=0&printRes=72&fit=crop'},
        {name:3,url:'https://photos.mandarinoriental.com/is/image/MandarinOriental/wangfujing-hotel-exterior-01?wid=720&hei=1080&fmt=jpeg&qlt=75,0&op_sharpen=0&resMode=sharp2&op_usm=0.8,0.8,5,0&iccEmbed=0&printRes=72&fit=crop'},
        {name:4,url:'https://photos.mandarinoriental.com/is/image/MandarinOriental/wangfujing-hotel-exterior-01?wid=720&hei=1080&fmt=jpeg&qlt=75,0&op_sharpen=0&resMode=sharp2&op_usm=0.8,0.8,5,0&iccEmbed=0&printRes=72&fit=crop'},
        {name:5,url:'https://photos.mandarinoriental.com/is/image/MandarinOriental/wangfujing-hotel-exterior-01?wid=720&hei=1080&fmt=jpeg&qlt=75,0&op_sharpen=0&resMode=sharp2&op_usm=0.8,0.8,5,0&iccEmbed=0&printRes=72&fit=crop'}

        ],
        swiperOption: {
           effect: 'flip',
           grabCursor: true,
           pagination: {
              el: '.swiper-pagination',
            },
           loop:true,
           autoHeight: true
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiperS1.swiper
      }
    },
    mounted() {
      console.log('this is current swiper instance object', this.swiper)
     // this.swiper.slideTo(3, 1000, false)
    }
  }
</script>
<style  scoped>
 #seed{
   padding: 11%;
   display: flex;
   justify-content:space-between;
 }
 #seed table{
   width: 100%;
   border-collapse:collapse;
 }

 #seed table td{
   border:1px solid #c1b8b8;
   padding: 20px;
 }
  #seed table td span{
    font-size:15px; 
    text-transform:uppercase;
  }
  .seed-benner{
    width:30%;
    height: 30%;
    position: relative;
  }
  .seed-benner img{
    width:100%;
    height:100%;
  }
  .seed-benner::after{
    right: -59px;
    position: absolute;
    height: 1px;
    width: 60px;
    z-index: 2;
    top: 111px;
    background: #c1b8b8;
    content: "";
  }
   .seed-benner::before{
    right: 0px;
    position: absolute;
    height: 1px;
    width: 60px;
    z-index: 2;
    top: 111px;
    background: #ffffff;
    content: "";
  }
  .seed-benner .iconfont{
    width: 60px;
    height: 60px;
    color: #ffffff;
    position: absolute;
    z-index: 2;
    line-height: 60px;
    font-size: 35px;
    text-align: center;
    box-sizing: border-box;
  }
   .seed-benner .icon-left-copy{
     background:#3e2828e3;
      bottom: 67px;
      right: -62px;
   }
   .seed-benner .icon-left{
      background:#3e2828e3;
      bottom: 67px;
      right: 0px;
   }
   .seed-txt{
     margin-left:12%;
   }
  .seed-txt p:last-child{
    width: 100%;
    text-indent: 50px;
    letter-spacing: 2px;
    line-height: 165%;
    font-weight: 100;
    font-size: 17px;
  }
  .seed-txt p:first-child{
    margin: 0;
    width: 100%;
    letter-spacing: 1px;
    line-height: 165%;
    font-weight: 300;
    font-size: 25px;
    font-family: "Didot LT W02 Italic",Didot,"Hoefler Text",Garamond,"Times New Roman",serif;
}
.seed-txt h1{
    margin: 0;
    color: #332e2e;
    width: 100%;
    letter-spacing: 1px;
    line-height: 165%;
    font-weight: 300;
    font-size: 46px;
}
</style>