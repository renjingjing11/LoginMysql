const express = require('express')
    //const JSEncrypt = require('jsencrypt')
const JSEncrypt = require('node-jsencrypt');
// const NodeRSA = require('node-rsa')
const fs = require('fs')
const { find, register, getUserInfoByUsername } = require('./utils')
const app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//允许跨域
app.use('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , token');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS'); //设置方法
    res.header('Access-Control-Max-Age', '1000'); // 1000s之内，不需要再发送预请求进行验证了，时间内直接发正式请求
    next()
})

//生成token,身份令牌
function getID(length) {
    return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}


//登录
app.post('/login', async function(req, res) {
    let { username, password } = req.body;
    const data = await find(username)
        //console.log(data) //打印的是 utils中的login方法中 resolve 
    if (password === data.password) {
        res.send({
            code: 200,
            data: {
                username: username
            },
            message: '登陆成功'
        })
    } else {
        res.send({
            code: 400,
            message: '登陆密码错误'
        })
    }

})


//注册
app.post("/registry", async function(req, res) {
    // console.log(req.body) //注册时的用户名和密码
    let { username, password } = req.body;
    let uid = getID(10);
    // console.log(uid, "===========uid") // 47mkm1qwbdu0000  身份令牌,每次不同
    const data = await register(uid, username, password)
        //console.log(data) //打印的是 utils中的registry方法中 resolve 
        // const checkUser=getUserInfoByUsername(username){
        //     if(username){
        //         res.send({
        //             code
        //         })
        //     }
        // }
    const check
    if (data) {
        res.send({
            code: 200,
            message: '注册成功'
        })
    } else {
        res.send({
            code: 400,
            message: '注册失败'
        })
    }
})


const server = app.listen(8888, function() {
    console.log('服务器启动成功，端口是8888')
})