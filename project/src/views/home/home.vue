<template>
    <div class="home">
        <header class="header">
            <div class="head-left" @click="goBack">
                <i class="iconfont icon-chevron-thin-left"></i>
            </div>
            <div class="head-mid">
                加班/休假
            </div>
            <div class="head-right">
                <i class="iconfont icon-riqixuanze"></i>
                <i class="iconfont icon-fangdajing"></i>
            </div>
        </header>
        <main class="main"></main>
        <footer class="footer"></footer>
    </div>
</template>
<script>
import "@/assets/fonts/iconfont.css";
export default {
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss" scoped>
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
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: calc(.16rem*2);
  }
  .header{
      width: 100%;
      height: calc(.6rem*2);
      border-bottom: 1px solid #000;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: calc(.2rem*2);
      .head-left{
          flex: 2;
          display: flex;
          justify-content: center;
          align-items: center;
          i{
              font-size: calc(.2rem*2);
          }
      }
      .head-mid{
          flex: 6;
          display:flex;
          justify-content: center;
          align-items: center;
      }
      .head-right{
          flex: 2;
          display: flex;
          justify-content: center;
          align-items: center;
          i{
              font-size: calc(.25rem*2);
              flex: 1;
          }
      }
  }
  .main{
      flex: 1;
      overflow: auto;
  }
  .footer{
      width: 100%;
      height: calc(.5rem*2);
  }
</style>
