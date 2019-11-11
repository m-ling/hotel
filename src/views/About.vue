<template>
  <div class="about">
    <about-title></about-title>
    <seed-benner></seed-benner>
    <big-benner></big-benner>

  </div>
</template>
<script>
import aboutTitle from '../components/seed/title.vue'
import seedBenner from '../components/seed/seed-benner.vue'
import bigBenner from '../components/seed/seedBigBenner.vue'


export default {
  components:{
    aboutTitle,seedBenner,bigBenner
  }
}
</script>