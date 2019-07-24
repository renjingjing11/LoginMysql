<template>
  <div class="wrap">
      <header class="header">
          注册
      </header>
      <main class="main">
          <ul class="verify">
                <li><input type="input" placeholder="请输入用户名" v-model="username"/></li> 
                <li><input type="password" placeholder="请输入密码"  v-model="password"></li>
                <li><input type="password" placeholder="请再次输入密码"  v-model="confirm"></li>
                <li><button @click="confirmFn">确认注册</button></li>
          </ul>
      </main>
      <footer class="footer"></footer>
  </div>
</template>

<script>
import Api from "@/api/index.js";
import {jsEncrypt} from "@/utils/index.js";
export default {
  name:"home",
  data(){
    return {
        username:"",
        password:"",
        confirm:""
    }
  },
  methods:{
      confirmFn(){
          let temp = jsEncrypt(this.password);
        //console.log(temp)//加密后的密码W53VDDPrvb2Py6GAzjVzFi5AyYzvmam6UBhGR0Zh6F7QzLmCLPCGecIreEmtq2hW6ZDsQesIptXdpfzkg6IZI0xtW2u9jeRcnMYjLSl%2Bclaw04adUGadzLyVWF1h8WlkdjF4vf/pKxTDY961xxPKv8pJ7BrZEtpwb4HN1g1Wz3Qmkq6UuufsPpz51ZUP%2BlcKe8Kt/bkqVQIKG1fQS9E4kuaxXkY6y/otXZyYHPm%2BnMyZCI3FoL3PF9%2BUr/FZMT/LOUakTP/lguEsPIW3ACMiq4/515poh9ANMjEZ1QtfUZGQzDq8PIzqMaPdwJ7wc6TemPejJvX8V6HV5RoAMXhazg==
        let data={
            username:this.username,
            password:temp
        }
        Api.registry(data).then(res=>{
            console.log(data)
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
      height: 100%;
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
  .footer{
      width: 100%;
      height: calc(.4rem*2);
  }
</style>
