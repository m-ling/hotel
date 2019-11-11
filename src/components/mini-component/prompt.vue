<template>
  <div>
    <div v-if="isPrompt" class="marked">
     <svg class="icon prompt-icn" aria-hidden="true">
    <use :xlink:href="icon"></use>
        </svg>
      <p>{{thePrompt}}</p>
    </div>
  </div>
</template>
<script>
/**  弹窗 */

import {mapState,mapMutations} from 'vuex'
export default {
  data(){
    return{
      props:['essay','icon'],
    }
  },
  computed:{
    ...mapState(['thePrompt','icon','isPrompt'])
  },
  methods:{
    ...mapMutations([''])
  }
}
</script>
<style scoped>
.marked{
    background: #3e2e0ceb;
    position: fixed;
    top: 36%;
    left: 42%;
    font-size: 17px;
    z-index: 10;
    border-radius: 8px;
    padding: 13px 33px;
    color: #dad7d1;
}
.prompt-icn{
  font-size: 60px;
  margin: auto;
  display: block;
}
</style>