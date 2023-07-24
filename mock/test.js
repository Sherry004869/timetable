const Mock = require('mockjs')//引入
//字符串
//var data=Mock.mock({'username|1-10':'*'})
//数字
//var data=Mock.mock({'age|5-10':0})
//数据占位符定义规范
//随机生成一个id
//var data=Mock.mock('@id()')//小括号可以去掉 直接@id 括号可以传参
//随机生成一个中文名称
//var data=Mock.mock('@cname')
//日期
//var data=Mock.mock('@date(yyyy/MM/dd)')
//描述
//var data=Mock.mock('@cparagraph()')
//邮箱
//var data=Mock.mock('@email()')
var data=Mock.mock({
    id:'@id()',
    username:'@cname()',
    date:'@date(yyyy/MM/dd)',
    description:'@cparagraph()',
    email:'@email()',
    'age|0-130':0
})
console.log(data)