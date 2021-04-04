const Mock = require('mockjs')

const userData = {
    userName: '张三',
    userId: 123456,
    sex: '男'
}
Mock.mock('/getUser', 'get', userData)