<template>
   <div id='footer' >
     <div class='footer_text'>
      <img src="@/assets/img/logo-brand-vertical.svg" alt="">
      <p>文化东方</p>
      <p>查看所有免费预订电话</p>
      <p>区域销售办事处|公司联系方式</p>
     </div>
    <ul class="footer-ll">
      <li v-for='(li,i) in list' :key='i'><a href="" >{{li}}</a></li>
    </ul>
     <div class="footer-list">
       <span>沪ICP备18035803号-1</span>
       <span>2019 © 文华东方酒店集团有限公司</span>
       <a href="javascript:;">隐私政策</a>
       <a href="javascript:;">站点地图</a>
       <a href="javascript:;">法律公告</a>
       <a href="javascript:;">广告与 Cookie 政策</a>
     </div>
     <img src="@/assets/img/global-gift-card.jpg" alt="" class="img">
     <div class="space">
       <div class="space_text">
         <p>COMMUNICATION</p>
        <i class="iconfont icon-weibo"></i>
        <i class="iconfont icon-weixin"></i>
        <i class="iconfont icon-qq"></i>
        
       </div>
     </div>
   </div>
    
</template>
<script>
export default {
  data(){
    return{
     list:['联系我们','公司介绍','礼品卡','媒体中心','RESIDENCES','投资讯息','招贤纳士','企业责任'],
    }
  }
}
</script>
<style scoped>
#footer{
  width: 100%;
  height:417px;
  background: #413838;
  color: #fff;
  font-size: .8125rem;
  padding: 3.125rem 0;
  padding-left:100px; 
  position: relative;
}
#footer ul{
    width: 420px;
  height: 178px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -427px;
  margin-top: -171px;
  z-index:2;

}
#footer ul li{
    width: 188px;
    height: 62px;
    border-bottom: 1px solid #776c6c;
    float: left;
    line-height: 65px;
    margin-left: 10px;
}
.footer_text{
  width:100px;
  height:100px;
}
.footer-list a{
  font-style: italic;
  font-weight: 600;
  color:#fff;
  margin-left:20px;
}
.footer-list a:hover{
  color:#7a6e6e;
  font-size: 13px;
  border-bottom: 1px solid #7a6e6e;
}
.footer-ll a{
  color:#fff;
  font-size: 17px;
  margin-left:20px;
}
.footer-list{
    position: absolute;
    left: 225px;
    bottom: 56px;
}
.footer_text p:nth-child(2){
  font-weight: 300;
  font-size: 1.25rem;
  font-family: "Didot LT W02 Italic",Didot,"Hoefler Text",Garamond,"Times New Roman",serif;
  font-style: italic;
  margin-top: 51px;
}
.footer_text p{
  text-align: center;
  width: 173px;
}
#footer .img{
  width: 478px;
  position: absolute;
  right: 118px;
  top: -56px;
  z-index: 1;
}
.space{
    width: 32%;
    height: 293px;
    border: 2px solid rgb(253, 251, 249);
    border-bottom:5px solid #fff;
    position: absolute;
    right: 169px;
    top: 34px;
    z-index: 3;
}
.space p{
  font-family: FZCYJ;
  font-size: 37px;
  
}
.space_text{
    position: absolute;
    top: 115px;
    left: 100px;
}
.space_text i{
   font-size: 24px !important;
   margin-left:11px;
}
.space_text i:nth-child(2){
   margin-left:247px;
}
</style>