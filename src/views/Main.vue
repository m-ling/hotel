<template>
  <div class="main">
    <date></date>
    <card></card>
    <banner2></banner2>
    <more></more>
    <banner3></banner3>
    

  </div>
</template>

<script>
// @ is an alias to /src
import banner2 from '@/components/main/Banner2.vue'
import date from '@/components/main/date.vue'
import card from '@/components/main/card.vue'
import more from "@/components/main/more4.vue"
import banner3 from "@/components/main/Banner3.vue"

export default {
  name: 'mian',
  data(){
    return {
         hid:3
    }
  },
  components: {
    banner2,date,card,more,banner3
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
