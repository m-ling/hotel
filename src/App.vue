<template>
  <div id="app">
    <div id="nav">
       <my-header></my-header> 
      <login></login>
      <router-link to="/">Main</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <!-- <my-footer></my-footer> -->
  </div>
</template>

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
