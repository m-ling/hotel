<template>
  <div class="main">
    <!-- <date></date> -->
    <card></card>
    <!-- <banner2></banner2> -->
  </div>
</template>

<script>
// @ is an alias to /src
import banner2 from '@/components/main/Banner2.vue'
import date from '@/components/main/date.vue'
import card from '@/components/main/card.vue'

export default {
  name: 'mian',
  data(){
    return {
         hid:3
    }
  },
  components: {
    banner2,date,card
  },
//  created(){
//    var url="/main";
//    var hid=this.hid
//    console.log(hid);
//     this.axios.get(url,{params:{hid}}).then(res=>{
//       var imgUrl=res.data.url[0].img_url;
//       console.log(imgUrl);
//     }).catch(e=>{
//       console.log('错误');
     
//     })
//   }
}
</script>
