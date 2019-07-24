<template>
  <div class="wrap">
      <header class="header">
          VUE项目
      </header>
      <main class="main">
          <ul class="verify">
                <li><input type="input" placeholder="请输入用户名" v-model="userName"/></li> 
                <li><input type="password" placeholder="请输入密码"  v-model="password"></li>
                <li><button @click="skipList">登录</button></li>
          </ul>
          <div class="registry">
              <router-link to="/registry">注册</router-link>
          </div>
      </main>
      <footer class="footer"></footer>
  </div>
</template>

<script>
import Api from "@/api/index.js";
export default {
  name:"home",
  data(){
    return {
        userName:"",
        password:""
    }
  },
  methods:{
      skipList(){
          let loginForm={
              username:this.userName,
              password:this.password
          }
          Api.login(loginForm).then(res=>{
              console.log(res)
              if(res.code===200){
                  console.log("登录成功")
                  this.$router.push("/home");
              }
          })
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
  .wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: calc(.16rem*2);
  }
  .header{
      width: 100%;
      height: calc(.6rem*2);
     background: #006547;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: calc(.2rem*2);
  }
  .main{
      flex: 1;
      overflow: auto;
  }
  .verify{
      width: 100%;
      height: calc(3rem*2);
      li{
          width: 100%;
          height: calc(.7rem*2);
          border-bottom: 1px solid #ccc;
          display: flex;
          align-items: center;
          input{
              border: none;
              outline: none;
              padding-left: calc(.2rem*2);
          }
          &:last-child{
              height: calc(1.5rem*2);
              display: flex;
              justify-content: center;
              align-items: center;
              border-bottom:none;
                button{
                width: 90%;
                height: 40%;
                background: #7e7e7e;
                border: none;
                border-radius: calc(.1rem*2);
                color: #fff;
                font-size: calc(.18rem*2);
            }
          }
         
      }
  }
  .registry{
      margin-left: calc(.2rem*2);
  }
  .footer{
      width: 100%;
      height: calc(.4rem*2);
  }
</style>
