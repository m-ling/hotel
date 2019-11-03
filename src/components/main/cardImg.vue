<template>
  <div class="cardImg">
    <img :src="local" alt="" srcset="">
    <div class="card-text" :class="{hide:!isbtn}">
    <p>{{t}}</p>
    <p>{{tt}}</p>
    <a href="#">查看详情</a>
    </div>
    <div class="patch" :class="{btn:isbtn}">
      <p>{{text}}</p>
    </div>
  </div>                                                                                                                                                   
 </template>
<script>
export default {
  props:["local","isbtn","text","t","tt"],
  data(){
    return{

    }
  }
}
</script>
 <style scoped>
 .cardImg .patch{
    height: 14%;
    width: 20%;
    background: #fff;
    position: absolute;
    bottom: 3px;
    right: 0px;
 }
 .hide p{
   display: none !important;
 }
 .cardImg .btn{
    height: 49px;
    width: 27%;
    color: #6b5e5c;
    background: #ceb781;
    font-size: 16px;
    text-align: center;
    line-height: 17px;
    cursor: pointer;
 }
 .cardImg .btn:hover{
   color: #fff;
   background: #8e6919;
 }
 .cardImg img{
  width: 100%;

 }
  .cardImg{
  position:relative;
  width:49%;
  }
  .card-text{
   position:absolute;
   bottom:20px;
   left:20px;
  }
  .card-text p:first-child{
  color: #fff;
  font-size: 30px;
  font-style:italic;
  font-family: "Didot LT W02 Roman",Didot,"Hoefler Text",Garamond,"Times New Roman",serif;
  margin-bottom:0;
  }
  .card-text p:nth-child(2){
    color: #f1f0f0;
    font-style: italic;
    font-size: 14.5px;

  }
 .card-text a{
   color: #fff;
   font-size: 17px;
 }
 </style>