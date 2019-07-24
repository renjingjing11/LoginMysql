const mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db' //数据库
});

connection.connect((error) => {
    if (error) {
        console.log('数据库连接失败,详情：', error)
    } else {
        console.log('数据库连接成功')
    }
})

//登陆  从数据库里查找是否存在 用户名&密码
const find = (username) => {
    return new Promise((resolve, reject) => {
        connection.query(`select password from student where username='${username}'`, (error, res) => {
            if (!error) {
                resolve({...res[0] }) //{}
            } else {
                reject(error)
            }
        })
    })
}

// 注册 往数据库里添加 用户名&密码
const register = (uid, username, password) => {
    return new Promise((resolve, reject) => {
        connection.query(`insert into student values('${uid}', '${username}', '${password}')`, (error, res) => {
            if (!error) {
                resolve(true) //true
            } else {
                reject(error)
            }
        })
    })
}

//检查用户名是否被占用
const getUserInfoByUsername = (username) => {
    return new Promise((resolve, reject) => {
        connection.query(`select uid, username, email from user where username='${username}'`, (error, res) => {
            if (!error) {
                resolve(true)
            } else {
                reject(error)
            }
        })
    })
}

module.exports = {
    find, //查找数据库方法
    register, //注册用户名&密码方法
    getUserInfoByUsername, //检查用户名是否被占用方法
}