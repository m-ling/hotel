<template>
  <div id="app">
    <div id="nav">
       <my-header></my-header> 
       <prompt></prompt>
      <login></login>
      <router-link to="/">Main</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <!-- <my-footer></my-footer> !this.$store.state.logSta-->
  </div>
</template>
<script>
 import {mapState, mapMutations} from 'vuex';

export default {
  data(){
    return{}
  },
   computed:{
    ...mapState(['thePrompt','icon','isPrompt','islogin','the','logSta'])
  },
   methods:{
    ...mapMutations(['changeLog','showPrompt',
        'selicon','changeProText','changeLogSta']),
   },
  mounted(){//&& to.path=='/about/:LocalNum'
    var sense=sessionStorage.getItem('user')
    if(sense){
      this.$store.state.logSta=true;
    }else{
      this.$store.state.logSta=false;
    }
      this.$router.beforeEach((to, from, next) => { 
          if(to.meta.determine){
              if(!this.logSta){
                this.showPrompt(2);//弹窗
                this.changeLog();
                next('/');
              }else{
                next();
              }
          }else{ next(); }
      })
  }
}
</script>

<style>
  .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }

  #nav a {
      color: #575656;
  }
  li{
      list-style:none !important;
  }
  a{
    text-decoration: none !important;
  }

</style>
