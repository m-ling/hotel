<template>
    <div id="login">
      <div v-show="!islogin" class="shade"></div>
       <div class="log-swp" :class="{down:islogin}">
        <div class="log-logo">
            <p class="iconfont icon-cha-copy" @click="LogDel"></p>
            <div >
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
               <button >登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
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
                  <a href="/fans-of-mo" >learn-more</a>
                  <div class="log-btn" @click="next">立即注册</div>
                  </div>
          </div>
        </swiper-slide>
           <swiper-slide>
          <div  class="log-reg">
            <div class="reg-left">
              <div><h4>im-a-fan</h4>
              <div class="iconfont icon-jiantou2" @click="prev"></div>
              </div>
            </div>
            <div class="reg-right">
              <p>become-a-fan-of-mo</p>
              <p class="instructions ">items-marked-with-span-classrequiredem-classaltemspan-are-required</p>
              <g-input :title="'会员名'" :inform="'请输入会员名'"></g-input>
               <g-input :title="'邮箱'" :inform="'请输入邮箱'"></g-input>
               <g-input :title="'电话'" :inform="'请输入手机号码'"></g-input>
               <g-input :title="'密码'" :inform="'请输入密码'"></g-input>
               <g-input :title="'确认密码'" :inform="'请确认密码'"></g-input>
               <div class="log-btn">NEXT</div>
            </div>
          </div>
        </swiper-slide>
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
        }
      }
    },
    components:{ gInput },
    methods:{
       LogDel(){
      console.log(123);
      this.islogin=true;
    },
     prev(){
      var mySwiper=this.$refs.mySwiperL.swiper
      mySwiper.slidePrev();
    },
    next(){
     var mySwiper=this.$refs.mySwiperL.swiper
      mySwiper.slideNext();
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
    width: 68%;
    height: 396px;
    margin: auto;
    display: flex;
}

#login .down{
    transform: translateY(-100%);
}
#login .log-logo{
    width: 68%;
    height: 144px;
    background: #413838;
    margin: auto;

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
    width: 84%;
    border-right: 1px solid rgba(151,151,151,0.33);
     padding-right: 29px;
    
}
#login .log-btn{
    width: 200px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    position: absolute;
    bottom: 40px;
    left: 41px;
    border-radius: 4px;
    background: #ceb780;
    color: #242021;
    font-size: 20px;
  }
.log-left a{
    color: #757070 !important;
    display: block;
    margin: 15px;
    font-size: 16px;
}
.log-left button{
    width: 76%;
    height: 46px;
    background: crimson;
    color: #ffffff;
    border: 0;
    border-radius: 3px;
    cursor: pointer;
}
.log-right{
  width: 55%;
  position: relative;
}
.log-right li{
    margin-left: 5px;
    width: 37%;
    float: left;
    line-height: 30px;
    font-family: 'Trade Gothic LT W04 Bd CnNo-20','ArialNarrow','Arial-Narrow','Arial Narrow',Arial,sans-serif;
    text-transform: uppercase;
    font-size: 18px;
}

.log-right a{
    clear: both;
    display: block;
    position: absolute;
    bottom: 51px;
    right: 149px;
    color: #ceb780 !important;
    font-family: 'Trade Gothic LT W04 Bd CnNo-20','ArialNarrow','Arial-Narrow','Arial Narrow',Arial,sans-serif;
}
.log-right ul{
  width: 584px;
}
.log-right h4{
    font-family: "Didot LT W02 Roman",Didot,"Hoefler Text",Garamond,"Times New Roman",serif;
    text-transform: none;
    margin: 26px 47px;
    font-size: 1.375rem;
}
.log-logo img{
  float: left;
}
.log-right p{
    font-family: "Open Sans","Arial","Helvetica",sans-serif;
    font-size: .8125rem;
    line-height: 27px;
    /* margin: 32px 130px 18px 49px; */
    width: 412px;
    margin-left: 45px;
}
.log-logo h4{
    font-size: 2.75rem;
    font-family: "Didot LT W02 Roman",Didot,"Hoefler Text",Garamond,"Times New Roman",serif;
    font-weight: 300;
    /* margin: 19px -1px; */
    padding: 14px 136px;
    margin-bottom: -22px;
}
.log-logo span{
    font-family: "Open Sans","Arial","Helvetica",sans-serif;
    font-size: .8125rem;
}
.log-reg{
    display: flex;
    width: 83%;
    height: 396px;
    margin: auto;
}
.log-reg .reg-left{
 width: 10%;
  border-right: 1px solid rgba(151,151,151,0.33);
 
}
.log-reg .reg-right{
    width: 95%;
    padding: 0px 41px;
}

.log-reg #g-inp{
    float: left;
}
.reg-left .icon-jiantou2{
    font-size: 62px;
    margin: 30px 7px;
    color: #f1ecf1;
    /* padding: 81px 0px; */
    cursor: pointer;
    transition: 1s;
}
.reg-left .icon-jiantou2:hover{
   transform:  translate(-20px);
}
.reg-right .log-btn{
    width: 139px !important;
    bottom: 34px !important;
    left: 54% !important;
}
</style>