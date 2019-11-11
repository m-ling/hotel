<template>
  <div id="seedCard">
     <div class="card-box">
       <div class="card-content">
        <img  src="@/assets/img/logo-brand-vertical.svg" alt="">
         <div>
            <ul class="card-ul">
              <li><span>我想入住</span>
                <select class="DC_select1">
                  <option value="">一间客房</option>
                  <option value="">两间客房</option>
                  <option value="">三间客房</option>
                  <option value="">四间客房</option>
                  <option value="">五间客房</option>
                </select>
              </li>
              <li><span>从</span><minDate></minDate></li>
              <li><span>至</span> <minDate></minDate></li>
              <li><span>入住人数为</span>
                <select class="DC_select2">
                  <option value="">一位贵宾</option>
                  <option value="">两位贵宾</option>
                  <option value="">三位贵宾</option>
                  <option value="">四位贵宾</option>
                  <option value="">五位贵宾</option>
                </select>
              </li>
            </ul>
       </div>
       </div>
      
       <div class="card-button">查看客房价格</div>
     </div>

  </div>
</template>
<script>
import minDate from '@/components/main/minDate.vue'

export default {
  data(){
   return{

   }
  },
  components:{minDate}
  
}
</script>
<style  scoped>
.card-box{
    height: 480px;
    background: #544949;
    position: absolute;
    right: 80px;
    bottom: -134px;
    width: 345px;
    padding: 20px;
}
.card-button{
    background-image: radial-gradient(circle, #c35e11, #90460c);
    cursor: pointer;
    font-size: 23px !important;
    color: #fff;
    font-family: "Didot LT W02 Bold",Didot,"Hoefler Text",Garamond,"Times New Roman",serif;
    font-size: 1.375rem;
    font-weight: normal;
    text-align: center;
    height: 70px;
    line-height: 70px;
    width: 100%;
    position: absolute;
    right: 0;
    bottom: -6px;
    left: 0;
    vertical-align: middle;
    -webkit-transition: 1s;
    transition: 1s;
}
.card-content{
    height: 100%;
    width: 100%;
    margin: auto;
    border: 1px solid #fff;
}
.card-content img{
    width: 144px;
    margin: 23px auto;
    display: block;
}
.card-button:hover{
  background-image: radial-gradient(circle, #90460c, #c35e11);
}
.card-ul span{
    margin-right: 30px;
    margin-top: 7px;
}
.card-ul li{
    display: flex;
    margin: 28px 15px 24px;
    color: #f5f0ef;
    font-family: "Didot LT W02 Italic",Didot,"Hoefler Text",Garamond,"Times New Roman",serif;
    font-style: italic;
    color: #CEB780;
    font-size: 20px;
}
.card-ul select{
    background: #544949;
    outline: 0;
    border: 0;
    width: 119px;
    color: #f5f0ef;
    border-bottom: 1px solid #413838;
}
.card-ul{
  margin-top: 48px;
}
</style>
<style >
#seedCard .icon-rili{
    font-size: 23px;
    color: #f5f0ef;
    line-height: 29px;
}
#seedCard .data-put {
    height: 33px;
    width: 173px;
    margin-left: 20px;
    border-bottom: 1px solid #413838;
}
#seedCard .flatpickr-input{
    margin-left: 14px;
    /* width: 27%; */
    height: 20px;
    border: 0 !important;
    outline: none;
    background: #544949 !important;
    line-height: -3px !important;
    color: #f5f0ef;
}
</style>