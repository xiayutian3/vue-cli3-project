const Mock = require('mockjs');//mockjs 导入依赖模块
const util = require('./util');//自定义工具模块
//返回一个函数
module.exports = function(app){
    //监听http请求
    app.get('/m/configure', function (rep, res) {
        //每次响应请求时读取mock data的json文件
        //util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        var json = util.getJsonFile('./data/configure.json');
        //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json));
    });
    app.get('/m/spotlights', function (rep, res) {
        //每次响应请求时读取mock data的json文件
        //util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        var json = util.getJsonFile('./data/spotlights.json');
        //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json));
    });
    app.get('/m/boards', function (rep, res) {
        //每次响应请求时读取mock data的json文件
        //util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        var json = util.getJsonFile('./data/boards.json');
        //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json));
    });
    app.get('/m/game/list', function (rep, res) {
        //每次响应请求时读取mock data的json文件
        //util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        var json = util.getJsonFile('./data/gameList.json');
        //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json));
    });
    app.post('/m/usercentre/balance', function (rep, res) {
        //每次响应请求时读取mock data的json文件
        //util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        var json = util.getJsonFile('./data/balance.json');
        //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json));
    });
    app.get('/m/usercentre/balance/all', function (rep, res) {
        //每次响应请求时读取mock data的json文件
        //util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        var json = util.getJsonFile('./data/balance.json');
        //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json));
    });
    app.get('/m/usercentre/banks', function (rep, res) {
        //每次响应请求时读取mock data的json文件
        //util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        var json = util.getJsonFile('./data/banks.json');
        //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json));
    });
    app.get('/m/usercentre/profile', function (rep, res) {
        //每次响应请求时读取mock data的json文件
        //util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        var json = util.getJsonFile('./data/userProfile.json');
        //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json));
    });
    
    app.get('/m/payment/accounts', function (rep, res) {
        //每次响应请求时读取mock data的json文件
        //util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        var json = util.getJsonFile('./data/paymentAccount.json');
        //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json));
    });
    app.get('/m/menus', function (rep, res) {
        //每次响应请求时读取mock data的json文件
        //util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        var json = util.getJsonFile('./data/menus.json');
        //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json));
    });
    app.post('/login/', function (rep, res) {
        //每次响应请求时读取mock data的json文件
        //util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        var json = util.getJsonFile('./data/login.json');
        //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json));
    });
    app.get('/m/usercentre/ping', function (rep, res) {
        //每次响应请求时读取mock data的json文件
        //util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        var json = "pong"
        //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json));
    });
    app.get('/m/usercentre/total', function (rep, res) {
        //每次响应请求时读取mock data的json文件
        //util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        var json = util.getJsonFile('./data/total.json');
        //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json));
    });
    app.get('/m/usercentre/deposits', function (rep, res) {
        //每次响应请求时读取mock data的json文件
        //util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        var json = util.getJsonFile('./data/deposits.json');
        //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json));
    });
    app.get('/m/usercentre/withdrawals', function (rep, res) {
        //每次响应请求时读取mock data的json文件
        //util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        var json = util.getJsonFile('./data/deposit.json');
        //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json));
    });
    app.get('/m/usercentre/gamelogs', function (rep, res) {
        //每次响应请求时读取mock data的json文件
        //util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        var json = util.getJsonFile('./data/games.json');
        //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json));
    });
    app.get('/m/payments', function (rep, res) {
        //每次响应请求时读取mock data的json文件
        //util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        var json = util.getJsonFile('./data/payments.json');
        //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json));
    });
    
    
}
