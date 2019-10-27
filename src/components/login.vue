<template>
    <div id="login">
      <div v-show="!islogin" class="shade"></div>
       <div class="log-swp">
        <div class="log-logo">
            <p class="iconfont icon-cha-copy"></p>
            <div>
                <img src="@/assets/img/logo-fmo-white.svg" alt="">
            </div>
        </div>
        <swiper :options="swiperOption" ref="mySwiperL" id="swipt-L" :class="{down:islogin}">
          <!-- slides -->
          <swiper-slide>
          <div  class="log-login">

          </div>
        </swiper-slide>
           <swiper-slide>
          <div  class="log-reg">
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-button-next" slot="button-next"></div>

        </swiper>
       </div>

    </div>
</template>
<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        islogin:false,
        //   
        swiperOption: {
           loop:true,
           navigation: {// 如果需要前进后退按钮
                nextEl: '.swiper-button-next',
                }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiperL.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>
<style  scoped>
#swipt-L{

    width:100%;
}
#login .shade{
    width:100%;
    height:100%;
    background:#201919e8;
    position: fixed;
    z-index:2;
}
#login .log-login{
    width: 100%;
    height: 396px;
   background:fuchsia;
}
#login .log-reg{
    width: 100%;
    height: 396px;
   background:rgb(9, 124, 99);
}
#login .down{
    transform: translateY(-100%);
}
#login .log-logo{
    width: 100%;
    height:168px;
    background:#413838;

}
#login .log-swp{
    width: 100%;
    z-index:3;
    position:relative;
    position: fixed;
    min-height: 550px;
    padding: 40px 20px;
    background: #413838;
    color: white;
    box-shadow: 0 2px 24px 3px rgba(0,0,0,0.25);
}
.log-logo .icon-cha-copy{
    color: #fffffdc4;
    font-size: 74px;
    position: absolute;
    top: -79px;
    right: 34px;
}
.log-logo .icon-cha-copy:hover{
     color: #ffffff;
}
</style>