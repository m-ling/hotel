<template>
    <div id="login">
      <div v-show="!islogin" class="shade"></div>
       <div class="log-swp" :class="{down:islogin}">
        <div class="log-logo">
            <p class="iconfont icon-cha-copy" @click="LogDel"></p>
            <div>
                <img src="@/assets/img/logo-fmo-white.svg" alt="">
                <h4>fans-of-m.o.</h4>
                <span>a-new-way-of-recognizing-our-valued-guests</span>
            </div>
           
        </div>
        <swiper :options="swiperOption" ref="mySwiperL" id="swipt-L" >
          <!-- slides -->
          <swiper-slide>
          <div  class="log-login">
            <div class="log-left">
              <h4>im-a-fan</h4>
              <g-input :title="'会员名或邮箱'" :inform="'请输入会员名或邮箱'"></g-input>
               <g-input :title="'密码'" :inform="'请输入密码'"></g-input>
               <a href="">忘记密码？</a>
               <button>登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
            </div>
            <div class="log-right">
              <h4>become-a-fan-of-mo</h4>
               <p>join-fans-of-mo-for-faster-booking-complimentary-wifi-and-exclusive</p> 
               <ul>
                  <li>-daily-breakfast</li>
                  <li>-dining-or-spa-credit</li> 
                  <li>-room-upgrade</li> 
                  <li>-early-check-in</li> 
                  <li>-late-check-out</li> 
                  <li>-streaming-wifi</li> 
                  <li>-celebratory-treat</li> 
                  <li>-pressing-services</li></ul>
                  <a href="/fans-of-mo">learn-more</a></div>
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
import gInput from "./mini-component/g-input.vue"

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
    components:{ gInput },
    methods:{
       LogDel(){
      console.log(123);
      this.islogin=true;
    },
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
      // this.swiper.slideTo(3, 1000, false)
      // 
      
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
    transition: .5s;
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
.log-left{
    width: 32%;
    background: chartreuse;
    border-right: 2px solid #000;
    padding: 19px 68px;
}
.log-left a{
 color:cornflowerblue;
 display: block;
}
.log-left button{
    width: 76%;
    height: 46px;
    background: crimson;
    color: #ffffff;
    border: 0;
    border-radius: 3px;
}
.log-right{
  width: 32%;
  background:#fa0650;
}
.log-right li{
    margin-left: 5px;
    width: 37%;
    float: left;
    line-height: 30px;
    font-family: 'Trade Gothic LT W04 Bd CnNo-20','ArialNarrow','Arial-Narrow','Arial Narrow',Arial,sans-serif;
    text-transform: uppercase;
}
.log-login{
  display: flex;
}
.log-right a{
  clear: both;
}
.log-right ul{
  width: 100%;
}
.log-right h4{
  font-size: 1.375rem;  
  font-family: "Didot LT W02 Roman",Didot,"Hoefler Text",Garamond,"Times New Roman",serif;
  text-transform: none;
}
</style>