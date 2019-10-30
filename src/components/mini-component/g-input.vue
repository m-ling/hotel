<template>
  <div id="g-inp">
    <label for="in">
      <p class="inp-p">{{title}}</p>
     <div class="inpBlock">
        <input type="text" name="" id="in" :placeholder="inform">
     </div>
    </label>
  </div>
</template>
<script>
export default {
  props:["title",'inform'],
  data(){
    return{

    }
  }
}
</script>
<style scoped>
#g-inp{
  width: 50%;

}
.inpBlock{
    height: 45px;
    width: 343px;
    background: #fbfaf8;
    text-align: center;
    line-height: 45px;
    border: 1px solid #cabfbf;
    border-radius: 2px;
    position: relative;


}
.inpBlock #in{
 height: 90%;
 width: 90%;
 outline: 0;
 border: 0;
}
.inpBlock::before{
    content: '';
    display: block;
    width: 0;
    height: 0;
    border: inset 7px;
    border-color: transparent #98711a transparent transparent;
    border-right-style: solid;
    border-left-width: 0;
    position: absolute;
    top: -2px;
    left: 1px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    z-index: 1;
}
.inp-p{
    margin-top: 10px !important;
    margin-bottom: 5px !important;
}
</style>