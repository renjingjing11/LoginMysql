<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  html,body{
    width: 100%;
    height: 100%;
    font-size: calc(100/750*100vw);
  }
  #app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: calc(.16rem*2);
  }
</style>
