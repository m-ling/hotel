<template>
  <div>
    <div class="marked">
      <p class="iconfont" :class="icon"></p>
      <p>{{essay}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      props:['essay','icon'],
    }
  }

}
</script>
<style scoped>
.marked{
  width: 120px;
  height: 100px;
  background: rgba(255, 255, 255, 0.815);
  position: fixed;
  z-index: 10;
}
</style>